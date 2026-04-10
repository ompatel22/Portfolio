# Om Patel — Portfolio

A modern, dark-themed developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## Features

- 🌙 Dark / Light theme toggle with persistent preference
- ⌨️ Animated typing hero with split-layout terminal card
- 📅 Timeline-based experience section
- 🃏 Interactive project cards with hover animations
- 📊 Skill bars with animated fill on scroll
- ⌘ Command palette (Ctrl+K / Cmd+K) for quick navigation
- 🖱️ Custom animated cursor (desktop)
- 📱 Fully responsive (mobile-first)
- 🚀 Ready to deploy on Vercel

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS v3**
- **Framer Motion**
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to Vercel

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Deploy — done!

## Project Structure

```
src/
├── components/
│   ├── CustomCursor.jsx     # Animated cursor
│   ├── Navbar.jsx           # Animated hide/show navbar
│   └── CommandPalette.jsx   # Ctrl+K navigation
├── sections/
│   ├── Hero.jsx             # Typing hero + terminal card
│   ├── Journey.jsx          # Experience timeline
│   ├── Build.jsx            # Projects grid
│   ├── Stack.jsx            # Skills with bars
│   └── Connect.jsx          # Contact + socials
├── hooks/
│   ├── useTheme.js          # Dark/light toggle
│   └── useScrollDirection.js # Navbar hide on scroll
├── data/
│   └── portfolio.js         # All content (edit this!)
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

All content lives in `src/data/portfolio.js` — update your info, projects, and skills there.
