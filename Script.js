// =====================
// WSL Pro Script.js (Fixtures + Results + Filters + Slideshow)
// =====================

// Donation link (replace with PayFast/BackaBuddy/WhatsApp)
const donateUrl = "https://www.paypal.com/";

// WEEK 2 FIXTURES — Sunday 22 Feb 2026
const fixtures = [
  // STREAM A
  { date: "2026-02-22", time: "16:00", home: "Crusaders", away: "FC Wonderous", venue: "Mtembeni", status: "Week 2 • Stream A" },
  { date: "2026-02-22", time: "16:00", home: "Royal Tigers", away: "Eastern Rangers", venue: "Royal", status: "Week 2 • Stream A" },
  { date: "2026-02-22", time: "16:00", home: "Morning Stars", away: "Fast 11", venue: "Tlhavekisa", status: "Week 2 • Stream A" },
  { date: "2026-02-22", time: "16:00", home: "Movers FC", away: "Highlanders", venue: "Movers", status: "Week 2 • Stream A" },

  // STREAM B
  { date: "2026-02-22", time: "16:00", home: "City Pillars", away: "Liverpool", venue: "City Pillars", status: "Week 2 • Stream B" },
  { date: "2026-02-22", time: "16:00", home: "Junior Pirates", away: "Xihuhuri", venue: "Mahlale", status: "Week 2 • Stream B" },
  { date: "2026-02-22", time: "16:00", home: "Bhubhezi", away: "Labamba", venue: "Bhubezi", status: "Week 2 • Stream B" },
  { date: "2026-02-22", time: "16:00", home: "Real Rangers", away: "W/ Masters", venue: "Real", status: "Week 2 • Stream B" }
];

// WEEK 1 RESULTS 
const resultsA = [
  { home: "FC Wonderous", away: "Royal Tigers", homeGoals: 0, awayGoals: 2, notes: "W/O" },
  { home: "Fast 11", away: "Crusaders", homeGoals: 0, awayGoals: 2, notes: "" },
  { home: "Highlanders", away: "Eastern Rangers", homeGoals: 2, awayGoals: 1, notes: "" },
  { home: "Movers", away: "Morning Stars", homeGoals: 0, awayGoals: 4, notes: "" }
];

const resultsB = [
  { home: "Liverpool", away: "Junior Pirates", homeGoals: 2, awayGoals: 0, notes: "" },
  { home: "Labamba", away: "City Pillars", homeGoals: 7, awayGoals: 1, notes: "" },
  { home: "Welverdiend Masters", away: "Xihuhuri", homeGoals: 3, awayGoals: 4, notes: "" },
  { home: "Real Rangers", away: "Bhubhezi", homeGoals: 0, awayGoals: 4, notes: "" }
];

// Slideshow photos
const photoSlides = [
  { src: "images/photo1.jpg", title: "Team Photo", meta: "Welverdiend • Season" },
  { src: "images/photo2.jpg", title: "Match Day", meta: "Players & Supporters" },
  { src: "images/photo3.jpg", title: "Training", meta: "Fitness & Drills" }
];

// =====================
// APP LOGIC
// =====================

const $ = (id) => document.getElementById(id);

function badge(text) {
  return `<span class="badge">${text}</span>`;
}

function renderDonate() {
  const a = $("donateLink");
  if (a) a.href = donateUrl;
}

function getSortedFixtures() {
  return fixtures.slice().sort((a, b) => (a.date > b.date ? 1 : -1));
}

function renderNextMatchCard(list = fixtures) {
  const next = $("nextMatch");
  const meta = $("nextMatchMeta");
  if (!next || !meta) return;

  if (!list.length) {
    next.textContent = "No fixtures yet";
    meta.textContent = "Add fixtures in Script.js";
    return;
  }

  const sorted = list.slice().sort((a, b) => (a.date > b.date ? 1 : -1));
  const f = sorted[0];

  next.textContent = `${f.home} vs ${f.away}`;
  meta.textContent = `${f.date} • ${f.time || "-"} • ${f.status || "Upcoming"}`;
}

function filterFixtures(searchText = "", stream = "") {
  const q = searchText.trim().toLowerCase();
  return getSortedFixtures().filter(f => {
    const matchesText = !q || `${f.home} ${f.away} ${f.venue} ${f.status}`.toLowerCase().includes(q);
    const matchesStream = !stream || (f.status || "").toLowerCase().includes(stream.toLowerCase());
    return matchesText && matchesStream;
  });
}

function renderFixturesTable(searchText = "", stream = "") {
  const body = $("fixturesBody");
  if (!body) return;

  const list = filterFixtures(searchText, stream);

  if (!list.length) {
    body.innerHTML = `<tr><td colspan="5" class="muted">No fixtures available.</td></tr>`;
    renderNextMatchCard([]); // keep card consistent
    return;
  }

  renderNextMatchCard(list);

  body.innerHTML = list.map((f) => `
    <tr>
      <td>${f.date || "-"}</td>
      <td>${f.time || "-"}</td>
      <td><strong>${f.home}</strong> vs <strong>${f.away}</strong></td>
      <td>${f.venue || "-"}</td>
      <td>${badge(f.status || "Upcoming")}</td>
    </tr>
  `).join("");
}

function formatResult(r) {
  const score = `${r.homeGoals} - ${r.awayGoals}`;
  const note = r.notes ? ` (${r.notes})` : "";
  return `${r.home} ${score} ${r.away}${note}`;
}

function renderResultsLists(searchText = "") {
  const q = searchText.trim().toLowerCase();
  const listA = $("resultsListA");
  const listB = $("resultsListB");

  const filterFn = (r) => !q || `${r.home} ${r.away} ${r.notes || ""}`.toLowerCase().includes(q);

  if (listA) {
    const a = resultsA.filter(filterFn);
    listA.innerHTML = a.length ? a.map(r => `<li>${formatResult(r)}</li>`).join("") : `<li>No results found.</li>`;
  }

  if (listB) {
    const b = resultsB.filter(filterFn);
    listB.innerHTML = b.length ? b.map(r => `<li>${formatResult(r)}</li>`).join("") : `<li>No results found.</li>`;
  }

  const highlight = resultsB[0];
  const hl = $("highlightResult");
  if (hl && highlight) hl.textContent = `${highlight.home} ${highlight.homeGoals} - ${highlight.awayGoals} ${highlight.away}`;
}

// =====================
// SLIDESHOW
// =====================
let slideIndex = 0;
let slideTimer = null;

function showSlide(i) {
  if (!photoSlides.length) return;

  slideIndex = (i + photoSlides.length) % photoSlides.length;
  const s = photoSlides[slideIndex];

  const img = $("slideImage");
  const title = $("slideTitle");
  const meta = $("slideMeta");

  if (img) img.src = s.src;
  if (title) title.textContent = s.title || "Photo";
  if (meta) meta.textContent = s.meta || "";
}

function startAutoSlides() {
  if (slideTimer) clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(slideIndex + 1), 4500);
}

function init() {
  const y = $("yearNow");
  if (y) y.textContent = new Date().getFullYear();

  renderDonate();

  // Initial render
  renderFixturesTable("", "");
  renderResultsLists("");

  // Search inputs
  const fixtureSearch = $("fixtureSearch");
  const resultSearch = $("resultSearch");

  let currentStreamFilter = "";

  if (fixtureSearch) {
    fixtureSearch.addEventListener("input", (e) => {
      renderFixturesTable(e.target.value, currentStreamFilter);
    });
  }

  if (resultSearch) {
    resultSearch.addEventListener("input", (e) => {
      renderResultsLists(e.target.value);
    });
  }

  // Filter buttons
  const btnStreamA = $("btnStreamA");
  const btnStreamB = $("btnStreamB");
  const btnClearFixture = $("btnClearFixture");

  if (btnStreamA) btnStreamA.addEventListener("click", () => {
    currentStreamFilter = "stream a";
    renderFixturesTable(fixtureSearch ? fixtureSearch.value : "", currentStreamFilter);
  });

  if (btnStreamB) btnStreamB.addEventListener("click", () => {
    currentStreamFilter = "stream b";
    renderFixturesTable(fixtureSearch ? fixtureSearch.value : "", currentStreamFilter);
  });

  if (btnClearFixture) btnClearFixture.addEventListener("click", () => {
    currentStreamFilter = "";
    if (fixtureSearch) fixtureSearch.value = "";
    renderFixturesTable("", "");
  });

  const btnAllResults = $("btnAllResults");
  const btnClearResults = $("btnClearResults");

  if (btnAllResults) btnAllResults.addEventListener("click", () => {
    if (resultSearch) resultSearch.value = "";
    renderResultsLists("");
  });

  if (btnClearResults) btnClearResults.addEventListener("click", () => {
    if (resultSearch) resultSearch.value = "";
    renderResultsLists("");
  });

  // Slideshow buttons
  const prev = $("prevPhoto");
  const next = $("nextPhoto");

  if (prev) prev.addEventListener("click", () => { showSlide(slideIndex - 1); startAutoSlides(); });
  if (next) next.addEventListener("click", () => { showSlide(slideIndex + 1); startAutoSlides(); });

  showSlide(0);
  startAutoSlides();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
