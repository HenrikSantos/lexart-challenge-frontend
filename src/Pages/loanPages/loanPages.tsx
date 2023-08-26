import { Link } from "react-router-dom";

export const ApplyPage = () => {
  return (
    <div className="h-screen rounded-lg bg-gray-100 p-4">
      <h2 className="mb-2 text-2xl font-semibold">Apply for a Loan</h2>
      <p className="mb-4 text-gray-700">Our loan application process is designed to be simple and convenient. We offer a variety of loan options tailored to your needs, whether it&apos;s a personal loan, a business loan, or a mortgage.</p>
      <p className="text-gray-700">Applying is as easy as filling out our online application form. Once submitted, our team will review your application and get back to you within a few business days.</p>
      <Link className="my-2 inline-block rounded-md border px-4 py-2" to={"/"}>Back</Link>
    </div>
  );
};

export const ConditionsPage = () => {
  return (
    <div className="h-screen rounded-lg bg-gray-100 p-4">
      <h2 className="mb-2 text-2xl font-semibold">Loan Conditions</h2>
      <p className="mb-4 text-gray-700">Before taking out a loan, it&apos;s important to understand the conditions that come with it. Our loan conditions cover aspects such as interest rates, repayment schedules, and any additional fees.</p>
      <p className="text-gray-700">We believe in transparency, and our goal is to provide you with clear and comprehensive information about the terms of your loan. This way, you can make informed decisions that align with your financial goals.</p>
      <Link className="my-2 inline-block rounded-md border px-4 py-2" to={"/"}>Back</Link>
    </div>
  );
};

export const HelpPage = () => {
  return (
    <div className="h-screen rounded-lg bg-gray-100 p-4">
      <h2 className="mb-4 text-2xl font-semibold">Loan Help</h2>
      <h3 className="mb-2 text-xl font-semibold">Frequently Asked Questions</h3>
      <div className="mb-4">
        <h4 className="mb-2 text-lg font-semibold">1. How can I apply for a loan?</h4>
        <p className="text-gray-700">To apply for a loan, simply visit our application page and fill out the required information. Our team will review your application and get in touch with you.</p>
      </div>
      <div className="mb-4">
        <h4 className="mb-2 text-lg font-semibold">2. What are the interest rates?</h4>
        <p className="text-gray-700">Interest rates vary depending on the type of loan you&apos;re interested in. Contact our support team for more information on current rates.</p>
      </div>
      <div className="mb-4">
        <h4 className="mb-2 text-lg font-semibold">3. How long does the approval process take?</h4>
        <p className="text-gray-700">The approval process typically takes a few business days after submitting your application. Factors like the type of loan and your credit history can affect the timing.</p>
      </div>
      <Link className="my-2 inline-block rounded-md border px-4 py-2" to={"/"}>Back</Link>
    </div>
  );
};
