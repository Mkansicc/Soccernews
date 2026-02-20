// WSL - Full script.js (Fixtures + Results + Slideshow)
// If you still see "Loading fixtures..." then this file is NOT loading.

const donateUrl = "https://www.paypal.com/";

// WEEK 2 FIXTURES — Sunday 22 Feb 2026
const fixtures = [
  // STREAM A
  { date: "2026-02-22", time: "TBC", home: "Crusaders", away: "FC Wonderous", venue: "TBC", status: "Week 2 • Stream A" },
  { date: "2026-02-22", time: "TBC", home: "Royal Tigers", away: "Eastern Rangers", venue: "TBC", status: "Week 2 • Stream A" },
  { date: "2026-02-22", time: "TBC", home: "Morning Stars", away: "Fast 11", venue: "TBC", status: "Week 2 • Stream A" },
  { date: "2026-02-22", time: "TBC", home: "Movers FC", away: "Highlanders", venue: "TBC", status: "Week 2 • Stream A" },

  // STREAM B
  { date: "2026-02-22", time: "TBC", home: "City Pillars", away: "Liverpool", venue: "TBC", status: "Week 2 • Stream B" },
  { date: "2026-02-22", time: "TBC", home: "Junior Pirates", away: "Xihuhuri", venue: "TBC", status: "Week 2 • Stream B" },
  { date: "2026-02-22", time: "TBC", home: "Bhubhezi", away: "Labamba", venue: "TBC", status: "Week 2 • Stream B" },
  { date: "2026-02-22", time: "TBC", home: "Real Rangers", away: "W/ Masters", venue: "TBC", status: "Week 2 • Stream B" }
];

// WEEK 1 RESULTS (from your picture)
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

const $ = (id) => document.getElementById(id);

function badge(text) {
  return `<span class="badge">${text}</span>`;
}

function renderDonate() {
  const a = $("donateLink");
  if (a) a.href = donateUrl;
}

function renderNextMatchCard() {
  const next = $("nextMatch");
  const meta = $("nextMatchMeta");
  if (!next || !meta) return;

  if (!fixtures.length) {
    next.textContent = "No fixtures yet";
    meta.textContent = "Add fixtures in Script.js";
    return;
  }

  const sorted = fixtures.slice().sort((a, b) => (a.date > b.date ? 1 : -1));
  const f = sorted[0];

  next.textContent = `${f.home} vs ${f.away}`;
  meta.textContent = `${f.date} • ${f.time || "-"} • ${f.status || "Upcoming"}`;
}

function renderFixturesTable(filterText = "") {
  const body = $("fixturesBody");
  if (!body) return;

  const q = filterText.trim().toLowerCase();

  const list = fixtures.filter((f) => {
    if (!q) return true;
    return `${f.home} ${f.away} ${f.venue} ${f.status}`.toLowerCase().includes(q);
  });

  if (!list.length) {
    body.innerHTML = `<tr><td colspan="5" class="muted">No fixtures available.</td></tr>`;
    return;
  }

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

function renderResultsLists(filterText = "") {
  const q = filterText.trim().toLowerCase();

  const listA = $("resultsListA");
  const listB = $("resultsListB");

  const format = (r) => {
    const score = `${r.homeGoals} - ${r.awayGoals}`;
    const note = r.notes ? ` (${r.notes})` : "";
    return `${r.home} ${score} ${r.away}${note}`;
  };

  const match = (r) => {
    if (!q) return true;
    return `${r.home} ${r.away} ${r.notes || ""}`.toLowerCase().includes(q);
  };

  if (listA) {
    const a = resultsA.filter(match);
    listA.innerHTML = a.length ? a.map(r => `<li>${format(r)}</li>`).join("") : `<li>No results found.</li>`;
  }

  if (listB) {
    const b = resultsB.filter(match);
    listB.innerHTML = b.length ? b.map(r => `<li>${format(r)}</li>`).join("") : `<li>No results found.</li>`;
  }
}

// Slideshow
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
  // If these IDs don’t exist, page won’t break.
  const y = $("yearNow");
  if (y) y.textContent = new Date().getFullYear();

  renderDonate();
  renderNextMatchCard();
  renderFixturesTable();
  renderResultsLists();

  const fixtureSearch = $("fixtureSearch");
  if (fixtureSearch) fixtureSearch.addEventListener("input", (e) => renderFixturesTable(e.target.value));

  const resultSearch = $("resultSearch");
  if (resultSearch) resultSearch.addEventListener("input", (e) => renderResultsLists(e.target.value));

  const prev = $("prevPhoto");
  const next = $("nextPhoto");

  if (prev) prev.addEventListener("click", () => { showSlide(slideIndex - 1); startAutoSlides(); });
  if (next) next.addEventListener("click", () => { showSlide(slideIndex + 1); startAutoSlides(); });

  showSlide(0);
  startAutoSlides();
}

// Runs whether script loads early or late
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
