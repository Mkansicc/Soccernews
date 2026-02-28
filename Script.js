"use strict";

/* Script.js v27
  ✅ Fixtures: WEEK 4 ONLY (NO 27 Feb fixtures)
  ✅ Stream filter buttons (A/B) + Active highlight
  ✅ Auto-enforce time = 16:00 for ALL fixtures
  ✅ Auto-enforce venue/location = Home team
  ✅ Fixtures search + filters
  ✅ Results Week 1/Week 2/Week 3 toggle + search
  ✅ Overall log tables (Week1 + Week2 + Week3)
  ✅ Photo slideshow updated: photo1.jpg → photo16.jpg
  ✅ Donate button links to PayPal (mkansicc@gmail.com)
*/

const DONATE_URL = "https://www.paypal.com/donate/?business=mkansicc@gmail.com&currency_code=ZAR";

// ===============================
// FIXTURES (WEEK 4 ONLY) ✅
// ===============================
const fixtures = [
  // STREAM A — WEEK 4 (Sunday 8 Mar 2026)
  { stream: "A", week: 4, date: "Sun 8 Mar 2026", time: "", home: "FC Wonderous", away: "Morning Stars", venue: "", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 8 Mar 2026", time: "", home: "Movers", away: "Eastern Rangers", venue: "", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 8 Mar 2026", time: "", home: "Highlanders", away: "Crusaders", venue: "", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 8 Mar 2026", time: "", home: "Fast 11", away: "Royal Tigers", venue: "", status: "Scheduled" },

  // STREAM B — WEEK 4 (Sunday 8 Mar 2026)
  { stream: "B", week: 4, date: "Sun 8 Mar 2026", time: "", home: "Liverpool", away: "Bhubhezi", venue: "", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 8 Mar 2026", time: "", home: "Xihuhuri", away: "Real Rangers", venue: "", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 8 Mar 2026", time: "", home: "City Pillars", away: "W/ Masters", venue: "", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 8 Mar 2026", time: "", home: "Labamba", away: "Junior Pirates", venue: "", status: "Scheduled" },
];

// ✅ Enforce: time + venue ALWAYS
function normalizeFixtures(list) {
  return list.map((f) => ({
    ...f,
    time: "16:00",
    venue: (f.home || "TBC"),
  }));
}
const normalizedFixtures = normalizeFixtures(fixtures);

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
// RESULTS (Week 1 + Week 2 + Week 3)
// ===============================
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

const week2 = {
  A: [
    { home: "Crusaders FC", away: "FC Wondrous", homeGoals: 3, awayGoals: 2 },
    { home: "Royal Tigers FC", away: "Eastern Rangers FC", homeGoals: 0, awayGoals: 1 },
    { home: "Morning Stars FC", away: "Fast Eleven FC", homeGoals: 3, awayGoals: 1 },
    { home: "Movers FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 2 },
  ],
  B: [
    { home: "City Pillars FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 1 },
    { home: "Junior Pirates FC", away: "Xihuhuri FC", homeGoals: 2, awayGoals: 0 },
    { home: "Bhubhezi FC", away: "Labamba FC", homeGoals: 2, awayGoals: 1 },
    { home: "Real Rangers FC", away: "Welverdiend Masters FC", homeGoals: 1, awayGoals: 3 },
  ],
};

const week3 = {
  A: [
    { home: "Eastern Rangers FC", away: "FC Wondrous", homeGoals: 1, awayGoals: 2 },
    { home: "Crusaders FC", away: "Morning Stars FC", homeGoals: 0, awayGoals: 1 },
    { home: "Royal Tigers FC", away: "Movers FC", homeGoals: 4, awayGoals: 2 },
    { home: "Highlanders FC", away: "Fast Eleven FC", homeGoals: 4, awayGoals: 1 },
  ],
  B: [
    { home: "Xihuhuri FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 0 },
    { home: "City Pillars FC", away: "Bhubhezi FC", homeGoals: 1, awayGoals: 2 },
    { home: "Real Rangers FC", away: "Junior Pirates FC", homeGoals: 0, awayGoals: 1 },
    { home: "Welverdiend Masters FC", away: "Labamba FC", homeGoals: 0, awayGoals: 0 },
  ],
};

const overall = { A: [...week1.A, ...week2.A, ...week3.A], B: [...week1.B, ...week2.B, ...week3.B] };

// ===============================
// ✅ SLIDESHOW (photo1.jpg -> photo16.jpg)
// ===============================
const slides = Array.from({ length: 16 }, (_, i) => {
  const n = i + 1;
  return {
    src: `images/photo${n}.jpg`,
    title: `WSL Photo ${n}`,
    meta: "Welverdiend Soccer League",
  };
});

// ===============================
// HELPERS
// ===============================
const $ = (id) => document.getElementById(id);

function safeText(v) { return String(v ?? "").replace(/[<>]/g, ""); }
function isPlayed(m) { return Number.isInteger(m.homeGoals) && Number.isInteger(m.awayGoals); }
function formatScore(hg, ag) { return (hg === null || ag === null) ? "❓ – ❓" : `${hg} – ${ag}`; }

function renderResults(listId, data) {
  const el = $(listId);
  if (!el) return;
  el.innerHTML = "";
  for (const m of data) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${safeText(m.home)}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${safeText(m.away)}`;
    el.appendChild(li);
  }
}

function computeTable(streamKey, resultsSet) {
  const table = new Map();
  for (const t of teams[streamKey]) table.set(t, { team: t, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 });

  for (const m of resultsSet[streamKey]) {
    if (!isPlayed(m)) continue;

    const home = table.get(m.home) || { team: m.home, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };
    const away = table.get(m.away) || { team: m.away, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };

    home.P++; away.P++;
    home.GF += m.homeGoals; home.GA += m.awayGoals;
    away.GF += m.awayGoals; away.GA += m.homeGoals;

    if (m.homeGoals > m.awayGoals) { home.W++; home.Pts += 3; away.L++; }
    else if (m.homeGoals < m.awayGoals) { away.W++; away.Pts += 3; home.L++; }
    else { home.D++; away.D++; home.Pts++; away.Pts++; }

    home.GD = home.GF - home.GA;
    away.GD = away.GF - away.GA;

    table.set(m.home, home);
    table.set(m.away, away);
  }

  const rows = Array.from(table.values());
  rows.sort((a, b) => (b.Pts - a.Pts) || (b.GD - a.GD) || (b.GF - a.GF) || a.team.localeCompare(b.team));
  return rows;
}

function renderLog(tbodyId, rows) {
  const body = $(tbodyId);
  if (!body) return;
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
  const played = [...week3.A, ...week3.B, ...week2.A, ...week2.B, ...week1.A, ...week1.B].filter(isPlayed);
  if (!played.length) return "No played matches yet";
  played.sort((x, y) =>
    (Math.abs(y.homeGoals - y.awayGoals) - Math.abs(x.homeGoals - x.awayGoals)) ||
    ((y.homeGoals + y.awayGoals) - (x.homeGoals + x.awayGoals))
  );
  const m = played[0];
  return `${m.home} ${m.homeGoals} – ${m.awayGoals} ${m.away}`;
}

// ===============================
// FIXTURES UI (Stream filter only)
// ===============================
let fixtureStreamFilter = null; // "A" | "B" | null

function setActive(el, on) {
  if (!el) return;
  el.classList.toggle("active", !!on);
}
function syncFixtureButtonActive() {
  setActive($("btnStreamA"), fixtureStreamFilter === "A");
  setActive($("btnStreamB"), fixtureStreamFilter === "B");
}

function getFilteredFixtures() {
  const q = (($("fixtureSearch")?.value) || "").toLowerCase().trim();
  return normalizedFixtures.filter((f) => {
    if (fixtureStreamFilter && f.stream !== fixtureStreamFilter) return false;
    if (!q) return true;
    const hay = `${f.home} ${f.away} ${f.venue} ${f.stream} week${f.week} ${f.date}`.toLowerCase();
    return hay.includes(q);
  });
}

function renderFixtures(list) {
  const body = $("fixturesBody");
  if (!body) return;

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
        <span class="pill small-pill">Week ${safeText(f.week)}</span>
      </td>
      <td>${safeText(f.venue)}</td>
      <td>${safeText(f.status)}</td>
    `;
    body.appendChild(tr);
  }
}

function setNextMatchCard(filteredList = null) {
  const list = Array.isArray(filteredList) ? filteredList : getFilteredFixtures();
  const f = list[0] || normalizedFixtures[0];

  const nm = $("nextMatch");
  const meta = $("nextMatchMeta");
  if (!nm || !meta) return;

  if (!f) {
    nm.textContent = "No fixtures set";
    meta.textContent = "";
    return;
  }
  nm.textContent = `${f.home} vs ${f.away}`;
  meta.textContent = `Stream ${f.stream} • Week ${f.week} • ${f.date} ${f.time} • ${f.venue}`;
}

function applyFixtureFilters() {
  const filtered = getFilteredFixtures();
  renderFixtures(filtered);
  setNextMatchCard(filtered);
  syncFixtureButtonActive();
}

// ===============================
// RESULTS SEARCH + WEEK TOGGLE
// ===============================
function applyResultSearch() {
  const q = (($("resultSearch")?.value) || "").toLowerCase().trim();

  const isW1 = ($("week1Block")?.style.display || "") !== "none";
  const isW2 = ($("week2Block")?.style.display || "none") !== "none";
  const isW3 = ($("week3Block")?.style.display || "none") !== "none";

  const ids = isW3 ? ["resultsListA3", "resultsListB3"]
          : isW2 ? ["resultsListA2", "resultsListB2"]
          : isW1 ? ["resultsListA1", "resultsListB1"]
          : ["resultsListA1", "resultsListB1"];

  for (const id of ids) {
    const list = $(id);
    if (!list) continue;
    for (const li of list.querySelectorAll("li")) {
      const t = li.textContent.toLowerCase();
      li.style.display = !q || t.includes(q) ? "" : "none";
    }
  }
}

function showWeek1() {
  $("week1Block").style.display = "";
  $("week2Block").style.display = "none";
  $("week3Block").style.display = "none";
  $("resultSearch").value = "";
  applyResultSearch();
}
function showWeek2() {
  $("week1Block").style.display = "none";
  $("week2Block").style.display = "";
  $("week3Block").style.display = "none";
  $("resultSearch").value = "";
  applyResultSearch();
}
function showWeek3() {
  $("week1Block").style.display = "none";
  $("week2Block").style.display = "none";
  $("week3Block").style.display = "";
  $("resultSearch").value = "";
  applyResultSearch();
}

// ===============================
// SLIDESHOW LOGIC (auto-skip missing images)
// ===============================
let slideIndex = 0;

function renderSlide() {
  const img = $("slideImage");
  const title = $("slideTitle");
  const meta = $("slideMeta");
  if (!img || !title || !meta) return;

  const s = slides[slideIndex] || slides[0];
  if (!s) return;

  img.onerror = () => {
    // if an image is missing, skip to next
    slideIndex = (slideIndex + 1) % slides.length;
    renderSlide();
  };

  img.src = s.src;
  title.textContent = s.title;
  meta.textContent = s.meta;
}

function nextSlide() { slideIndex = (slideIndex + 1) % slides.length; renderSlide(); }
function prevSlide() { slideIndex = (slideIndex - 1 + slides.length) % slides.length; renderSlide(); }

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  $("yearNow").textContent = new Date().getFullYear();
  $("donateLink").href = DONATE_URL;

  // Fixtures
  renderFixtures(normalizedFixtures);
  setNextMatchCard(normalizedFixtures);
  syncFixtureButtonActive();

  // Results
  renderResults("resultsListA1", week1.A);
  renderResults("resultsListB1", week1.B);
  renderResults("resultsListA2", week2.A);
  renderResults("resultsListB2", week2.B);
  renderResults("resultsListA3", week3.A);
  renderResults("resultsListB3", week3.B);

  // Logs
  const rowsA = computeTable("A", overall);
  const rowsB = computeTable("B", overall);
  renderLog("logBodyA", rowsA);
  renderLog("logBodyB", rowsB);

  $("leaderA").textContent = rowsA[0]?.team ? `A: ${rowsA[0].team} (${rowsA[0].Pts} pts)` : "A: N/A";
  $("leaderB").textContent = rowsB[0]?.team ? `B: ${rowsB[0].team} (${rowsB[0].Pts} pts)` : "B: N/A";
  $("highlightResult").textContent = bestHighlightLatestPlayed();

  // Results buttons
  $("resultSearch").addEventListener("input", applyResultSearch);
  $("btnClearResults").addEventListener("click", () => { $("resultSearch").value = ""; applyResultSearch(); });
  $("btnShowWeek1").addEventListener("click", showWeek1);
  $("btnShowWeek2").addEventListener("click", showWeek2);
  $("btnShowWeek3").addEventListener("click", showWeek3);

  // Fixtures search + stream buttons
  $("fixtureSearch").addEventListener("input", applyFixtureFilters);
  $("btnStreamA").addEventListener("click", () => { fixtureStreamFilter = "A"; applyFixtureFilters(); });
  $("btnStreamB").addEventListener("click", () => { fixtureStreamFilter = "B"; applyFixtureFilters(); });

  // Clear fixtures filters
  $("btnClearFixture").addEventListener("click", () => {
    fixtureStreamFilter = null;
    $("fixtureSearch").value = "";
    applyFixtureFilters();
  });

  // Slideshow
  renderSlide();
  $("nextPhoto").addEventListener("click", nextSlide);
  $("prevPhoto").addEventListener("click", prevSlide);
  setInterval(() => { if (slides.length > 1) nextSlide(); }, 6000);

  // Default results view
  showWeek1();
});
