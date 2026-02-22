"use strict";

/* Script.js v16
  ✅ Week 3 fixtures updated (Fri 27 Feb 2026)
  ✅ Venue/Location ALWAYS = Home team (auto-enforced)
  - Week 1 results kept
  - Week 2 results kept
  - OVERALL LOG = Week1 + Week2 combined (played matches only)
*/

const DONATE_URL = "https://example.com/donate"; // change if you want

// ===============================
// FIXTURES (Week 3 Correct)
//  - Home team = location/venue field
// ===============================
const fixtures = [
  // STREAM B — Week 3 (Friday 27 Feb 2026)
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Xihuhuri FC", away: "Liverpool FC", venue: "", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "City Pillars FC", away: "Bhubhezi FC", venue: "", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Real Rangers FC", away: "Junior Pirates FC", venue: "", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Labamba FC", venue: "", status: "Scheduled" },

  // STREAM A — Week 3 (Friday 27 Feb 2026)
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Eastern Rangers FC", away: "FC Wondrous", venue: "", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Crusaders FC", away: "Morning Stars FC", venue: "", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Royal Tigers FC", away: "Movers FC", venue: "", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Highlanders FC", away: "Fast Eleven FC", venue: "", status: "Scheduled" },
];

// ✅ Enforce: venue/location ALWAYS equals Home team
function normalizeFixturesVenue(list) {
  return list.map((f) => ({
    ...f,
    venue: (f.home || "TBC")
  }));
}

// ===============================
// TEAMS (for log tables)
// ===============================
const teams = {
  A: [
    "Morning Stars FC",
    "Crusaders FC",
    "Royal Tigers FC",
    "Highlanders FC",
    "Eastern Rangers FC",
    "Fast Eleven FC",
    "FC Wondrous",
    "Movers FC",
  ],
  B: [
    "Labamba FC",
    "Bhubhezi FC",
    "Liverpool FC",
    "Xihuhuri FC",
    "Welverdiend Masters FC",
    "Junior Pirates FC",
    "Real Rangers FC",
    "City Pillars FC",
  ],
};

// ===============================
// RESULTS DATA
// ===============================

// WEEK 1 (unchanged)
const week1 = {
  A: [
    { home: "Morning Stars FC", away: "Movers FC", homeGoals: 4, awayGoals: 0 },
    { home: "Crusaders FC", away: "FC Wondrous", homeGoals: 2, awayGoals: 0 },
    { home: "Royal Tigers FC", away: "Fast Eleven FC", homeGoals: 2, awayGoals: 0 },
    { home: "Highlanders FC", away: "Eastern Rangers FC", homeGoals: 2, awayGoals: 1 },
  ],
  B: [
    { home: "Labamba FC", away: "City Pillars FC", homeGoals: 7, awayGoals: 1 },
    { home: "Bhubhezi FC", away: "Real Rangers FC", homeGoals: 4, awayGoals: 0 },
    { home: "Liverpool FC", away: "Junior Pirates FC", homeGoals: 2, awayGoals: 0 },
    { home: "Xihuhuri FC", away: "Welverdiend Masters FC", homeGoals: 4, awayGoals: 3 },
  ],
};

// WEEK 2 (as previously updated)
const week2 = {
  A: [
    { home: "Crusaders FC", away: "FC Wondrous", homeGoals: 3, awayGoals: 2 },
    { home: "Royal Tigers FC", away: "Eastern Rangers FC", homeGoals: 0, awayGoals: 1 },
    { home: "Morning Stars FC", away: "Fast Eleven FC", homeGoals: 3, awayGoals: 1 },
    { home: "Movers FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 2 },
  ],
  B: [
    { home: "City Pillars FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 1 },
    { home: "Junior Pirates FC", away: "Xihuhuri FC", homeGoals: 1, awayGoals: 3 },
    { home: "Bhubhezi FC", away: "Labamba FC", homeGoals: 2, awayGoals: 1 },
    { home: "Real Rangers FC", away: "Welverdiend Masters FC", homeGoals: 1, awayGoals: 3 },
  ],
};

// Build OVERALL results set (Week1 + Week2)
const overall = {
  A: [...week1.A, ...week2.A],
  B: [...week1.B, ...week2.B],
};

// ===============================
// SLIDESHOW
// ===============================
const slides = [
  { src: "images/photo1.jpg", title: "WSL Action", meta: "Welverdiend Soccer League" },
  { src: "images/photo2.jpg", title: "Match Day", meta: "Stream A & Stream B" },
  { src: "images/photo3.jpg", title: "Team Spirit", meta: "BLFA Updates" },
];

// ===============================
// HELPERS
// ===============================
const $ = (id) => document.getElementById(id);

function safeText(v) {
  return String(v ?? "").replace(/[<>]/g, "");
}
function isPlayed(m) {
  return Number.isInteger(m.homeGoals) && Number.isInteger(m.awayGoals);
}
function formatScore(hg, ag) {
  if (hg === null || ag === null) return "❓ – ❓";
  return `${hg} – ${ag}`;
}

function renderResults(listId, data) {
  const el = $(listId);
  el.innerHTML = "";
  for (const m of data) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${safeText(m.home)}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${safeText(m.away)}`;
    el.appendChild(li);
  }
}

function computeTable(streamKey, resultsSet) {
  const table = new Map();

  for (const t of teams[streamKey]) {
    table.set(t, { team: t, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 });
  }

  for (const m of resultsSet[streamKey]) {
    if (!isPlayed(m)) continue;

    const home = table.get(m.home) || { team: m.home, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };
    const away = table.get(m.away) || { team: m.away, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };

    home.P += 1; away.P += 1;
    home.GF += m.homeGoals; home.GA += m.awayGoals;
    away.GF += m.awayGoals; away.GA += m.homeGoals;

    if (m.homeGoals > m.awayGoals) { home.W += 1; home.Pts += 3; away.L += 1; }
    else if (m.homeGoals < m.awayGoals) { away.W += 1; away.Pts += 3; home.L += 1; }
    else { home.D += 1; away.D += 1; home.Pts += 1; away.Pts += 1; }

    home.GD = home.GF - home.GA;
    away.GD = away.GF - away.GA;

    table.set(m.home, home);
    table.set(m.away, away);
  }

  const rows = Array.from(table.values());
  rows.sort((a, b) => {
    if (b.Pts !== a.Pts) return b.Pts - a.Pts;
    if (b.GD !== a.GD) return b.GD - a.GD;
    if (b.GF !== a.GF) return b.GF - a.GF;
    return a.team.localeCompare(b.team);
  });

  return rows;
}

function renderLog(tbodyId, rows) {
  const body = $(tbodyId);
  body.innerHTML = "";
  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><strong>${safeText(r.team)}</strong></td>
      <td>${r.P}</td><td>${r.W}</td><td>${r.D}</td><td>${r.L}</td>
      <td>${r.GF}</td><td>${r.GA}</td><td>${r.GD >= 0 ? "+" : ""}${r.GD}</td>
      <td><strong>${r.Pts}</strong></td>
    `;
    body.appendChild(tr);
  });
}

function bestHighlightLatestPlayed() {
  const played = [...week2.A, ...week2.B, ...week1.A, ...week1.B].filter(isPlayed);
  if (!played.length) return "No played matches yet";

  played.sort((x, y) => {
    const dx = Math.abs(x.homeGoals - x.awayGoals);
    const dy = Math.abs(y.homeGoals - y.awayGoals);
    if (dy !== dx) return dy - dx;
    const tx = x.homeGoals + x.awayGoals;
    const ty = y.homeGoals + y.awayGoals;
    return ty - tx;
  });

  const m = played[0];
  return `${m.home} ${m.homeGoals} – ${m.awayGoals} ${m.away}`;
}

// ===============================
// FIXTURE UI
// ===============================
let fixtureStreamFilter = null;

function renderFixtures(list) {
  const body = $("fixturesBody");
  body.innerHTML = "";
  if (!list.length) {
    body.innerHTML = `<tr><td colspan="5" class="muted">No fixtures found.</td></tr>`;
    return;
  }

  for (const f of list) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${safeText(f.date)}</td>
      <td>${safeText(f.time)}</td>
      <td>
        <strong>${safeText(f.home)}</strong> vs ${safeText(f.away)}
        <span class="pill small-pill">Stream ${safeText(f.stream)}</span>
      </td>
      <td>${safeText(f.venue)}</td>
      <td>${safeText(f.status)}</td>
    `;
    body.appendChild(tr);
  }
}

function applyFixtureFilters() {
  const q = ($("fixtureSearch").value || "").toLowerCase().trim();

  const filtered = normalizedFixtures.filter((f) => {
    if (fixtureStreamFilter && f.stream !== fixtureStreamFilter) return false;
    if (!q) return true;
    const hay = `${f.home} ${f.away} ${f.venue} ${f.stream}`.toLowerCase();
    return hay.includes(q);
  });

  renderFixtures(filtered);
}

function setNextMatchCard() {
  const f = normalizedFixtures[0];
  if (!f) {
    $("nextMatch").textContent = "No fixtures set";
    $("nextMatchMeta").textContent = "";
    return;
  }
  $("nextMatch").textContent = `${f.home} vs ${f.away}`;
  $("nextMatchMeta").textContent = `Stream ${f.stream} • ${f.date} ${f.time} • ${f.venue}`;
}

// ===============================
// RESULTS SEARCH (active week only)
// ===============================
function applyResultSearch() {
  const q = ($("resultSearch").value || "").toLowerCase().trim();
  const week2Visible = $("week2Block").style.display !== "none";

  const ids = week2Visible ? ["resultsListA2", "resultsListB2"] : ["resultsListA1", "resultsListB1"];

  for (const id of ids) {
    const list = $(id);
    for (const li of list.querySelectorAll("li")) {
      const t = li.textContent.toLowerCase();
      li.style.display = !q || t.includes(q) ? "" : "none";
    }
  }
}

// ===============================
// WEEK TOGGLE
// ===============================
function showWeek1() {
  $("week1Block").style.display = "";
  $("week2Block").style.display = "none";
  $("resultSearch").value = "";
  applyResultSearch();
}
function showWeek2() {
  $("week1Block").style.display = "none";
  $("week2Block").style.display = "";
  $("resultSearch").value = "";
  applyResultSearch();
}

// ===============================
// SLIDESHOW
// ===============================
let slideIndex = 0;

function renderSlide() {
  const img = $("slideImage");
  const title = $("slideTitle");
  const meta = $("slideMeta");

  const s = slides[slideIndex] || slides[0];
  if (!s) {
    title.textContent = "Add photos to /images";
    meta.textContent = "photo1.jpg, photo2.jpg, photo3.jpg";
    return;
  }

  img.onerror = () => {
    img.src = "";
    title.textContent = "Photo not found";
    meta.textContent = "Add images in /images folder";
  };

  img.src = s.src;
  title.textContent = s.title;
  meta.textContent = s.meta;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  renderSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  renderSlide();
}

// ===============================
// INIT
// ===============================
const normalizedFixtures = normalizeFixturesVenue(fixtures);

document.addEventListener("DOMContentLoaded", () => {
  $("yearNow").textContent = new Date().getFullYear();

  const d = $("donateLink");
  if (d) d.href = DONATE_URL;

  renderFixtures(normalizedFixtures);
  setNextMatchCard();

  renderResults("resultsListA1", week1.A);
  renderResults("resultsListB1", week1.B);
  renderResults("resultsListA2", week2.A);
  renderResults("resultsListB2", week2.B);

  // ✅ OVERALL LOGS (Week1 + Week2 combined)
  const rowsA = computeTable("A", overall);
  const rowsB = computeTable("B", overall);
  renderLog("logBodyA", rowsA);
  renderLog("logBodyB", rowsB);

  // Leaders (Overall)
  $("leaderA").textContent = rowsA[0]?.team ? `A: ${rowsA[0].team} (${rowsA[0].Pts} pts)` : "A: N/A";
  $("leaderB").textContent = rowsB[0]?.team ? `B: ${rowsB[0].team} (${rowsB[0].Pts} pts)` : "B: N/A";

  $("highlightResult").textContent = bestHighlightLatestPlayed();

  $("resultSearch").addEventListener("input", applyResultSearch);
  $("btnClearResults").addEventListener("click", () => {
    $("resultSearch").value = "";
    applyResultSearch();
  });
  $("btnShowWeek1").addEventListener("click", showWeek1);
  $("btnShowWeek2").addEventListener("click", showWeek2);

  $("fixtureSearch").addEventListener("input", applyFixtureFilters);
  $("btnStreamA").addEventListener("click", () => { fixtureStreamFilter = "A"; applyFixtureFilters(); });
  $("btnStreamB").addEventListener("click", () => { fixtureStreamFilter = "B"; applyFixtureFilters(); });
  $("btnClearFixture").addEventListener("click", () => { fixtureStreamFilter = null; $("fixtureSearch").value = ""; applyFixtureFilters(); });

  renderSlide();
  $("nextPhoto").addEventListener("click", nextSlide);
  $("prevPhoto").addEventListener("click", prevSlide);
  setInterval(() => { if (slides.length > 1) nextSlide(); }, 7000);

  showWeek1();
});
