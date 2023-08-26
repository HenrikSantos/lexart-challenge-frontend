import extractTextAndSide from "./extractTextAndSide";
import dateFormater from "./dateFormater";
import { IMessage } from "../components/ChatRender";

interface ISaveData {
  messages: IMessage[],
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
  username: string
}

export default function saveData({ messages, setMessages, username }: ISaveData) {
  const chatsString = localStorage.getItem("chats") ?? "[]";
  const chats = JSON.parse(chatsString);

  const dataAtual = new Date();
  const formatedDate = dateFormater(dataAtual);

  const messagesText = extractTextAndSide(messages);

  const messageWithDate = {
    username,
    date: formatedDate,
    data: [
    ...messagesText,
    ],
    userId: chats.length + 1
  };

  chats.push(messageWithDate);

  localStorage.setItem("chats", JSON.stringify(chats));

  setTimeout(() => setMessages([]), 10000);
}