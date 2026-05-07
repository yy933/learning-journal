import { postsData } from "./data/postsData";
import { renderPosts } from "./components/postRenderer.js";
import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";

const postsGrid = document.querySelector(".posts-grid");
const filterContainer = document.querySelector(".filter-section");
const allTags = ["All", ...new Set(postsData.flatMap((post) => post.tags))];

filterContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".tag-btn");
  if (!btn) return;
  const tag = btn.dataset.tag;
  handleFilter(tag);
});

postsGrid.addEventListener("click", (e) => {
  const li = e.target.closest(".post-tags-container li");
  if (!li) return;
  const clickedTag = li.textContent.trim();
  handleFilter(clickedTag);

  // scroll to top after filtering
  window.scrollTo({
    top: filterContainer.offsetTop - 100,
    behavior: "smooth",
  });
});

// render all tags in filter section
function renderAllTags() {
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
}

// handle filter
function handleFilter(selectedTag) {
  const filteredData =
    selectedTag === "All"
      ? postData
      : postsData.filter((post) => post.tags.includes(selectedTag));

  // re-render posts
  renderPosts(filteredData, postsGrid);

  // update UI
  updateFilterBtns(selectedTag);
}

function updateFilterBtns(selectedTag) {
  const btns = filterContainer.querySelectorAll(".tag-btn");
  btns.forEach((btn) => {
    const isActive = btn.dataset.tag === selectedTag;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive);
  });
}

renderNavbar();
renderFooter();
renderPosts(postsData, postsGrid);
renderAllTags();
