import React, { useState } from "react";
import ChatInput from "../../components/ChatInput";
import ChatRender from "../../components/ChatRender";
import { IMessage } from "../../components/ChatMessage";
import handleStartConversation from "../../utils/handleStartConversation";
import addNewMessage from "../../utils/addNewMessage";

// interface IUser {
//   username: string;
//   password: string;
// }

export default function Chatbot() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [threadActivity, setThreadActivity] = useState(false);
  // const [user, setUser] = useState<IUser>({ username: "", password: "" });

  const handleSendMessage = (message: string) => {
    addNewMessage({ message, setMessages, side: "right" });

    if (!threadActivity) {
      setThreadActivity(handleStartConversation({ message, setMessages }));
    }
  };

  return (
    <>
      <ChatRender messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </>
  );
}
