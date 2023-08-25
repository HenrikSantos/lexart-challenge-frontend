import { Route, Routes } from "react-router-dom";
import Chatbot from "./Pages/Chatbot/Chatbot";
import ChatData from "./Pages/ChatData/ChatData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Chatbot />} />
      <Route path="/chat-data" element={<ChatData />} />
    </Routes>
  );
}

export default App;
