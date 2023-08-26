import extractTextAndSide from "./extractTextAndSide";
import dateFormater from "./dateFormater";
import { IMessage } from "../components/ChatRender";

interface ISaveData {
  messages: IMessage[],
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function saveData({ messages, setMessages }: ISaveData) {
  const chatsString = localStorage.getItem("chats") ?? "[]";
  const chats = JSON.parse(chatsString);

  const dataAtual = new Date();
  const formatedDate = dateFormater(dataAtual);

  const messagesText = extractTextAndSide(messages);

  const messageWithDate = [
    ...messagesText,
    { message: formatedDate, side: "left" }
  ];

  chats.push(messageWithDate);

  localStorage.setItem("chats", JSON.stringify(chats));

  setTimeout(() => setMessages([]), 10000);
}