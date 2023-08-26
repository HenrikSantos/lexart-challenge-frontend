import handleLoanMessage from "./handleLoanMessage";
import { IMessage } from "../components/ChatRender";

interface ILoanOptions {
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
}

export default function LoanOptions({ setMessages }: ILoanOptions) {
  function submitLoanInformation(typeOfLoan: string) {
    const loanMessage = handleLoanMessage(typeOfLoan);

    const newMessage: IMessage = {
      message: loanMessage,
      side: "left",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }

  const newMessage: IMessage = {
    message: <div className="mx-3 mb-2 whitespace-normal break-words rounded-lg bg-gray-200 px-3 py-2 leading-8" id="loanMessage">
      <span>Alright! Here are three options related to loans:</span>
      <button
        id="loanApply"
        className="block"
        type="button"
        onClick={() => submitLoanInformation("apply")}
      >
        1.{" "}
        <span className="text-blue-600 underline">
          Do you want to apply for a loan?
        </span>
      </button>
      <button
        id="loanConditions"
        className="block"
        type="button"
        onClick={() => submitLoanInformation("conditions")}
      >
        2.{" "}
        <span className="text-blue-600 underline">Loan conditions</span>
      </button>
      <button
        id="loanHelp"
        className="block"
        type="button"
        onClick={() => submitLoanInformation("help")}
      >
        3. <span className="text-blue-600 underline">Help</span>
      </button>
    </div>,
    side: "left"
  };
  setMessages((prevMessages) => [...prevMessages, newMessage]);
}