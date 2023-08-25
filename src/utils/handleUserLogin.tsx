import { IMessage } from "../components/ChatRender";
import addNewMessage, { IAddNewMessage } from "./addNewMessage";

interface IHandleUserLogin {
  message: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
  setUser: React.Dispatch<React.SetStateAction<{ username: string, password: string }>>
}

export default function handleUserLogin({ message, setMessages, setUser }: IHandleUserLogin) {
  if (message.trim().split(" ").length !== 2) {
    const newMessage: IAddNewMessage = {
      message: "Wrong login pattern, login with your username and password, ex: myname mypassword",
      side: "left",
      id: "wrongLogin",
      setMessages
    };
    addNewMessage(newMessage);
  } else {
    const [username, password] = message.split(" ");
    const newMessage: IAddNewMessage = {
      message: `Hello ${username}, I am glad that you are here! Type 'loan' to know about our loans`,
      side: "left",
      id: "helloMessage",
      setMessages
    };
    addNewMessage(newMessage);
    setUser({ username, password });
  }
}