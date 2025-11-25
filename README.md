# Divine UI - Krishna Experience

A visually immersive, high-performance web application dedicated to the life, teachings, and aesthetics of Lord Shree Krishna. This project blends modern "Digital Brutalist" design principles with deep spiritual iconography, creating a unique "Divine UI" experience.

![Divine UI Preview](https://images.unsplash.com/photo-1582457601576-8051a6e927f8?q=80&w=1920&auto=format&fit=crop)

## 🌟 Overview

**Divine UI** is a showcase of advanced frontend engineering and creative coding. It moves beyond standard web layouts to offer a cinematic, scroll-driven journey through Indian mythology.

### Key Features

*   **Cinematic Landing Page**: A modern, responsive hero section featuring stylized Hindi/English typography and animated gradient meshes.
*   **Split-Flip 3D Cards**: A complex scroll-triggered animation where a seamless landscape splits into three 3D cards revealing the aspects of Krishna (Murali, Sudarshan, Mayura).
*   **Dashavatar Carousel**: A fully responsive, swipe-enabled horizontal perspective slider showcasing the 10 incarnations of Lord Vishnu.
*   **Parallax & Skew Typography**: High-performance scroll-velocity animations for Mantras ("Hare Krishna", "Radhe Radhe").
*   **Dual-Column Scroll**: A "Dharma/Karma" section featuring bidirectional scrolling columns.
*   **Tilted Marquee**: An infinite scrolling, tilted gallery for a dynamic visual effect.
*   **Fluid Typography**: Responsive text scaling ensuring perfect legibility across Mobile, Tablet, and Windows Desktop.

## 🛠️ Tech Stack

*   **Framework**: [React 18](https://react.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion 12](https://www.framer.com/motion/) (Scroll triggers, shared layout animations, spring physics)
*   **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) (Web-gl style smooth scrolling)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Fonts**: 
    *   *Inter* (UI Text)
    *   *Playfair Display* (Headings)
    *   *Yatra One* (Hindi & Stylized English)

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/divine-ui.git
    cd divine-ui
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm start
    # or
    yarn start
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
/src
  ├── components/
  │   ├── HeroModern.tsx       # Main Landing Page
  │   ├── SplitFlipSection.tsx # Trimurti 3D Animation
  │   ├── CarouselPerspective.tsx # Dashavatar Slider
  │   ├── TypographySection.tsx # Velocity Scroll Mantras
  │   ├── CarouselDual.tsx     # Dharma/Karma Parallax
  │   ├── CarouselTilted.tsx   # Mahamantra Marquee
  │   ├── Footer.tsx           # Radhe Radhe Animation
  │   └── Navbar.tsx           # Navigation
  ├── types.ts                 # Data definitions (Avatars, Slides)
  ├── App.tsx                  # Main Entry
  └── index.tsx                # Root Mount
```

## 🎨 Design Philosophy

The design follows a **"Dark Divine"** aesthetic:
*   **Colors**: Deep Charcoal (`neutral-950`), Peacock Blue (`cyan-500`), Pitambar Yellow (`yellow-500`), and Lotus Pink (`pink-500`).
*   **Typography**: A mix of bold, high-impact serif fonts for grandeur and clean sans-serifs for readability.
*   **Motion**: Everything reacts to user input (scroll, mouse move, hover) to create a living, breathing digital artifact.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Made with Devotion & Code.* 🕉️
