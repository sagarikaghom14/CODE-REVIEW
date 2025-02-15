# AI-Powered Code Reviewer | Complete MERN Stack Project

## Overview
The **AI-Powered Code Reviewer** is a web-based tool that allows users to input code, send it to an AI service for review, and display the feedback. The application consists of a **React frontend** and an **Express backend** that integrates with Google Gemini AI to analyze and review the submitted code.

## Features
- **Code Editor:** Users can enter their code in a simple, interactive editor.
- **AI Code Review:** The backend sends the code to Google Gemini AI for analysis.
- **Real-Time Feedback:** The AI-generated review is displayed on the frontend.
- **Syntax Highlighting:** The editor supports syntax highlighting for better readability.

## Technologies Used

### Backend:
- Node.js
- Express.js
- Google Gemini AI API
- dotenv

### Frontend:
- React.js
- Prism.js (for syntax highlighting)
- react-simple-code-editor
- Axios
- react-markdown
- rehype-highlight

## Project Structure

### Backend (`BackEnd/`)
- `src/app.js` - Sets up the Express application and routes.
- `src/controllers/ai.controller.js` - Handles AI review requests.
- `src/routes/ai.routes.js` - Defines the API endpoint for the AI service.
- `src/services/ai.service.js` - Interacts with the Google Gemini AI API.
- `server.js` - Starts the backend server.

### Frontend (`FrontEnd/`)
- `src/App.js` - Main component that renders the code editor and displays reviews.

## Environment Variables
Create a `.env` file in the `BackEnd/` directory and add:
```env
GOOGLE_GEMINI_KEY=your_google_api_key
```


## Usage
1. Open your browser and go to `http://localhost:3000`.
2. Enter your code in the editor.
3. Click the **Review** button to get AI-powered feedback.
4. The review results will be displayed on the right side.


Enjoy coding with AI-powered code reviews! 🚀

