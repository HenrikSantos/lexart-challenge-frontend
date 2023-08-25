import { IMessage } from "../components/ChatMessage";

interface IHandleStartConversation {
  message: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function handleStartConversation({ message, setMessages }: IHandleStartConversation) {
  const keywords = ["hello", "goodbye", "good", "i want"];
  const formatedMessage = message.toLowerCase();

  if (keywords.some((keyword) => formatedMessage.includes(keyword))) {
    const newMessage: IMessage = {
      message: <span id="requestLogin">Welcome! Login with your username and password, ex: myname mypassword</span>,
      side: "left",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    return true;
  } else {
    const newMessage: IMessage = {
      message: <span id="failLogin">{"Sorry, I didn't understand."}</span>,
      side: "left",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    return false;
  }
}