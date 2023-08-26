import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex w-full items-center justify-between bg-blue-500 px-5 py-3 text-white">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="font-bold">
          <span className="text-lg italic">Lexart </span>Labs Bot ✅
        </h1>
      </div>
      <div className="font-bold underline">
        {location.pathname.includes("chat-data") ? (
          <Link id="chatbotLink" to="/">Chatbot</Link>
        ) : (
          <Link id="chatDataLink" to="/chat-data">Chat Data</Link>
        )}
      </div>
    </header>
  );
}