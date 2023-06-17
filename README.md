# YouTube Video Sharing App (Next.js)

![image](https://github.com/huyde140282/YTCloneApp/assets/72059115/ee475e59-b3fb-4ce4-acdb-2c46190b826f)

## Introduction

The YouTube Video Sharing App is a Next.js web application that allows users to register and login, share YouTube videos, and view a list of shared videos. It provides a platform for users to share their favorite videos and discover new content.

Key Features:

- User authentication using Firebase
- Video uploading and sharing functionality
- Like and dislike videos
- Responsive design with Tailwind CSS

## Prerequisites

Before running the application, ensure you have the following software and tools installed:

- Node.js (v12 or higher)
- MongoDB (v4 or higher)

## Installation & Configuration

Follow these steps to get the project up and running:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/video-sharing-app.git
2. Navigate to the project directory:
   cd video-sharing-app
   npm install   # or use `yarn install` if you prefer Yarn
Configuration
   Before running the application, you need to provide your Firebase configuration. Follow these steps:

   Create a Firebase project and enable Firestore and Authentication.

   Copy the Firebase configuration object from your project settings.

   Create a .env.local file in the root directory of the project.

   Add the following environment variables to the .env.local file:
   NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
   NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>

## Usage
Start the development server:
   ```bash
   npm run dev 
   ``` 
   or use `yarn dev` if you prefer Yarn
  ```bash
   yarn dev
  ```
   
 
  

