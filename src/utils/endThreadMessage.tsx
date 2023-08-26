import React from "react";
import { IMessage } from "../components/ChatRender";
import { Link } from "react-router-dom";

interface IEndThreadMessage {
  messages: IMessage[],
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function endThreadMessage({ setMessages }: IEndThreadMessage) {

  const newMessage: IMessage = {
    message: (
      <span id="endingMessage">
        Understood. Ending the conversation and storing it in the database. See all data in{" "}
        <Link className="text-blue-500 underline"
          to={"/chat-data"}
          target="_blank"
          rel="noreferrer">Chat Data</Link>
        , chat will clear in 10 seconds.
      </span>
    ),
    side: "left",
  };

  setMessages((prevMessages) => [...prevMessages, newMessage]);

}
