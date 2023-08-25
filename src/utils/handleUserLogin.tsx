import { IMessage } from "../components/ChatMessage";

interface IHandleUserLogin {
  message: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
  setUser: React.Dispatch<React.SetStateAction<{ username: string, password: string }>>
}

export default function handleUserLogin({ message, setMessages, setUser }: IHandleUserLogin) {
  if (message.trim().split(" ").length !== 2) {
    const newMessage: IMessage = {
      message: (
        <span id="wrongLogin">
          Wrong login pattern, login with your username and password, ex:
          myname mypassword
        </span>
      ),
      side: "left"
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  } else {
    const [username, password] = message.split(" ");
    const newMessage: IMessage = {
      message: (
        <span id="helloMessage">
          {`Hello ${username}, I am glad that you are here! Type 'loan' to know about our loans`}
        </span>
      ),
      side: "left"
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUser({ username, password });
  }
}