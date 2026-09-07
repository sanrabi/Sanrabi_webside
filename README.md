# SANRABI Technologies — Mobile Application Development Website

> **"Build. Innovate. Grow."**

A premium, modern, and high-performance corporate website for **SANRABI Technologies**, a mobile application development company specializing strictly in native Apple ecosystem solutions (iOS, Swift, SwiftUI, UIKit, Xcode, REST APIs, Firebase, and MVVM Architecture).

---

## 📱 Tech Stack & Highlights

- **Strict Mobile Focus**: 100% focused on native iOS and mobile application development.
- **Visual Design**: Dark navy, midnight glassmorphism, electric cyan accents, subtle ambient glows, and Apple-inspired typography.
- **Hardware Mockups**: Custom high-fidelity CSS/SVG iPhone 16 Pro mockup featuring:
  - Dynamic Island with active status indicator
  - Interactive FinTech wallet interface
  - Interactive Face ID biometric authentication simulation
  - Floating Swift MVVM code, Biometric Security, and REST API telemetry cards
- **Portfolio Case Study**: Featured real-world mobile case study for *Eternis – Qiwi Mobile Payment & Services Platform* (FinTech mobile application).
- **Interactive Contact Engine**: Inquiry form with application type selectors (FinTech App, Business App, E-commerce App, Service App, Productivity App, Custom iOS App), budget selector, and validation feedback.
- **Zero-Dependency Architecture**: Pure HTML5, modular CSS3, and lightweight vanilla JavaScript. No node/npm build step required!

---

## 📂 Project Structure

```
Sanrabi/
├── index.html              # Main semantic HTML5 single-page application
├── css/
│   └── style.css           # Premium design system, layout, iPhone mockup & animations
├── js/
│   └── main.js             # Sticky navbar, active scroll tracking, interactive mockup & form logic
├── assets/
│   └── images/
│       ├── logo.svg        # SANRABI "S" monogram vector logo
│       └── favicon.svg     # High-resolution vector favicon
└── README.md               # Project documentation
```

---

## 🚀 How to Run & Preview Locally

### Option 1: Direct File Opening
Double-click `index.html` in Finder or open it directly in any browser:
```bash
open index.html
```

### Option 2: Local HTTP Server (Python 3)
Run Python's built-in HTTP server from the project directory:
```bash
python3 -m http.server 3000
```
Then open your browser and navigate to:
```
http://localhost:3000
```

---

## 🎨 SANRABI "S" Logo Customization

The project is pre-configured with a vector "S" logo in:
- `assets/images/logo.svg`
- `assets/images/favicon.svg`

To replace with your final exact design file:
1. Copy your logo SVG file to `assets/images/logo.svg`.
2. (Optional) If you have a PNG logo, save it as `assets/images/logo.png` and update the `src` attribute in `index.html`.

---

## 🌐 Production Deployment

This project is static and can be deployed anywhere with zero configuration:
- **GitHub Pages**: Push repository and enable GitHub Pages in repository settings under *Pages* -> *Branch: main* -> *Folder: root*.
- **Vercel / Netlify / Cloudflare Pages**: Connect your Git repository and deploy immediately (no build command needed, publish directory: `.`).
