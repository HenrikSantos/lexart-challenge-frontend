import { IMessage } from "../components/ChatMessage";

export interface IAddNewMessage {
  message: string,
  side: "left" | "right";
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function addNewMessage({ message, side, setMessages }: IAddNewMessage) {
  const newMessage: IMessage = {
    message: (<>{message}</>),
    side,
  };
  setMessages((prevMessages) => [...prevMessages, newMessage]);
}