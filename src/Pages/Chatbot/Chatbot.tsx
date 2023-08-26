import { useEffect, useState } from "react";
import { IMessage } from "../../components/ChatRender";
import { extractTextFromReactNode } from "../../utils/extractTextAndSide";
import ChatInput from "../../components/ChatInput";
import ChatRender from "../../components/ChatRender";
import handleStartConversation from "../../utils/handleStartConversation";
import addNewMessage from "../../utils/addNewMessage";
import handleUserLogin from "../../utils/handleUserLogin";
import LoanOptions from "../../utils/LoanOptions";
import endThreadMessage from "../../utils/endThreadMessage";
import saveData from "../../utils/saveData";
import Header from "../../components/Header";
import IUser from "./IUser";

export default function Chatbot() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [threadActivity, setThreadActivity] = useState(false);
  const [user, setUser] = useState<IUser>({ username: "", password: "" });

  const handleSendMessage = (message: string) => {
    addNewMessage({ message, side: "right", setMessages });

    if (!threadActivity) {
      setThreadActivity(handleStartConversation({ message, setMessages }));
      return;
    }

    if (!user.username || !user.password) {
      handleUserLogin({ message, setMessages, setUser });
      return;
    }

    if (message.toLowerCase().includes("loan")) {
      LoanOptions({ setMessages });
      return;
    }

    if (message.toLowerCase().includes("goodbye")) {
      endThreadMessage({ messages, setMessages });
      return;
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const lastMessageText = extractTextFromReactNode(lastMessage.message);

      if (lastMessageText.includes("Understood") && lastMessage.side === "left") {
        saveData({ messages, setMessages });
        setUser({ username: "", password: "" });
        setThreadActivity(false);
        return;
      }
    }
  }, [messages]);

  return (
    <>
      <Header />
      <ChatRender messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </>
  );
}
