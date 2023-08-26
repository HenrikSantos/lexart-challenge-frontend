import { useState, useEffect } from "react";
import Header from "../../components/Header";
import IChats from "./IChats";
import createAndDownloadCSV from "../../utils/createAndDownloadCSV";

export default function Chatbot() {
  const [chats, setChats] = useState<IChats[]>([]);

  function generateHistoricData() {
    const csvRows: string[] = [];
    chats.forEach((chat) => {
      csvRows.push(
        `Conversation #${chat.userId} user: ${chat.username} ${chat.date}h`
      );
    });
    createAndDownloadCSV(csvRows.join("\n"), "usersData");
  }

  function generateData({ username, data, userId, date }: IChats) {
    const csvRows = [];
    const header = ["message", "speaker"];
    csvRows.push(header.join(","));

    if (data.length > 0) {
      data.forEach((el) => {
        csvRows.push(
          `"${el.message.replace(/"/g, "\\\"")}",${el.side === "right" ? username : "Lexart Bot"
          }`
        );
      });
    }

    createAndDownloadCSV(
      csvRows.join("\n"),
      `Conversation #${userId} user: ${username} ${date}h`
    );
  }

  useEffect(() => {
    const savedChats: IChats[] = JSON.parse(localStorage.getItem("chats") ?? "[]");
    setChats(savedChats);
  }, []);
  return (
    <>
      <Header />
      <section className="px-5 py-2">
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
          <div className="flex flex-col items-baseline gap-8 px-2 text-sm ">
            {chats.map((chat, index) => (
              <button
                className="text-blue-500"
                key={index}
                onClick={() => generateData({ ...chat })}
              >
                <span id={`user${chat.userId}`} className="mr-3 rounded-lg border bg-gray-200 px-5 py-2 underline shadow-sm">
                  {`Conversation ${chat.username} #${chat.userId} - ${chat.date}`}
                </span>
              </button>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}