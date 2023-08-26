import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mx-auto p-8 lg:text-lg">
      <h1 className="mb-4 text-3xl font-bold">Test Full Stack Developer - Lexart</h1>
      <p className="mb-6">Welcome to my project! In this project i create a web chatbot. Below you will find an overview of the main features of the project and the technologies used.</p>

      <h2 className="mb-2 text-xl font-semibold">Project Features:</h2>
      <ul className="mb-6 ml-6 list-disc">
        <li>Intelligent conversation initiation based on keywords such as &quot;Hello&quot;, &quot;Goodbye&quot;, &quot;Good&quot;, and &quot;I want&quot;.</li>
        <li>Require username and password.</li>
        <li>Contextual options displayed upon encountering the term &quot;loan&quot;:</li>
        <ul className="ml-6 list-disc">
          <li><Link className="text-blue-500" target="_blank" to={"/apply"}>Application for a loan</Link>.</li>
          <li><Link className="text-blue-500" target="_blank" to={"/conditions"}>Loan conditions</Link>.</li>
          <li><Link className="text-blue-500" target="_blank" to={"/help"}>Help</Link>.</li>
        </ul>
        <li>Display of relevant information and reference links based on user selection.</li>
        <li>Conversation conclusion and database storage upon the use of the term “Goodbye”.</li>
        <li>Export functionality for historic conversations in CSV format, ordered by date in <Link className="text-blue-500" to={"/chat-data"}>Chat Data</Link> page.</li>
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Technologies Used:</h2>
      <ul className="ml-6 list-disc">
        <li><a className="text-blue-500" href="https://react.dev/">React</a></li>
        <li><a className="text-blue-500" href="https://www.typescriptlang.org/">TypeScript</a></li>
        <li><a className="text-blue-500" href="https://tailwindcss.com/">Tailwind</a></li>
        <li><a className="text-blue-500" href="https://reactrouter.com/en/main">React Router</a></li>
        <li><a className="text-blue-500" href="https://www.cypress.io/">Cypress</a></li>
        <li><a className="text-blue-500" href="https://eslint.org/">Eslint</a></li>
      </ul>

      <p className="mt-8">For more details, you can explore the project&apos;s <Link to="https://github.com/HenrikSantos/lexart-challenge-frontend" target="_blank" className="text-blue-500" rel="noreferrer">GitHub repository</Link>, and experience the live version hosted on <Link to="https://lexart-challenge-frontend-git-main-henriksantos.vercel.app/" target="_blank" className="text-blue-500" rel="noreferrer">Vercel</Link>.</p>
      <p className="mt-4">Don&apos;t hesitate to reach out to me at <Link className="text-blue-500" to="mailto:henrik.ruan4@gmail.com">henrik.ruan4@gmail.com</Link>.</p>

      <Link className="my-5 inline-block rounded-md border px-4 py-2" to={"/"}>Back</Link>
    </div>
  );
}
