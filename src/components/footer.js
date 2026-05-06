export function renderFooter() {
  const footerHTML = `
        <p class="footer-mainText">My Learning Journal</p>
        <p class="footer-copyright">&copy; Copyright 2023</p>`;
  document.querySelector("footer").innerHTML = footerHTML;
}
