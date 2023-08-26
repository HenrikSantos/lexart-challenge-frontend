# Project Readme: Lexart Full Stack Developer Challenge

Welcome to the readme for the Lexart Full Stack Developer Challenge project. This project involves the creation of a web chatbot with various features and technologies. Below, you will find an overview of the project's main components, features, and the technologies used.

## About

The project's main component is the `About` function, implemented in React. This component serves as an introduction to the project and provides important information to users.

## Project Features

1. **Intelligent Conversation Initiation**: The chatbot initiates conversations based on keywords such as "Hello," "Goodbye," "Good," and "I want."

2. **User Authentication**: Users are required to provide a username and password.

3. **Contextual Options**: Upon encountering the term "loan," contextual options are displayed. These options include:
   - Application for a loan
   - Loan conditions
   - Help

4. **Relevant Information Display**: The chatbot displays relevant information and reference links based on user selections.

5. **Conversation Conclusion and Storage**: Conversations can be concluded using the term "Goodbye." The chat data is stored in a database.

6. **Export Historic Conversations**: Users can export historic conversations in CSV format, ordered by date, accessible on the "Chat Data" page.

## Technologies Used

The project employs the following technologies:

- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building responsive and stylish designs.
- [React Router](https://reactrouter.com/en/main): A library for adding routing functionality to React applications.
- [Cypress](https://www.cypress.io/): An end-to-end testing framework for web applications.
- [ESLint](https://eslint.org/): A tool for identifying and fixing code quality issues in JavaScript.
  
## Getting More Details

For a deeper dive into the project, you can explore the [GitHub repository](https://github.com/HenrikSantos/lexart-challenge-frontend). Additionally, you can experience the live version hosted on [Vercel](https://lexart-challenge-frontend-git-main-henriksantos.vercel.app/).

## Contact

If you have any questions or feedback, feel free to reach out to the project's author at [henrik.ruan4@gmail.com](mailto:henrik.ruan4@gmail.com).

## Project Images
![Page Chatbot](./public/Chatbot.png)
![Page Chat data](./public/Chatdata.png)

## Tests
![result test e2e](./public/teste2e.png)

## Lighthouse
![lighthouse test](./public/lighthouse.png)