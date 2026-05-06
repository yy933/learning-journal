import { postsData } from "./data/postsData";
import { renderPosts } from "./components/postRenderer.js";
import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";

const postsGrid = document.querySelector(".posts-grid");

renderNavbar();
renderFooter();
renderPosts(postsData, postsGrid);
