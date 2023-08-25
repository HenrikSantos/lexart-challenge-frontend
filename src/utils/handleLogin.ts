import { IMessage } from "../components/ChatMessage";

interface handleStartConversationProps {
  message: string,
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>
}

export default function handleStartConversation({ message, setMessages }: handleStartConversationProps) {
  
  return {message, result};
}
