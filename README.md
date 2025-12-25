
# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio built using **React**, **Vite**, and **Tailwind CSS** to showcase projects, skills, and contact information with a clean UI and smooth user experience.

---

## 📌 Features

- ⚛️ Component-based architecture using React
- 🌙 Dark / Light theme toggle with localStorage persistence
- 📱 Fully responsive design (desktop & mobile)
- 🧭 Smooth navigation with responsive Navbar
- 🎨 Animated star & meteor background effects
- 🧠 Skills section with category-based filtering
- 📂 Projects section with live demo & GitHub links
- 🔔 Custom toast notification system using React hooks & Radix UI
- 📬 Contact section with UI feedback on form submission

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **UI Primitives:** Radix UI (Toast)
- **State Management:** React Hooks
- **Utilities:** class-variance-authority, clsx, tailwind-merge
- **Deployment Ready:** Vercel

---

## 📁 Project Structure

```

src/
├── components/
│   ├── ui/              # Reusable UI components (Toast)
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   └── StarBackground.jsx
│
├── hooks/
│   └── use-toast.js     # Custom global toast hook
│
├── lib/
│   └── utils.js         # Utility function (cn)
│
├── pages/
│   ├── Home.jsx
│   └── NotFound.jsx
│
├── assets/
├── index.css
├── main.jsx
└── App.jsx

````

---

## 🔔 Toast Notification System

- Implemented a **custom toast system** using Radix UI and React hooks
- Toasts are managed globally using a `useToast` hook
- Supports add, update, dismiss, and auto-remove functionality
- No external state management libraries used

---

## 🧠 Learning Outcomes

- React component-based architecture
- Global UI state management with hooks
- Tailwind CSS best practices
- Theme persistence using localStorage
- Clean folder structure & reusable components
- Real-world Git workflow and commits

---

## ▶️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rahulya43/portfolio-1.git
cd portfolio-1
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

---

## 🌐 Live Demo

👉 *Add your deployed link here when available*

---



## ⭐ Acknowledgements

* Radix UI
* Tailwind CSS
* Lucide Icons


```
