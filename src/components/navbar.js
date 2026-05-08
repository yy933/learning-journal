export function renderNavbar() {
  const currentPath = window.location.pathname;
  const navHTML = `
      <a href="/" class="logo" aria-label="My Learning Journal Home">
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 512 512" 
             class="logo-svg" 
             aria-hidden="true">
          <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM144 208a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm112 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm144-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"/>
        </svg>
        <h1>My Learning Journal</h1>
      </a>
      <nav class="navbar">
        <ul>
          <li><a href="/" class="${currentPath === "/" ? "active" : ""}">Home</a></li>
          <li><a href="/about/" class="${currentPath.includes("about") ? "active" : ""}">About</a></li>
        </ul>
      </nav>`;
  document.querySelector("header").innerHTML = navHTML;
}
