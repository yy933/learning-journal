import { postsData } from "./data/postsData";
import { renderPosts } from "./components/postRenderer.js";
import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";

const postsGrid = document.querySelector(".posts-grid");
const filterContainer = document.querySelector(".filter-section");
const viewMoreBtn = document.querySelector(".view-more-btn");
const viewMoreContainer = document.querySelector(".view-more-container");

// initialize data and states
const allTags = ["All", ...new Set(postsData.flatMap((post) => post.tags))];
let visibleCount = 6;
let currentTag = "All";

const init = () => {
  renderNavbar(); // top priority
  refreshPosts();

  // postpone non-urgent tasks
  setTimeout(() => {
    renderAllTags();
    renderFooter();
  }, 0);
};

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
});

viewMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (viewMoreBtn) {
    visibleCount += 6;
    refreshPosts();
  }
});

function refreshPosts() {
  const filteredData =
    currentTag === "All"
      ? postsData
      : postsData.filter((post) => post.tags.includes(currentTag));

  renderPosts(filteredData, postsGrid, visibleCount);

  if (viewMoreContainer) {
    viewMoreContainer.style.display =
      visibleCount >= filteredData.length ? "none" : "flex";
  }
}

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
  if (currentTag === selectedTag) return;

  currentTag = selectedTag;
  visibleCount = 6;
  refreshPosts();
  // update UI
  updateFilterBtns(selectedTag);

  // only scroll to top when window scroll deeply down
  if (window.scrollY > filterContainer.offsetTop) {
    window.scrollTo({
      top: filterContainer.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

function updateFilterBtns(selectedTag) {
  const btns = filterContainer.querySelectorAll(".tag-btn");
  btns.forEach((btn) => {
    const isActive = btn.dataset.tag === selectedTag;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive);
  });
}

// initialization
init();
