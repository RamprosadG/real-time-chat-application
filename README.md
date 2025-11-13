# Real-Time Chat Application

A modern, real-time chat application built with **Next.js 16**, **React 19**, and **TypeScript**. This application provides a seamless user experience for group chat functionality with a responsive, user-friendly interface.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Architecture](#project-architecture)
- [Components](#components)
- [Types & Interfaces](#types--interfaces)
- [Configuration](#configuration)
- [Development Workflow](#development-workflow)

## ✨ Features

- **User Authentication**: Simple login system with user number entry
- **Real-Time Group Chat**: Join chat rooms and communicate with multiple users
- **User Status Tracking**: See which users are online
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Modern UI Components**: Reusable, well-structured UI components
- **Message Persistence**: Mock data for messages and users
- **Smooth Animations**: Auto-scroll to latest messages and loading states
- **Type-Safe**: Full TypeScript support for better development experience

## 🛠 Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Build Tool**: Next.js with webpack
- **Node Version**: Compatible with Node 16+

## 📁 Project Structure

```
real-time-chat-application/
├── app/                           # Next.js app directory
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page (redirects to /login)
│   ├── globals.css               # Global styles
│   ├── login/
│   │   └── page.tsx              # Login page
│   └── chat/
│       └── [id]/
│           └── page.tsx          # Chat page with dynamic user ID
│
├── src/                          # Source code
│   ├── components/
│   │   ├── ChatDashboard.tsx     # Main chat interface
│   │   ├── LoginForm.tsx         # Login form component
│   │   └── ui/                   # Reusable UI components
│   │       ├── Button.tsx        # Button component
│   │       ├── Input.tsx         # Input field component
│   │       ├── MessageBubble.tsx # Individual message display
│   │       └── MessageInput.tsx  # Message input with send button
│   │
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   │
│   └── utils/
│       └── constants.ts          # Mock data and constants
│
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── tailwind.config.js            # Tailwind CSS configuration
```

## 🚀 Installation

### Prerequisites

- Node.js 16 or higher
- npm, yarn, pnpm, or bun package manager

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/RamprosadG/real-time-chat-application.git
cd real-time-chat-application
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 🎯 Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Run Production Build

Start the production server:

```bash
npm start
```

## 📜 Available Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build         |
| `npm start`     | Runs the production server                    |

## 🏗 Project Architecture

### Data Flow

```
Home Page (/login)
    ↓
LoginForm Component
    ↓
User enters number
    ↓
Navigate to /chat/[id]
    ↓
ChatDashboard Component
    ↓
Display messages & send new messages
```

### State Management

- **Local State**: Components manage their own state using React hooks
- **Mock Data**: Uses static mock data from `constants.ts` for users and messages
- **Route Parameters**: User ID is passed via URL parameters

## 🧩 Components

### ChatDashboard

- **Location**: `src/components/ChatDashboard.tsx`
- **Purpose**: Main chat interface
- **Features**:
  - Displays all messages in the conversation
  - Shows online user count
  - Auto-scrolls to latest messages
  - Handles message sending with simulated delay
  - Responsive message layout

### LoginForm

- **Location**: `src/components/LoginForm.tsx`
- **Purpose**: User authentication interface
- **Features**:
  - User number input field
  - Form validation
  - Loading state during submission
  - Navigation to chat room

### UI Components

- **Button**: Reusable button component with styling
- **Input**: Reusable input field component
- **MessageBubble**: Displays individual messages with sender info
- **MessageInput**: Input field for composing new messages

## 📦 Types & Interfaces

### User Interface

```typescript
interface User {
  id: string;
  name: string;
  status: "online" | "offline";
}
```

### Message Interface

```typescript
interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}
```

### LoginFormProps Interface

```typescript
interface LoginFormProps {
  onSubmit: (userNumber: string) => void;
  isLoading?: boolean;
}
```

## ⚙️ Configuration

### Tailwind CSS

- **Config**: `tailwind.config.js`
- **PostCSS**: `postcss.config.mjs`
- **Global Styles**: `app/globals.css`

### TypeScript

- **Config**: `tsconfig.json`
- **Strict Mode**: Enabled for type safety

### Next.js

- **Config**: `next.config.ts`
- **App Router**: Using Next.js 16 App Router
- **Build Tool**: webpack

## 💻 Development Workflow

1. **Create new components** in `src/components/`
2. **Define types** in `src/types/index.ts`
3. **Add constants/mock data** in `src/utils/constants.ts`
4. **Create pages** in `app/` directory following Next.js conventions
5. **Style components** using Tailwind CSS utility classes
6. **Test changes** in development server at `http://localhost:3000`

## 🔄 Future Enhancements

Potential features for future development:

- Backend API integration for real-time messaging
- WebSocket support for actual real-time updates
- User authentication with JWT tokens
- Database integration (PostgreSQL, MongoDB)
- Message history persistence
- User profiles and avatars
- Typing indicators
- Message reactions and replies
- File sharing capabilities

## 📝 Notes

- The application currently uses mock data for demonstration purposes
- User IDs are dynamically created based on login input
- Messages are stored in component state and reset on page refresh
- For production use, integrate with a backend API and database

## 📄 License

This project is private and developed for the Krishibid group.

---

**Created by**: Ramprosad Gharami  
**Repository**: RamprosadG/real-time-chat-application  
**Last Updated**: November 2025
