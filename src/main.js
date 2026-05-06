import { postsData } from "./data/postsData";

const postsGrid = document.querySelector(".posts-grid");

// render posts
function renderPosts(data) {
  const postsHtml = data
    .map((post) => {
      const { id, date, title, tags, content, image } = post;
      return `<article class="post">
            <img
              src="${image}"
              alt="${title}"
            />
            <div class="post-content">
              <span class="date">${date}</span>
              <h3>${title}</h3>
              <ul class="post-tags-container">
               ${tags.map(tag => `<li>${tag}</li>`).join('')}
              </ul>
              <p>
                ${content}
              </p>
            </div>
          </article>`;
    })
    .join("");
  postsGrid.innerHTML = postsHtml;
}

renderPosts(postsData);
