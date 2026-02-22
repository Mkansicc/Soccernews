/* Script.js (v11) - WSL Updates
   - Auto renders: fixtures, results, highlight, leaders, log tables
   - Filters: fixtures/results search + stream filters
*/

"use strict";

// ===============================
// EDIT THESE (YOUR DATA)
// ===============================

// Donate link (optional)
const DONATE_URL = "https://example.com/donate";

// Week 2 Fixtures (edit as you like)
const fixturesWeek2 = [
  // Stream A
  { stream: "A", date: "TBC", time: "TBC", home: "Crusaders FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", date: "TBC", time: "TBC", home: "FC Wondrous", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", date: "TBC", time: "TBC", home: "Royal Tigers FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", date: "TBC", time: "TBC", home: "Morning Stars FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },

  // Stream B
  { stream: "B", date: "TBC", time: "TBC", home: "Liverpool FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", date: "TBC", time: "TBC", home: "Labamba FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", date: "TBC", time: "TBC", home: "Junior Pirates FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", date: "TBC", time: "TBC", home: "Real Rangers FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
];

// Week 1 Results (YOUR LATEST INPUT)
const resultsWeek1 = {
  A: [
    { home: "Crusaders FC", away: "FC Wondrous", homeGoals: 3, awayGoals: 2 },
    { home: "Royal Tigers FC", away: "Eastern Rangers FC", homeGoals: null, awayGoals: null },
    { home: "Morning Stars FC", away: "Fast Eleven FC", homeGoals: null, awayGoals: null },
    { home: "Movers FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 2 },
  ],
  B: [
    { home: "City Pillars FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 1 },
    { home: "Junior Pirates FC", away: "Xihuhuri FC", homeGoals: 1, awayGoals: 3 },
    { home: "Bhubhezi FC", away: "Labamba FC", homeGoals: 2, awayGoals: 1 },
    { home: "Real Rangers FC", away: "Welverdiend Masters FC", homeGoals: null, awayGoals: null },
  ],
};

// Team lists (needed so unknown results still show in table)
const teams = {
  A: [
    "Crusaders FC",
    "FC Wondrous",
    "Royal Tigers FC",
    "Eastern Rangers FC",
    "Morning Stars FC",
    "Fast Eleven FC",
    "Movers FC",
    "Highlanders FC",
  ],
  B: [
    "Liverpool FC",
    "City Pillars FC",
    "Junior Pirates FC",
    "Xihuhuri FC",
    "Bhubhezi FC",
    "Labamba FC",
    "Real Rangers FC",
    "Welverdiend Masters FC",
  ],
};

// Slideshow photos (put files inside /images)
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

function formatScore(hg, ag) {
  if (hg === null || ag === null) return "❓ – ❓";
  return `${hg} – ${ag}`;
}

function matchLine(m) {
  return `${m.home} ${formatScore(m.homeGoals, m.awayGoals)} ${m.away}`;
}

function isPlayed(m) {
  return Number.isInteger(m.homeGoals) && Number.isInteger(m.awayGoals);
}

function computeTable(streamKey) {
  // init
  const table = new Map();
  for (const t of teams[streamKey]) {
    table.set(t, { team: t, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 });
  }

  // apply results (only played)
  for (const m of resultsWeek1[streamKey]) {
    if (!isPlayed(m)) continue;

    const home = table.get(m.home) || { team: m.home, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };
    const away = table.get(m.away) || { team: m.away, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };

    home.P += 1; away.P += 1;
    home.GF += m.homeGoals; home.GA += m.awayGoals;
    away.GF += m.awayGoals; away.GA += m.homeGoals;

    if (m.homeGoals > m.awayGoals) {
      home.W += 1; home.Pts += 3;
      away.L += 1;
    } else if (m.homeGoals < m.awayGoals) {
      away.W += 1; away.Pts += 3;
      home.L += 1;
    } else {
      home.D += 1; away.D += 1;
      home.Pts += 1; away.Pts += 1;
    }

    home.GD = home.GF - home.GA;
    away.GD = away.GF - away.GA;

    table.set(m.home, home);
    table.set(m.away, away);
  }

  // sort
  const rows = Array.from(table.values());
  rows.sort((a, b) => {
    if (b.Pts !== a.Pts) return b.Pts - a.Pts;
    if (b.GD !== a.GD) return b.GD - a.GD;
    if (b.GF !== a.GF) return b.GF - a.GF;
    return a.team.localeCompare(b.team);
  });

  return rows;
}

function renderLog(streamKey, tbodyId) {
  const rows = computeTable(streamKey);
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

  return rows;
}

function renderResults() {
  const listA = $("resultsListA");
  const listB = $("resultsListB");
  listA.innerHTML = "";
  listB.innerHTML = "";

  for (const m of resultsWeek1.A) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${safeText(m.home)}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${safeText(m.away)}`;
    listA.appendChild(li);
  }

  for (const m of resultsWeek1.B) {
    const li = document.createElement("li");
    // make away winner bold when played (nice touch)
    if (isPlayed(m) && m.awayGoals > m.homeGoals) {
      li.innerHTML = `${safeText(m.home)} ${formatScore(m.homeGoals, m.awayGoals)} <strong>${safeText(m.away)}</strong>`;
    } else if (isPlayed(m) && m.homeGoals > m.awayGoals) {
      li.innerHTML = `<strong>${safeText(m.home)}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${safeText(m.away)}`;
    } else {
      li.innerHTML = `<strong>${safeText(m.home)}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${safeText(m.away)}`;
    }
    listB.appendChild(li);
  }
}

function bestHighlight() {
  // pick match with largest goal difference (played only)
  const all = [...resultsWeek1.A, ...resultsWeek1.B].filter(isPlayed);
  if (!all.length) return "No played matches yet";

  all.sort((x, y) => {
    const dx = Math.abs(x.homeGoals - x.awayGoals);
    const dy = Math.abs(y.homeGoals - y.awayGoals);
    if (dy !== dx) return dy - dx;
    const tx = x.homeGoals + x.awayGoals;
    const ty = y.homeGoals + y.awayGoals;
    return ty - tx;
  });

  const m = all[0];
  return matchLine(m);
}

function setLeaders(rowsA, rowsB) {
  const leaderA = rowsA[0]?.team ? `A: ${rowsA[0].team} (${rowsA[0].Pts} pts)` : "A: N/A";
  const leaderB = rowsB[0]?.team ? `B: ${rowsB[0].team} (${rowsB[0].Pts} pts)` : "B: N/A";
  $("leaderA").textContent = leaderA;
  $("leaderB").textContent = leaderB;
}

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
      <td><strong>${safeText(f.home)}</strong> vs ${safeText(f.away)} <span class="pill small-pill">Stream ${safeText(f.stream)}</span></td>
      <td>${safeText(f.venue)}</td>
      <td>${safeText(f.status)}</td>
    `;
    body.appendChild(tr);
  }
}

function getNextMatch() {
  // first fixture in list (you can improve by sorting date)
  const f = fixturesWeek2[0];
  if (!f) return { title: "No fixtures set", meta: "" };
  return {
    title: `${f.home} vs ${f.away}`,
    meta: `Stream ${f.stream} • ${f.date} ${f.time} • ${f.venue}`,
  };
}

// ===============================
// SEARCH / FILTER UI
// ===============================

let fixtureStreamFilter = null; // "A" | "B" | null
function applyFixtureFilters() {
  const q = ($("fixtureSearch").value || "").toLowerCase().trim();

  const filtered = fixturesWeek2.filter((f) => {
    if (fixtureStreamFilter && f.stream !== fixtureStreamFilter) return false;
    if (!q) return true;
    const hay = `${f.home} ${f.away} ${f.venue} ${f.stream}`.toLowerCase();
    return hay.includes(q);
  });

  renderFixtures(filtered);
}

let resultQuery = "";
function applyResultSearch() {
  resultQuery = ($("resultSearch").value || "").toLowerCase().trim();

  const listA = $("resultsListA");
  const listB = $("resultsListB");

  // show/hide li by search
  for (const li of listA.querySelectorAll("li")) {
    const t = li.textContent.toLowerCase();
    li.style.display = !resultQuery || t.includes(resultQuery) ? "" : "none";
  }
  for (const li of listB.querySelectorAll("li")) {
    const t = li.textContent.toLowerCase();
    li.style.display = !resultQuery || t.includes(resultQuery) ? "" : "none";
  }
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

document.addEventListener("DOMContentLoaded", () => {
  // footer year
  $("yearNow").textContent = new Date().getFullYear();

  // donate link
  const d = $("donateLink");
  if (d) d.href = DONATE_URL;

  // fixtures
  renderFixtures(fixturesWeek2);
  const nm = getNextMatch();
  $("nextMatch").textContent = nm.title;
  $("nextMatchMeta").textContent = nm.meta;

  // results
  renderResults();
  $("highlightResult").textContent = bestHighlight();

  // logs + leaders
  const rowsA = renderLog("A", "logBodyA");
  const rowsB = renderLog("B", "logBodyB");
  setLeaders(rowsA, rowsB);

  // search hooks
  $("fixtureSearch").addEventListener("input", applyFixtureFilters);
  $("btnStreamA").addEventListener("click", () => { fixtureStreamFilter = "A"; applyFixtureFilters(); });
  $("btnStreamB").addEventListener("click", () => { fixtureStreamFilter = "B"; applyFixtureFilters(); });
  $("btnClearFixture").addEventListener("click", () => { fixtureStreamFilter = null; $("fixtureSearch").value = ""; applyFixtureFilters(); });

  $("resultSearch").addEventListener("input", applyResultSearch);
  $("btnAllResults").addEventListener("click", () => { $("resultSearch").value = ""; applyResultSearch(); });
  $("btnClearResults").addEventListener("click", () => { $("resultSearch").value = ""; applyResultSearch(); });

  // slideshow
  renderSlide();
  $("nextPhoto").addEventListener("click", nextSlide);
  $("prevPhoto").addEventListener("click", prevSlide);

  // auto slideshow (optional)
  setInterval(() => {
    if (slides.length > 1) nextSlide();
  }, 7000);
});
