// render posts
export function renderPosts(data, container, count = 0) {
  if (!container) return;
  if (data.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="fa-regular fa-face-frown fa-3x"></i>
        <p>Oops! No posts found with this tag.</p>
        <button onclick="location.reload()" class="back-to-all-btn">Back to all posts</button>
      </div>
    `;
    container.style.display = "block";
    container.style.textAlign = "center";
    return;
  }
  const postsHtml = [...data]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count > 0 ? count : data.length)
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
               ${tags.map((tag) => `<li>${tag}</li>`).join("")}
              </ul>
              <p>
                ${content}
              </p>
            </div>
          </article>`;
    })
    .join("");
  container.style.display = "grid";
  container.innerHTML = postsHtml;
}
