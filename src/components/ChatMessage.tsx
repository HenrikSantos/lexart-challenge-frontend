import React from "react";
import Logo from "./Logo.tsx";

export interface IMessage {
  message: React.ReactNode;
  side: "left" | "right";
}

const getBackgroundClass = (side: string, length: number) => {
  if (length >= 45) {
    return side === "left" ? "bg-blue-500 text-white leading-8" : "bg-gray-200 leading-8";
  }
  return side === "left" ? "bg-blue-500 text-white inline-block" : "bg-gray-200 inline-block";
};

export default function ChatRender({ message, side }: IMessage) {
  const messageLength = React.isValidElement(message) ? message.props.children.length : 0;
  const backgroundClass = getBackgroundClass(side, messageLength);

  return (
    <div
      className={`mx-3 mb-2 whitespace-normal break-words rounded-xl py-2 ${side === "right" ? "text-right" : "text-left"
        }`}
    >
      {side === "left" && <Logo />}
      <p
        className={`mt-3 rounded-lg px-3 py-2 shadow-md ${backgroundClass}`}
      >
        {message}
      </p>
    </div>
  );
}
