export interface IMessage {
  message: React.ReactNode;
  side: "left" | "right";
}

export interface ChatRenderProps {
  messages: IMessage[]
}

export default function ChatRender({ messages }: ChatRenderProps) {
  return (
    <section className="mb-28">
      {messages.map((message, index) => <span key={index}>{message.message}</span>)}
    </section>
  );
}
