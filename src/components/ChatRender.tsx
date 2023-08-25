import ChatMessage, { ChatMessageProps } from "./ChatMessage";

export interface ChatRenderProps {
  messages: ChatMessageProps[]
}

export default function ChatRender({ messages }: ChatRenderProps) {
  return (
    <section className="flex flex-col">
      {messages.map((messages, index) => <ChatMessage key={index} {...messages} />)}
    </section>
  );
}
