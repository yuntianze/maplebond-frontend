# MapleBond Frontend

## Overview

This project is a modified version of a Next.js AI Chatbot, where the previous connection to OpenAI has been replaced with a connection to our custom-developed RESTful server, known as the MapleBond backend.

## Project Description

The MapleBond project is specifically designed to serve Chinese immigrants or those interested in immigrating to North America. The project provides professional services through an AI assistant, offering consultation on immigration, lifestyle, education, job searching, and more.

## Tech Stack

- **Next.js**: A React framework for building fast and scalable web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Deployment

The project is deployed on Vercel, providing a seamless and performant experience.

## Features

- AI-driven chatbot for real-time consultation.
- Tailored advice for Chinese immigrants to North America.
- Easy-to-use interface with fast responses.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yuntianze/maplebond-frontend.git
   cd maplebond-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create an environment file:**
   Create a `.env.local` file in the root directory and add your environment variables. For example:

   ```env
   NEXT_PUBLIC_API_URL=https://api.maplebond.com
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## Deployment on Vercel

To deploy the project on Vercel:

1. **Create a Vercel account:**
   If you don’t have one, sign up at [vercel.com](https://vercel.com/).

2. **Import your project:**
   Import the MapleBond frontend project from your GitHub repository.

3. **Set environment variables:**
   Add your environment variables in the Vercel dashboard under the "Environment Variables" section.

4. **Deploy:**
   Click the deploy button, and Vercel will build and deploy your project.

## Contribution

If you want to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions that enhance the functionality and user experience of MapleBond.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries or issues, please contact us at support@maplebond.com.

---

Thank you for using MapleBond, your AI assistant for North American immigration and lifestyle consultation!
