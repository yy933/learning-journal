export function renderNavbar() {
  const currentPath = window.location.pathname;
  const navHTML = `
      <a href="/" class="logo">
        <i class="fa-solid fa-comment-dots fa-2xl"></i>
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
