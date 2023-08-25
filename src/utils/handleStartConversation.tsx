import { IMessage } from "../components/ChatMessage";
import addNewMessage from "./addNewMessage";

interface IHandleStartConversation {
  message: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function handleStartConversation({ message, setMessages }: IHandleStartConversation) {
  const keywords = ["hello", "goodbye", "good", "i want"];
  const formatedMessage = message.toLowerCase();
  let greating = "";

  if (keywords.some((keyword) => {
    if (formatedMessage.includes(keyword)) {
      greating = keyword;
      return true;
    }
  })) {
    const newMessage = `${formatedMessage === "i want" ? "Welcome" : greating}! Login with your username and password, ex: myname mypassword`;
    addNewMessage({ message: newMessage, side: "left", setMessages });
    return true;
  } else return false;
}