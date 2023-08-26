import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mx-auto p-8 lg:text-lg">
      <h1 className="mb-4 text-3xl font-bold">Full Stack Developer Tech Test - Lexart</h1>
      <p className="mb-6">Welcome to my project! In this project a web chatbot was created. Below you will find an overview of the main features of the project and the technologies used.</p>

      <h2 className="mb-2 text-xl font-semibold">Project Features:</h2>
      <ul className="mb-6 ml-6 list-disc">
        <li>Intelligent conversation initiation based on keywords such as &quot;Hello&quot;, &quot;Goodbye&quot;, &quot;Good&quot;, and &quot;I want&quot;.</li>
        <li>Secure conversation continuation requiring username and password input.</li>
        <li>Flexible parameterization of username and password.</li>
        <li>Contextual options displayed upon encountering the term &quot;loan&quot;:</li>
        <ul className="ml-6 list-disc">
          <li>Application for a loan</li>
          <li>Loan conditions</li>
          <li>Help</li>
        </ul>
        <li>Display of relevant information and reference links based on user selection.</li>
        <li>Conversation conclusion and database storage upon the use of the term “Goodbye”.</li>
        <li>Export functionality for historic conversations in CSV format, ordered by date.</li>
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Technologies Used:</h2>
      <ul className="ml-6 list-disc">
        <li>React</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
        <li>react-router-dom</li>
        <li>Cypress</li>
        <li>Eslint</li>
      </ul>

      <p className="mt-8">For more details, you can explore the project&apos;s <Link to="https://github.com/HenrikSantos/lexart-challenge-frontend" target="_blank" className="text-blue-500" rel="noreferrer">GitHub repository</Link>, and experience the live version hosted on <Link to="https://lexart-challenge-frontend-git-main-henriksantos.vercel.app/" target="_blank" className="text-blue-500" rel="noreferrer">Vercel</Link>.</p>
      <p className="mt-4">Don&apos;t hesitate to reach out to me at <Link className="text-blue-500" to="mailto:henrik.ruan4@gmail.com">henrik.ruan4@gmail.com</Link>.</p>

      <Link className="my-5 inline-block rounded-md border px-4 py-2" to={"/"}>Back</Link>
    </div>
  );
}
