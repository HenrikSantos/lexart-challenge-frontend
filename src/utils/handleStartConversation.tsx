import { IMessage } from "../components/ChatRender";
import addNewMessage, { IAddNewMessage } from "./addNewMessage";

interface IHandleStartConversation {
  message: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function handleStartConversation({ message, setMessages }: IHandleStartConversation) {
  const keywords = ["hello", "goodbye", "good", "i want"];
  const formatedMessage = message.toLowerCase();

  if (keywords.some((keyword) => formatedMessage.includes(keyword))) {
    const newMessage: IAddNewMessage = {
      message: "Welcome! Login with your username and password, ex: myname mypassword",
      side: "left",
      id: "requestLogin",
      setMessages
    };
    addNewMessage(newMessage);
    return true;
  } else {
    const newMessage: IAddNewMessage = {
      message: "Sorry, I didn't understand.",
      side: "left",
      id: "failLogin",
      setMessages
    };
    addNewMessage(newMessage);
    return false;
  }
}