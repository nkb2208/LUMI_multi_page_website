# LUMI - AI Style Assistant

LUMI is an AI-powered application that analyzes your photos to provide personalized Makeup, Hair, and Outfit recommendations.

## Project Architecture
- **Frontend**: HTML, CSS, Vanilla JS. (Can be hosted on GitHub Pages).
- **Backend**: Node.js, Express. Handles Gemini API calls, Round Robin load balancing, and mapping AI keywords to real content.

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd LUMI_multi_page_website
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Copy the environment example file:
```bash
cp .env.example .env
```

Open `backend/.env` and add your Gemini API keys:
```
GEMINI_API_KEY_1=your_key_1
GEMINI_API_KEY_2=your_key_2
PORT=3000
```

Start the backend server:
```bash
npm start
# OR
node server.js
```

### 3. Setup Frontend
You can serve the `frontend/` directory using any static web server.
If you have `npx` installed:
```bash
cd frontend
npx serve
```
Then open `http://localhost:3000` (or whatever port `serve` provides) in your browser.

## Features
- **Upload Analysis**: Upload a face or full-body photo. The AI automatically detects the type.
- **Round Robin API Key Manager**: Cycles through multiple Gemini keys to avoid rate limits.
- **Content Service**: Separates AI logic from URL generation. AI returns keywords, and the backend resolves them to real Unsplash images and YouTube videos.
