import { Route, Routes } from "react-router-dom";
import Chatbot from "./Pages/Chatbot/Chatbot";
import ChatData from "./Pages/ChatData/ChatData";
import About from "./Pages/About/About";
import { ApplyPage, ConditionsPage, HelpPage } from "./Pages/loanPages/loanPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Chatbot />} />
      <Route path="/chat-data" element={<ChatData />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/conditions" element={<ConditionsPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}

export default App;
