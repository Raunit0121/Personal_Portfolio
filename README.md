# 🌐 Raunit Kumar — Personal Portfolio

A modern, fully responsive **personal portfolio website** built with a sleek split-screen hero design. It showcases my skills, projects, internship experience, certificates, and contact information — with a working email form and smooth dark/light theme toggle.

🔗 **Live:** [vistify-apk.vercel.app](https://vistify-apk.vercel.app/) *(update with your portfolio URL)*

---

## 👨‍💻 About Me

**Raunit Kumar**
B.Tech Computer Engineering — Marwadi University, Rajkot (NAAC A+) | CGPA: 7.97 | 2022–2026

Full Stack Developer specialising in Flutter mobile apps and Java/Spring Boot backends. Passionate about building clean, functional products from idea to deployment.

- 📧 kumarraunit47@gmail.com
- 💼 [linkedin.com/in/raunit-kumar-92799926a](https://www.linkedin.com/in/raunit-kumar-92799926a/)
- 🐙 [github.com/Raunit0121](https://github.com/Raunit0121)

---

## ✨ Features

- 🌓 Split-screen hero — light left panel + dark right panel with diagonal clip
- ⌨️ Typing animation cycling through roles
- 🎨 Dark / Light theme toggle (persists via localStorage)
- 📊 Animated skill progress bars (trigger on scroll)
- 🗂️ Projects section with GitHub & live demo links
- 🏅 Flip-card certificates section linked to real PDF/image files
- � Internship experience timeline
- 📬 Working contact form powered by **EmailJS** (no backend)
- 📱 Fully responsive — mobile, tablet, desktop
- ♿ Accessible labels and ARIA attributes

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | HTML5, CSS3 (Flexbox / Grid), Vanilla JavaScript |
| Icons | Font Awesome 6.5, Devicons |
| Email | EmailJS (browser SDK) |
| Fonts | Segoe UI / System UI |

---

## 🧠 Skills

### Languages
| Skill | Proficiency |
|---|---|
| Java | 85% |
| Dart | 80% |
| JavaScript | 70% |

### Frameworks
| Skill | Proficiency |
|---|---|
| Flutter | 82% |
| Spring Boot | 72% |
| HTML / CSS | 88% |

### Tools & Databases
| Skill | Proficiency |
|---|---|
| Firebase | 80% |
| MySQL | 75% |
| Git / GitHub | 85% |

---

## 🗂️ Projects

### 1. 📝 Notevia — Flutter + Firebase
> Full-stack Flutter app for real-time notes & task management

- Email, phone, and Google authentication
- Search, pinning, date filters, local smart notifications
- State management with Provider, clean modular architecture
- **Stack:** Flutter · Firebase · Provider · Dart
- 🔗 [GitHub](https://github.com/Raunit0121/Notevia)

---

### 2. � ChatKaro — Flutter + Firebase
> WhatsApp-inspired real-time chat app for Android, iOS & Web

- Firestore, Auth & Storage for live messaging and secure login
- User profile management, emoji picker, custom themes
- Smooth animations with Lottie
- **Stack:** Flutter · Firestore · Lottie · Auth
- 🔗 [GitHub](https://github.com/Raunit0121/Chat-Karo)

---

### 3. 🪪 Visitify — Flutter + Firebase
> Smart visitor & delivery management system

- QR-based approvals and real-time entry tracking
- Built for societies, offices, hostels, and residential complexes
- **Stack:** Flutter · Firestore · Lottie · Auth
- 🔗 [GitHub](https://github.com/Raunit0121/visitify_) · [Live Demo](https://vistify-apk.vercel.app/)

---

### 4. ⚙️ Student Management System — Java + Spring Boot
> RESTful backend for student management

- Full CRUD operations with MySQL integration
- DTO architecture, input validation, global exception handling
- Tested with Postman
- **Stack:** Java · Spring Boot · MySQL · Postman
- 🔗 [GitHub](https://github.com/Raunit0121/Student-Management-System-Spring-Boot-)

---

### 5. 🔄 Skill-Swap Platform — React + Node.js + MongoDB
> Full-stack skill exchange platform

- JWT authentication, real-time messaging, user profiles
- Search/filter features and admin dashboard
- Deployed on Vercel (frontend) and Render (backend)
- **Stack:** React · Node.js · MongoDB · JWT Auth
- 🔗 [GitHub](https://github.com/Raunit0121/Skill_Swap_platform)

---

## � Internship Experience

### Software Developer Intern — TSS Consultancy Pvt. Ltd.
📍 Rajkot, Gujarat | 🗓️ Jan 2025 – May 2025 | Backend Development
- Optimized backend servers to improve performance and scalability
- Debugged and troubleshot code for efficient system operation

### Java Developer Intern — Elevate Labs
📍 Remote Online | 🗓️ Jun 2025 – Jul 2025
- Worked with cross-functional teams to understand client requirements
- Designed and implemented Java applications and fixed software issues

---

## 🏅 Certificates

| Certificate | Issuer | Year | File |
|---|---|---|---|
| Flutter Development | Cursa | 2025 | [View](assets/certificates/FLUTTER.PDF) |
| Android Development | Infosys | 2024 | [View](<assets/certificates/Android development .pdf>) |
| Java Programming | Elevate Labs | 2025 | [View](assets/certificates/java.pdf) |
| SQL & Databases | Oracle Academy | 2023 | [View](assets/certificates/Sql.pdf) |
| NDG Linux Essentials | Cisco / NDG | 2024 | [View](assets/certificates/NDGLinux.pdf) |
| Backend Developer Intern | TSS Consultancy Pvt. Ltd. | 2025 | [View](<assets/certificates/Tss consultancy .jpg>) |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main single-page app
│
├── css/
│   └── style.css           # All styles + CSS variables for theming
│
├── js/
│   └── script.js           # Typing animation, theme toggle, EmailJS, scroll FX
│
├── assets/
│   ├── images/
│   │   └── profile.png
│   ├── resume/
│   │   └── Raunit.pdf
│   └── certificates/
│       ├── FLUTTER.PDF
│       ├── Android development .pdf
│       ├── java.pdf
│       ├── Sql.pdf
│       ├── NDGLinux.pdf
│       └── Tss consultancy .jpg
│
└── README.md
```

---

## � Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) — no backend required.

1. Sign up free at emailjs.com
2. Add Gmail service → copy **Service ID**
3. Create template with `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}` → copy **Template ID**
4. Copy your **Public Key** from Account settings
5. Paste all three into `js/script.js`:

```js
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
```

---

## � Resume

� [Download Resume](./assets/resume/Raunit.pdf)

---

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.
