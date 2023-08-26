import { IMessage } from "../components/ChatRender";
import addNewMessage, { IAddNewMessage } from "./addNewMessage";

interface IHandleStartConversation {
  message: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

function getGreeting(message: string) {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("goodbye")) {
    return "Welcome! Login with your username and password, ex: myname mypassword, after that, you can end the chat by writing \"goodbye\", and then the chat will be exported to the chatdata page";
  } else if (lowerCaseMessage.includes("good")) {
    return "Good day!, Login with your username and password, ex: myname mypassword.";
  } else if (lowerCaseMessage.includes("i want")) {
    return "Welcome! Log in with your username and password, ex: myname mypassword, and I'll see what I can do for you!";
  }

  return "Welcome! Login with your username and password, ex: myname mypassword";
}

export default function handleStartConversation({ message, setMessages }: IHandleStartConversation) {
  const keywords = ["hello", "goodbye", "good", "i want"];
  const formatedMessage = message.toLowerCase();

  if (keywords.some((keyword) => formatedMessage.includes(keyword))) {
    const newMessage: IAddNewMessage = {
      message: getGreeting(message),
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