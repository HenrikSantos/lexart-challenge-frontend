import { ReactNode, isValidElement, Children } from "react";

import { IMessage } from "../components/ChatRender";

export function extractTextFromReactNode(node: ReactNode): string {
  if (typeof node === "string") {
    return node;
  }

  if (isValidElement(node)) {
    const children = Children.toArray(node.props.children);
    console.log(children);
    return children.map((child) => extractTextFromReactNode(child)).join("");
  }

  return "";
}

export default function extractTextAndSide(
  messageArray: IMessage[]
): Array<{ message: string; side: "left" | "right" }> {
  return messageArray.map(({ message, side }) => ({
    message: extractTextFromReactNode(message),
    side
  }));
}