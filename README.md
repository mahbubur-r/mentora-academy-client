# 🎓 MENTORA ACADEMY

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**Live URL:** [https://mentora-academy.netlify.app/](https://mentora-academy.netlify.app/)  
**Server URL:** [https://mentora-academy-server.vercel.app/](https://mentora-academy-server.vercel.app/)

---

## 🌟 Highlights

- **Advanced Dashboard:** Interactive charts (Pie/Bar) and real-time statistics.
- **Dark Mode Support:** Fully theme-aware UI with a toggle for Light/Dark modes.
- **Full Course Management:** Filtering, sorting, searching, and enrollment tracking.
- **Modern UI/UX:** Glassmorphism effects, skeleton loaders, and smooth animations.
- **Responsive Design:** Optimized for mobile, tablet, and desktop experiences.

---

## 🧠 Project Overview

**Mentora Academy** is a full-stack **online learning platform** designed to provide a seamless educational experience.

- **Learners** can browse diverse categories, enroll in courses, track their progress via a dedicated dashboard, and manage their profile.
- **Instructors/Admins** can manage course content and view platform analytics. (Note: Role-based features integrated).
- All data is securely stored in **MongoDB** and authentication is handled via **Firebase**.

---

## ✨ Key Features

### 🧭 Navigation & UI
- **Theme Toggle:** Switch between Light and Dark modes instantly.
- **Responsive Navbar:** Optimized mobile menu with brand-aligned colors.
- **Dynamic Active Links:** Visual feedback for current routes.

### 📊 Interactive Dashboard
- **Visual Analytics:** Added `Recharts` for visualizing category distribution and enrollment stats.
- **Recent Activity:** Table view of recently enrolled courses with status and ratings.
- **Stat Cards:** Quick view of Total Courses, Enrolled, and Completed.

### 📚 Course Exploration
- **Advanced Filters:** Filter by Price Range (Free, Under $50, etc.) and Category.
- **Sorting:** Sort by Price (Low/High) or Highest Rated.
- **Search:** Real-time search with debounce.
- **Grid Layout:** Uniform card design for better browsing experience.

### 🧾 Course Details & Interaction
- **Detailed View:** Course descriptions, instructor info, and ratings.
- **Enrollment:** One-click enrollment with duplicate checks.
- **Reviews:** Star rating system integration.

### 👤 Profile Management
- **Full-Width Choice:** Modern profile layout with cover image.
- **Editable Fields:** Update name and photo URL seamlessly.

### 🔐 Authentication & Security
- **Firebase Auth:** Google Sign-In and Email/Password login.
- **Protected Routes:** Secure access to Dashboard and Private resources.
- **JWT:** Token-based verification for API requests.

### 🧩 Additional Pages
- **Contact Us:** Functional contact form with toast notifications.
- **Blog:** Articles section with grid layout.
- **About Us:** Platform mission and vision.

---

## 🛠️ Technologies Used

| Category          | Tools / Libraries |
|------------------|------------------|
| **Frontend**      | React, React Router DOM |
| **Styling**       | Tailwind CSS, DaisyUI (Themes) |
| **Data Viz**      | Recharts (Pie & Bar Charts) |
| **State/API**     | Context API, Axios, custom Hooks |
| **Animations**    | Framer Motion |
| **Backend**       | Node.js, Express.js |
| **Database**      | MongoDB |
| **Auth**          | Firebase Authentication |
| **Notifications** | React Toastify, SweetAlert2 |
| **Icons**         | React Icons |
| **Hosting**       | Netlify (Client), Vercel (Server) |

---

## 🚀 Run Locally

1. Clone the repository:

```bash
git clone https://github.com/t-nijum/mentora-academy-client.git
cd mentora-academy-client
npm install
npm run dev
```

2. Clone the server:

```bash
git clone https://github.com/t-nijum/mentora-academy-server.git
cd mentora-academy-server
npm install
node index.js
```

---