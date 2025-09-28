// ------------------ Dataset: 36 Tyres ------------------
const TYRES = [
  { id: "TY-1", brand: "RoadKing", model: "AllGrip A1", season: "Summer", diameter: "15", spec: "185/65 R15", price: 5800, oldPrice: 6500, rating: 4.3, img: "images/tyre1.jpg" },
  { id: "TY-2", brand: "RoadKing", model: "AllGrip A2", season: "Winter", diameter: "16", spec: "195/60 R16", price: 7500, oldPrice: 8200, rating: 4.5, img: "images/tyre2.jpg" },
  { id: "TY-3", brand: "RoadKing", model: "AllGrip A3", season: "All-Season", diameter: "17", spec: "205/55 R17", price: 9800, oldPrice: null, rating: 4.1, img: "images/tyre3.jpg" },
  { id: "TY-4", brand: "RoadKing", model: "AllGrip A4", season: "Summer", diameter: "18", spec: "225/45 R18", price: 12000, oldPrice: 13500, rating: 4.7, img: "images/tyre4.jpg" },

  { id: "TY-5", brand: "SpeedMax", model: "Racer S1", season: "Summer", diameter: "15", spec: "175/70 R15", price: 5400, oldPrice: 6000, rating: 4.0, img: "images/tyre5.jpg" },
  { id: "TY-6", brand: "SpeedMax", model: "Racer S2", season: "Winter", diameter: "16", spec: "195/65 R16", price: 8300, oldPrice: null, rating: 4.2, img: "images/tyre6.jpg" },
  { id: "TY-7", brand: "SpeedMax", model: "Racer S3", season: "All-Season", diameter: "17", spec: "205/60 R17", price: 9700, oldPrice: 10200, rating: 4.6, img: "images/tyre7.jpg" },
  { id: "TY-8", brand: "SpeedMax", model: "Racer S4", season: "Summer", diameter: "18", spec: "235/40 R18", price: 13500, oldPrice: 14500, rating: 4.4, img: "images/tyre8.jpg" },

  { id: "TY-9", brand: "Gripstone", model: "GripX G1", season: "Summer", diameter: "15", spec: "185/60 R15", price: 5600, oldPrice: 6200, rating: 4.2, img: "images/tyre9.jpg" },
  { id: "TY-10", brand: "Gripstone", model: "GripX G2", season: "Winter", diameter: "16", spec: "205/55 R16", price: 8800, oldPrice: null, rating: 4.5, img: "images/tyre10.jpg" },
  { id: "TY-11", brand: "Gripstone", model: "GripX G3", season: "All-Season", diameter: "17", spec: "215/50 R17", price: 11000, oldPrice: 12000, rating: 4.7, img: "images/tyre11.jpg" },
  { id: "TY-12", brand: "Gripstone", model: "GripX G4", season: "Summer", diameter: "18", spec: "225/45 R18", price: 12800, oldPrice: 13800, rating: 4.3, img: "images/tyre12.jpg" },

  { id: "TY-13", brand: "AeroTire", model: "AeroSport A1", season: "Summer", diameter: "15", spec: "175/65 R15", price: 5100, oldPrice: 5600, rating: 3.9, img: "images/tyre13.jpg" },
  { id: "TY-14", brand: "AeroTire", model: "AeroSport A2", season: "Winter", diameter: "16", spec: "195/55 R16", price: 7900, oldPrice: null, rating: 4.1, img: "images/tyre14.jpg" },
  { id: "TY-15", brand: "AeroTire", model: "AeroSport A3", season: "All-Season", diameter: "17", spec: "205/50 R17", price: 9200, oldPrice: 9900, rating: 4.3, img: "images/tyre15.jpg" },
  { id: "TY-16", brand: "AeroTire", model: "AeroSport A4", season: "Summer", diameter: "18", spec: "235/45 R18", price: 14500, oldPrice: 15500, rating: 4.6, img: "images/tyre16.jpg" },

  // Repeat pattern for more variety (17–36)
  { id: "TY-17", brand: "RoadKing", model: "AllGrip A5", season: "Winter", diameter: "15", spec: "185/65 R15", price: 6100, oldPrice: null, rating: 4.0, img: "images/tyre17.jpg" },
  { id: "TY-18", brand: "RoadKing", model: "AllGrip A6", season: "All-Season", diameter: "16", spec: "195/60 R16", price: 7700, oldPrice: 8400, rating: 4.5, img: "images/tyre18.jpg" },
  { id: "TY-19", brand: "RoadKing", model: "AllGrip A7", season: "Summer", diameter: "17", spec: "205/55 R17", price: 10300, oldPrice: 11000, rating: 4.4, img: "images/tyre19.jpg" },
  { id: "TY-20", brand: "RoadKing", model: "AllGrip A8", season: "Winter", diameter: "18", spec: "225/40 R18", price: 11800, oldPrice: 12500, rating: 4.6, img: "images/tyre20.jpg" },

  { id: "TY-21", brand: "SpeedMax", model: "Racer S5", season: "Summer", diameter: "15", spec: "175/70 R15", price: 5500, oldPrice: 5900, rating: 4.1, img: "images/tyre21.jpg" },
  { id: "TY-22", brand: "SpeedMax", model: "Racer S6", season: "Winter", diameter: "16", spec: "195/65 R16", price: 8700, oldPrice: null, rating: 4.3, img: "images/tyre22.jpg" },
  { id: "TY-23", brand: "SpeedMax", model: "Racer S7", season: "All-Season", diameter: "17", spec: "205/60 R17", price: 9900, oldPrice: 10500, rating: 4.7, img: "images/tyre23.jpg" },
  { id: "TY-24", brand: "SpeedMax", model: "Racer S8", season: "Summer", diameter: "18", spec: "235/40 R18", price: 14000, oldPrice: 15000, rating: 4.5, img: "images/tyre24.jpg" },

  { id: "TY-25", brand: "Gripstone", model: "GripX G5", season: "Winter", diameter: "15", spec: "185/60 R15", price: 6200, oldPrice: 6600, rating: 4.0, img: "images/tyre25.jpg" },
  { id: "TY-26", brand: "Gripstone", model: "GripX G6", season: "All-Season", diameter: "16", spec: "205/55 R16", price: 9100, oldPrice: null, rating: 4.4, img: "images/tyre26.jpg" },
  { id: "TY-27", brand: "Gripstone", model: "GripX G7", season: "Summer", diameter: "17", spec: "215/50 R17", price: 11200, oldPrice: 11800, rating: 4.5, img: "images/tyre27.jpg" },
  { id: "TY-28", brand: "Gripstone", model: "GripX G8", season: "Winter", diameter: "18", spec: "225/45 R18", price: 12900, oldPrice: 13700, rating: 4.2, img: "images/tyre28.jpg" },

  { id: "TY-29", brand: "AeroTire", model: "AeroSport A5", season: "All-Season", diameter: "15", spec: "175/65 R15", price: 5300, oldPrice: 5700, rating: 3.8, img: "images/tyre29.jpg" },
  { id: "TY-30", brand: "AeroTire", model: "AeroSport A6", season: "Summer", diameter: "16", spec: "195/55 R16", price: 8000, oldPrice: 8600, rating: 4.0, img: "images/tyre30.jpg" },
  { id: "TY-31", brand: "AeroTire", model: "AeroSport A7", season: "Winter", diameter: "17", spec: "205/50 R17", price: 9500, oldPrice: null, rating: 4.2, img: "images/tyre31.jpg" },
  { id: "TY-32", brand: "AeroTire", model: "AeroSport A8", season: "All-Season", diameter: "18", spec: "235/45 R18", price: 15000, oldPrice: 16000, rating: 4.6, img: "images/tyre32.jpg" },

  { id: "TY-33", brand: "RoadKing", model: "AllGrip A9", season: "Summer", diameter: "15", spec: "185/65 R15", price: 6000, oldPrice: 6400, rating: 4.2, img: "images/tyre33.jpg" },
  { id: "TY-34", brand: "SpeedMax", model: "Racer S9", season: "Winter", diameter: "16", spec: "195/65 R16", price: 8600, oldPrice: 9100, rating: 4.4, img: "images/tyre34.jpg" },
  { id: "TY-35", brand: "Gripstone", model: "GripX G9", season: "All-Season", diameter: "17", spec: "215/55 R17", price: 10800, oldPrice: null, rating: 4.3, img: "images/tyre35.jpg" },
  { id: "TY-36", brand: "AeroTire", model: "AeroSport A9", season: "Summer", diameter: "18", spec: "235/40 R18", price: 15500, oldPrice: 16500, rating: 4.7, img: "images/tyre36.jpg" }
];

// ------------------ State ------------------
let state = {
  q: "",
  brands: new Set(["RoadKing", "SpeedMax", "Gripstone", "AeroTire"]),
  seasons: new Set(["Summer", "Winter", "All-Season"]),
  diameters: new Set(["15", "16", "17", "18"]),
  minPrice: null,
  maxPrice: null,
  sortBy: "relevance",
  perPage: 9,
  page: 1
};

// ------------------ Helpers ------------------
function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

// ------------------ Filtering ------------------
function applyFilters() {
  let results = TYRES.slice();

  // search
  if (state.q) {
    const q = state.q.toLowerCase();
    results = results.filter(t => (t.brand + " " + t.model + " " + t.spec).toLowerCase().includes(q));
  }

  // filters
  results = results.filter(t => state.brands.has(t.brand));
  results = results.filter(t => state.seasons.has(t.season));
  results = results.filter(t => state.diameters.has(t.diameter));

  if (state.minPrice != null) results = results.filter(t => t.price >= state.minPrice);
  if (state.maxPrice != null) results = results.filter(t => t.price <= state.maxPrice);

  // sort
  if (state.sortBy === "price-asc") results.sort((a,b) => a.price - b.price);
  else if (state.sortBy === "price-desc") results.sort((a,b) => b.price - a.price);

  return results;
}

// ------------------ Rendering ------------------
function render() {
  const results = applyFilters();
  const start = (state.page - 1) * state.perPage;
  const paged = results.slice(start, start + state.perPage);

  const grid = $("#tyreGrid");
  grid.innerHTML = "";

  for (const t of paged) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${t.img}" alt="${t.brand} ${t.model}">
      <h4>${t.brand} ${t.model}</h4>
      <p class="spec">${t.spec} · ${t.season}</p>
      <p><span class="price">KSh ${t.price.toLocaleString()}</span>
      ${t.oldPrice ? `<span class="old-price">KSh ${t.oldPrice.toLocaleString()}</span>` : ""}</p>
      <button onclick="openModal('${t.id}')">View</button>
    `;
    grid.appendChild(div);
  }

  renderPagination(results.length);
}

function renderPagination(total) {
  const pages = Math.ceil(total / state.perPage);
  const container = $("#pagination");
  container.innerHTML = "";
  if (pages <= 1) return;

  for (let i=1; i<=pages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === state.page ? "active" : "");
    btn.onclick = () => { state.page = i; render(); };
    container.appendChild(btn);
  }
}

// ------------------ Modal ------------------
function openModal(id) {
  const t = TYRES.find(x => x.id === id);
  if (!t) return;
  $("#modalImg").src = t.img;
  $("#modalTitle").textContent = `${t.brand} ${t.model}`;
  $("#modalSpecs").textContent = `Spec: ${t.spec} · Season: ${t.season} · Rating: ${t.rating}`;
  $("#modalPrice").textContent = `KSh ${t.price.toLocaleString()}`;
  $("#modalOldPrice").textContent = t.oldPrice ? `KSh ${t.oldPrice.toLocaleString()}` : "";
  $("#modalStock").textContent = "In Stock";
  $("#backdrop").style.display = "flex";
}
function closeModal() { $("#backdrop").style.display = "none"; }
$("#closeModal").onclick = closeModal;
$("#modalClose2").onclick = closeModal;
$("#backdrop").onclick = e => { if (e.target.id === "backdrop") closeModal(); };

// ------------------ Event wiring ------------------
function readCheckboxes(name) {
  return new Set($all(`input[name="${name}"]:checked`).map(cb => cb.value));
}

function wire() {
  $("#searchBtn").onclick = () => { state.q = $("#q").value; state.page = 1; render(); };
  $("#q").onkeydown = e => { if (e.key === "Enter") { state.q = e.target.value; state.page = 1; render(); } };
  $all("input[name='brand']").forEach(cb => cb.onchange = () => { state.brands = readCheckboxes("brand"); state.page = 1; render(); });
  $all("input[name='season']").forEach(cb => cb.onchange = () => { state.seasons = readCheckboxes("season"); state.page = 1; render(); });
  $all("input[name='diameter']").forEach(cb => cb.onchange = () => { state.diameters = readCheckboxes("diameter"); state.page = 1; render(); });

  $("#clearFilters").onclick = () => {
    $all("input[type=checkbox]").forEach(cb => cb.checked = true);
    state.brands = readCheckboxes("brand");
    state.seasons = readCheckboxes("season");
    state.diameters = readCheckboxes("diameter");
    state.minPrice = null; state.maxPrice = null;
    $("#minPrice").value = ""; $("#maxPrice").value = "";
    state.page = 1; render();
  };

  $("#priceApply").onclick = () => {
    const min = parseInt($("#minPrice").value) || null;
    const max = parseInt($("#maxPrice").value) || null;
    state.minPrice = min; state.maxPrice = max; state.page = 1; render();
  };

  $("#sortBy").onchange = e => { state.sortBy = e.target.value; state.page = 1; render(); };
  $("#perPage").onchange = e => { state.perPage = parseInt(e.target.value); state.page = 1; render(); };
}

// ------------------ Init ------------------
wire();
render();
