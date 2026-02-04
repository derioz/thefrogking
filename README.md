# 🐸 The Frog King - Streamer Portfolio

> **Created by SPACE for TheFrogKingTV**

A premium, dark-themed streamer portfolio website built with React, TypeScript, and modern web technologies. Features a neon-infused gaming aesthetic with fire effects, live Twitch integration, and stunning visual design.

![The Frog King](./public/logo.png)

---

## ✨ Features

### 🎮 Core Features
- **Live Twitch Integration** - Real-time stream status detection with embedded video player
- **Collapsible Live Stream Section** - Auto-appears when streaming with video + chat embeds
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🎨 Visual Design
- **Dark Neon Theme** - Cave black background with neon green, pink, cyan, and gold accents
- **Fire Spark Effects** - Animated embers rising from the hero section
- **Glassmorphism** - Modern frosted glass UI elements
- **Gold Shimmer Text** - Animated gradient text effects
- **Ambient Glow Effects** - Subtle colored glows throughout

### 📍 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen hero with fire effects, logo, and Twitch CTA |
| **Live Stream** | Collapsible Twitch embed (appears when live) |
| **Games** | Showcase of featured games with hover effects |
| **PC Setup** | Battle station specs with product images |
| **Clips** | Featured Twitch clips with carousel player |
| **About** | Streamer bio with Twitch stats integration |
| **Footer** | Social links and branding |

### 🧭 Navigation
- **Sidebar Nav** (Desktop) - Fixed vertical navigation with tooltips
- **Bottom Nav** (Mobile) - Dock-style mobile navigation
- **Active Section Highlighting** - Auto-highlights current section
- **Smooth Scrolling** - Seamless scroll between sections

### 📊 Twitch Integration
- Real-time live status checking via decapi.me
- Embedded Twitch video player
- Embedded Twitch chat
- TwitchTracker stats display
- Clip embeds with carousel

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Lucide React
- **Fonts:** Cinzel (Royal), Orbitron (Cyber), Inter (Body)
- **Deployment:** GitHub Pages

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment to GitHub Pages

### Option 1: Manual Deploy

```bash
# Build the project
npm run build

# The 'dist' folder contains the production build
# Push to gh-pages branch or configure GitHub Pages to serve from /dist
```

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## ⚙️ Configuration

### Update Twitch Channel
Edit `App.tsx`:
```typescript
const TWITCH_CHANNEL = 'thefrogkingtv';
```

### Update Clips
Edit `components/Clips.tsx` - Replace placeholder slugs with real Twitch clip slugs.

### Update Stats
Edit `components/About.tsx` - Update the stats with real TwitchTracker data.

### Update GitHub Pages Base Path
Edit `vite.config.ts`:
```typescript
base: '/your-repo-name/',
```

---

## 📁 Project Structure

```
thefrogking/
├── components/
│   ├── About.tsx        # Stats & bio section
│   ├── Clips.tsx        # Twitch clips carousel
│   ├── Footer.tsx       # Site footer
│   ├── Games.tsx        # Featured games grid
│   ├── Hero.tsx         # Hero section with fire effects
│   ├── LiveStream.tsx   # Collapsible Twitch embed
│   ├── Navbar.tsx       # Navigation with tooltips
│   ├── Setup.tsx        # PC specs showcase
│   └── ui/
│       └── Section.tsx  # Reusable section wrapper
├── public/
│   ├── logo.png         # Channel logo
│   ├── hero-bg.jpg      # Hero background image
│   └── specs/           # PC component images
├── App.tsx              # Main app component
├── constants.ts         # Games, clips, socials data
├── index.html           # HTML template with Tailwind
├── index.tsx            # React entry point
└── vite.config.ts       # Vite configuration
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cave Black | `#0a0a0a` | Background |
| Cave Light | `#141414` | Cards, sections |
| Neon Green | `#39FF14` | Primary accent |
| Neon Pink | `#FF00FF` | Clips, highlights |
| Neon Cyan | `#00D4FF` | Stats, accents |
| Gold | `#FFD700` | Premium elements |
| Twitch Purple | `#9146FF` | Twitch CTAs |

---

## 📄 License

Created by **SPACE** for **TheFrogKingTV**

---

## 🔗 Links

- **Live Site:** [thefrogking.github.io/thefrogking](https://thefrogking.github.io/thefrogking)
- **Twitch:** [twitch.tv/thefrogkingtv](https://twitch.tv/thefrogkingtv)
- **TwitchTracker:** [twitchtracker.com/thefrogkingtv](https://twitchtracker.com/thefrogkingtv)
