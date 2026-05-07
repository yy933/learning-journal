import { postsData } from "./data/postsData";
import { renderPosts } from "./components/postRenderer.js";
import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";

const postsGrid = document.querySelector(".posts-grid");
const filterContainer = document.querySelector(".filter-section");
const allTags = ["All", ...new Set(postsData.flatMap((post) => post.tags))];

// render all tags in filter section
filterContainer.innerHTML = allTags
  .map(
    (tag) =>
      `
  <button class="tag-btn ${tag === "All" ? "active" : ""}" 
          type="button" 
          aria-pressed="${tag === "All"}"
          data-tag="${tag}">
    ${tag}
  </button>
`,
  )
  .join("");


renderNavbar();
renderFooter();
renderPosts(postsData, postsGrid);
