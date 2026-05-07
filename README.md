# My Learning Journal

A responsive, dynamic, and modern blog-style website built with **Vanilla JavaScript** and **Vite**. This project documents a coding journey through a clean UI, featuring dynamic content rendering and intelligent data filtering.

## 🚀 Live Demo

Check out the live site here: https://mylearningjournalblog.netlify.app/

## ✨ Latest Features

- **Dynamic Post Rendering**: Articles are no longer hard-coded; they are generated dynamically from a centralized data source using JavaScript modules.

- **Advanced Category Filtering**: A custom-built filter system that allows users to toggle between topics (CSS, JavaScript, etc.) with real-time UI updates.

- **"View More" Pagination**: Implemented a "load-on-demand" system to optimize initial page load and improve user experience.

- **Gradient Scroll Mask**: A sophisticated CSS mask effect on the filter bar to indicate scrollable content on mobile devices.

- **Responsive & Accessible**: Uses `clamp()` for fluid typography and ARIA attributes (`aria-pressed`) for screen reader support.

## 🛠️ Technical Highlights

- **Architecture**: Modular JavaScript (ESM) with a component-based approach (navbar.js, postRenderer.js, etc.).

- **Build Tool**: Powered by Vite for fast development and optimized production bundling.

- **CSS Mastery**:
  - **Grid auto-fill**: Ensures consistent card sizing regardless of the number of posts.
  - **Flexbox**: Used for complex alignment in headers and post metadata.
  - **Sticky Header**: Enhanced with localized logo linking for easy navigation.

- **Data Driven**: Centralized `postsData.js` acts as a local API for the entire application.

## 📂 Project Structure

```.
learning-journal/
├── src/
│   ├── components/      # Reusable UI components (Renderer, Nav, Footer)
│   ├── data/            # Local data source (postsData.js)
│   ├── assets/          # Global styles and banner images
│   ├── main.js          # Main logic (Filtering, Event Listeners)
│   └── style.css        # Core stylesheet with responsive logic
├── public/              # Static assets (Favicons, Post images)
├── index.html           # Entry point
└── vite.config.js       # Vite configuration
```

## 🛠️ Future Roadmap

- [x] Implement dynamic blog post generation using JavaScript.

- [x] Add a "View More" functionality to load additional posts.

- [x] Create a localized "About Me" page logic.

- [ ] Implement Dark Mode toggle (System preference & Manual switch).

- [ ] Add search functionality for post titles.

- [ ] Integrate a Headless CMS (e.g., Contentful) for easier content management.
