import { IMessage } from "../components/ChatRender";
import Logo from "../components/Logo";

export interface IAddNewMessage {
  message: string,
  side: "left" | "right";
  id?: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function addNewMessage({ message, side, id, setMessages }: IAddNewMessage) {
  const getBackgroundClass = (side: string, length: number) => {
    if (length >= 45) {
      return side === "left" ? "bg-gray-200 leading-8 rounded-bl-none" : "text-white bg-blue-500 leading-8 rounded-br-none";
    }
    return side === "left" ? "bg-gray-200 inline-block rounded-bl-none" : "text-white bg-blue-500 inline-block rounded-br-none";
  };

  const backgroundClass = getBackgroundClass(side, message.length);

  const newMessage: IMessage = {
    message: (
      <div id={id} className={`mx-3 mb-2 whitespace-normal break-words rounded-xl py-2 lg:text-lg ${side === "right" ? "text-right" : "text-left"}`}
      >
        {side === "left" && <Logo />}
        <p
          className={`mt-3 rounded-lg px-3 py-2 shadow-md ${backgroundClass}`}
        >
          {message}
        </p>
      </div>
    ),
    side,
  };
  setMessages((prevMessages) => [...prevMessages, newMessage]);
}