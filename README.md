# MegaBlog

MegaBlog is a full-featured blogging platform built with React and Vite. It provides user authentication, post creation and editing, and a modern, responsive UI. The project is structured for scalability and maintainability, using modular components and state management.

## Features
- User authentication (login, signup, logout)
- Create, edit, and view blog posts
- Rich text editor for post content
- Responsive design with reusable components
- State management using Redux
- Appwrite integration for backend services

## Project Structure
- `src/components/` – Reusable UI components (buttons, forms, layouts, etc.)
- `src/pages/` – Main application pages (Home, Login, Signup, AddPost, Edit, etc.)
- `src/appwrite/` – Appwrite configuration and authentication logic
- `src/store/` – Redux store and slices for state management
- `src/config/` – Application configuration files
- `public/` – Static assets

## Getting Started
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open [http://localhost:5173](http://localhost:5173) to view the app

## Technologies Used
- React
- Vite
- Redux
- Appwrite
- ESLint
- Tiny-mce
- React-Hook-Form
- Tailwindcss
---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
