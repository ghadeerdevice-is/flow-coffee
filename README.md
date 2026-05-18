# ☕ Flow Coffee

> A React-based web application for Flow Coffee — a cozy café in Tyre, Lebanon.  
> *Sip. Relax. Flow.*

---

## 📖 Project Description

Flow Coffee is a fully responsive, multi-page web application built with **ReactJS** and **Tailwind CSS**. It showcases the café's menu, story, gallery, and contact information. The app was developed as part of **CSCI390: Web Programming — Project Phase 2**.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| ReactJS | Frontend framework |
| React Router DOM | Client-side routing (4 pages) |
| Tailwind CSS | Responsive utility-first styling |
| GitHub Pages / Vercel | Deployment |

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero section, welcome text, gallery preview |
| About | `/about` | Our story, values, and location |
| Menu | `/menu` | Full menu with items and prices |
| Contact | `/contact` | Contact info and feedback form |

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/flow-coffee.git

# 2. Enter the project folder
cd flow-coffee

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at http://localhost:3000.

### Build for Production

```bash
npm run build
```

---

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

Add to package.json: "homepage": "https://YOUR_USERNAME.github.io/flow-coffee"

```bash
npm run build
npx gh-pages -d build
```

---

## 📁 Project Structure

```
flow-coffee/
├── public/             # Static assets (images)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx  # Responsive nav with hamburger menu
│   │   └── Footer.jsx  # Site footer
│   ├── pages/
│   │   ├── Home.jsx    # Landing page with hero & gallery
│   │   ├── About.jsx   # About section and values
│   │   ├── Menu.jsx    # Full menu grid
│   │   └── Contact.jsx # Contact info and feedback form
│   ├── App.js          # Router and layout
│   └── index.css       # Tailwind CSS directives
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 👥 Group Contribution Statement

| Member | Contribution |
|---|---|
| [Name 1] | React components, routing |
| [Name 2] | Tailwind styling, responsiveness |
| [Name 3] | Content, assets, deployment |

---

## 🎓 Course Info

- **Course:** CSCI390 — Web Programming  
- **Phase:** 2 (Frontend)  
- **Due Date:** May 31, 2026
