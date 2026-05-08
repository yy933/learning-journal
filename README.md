# My Learning Journal

A responsive, dynamic, and modern blog-style website built with **Vanilla JavaScript** and **Vite**. This project documents a coding journey through a clean UI, featuring dynamic content rendering and intelligent data filtering.

## 🚀 Live Demo

Check out the live site here: https://mylearningjournalblog.netlify.app/

## ✨ Latest Features

- **Dynamic Post Rendering**: Articles are no longer hard-coded; they are generated dynamically from a centralized data source using JavaScript modules.

- **Advanced Category Filtering**: A custom-built filter system that allows users to toggle between topics (CSS, JavaScript, etc.) with real-time UI updates.

- **"View More" Pagination**: Implemented a "load-on-demand" system to optimize initial page load and improve user experience.

- **Gradient Scroll Mask**: A sophisticated CSS mask effect on the filter bar to indicate scrollable content on mobile devices.

- **Performance-First Hero Section**: Optimized the hero banner using HTML `<img>` with `fetchpriority="high"` and `preload`strategies for near-instant visual loading.

- **Responsive & Accessible**: Uses `clamp()` for fluid typography and ARIA attributes (`aria-pressed`) for screen reader support.

## 🛠️ Technical Highlights

- **Architecture**: Modular JavaScript (ESM) with a component-based approach (navbar.js, postRenderer.js, etc.).

- **Build Tool**: Powered by Vite for fast development and optimized production bundling.

- **CSS Mastery**:
  - **Grid auto-fill**: Ensures consistent card sizing regardless of the number of posts.
  - **Flexbox**: Used for complex alignment in headers and post metadata.
  - **Sticky Header**: Enhanced with localized logo linking for easy navigation.

- **Data Driven**: Centralized `postsData.js` acts as a local API for the entire application.

### ⚡ Performance Results
> **LCP reduced from 7.6s to 1.9s** (a 75% improvement) by implementing Netlify Image CDN and optimizing resource fetching priorities.

- **Architecture**: Modular JavaScript (ESM) with a logic-component separation (postRenderer.js, filters.js, etc.).
- **Web Vitals Optimization**:
  - **LCP Optimization**: Leveraged **Netlify Image CDN** for on-the-fly WebP compression and dynamic resizing.
  - **Critical Path**: Minimized render-blocking resources by deferring non-essential scripts and using `font-display: swap`.
  - **Layout Stability**: Explicitly defined image dimensions and stacking contexts to achieve a near-zero **Cumulative Layout Shift (CLS)**.
- **Task Prioritization**: Refactored `init()` logic to prioritize LCP-related elements (Navbar and Hero Posts) while deferring non-critical UI tasks (Footer, Tags) using asynchronous scheduling.

- **DOM Caching**: Reduced overhead by caching frequently accessed elements (like `viewMoreContainer`), minimizing expensive DOM lookups during filter and pagination events.
- **Dependency Streamlining**: Replaced the entire Font Awesome library with a single **Optimized Inline SVG** for the logo, eliminating an external render-blocking HTTP request and reducing the total bundle size.

## 📂 Project Structure

```.
learning-journal/
├── src/
│   ├── components/      # UI logic (Renderer, Nav, Footer, Optimization helpers)
│   ├── data/            # Local data source (postsData.js)
│   ├── main.js          # Core application logic & event orchestration
│   └── style.css        # Responsive styles with CSS Variables
├── public/
│   ├── images/          # Static assets & banner (optimized via Netlify CDN)
│   └── favicons/        # Branding assets
├── index.html           # Optimized entry point with resource hints
└── vite.config.js       # Build configuration
```

## 🛠️ Future Roadmap

- [x] Implement dynamic blog post generation using JavaScript.

- [x] Add a "View More" functionality to load additional posts.

- [x] Create a localized "About Me" page logic.

- [x] **Performance Tuning**: Implement Netlify Image CDN and Preload strategies.

- [ ] Implement Dark Mode toggle (System preference & Manual switch).

- [ ] Add search functionality for post titles.

- [ ] Integrate a Headless CMS (e.g., Contentful) for easier content management.
