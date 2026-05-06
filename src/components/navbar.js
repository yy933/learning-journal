export function renderNavbar() {
  const navHTML = `
      <div class="logo">
        <i class="fa-solid fa-comment-dots fa-2xl"></i>
        <h1>My Learning Journal</h1>
      </div>
      <nav class="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
        </ul>
      </nav>`;
  document.querySelector("header").innerHTML = navHTML;
}
