import { useState, useEffect } from "react";
import Header from "../../components/Header";

interface MessageString {
  message: string;
  side: string;
}

export default function Chatbot() {
  const [chats, setChats] = useState<MessageString[][]>([[]]);

  function download(data: string, fileName: string) {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `${fileName}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function generateHistoricData() {
    const csvRows: string[] = [];
    chats.forEach((el, index) => {
      csvRows.push(
        `Conversation user #${index + 1} ${el[el.length - 1]?.message}`
      );
    });

    download(csvRows.join("\n"), "users data");
  }

  function generateData(data: MessageString[], userId: number) {
    const csvRows = [];
    const header = ["message", "side"];
    csvRows.push(header.join(","));

    if (data.length > 0) {
      data.forEach((el) => {
        csvRows.push(
          `"${el.message.replace(/"/g, "\\\"")}",${el.side === "right" ? "user" : "Lexart Bot"
          }`
        );
      });
    }

    download(
      csvRows.join("\n"),
      `Conversation user #${userId + 1} ${data[data.length - 1]?.message}`
    );
  }

  useEffect(() => {
    const chatsString = localStorage.getItem("chats");
    const savedChats: MessageString[][] = chatsString
      ? JSON.parse(chatsString)
      : [];
    setChats(savedChats);
  }, []);
  return (
    <>
      <Header />
      <main className="h-screen max-w-lg px-5 py-16">
        <section className="py-3">
          <button
            className="rounded bg-gray-200 px-5 py-2 text-xl text-blue-500 underline shadow-md hover:bg-gray-100"
            onClick={() => generateHistoricData()}
            id="downloadHistoricBtn"
          >
            Download Historic
          </button>
        </section>
        <section className="py-3">
          <h2 className="pb-5 text-xl">Conversations:</h2>
          <div className="flex flex-col items-baseline gap-8 px-5 text-sm ">
            {chats.map((el, index) => (
              <button
                className="text-blue-500"
                key={index}
                onClick={() => generateData(el, index)}
              >
                ✅
                <span id={`user${index + 1}`} className="mr-3 rounded-lg border bg-gray-200 px-5 py-2 underline shadow-sm">
                  {`Conversation user #${index + 1} ${el[el.length - 1]?.message
                    }`}
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}