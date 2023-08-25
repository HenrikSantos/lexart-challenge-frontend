export default function handleLoanMessage(typeOfLoan: string) {
  let loanMessage: React.ReactNode;
  if (typeOfLoan === "apply") {
    loanMessage = (
      <div className="mx-3 mb-2 whitespace-normal break-words rounded-lg bg-gray-200 px-3 py-2" id="loanApplyMessage">
        <span className="font-bold">Apply for a Loan:</span> If you&apos;re
        interested in applying for a loan, we can help you with the process.
        Our loan application is quick and easy. To get started, please visit
        our loan application page at{" "}
        <a id="loanApplyLink" className="text-blue-500 underline" href="http://loan-application-url">Loan Application</a>
      </div>
    );
  }
  if (typeOfLoan === "conditions") {
    loanMessage = (
      <div className="mx-3 mb-2 whitespace-normal break-words rounded-lg bg-gray-200 px-3 py-2" id="loanConditionsMessage">
        <span className="font-bold">Loan Conditions:</span> To provide
        transparency, we have outlined the conditions for our loans. You can
        find detailed information about our loan terms, interest rates,
        repayment options, and eligibility criteria on our loan conditions
        page. Please visit{" "}
        <a id="loanConditionsLink" className="text-blue-500 underline" href="http://loan-conditions-url">Loan Conditions</a>
      </div>
    );
  }
  if (typeOfLoan === "help") {
    loanMessage = (
      <div className="mx-3 mb-2 whitespace-normal break-words rounded-lg bg-gray-200 px-3 py-2" id="loanHelpMessage">
        <span className="font-bold">Loan Assistance:</span> If you have any
        questions or need assistance regarding our loan services, our customer
        support team is available to help. Please reach out to us through our
        customer <a id="loanHelpLink" className="text-blue-500 underline" href="http://support-portal-url">support portal</a>
      </div>
    );
  }
  return loanMessage;
}