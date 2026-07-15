# Project Specification: BCYF Modern Updateable Website & Chatbot

This document serves as a persistent record of the project requirements, design choices, and implementation details for the Business China Youth Forum (BCYF) website. It has been saved to your workspace so it is ready when you are.

---

## 1. Feasibility: Is it possible to do all this?
**Yes, absolutely.** Creating a premium, modern, fully updateable website with a visual content manager (Admin Panel) and a smart AI chatbot is 100% possible. 

Here is how each part works:
- **Updating Content (Sponsors, Speakers, Agenda)**: Rather than editing raw code, you will use a visual **Admin Dashboard** directly on the site. You fill in a form (e.g., upload a sponsor logo or add a speaker's name), click "Save," and the website updates automatically.
  - *For the local prototype*: It will save directly to your browser's `localStorage` (so your changes persist when you refresh or close the browser).
  - *For production*: We can hook this dashboard up to a lightweight serverless database like **Supabase** or a headless content management system (CMS) like **Sanity.io** or **Strapi**.
- **AI Chatbot**: A floating bubble in the bottom-right corner that uses smart matching to simulate an event coordinator. It answers questions about event times, speakers, registration links, and how to use the admin panel.
- **Modern Interactions**: We will build the site with responsive grids, animated carousels, glassmorphic card styling, and interactive timeline switchers.

---

## 2. Visual Design & Aesthetics

We will use a premium, custom design system to make the site look state-of-the-art:
*   **Color Palette**:
    *   *Primary (Dark Navy)*: `#0f172a` (representing professionalism and global business alignment).
    *   *Accent (Royal Blue & Purple)*: `#2563eb` and `#7c3aed` (gradients for youth energy, tech, and future focus).
    *   *Neutral Lights*: `#f8fafc` and `#ffffff` (for clean, high-readability readability).
*   **Typography**:
    *   *Headings*: **Outfit** (a modern, geometric sans-serif from Google Fonts).
    *   *Body text*: **Inter** (highly readable, professional typography).
*   **Key Styling Effects**:
    *   *Glassmorphism*: Cards (speakers, schedules) styled with a semi-transparent white backing, fine borders, and backdrop-filter blur effects.
    *   *Micro-Animations*: Smooth transitions when hovering over buttons, cards scaling slightly on hover, and active states on tabs.

---

## 3. Website Structure & Features

The website will be organized into the following sections:

### A. Navigation & Header
*   Sticky navbar that shrinks slightly on scroll.
*   Anchors: `Agenda`, `Speakers`, `Gallery`, `Sponsors`, `About`.
*   **"Manage Content" Trigger**: A secured button that launches the Admin Panel drawer.
*   **Language Switcher**: Toggle button between English (EN) and Chinese (ZH) formats.

### B. Hero Banner & Countdown
*   Futuristic glowing connection background.
*   Bold typography displaying the Forum Theme, Date, and Location.
*   **Live Countdown Timer**: Counts down to the next forum date.
*   **Registration Buttons**: "Register Now" and "View Agenda".

### C. Speakers Showcase (Interactive Carousel)
*   A side-scrolling carousel showcasing speakers' portraits, names, titles, and organizations.
*   Clicking a speaker's card opens a beautifully formatted modal displaying their full bio and session details.

### D. Agenda Explorer (Interactive Timeline)
*   A clean, vertical timeline matching the schedule.
*   **Track Toggles**: Buttons to switch between "Singapore Stream" and "Shanghai Stream".
*   Each card outlines: Time slot, Session Title, Description, and Assigned Speakers.

### E. Past Forums Gallery (Watch Section)
*   A gallery displaying highlight videos and photo cards from previous forum years.
*   Clicking photos opens a lightbox view.

### G. Sponsors & Partners Grid
*   Sponsors organized by tier (e.g., Platinum, Gold, Silver Partners).
*   Addable/removable dynamically through the Admin Panel.

### H. Footer
*   Social media icons, contact details, copyright info, and a newsletter sign-up form.

---

## 4. Content Manager (Admin Panel)

A slide-out drawer on the right side of the page with dedicated management tabs:
1.  **Banner Settings**: Edit the headline, subheadline, countdown target date, and registration links.
2.  **Speaker Manager**:
    *   *Form*: Name, Title, Organization, Bio, and Image URL.
    *   *List*: View existing speakers with a "Delete" button.
3.  **Agenda Manager**:
    *   *Form*: Stream (Singapore/Shanghai), Time, Title, Description, and Speaker.
4.  **Sponsor Manager**:
    *   *Form*: Sponsor Name, Logo URL, Tier (Platinum, Gold, Silver).

---

## 5. Custom AI Chatbot

A floating conversation widget with these features:
*   Floating bubble in the corner with a BCYF avatar.
*   **Quick Prompts**: Pre-configured pills like "What is the agenda?", "Who are the speakers?", "How do I register?", and "How do I edit sponsors?".
*   **Typing Simulator**: Shows a realistic "Chatbot is typing..." loading state before responding.
*   **Direct Answers**: Responds instantly based on the current website schedule and speaker listings (making it dynamically aware of whatever you edit via the Admin Panel).

---

## 6. How to Run & Deploy the Project
1.  **Local Testing**: You will open `index.html` in your web browser.
2.  **Deployment**: When you are ready to put this online, you can host it for free on **Vercel**, **Netlify**, or **GitHub Pages** within seconds.
3.  **Database Connection (Optional Upgrade)**: In the future, we can swap the `localStorage` logic in `app.js` with API calls to **Supabase** or **Firebase** in under 30 lines of code, making it a production-ready, database-backed site.
