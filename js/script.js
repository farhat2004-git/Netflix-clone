/* ==========================================================
   NETFLIX CLONE  -  script.js
   ========================================================== */

/* ---------- 1. ELEMENTS ---------- */
const navbar      = document.querySelector("#navbar");
const searchInput = document.querySelector("#searchInput");
const backdrop    = document.querySelector("#modalBackdrop");
const modalClose  = document.querySelector("#modalClose");
const contentArea = document.querySelector(".content");
const resultsBox  = document.querySelector("#searchResults");

/* ---------- 2. CARD TEMPLATE ---------- */
function createCard(movie) {
  return `
    <div class="card" data-id="${movie.id}">
      <img src="${movie.image}" alt="${movie.title}">
      <div class="card-overlay">
        <h4>${movie.title}</h4>
        <p>${movie.year} &bull; &#11088; ${movie.rating}</p>
      </div>
    </div>`;
}

/* ---------- 3. LOAD ROWS ---------- */
function loadRow(category) {
  const container = document.querySelector("#" + category);
  const filtered  = movies.filter(m => m.category === category);
  container.innerHTML = filtered.map(m => createCard(m)).join("");
}

/* ---------- 4. NAVBAR SCROLL EFFECT ---------- */
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 80);
});

/* ---------- 5. ROW ARROWS ---------- */
document.querySelectorAll(".arrow").forEach(arrow => {
  arrow.addEventListener("click", () => {
    const rowCards = arrow.parentElement.querySelector(".row-cards");
    const step = 600;
    rowCards.scrollLeft += (arrow.dataset.dir === "left" ? -step : step);
  });
});

/* ---------- 6. MODAL ---------- */
function openModal(movie) {
  document.querySelector("#modalImg").src           = movie.image;
  document.querySelector("#modalImg").alt           = movie.title;
  document.querySelector("#modalTitle").textContent = movie.title;
  document.querySelector("#modalMeta").textContent  = movie.year + "  |  Rating: " + movie.rating + "/10";
  document.querySelector("#modalDesc").textContent  = movie.description;
  backdrop.classList.add("open");
}

function closeModal() {
  backdrop.classList.remove("open");
}

// EVENT DELEGATION - one listener handles all cards, even ones created later
document.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const movie = movies.find(m => m.id === Number(card.dataset.id));
  if (movie) openModal(movie);
});

modalClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ---------- 7. SEARCH ---------- */
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  if (query === "") {
    resultsBox.classList.remove("open");
    resultsBox.innerHTML = "";
    contentArea.style.display = "block";
    return;
  }

  const results = movies.filter(m => m.title.toLowerCase().includes(query));
  contentArea.style.display = "none";
  resultsBox.classList.add("open");

  resultsBox.innerHTML = results.length
    ? `<h3 class="row-title">Results for "${query}"</h3>
       <div class="results-grid">${results.map(createCard).join("")}</div>`
    : `<h3 class="row-title">No results for "${query}"</h3>
       <p style="color:#b3b3b3">Try a different movie name.</p>`;
});

/* ---------- 8. START ---------- */
function init() {
  loadRow("trending");
  loadRow("toprated");
  loadRow("newrelease");
}

init();
