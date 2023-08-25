import { useState } from "react";
import { IMessage } from "../../components/ChatRender";
import ChatInput from "../../components/ChatInput";
import ChatRender from "../../components/ChatRender";
import handleStartConversation from "../../utils/handleStartConversation";
import addNewMessage from "../../utils/addNewMessage";
import handleUserLogin from "../../utils/handleUserLogin";
import LoanOptions from "../../components/LoanOptions";

interface IUser {
  username: string;
  password: string;
}

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
      const newMessage: IMessage = {
        message: (
          <LoanOptions setMessages={setMessages} />
        ),
        side: "left"
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  };

  return (
    <>
      <ChatRender messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </>
  );
}
