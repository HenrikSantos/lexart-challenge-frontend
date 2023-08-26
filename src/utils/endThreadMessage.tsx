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
      <p className="mx-3 mb-2 whitespace-normal break-words rounded-lg bg-gray-200 px-3 py-2 leading-8" id="endingMessage">
        Understood. Ending the conversation and storing it in the database. See all data in{" "}
        <Link className="text-blue-500 underline"
          to={"/chat-data"}
          target="_blank"
          rel="noreferrer">Chat Data</Link>
        , chat will clear in 10 seconds.
      </p>
    ),
    side: "left",
  };

  setMessages((prevMessages) => [...prevMessages, newMessage]);

}
