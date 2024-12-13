<h2 style="font-size: 32px; font-weight: bold;">AI Assistant Bot</h2>

This project is a chatbot that utilizes Google's Gemini API for AI-powered responses. The application allows users to input messages, send files (images), and get real-time responses from an AI model. It uses JavaScript, HTML, and CSS for the frontend, and integrates with Google's Gemini API via a generated API key.

<h3 style="font-size: 28px; font-weight: bold;">Features</h3>

- **User Input:** Capture user input via text and send it to the Google Gemini API.
- **File Upload:** Allows users to upload images along with their messages.
- **Real-Time Responses:** The AI model generates responses dynamically, displayed in a chat interface.
- **Chat Interface:** User and AI chat bubbles appear on the screen for interactive communication.
- **API Integration:** Sends user messages and files to Google's Gemini API for AI-powered content generation.
- **Dynamic Display:** Responses are dynamically injected into the chat area after the AI processes the input.

<h3 style="font-size: 28px; font-weight: bold;">Technologies Used</h3>

- **JavaScript** - Handles logic for sending requests and updating the UI.
- **HTML5** - Provides the structure of the application.
- **CSS3** - Styles the interface and chatbox.
- **Google Gemini API** - For generating AI responses based on user input.
- **FileReader API** - For converting images to base64 and uploading them with user input.

<h3 style="font-size: 28px; font-weight: bold;">Setup and Installation</h3>

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/hemasaketh/Advanced-AI-AssistBot.git

2. **Navigate to the Project Directory:**
   ```bash
   cd Advanced-AI-AssistBot

3. Open the Chatbot.html file in your browser to run the application.

<h3 style="font-size: 28px; font-weight: bold;">How It Works</h3>

1. **User Input:**
   - The user types a message and clicks the "Send" button or presses "Enter".

2. **File Upload:**
   - The user can upload an image to accompany their message.

3. **Request to Google Gemini API:**
   - The user's message (and image, if uploaded) is sent to the API in a `POST` request.

4. **API Response:**
   - The API processes the input and returns a generated response.

5. **Display Output:**
   - The AI response is dynamically added to the chat interface, and the chat container scrolls automatically to display the latest messages.

