# InfinioEd Web User

A modern **React + TypeScript + Vite** web application for **InfinioEd**, an online learning platform.  
This project includes courses, events, blogs, messaging, subscriptions, and user management features.

---

## 🚀 Features

- **Landing Page**: Hero section, features, testimonials, instructors, and courses carousel.
- **Courses**: Browse courses, view course details, and track learning progress.
- **Events**: Upcoming & past events, webinars, and workshops.
- **Messaging**: Real-time chat window and conversation list.
- **User Profile**: Editable profile, certificates, learning stats, and wishlist.
- **Payment**: Credit card, PayPal, bank transfer, and subscription management.
- **Blog**: Blog listing and detail pages.
- **Notifications**: Filter, view, and manage notifications.
- **UI Components**: Reusable components for buttons, cards, accordions, dialogs, forms, etc.
- **Dark/Light Theme Support** with toggle functionality.
- **Responsive Design** for mobile, tablet, and desktop.

---

## 📂 Project Structure

```text
src/
│   App.tsx
│   main.tsx
│   Router.tsx
│
├── assets/             # Images, icons, and other static assets
├── components/         # Reusable components
│   ├── common/         # Common UI components (AuthDialog, Forms, ScrollToTop)
│   └── ui/             # UI primitives (Button, Card, Input, Tabs, etc.)
├── context/            # React Context for Auth, Theme, etc.
├── data/               # Static/mock data (blogs, courses)
├── layout/             # Layout components (Navbar, Footer)
├── lib/                # Utilities and helper functions
├── pages/              # Route-level components grouped by feature
├── types/              # TypeScript declaration files
└── utils/              # Schema builder and other helper scripts
