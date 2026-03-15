"use strict";

/* Script.js v36
  ✅ Week 4 changed to postponed fixtures
  ✅ Week 5 now contains the 14 March 2026 results
  ✅ Week 6 fixtures added
  ✅ Logs count only played matches
  ✅ Results, fixtures, slideshow, filters, leaders and highlight included
*/

const DONATE_URL = "https://www.paypal.com/donate/?business=mkansicc@gmail.com&currency_code=ZAR";

// ===============================
// TEAMS
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
// RESULTS
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

// WEEK 4 = POSTPONED
const week4 = {
  A: [
    { home: "FC Wondrous", away: "Morning Stars FC", status: "Postponed" },
    { home: "Highlanders FC", away: "Crusaders FC", status: "Postponed" },
    { home: "Movers FC", away: "Eastern Rangers FC", status: "Postponed" },
    { home: "Fast Eleven FC", away: "Royal Tigers FC", status: "Postponed" },
  ],
  B: [
    { home: "Liverpool FC", away: "Bhubhezi FC", status: "Postponed" },
    { home: "Xihuhuri FC", away: "Real Rangers FC", status: "Postponed" },
    { home: "City Pillars FC", away: "Welverdiend Masters FC", status: "Postponed" },
    { home: "Labamba FC", away: "Junior Pirates FC", status: "Postponed" },
  ],
};

// WEEK 5 = 14 MARCH 2026 RESULTS
const week5 = {
  A: [
    { home: "FC Wondrous", away: "Movers FC", homeGoals: 6, awayGoals: 0 },
    { home: "Morning Stars FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 0 },
    { home: "Eastern Rangers FC", away: "Fast Eleven FC", homeGoals: 2, awayGoals: 0, note: "Walkover" },
    { home: "Royal Tigers FC", away: "Crusaders FC", homeGoals: 1, awayGoals: 3 },
  ],
  B: [
    { home: "Real Rangers FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 7 },
    { home: "Bhubhezi FC", away: "Welverdiend Masters FC", homeGoals: 2, awayGoals: 2 },
    { home: "Xihuhuri FC", away: "Labamba FC", homeGoals: 0, awayGoals: 4 },
    { home: "Junior Pirates FC", away: "City Pillars FC", homeGoals: 3, awayGoals: 2 },
  ],
};

const overall = {
  A: [...week1.A, ...week2.A, ...week3.A, ...week5.A],
  B: [...week1.B, ...week2.B, ...week3.B, ...week5.B],
};

// ===============================
// FIXTURES
// ===============================
const week4Fixtures = [
  { stream: "A", date: "08 March 2026", time: "16:00", home: "FC Wondrous", away: "Morning Stars FC", venue: "FC Wondrous", status: "Postponed" },
  { stream: "A", date: "08 March 2026", time: "16:00", home: "Highlanders FC", away: "Crusaders FC", venue: "Highlanders FC", status: "Postponed" },
  { stream: "A", date: "08 March 2026", time: "16:00", home: "Movers FC", away: "Eastern Rangers FC", venue: "Movers FC", status: "Postponed" },
  { stream: "A", date: "08 March 2026", time: "16:00", home: "Fast Eleven FC", away: "Royal Tigers FC", venue: "Fast Eleven FC", status: "Postponed" },

  { stream: "B", date: "08 March 2026", time: "16:00", home: "Liverpool FC", away: "Bhubhezi FC", venue: "Liverpool FC", status: "Postponed" },
  { stream: "B", date: "08 March 2026", time: "16:00", home: "Xihuhuri FC", away: "Real Rangers FC", venue: "Xihuhuri FC", status: "Postponed" },
  { stream: "B", date: "08 March 2026", time: "16:00", home: "City Pillars FC", away: "Welverdiend Masters FC", venue: "City Pillars FC", status: "Postponed" },
  { stream: "B", date: "08 March 2026", time: "16:00", home: "Labamba FC", away: "Junior Pirates FC", venue: "Labamba FC", status: "Postponed" },
];

const week6Fixtures = [
  { stream: "A", date: "22 March 2026", time: "16:00", home: "Highlanders FC", away: "FC Wondrous", venue: "Highlanders FC", status: "Scheduled" },
  { stream: "A", date: "22 March 2026", time: "16:00", home: "Movers FC", away: "Fast Eleven FC", venue: "Movers FC", status: "Scheduled" },
  { stream: "A", date: "22 March 2026", time: "16:00", home: "Morning Stars FC", away: "Royal Tigers FC", venue: "Morning Stars FC", status: "Scheduled" },
  { stream: "A", date: "22 March 2026", time: "16:00", home: "Crusaders FC", away: "Eastern Rangers FC", venue: "Crusaders FC", status: "Scheduled" },

  { stream: "B", date: "22 March 2026", time: "16:00", home: "Welverdiend Masters FC", away: "Liverpool FC", venue: "Welverdiend Masters FC", status: "Scheduled" },
  { stream: "B", date: "22 March 2026", time: "16:00", home: "Labamba FC", away: "Real Rangers FC", venue: "Labamba FC", status: "Scheduled" },
  { stream: "B", date: "22 March 2026", time: "16:00", home: "Bhubhezi FC", away: "Junior Pirates FC", venue: "Bhubhezi FC", status: "Scheduled" },
  { stream: "B", date: "22 March 2026", time: "16:00", home: "City Pillars FC", away: "Xihuhuri FC", venue: "City Pillars FC", status: "Scheduled" },
];

// ===============================
// PHOTOS
// ===============================
const photos = Array.from({ length: 16 }, (_, i) => ({
  src: `images/photo${i + 1}.jpg`,
  title: `WSL Photo ${i + 1}`,
  meta: `Photo ${i + 1} of 16`
}));

let currentPhotoIndex = 0;
let fixtureFilter = "ALL";
let currentFixtureWeek = "4";

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
  return `${hg} – ${ag}`;
}

function getCurrentFixtureList() {
  return currentFixtureWeek === "6" ? week6Fixtures : week4Fixtures;
}

function getAllPlayedMatches() {
  return [...overall.A, ...overall.B].filter(isPlayed);
}

// ===============================
// RESULTS
// ===============================
function renderResults(listId, data) {
  const el = $(listId);
  if (!el) return;

  el.innerHTML = "";

  if (!data.length) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="muted">No results yet.</span>`;
    el.appendChild(li);
    return;
  }

  for (const m of data) {
    const li = document.createElement("li");

    if (isPlayed(m)) {
      li.innerHTML = `
        <strong>${safeText(m.home)}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${safeText(m.away)}
        ${m.note ? `<span class="pill small-pill">${safeText(m.note)}</span>` : ""}
      `;
    } else {
      li.innerHTML = `
        <strong>${safeText(m.home)}</strong> vs ${safeText(m.away)}
        <span class="pill small-pill">${safeText(m.status || "Pending")}</span>
      `;
    }

    el.appendChild(li);
  }
}

// ===============================
// LOG TABLES
// ===============================
function computeTable(streamKey, resultsSet) {
  const table = new Map();

  for (const t of teams[streamKey]) {
    table.set(t, {
      team: t,
      P: 0,
      W: 0,
      D: 0,
      L: 0,
      GF: 0,
      GA: 0,
      GD: 0,
      Pts: 0,
    });
  }

  for (const m of resultsSet[streamKey]) {
    if (!isPlayed(m)) continue;

    const home = table.get(m.home);
    const away = table.get(m.away);

    if (!home || !away) continue;

    home.P++;
    away.P++;

    home.GF += m.homeGoals;
    home.GA += m.awayGoals;
    away.GF += m.awayGoals;
    away.GA += m.homeGoals;

    if (m.homeGoals > m.awayGoals) {
      home.W++;
      away.L++;
      home.Pts += 3;
    } else if (m.homeGoals < m.awayGoals) {
      away.W++;
      home.L++;
      away.Pts += 3;
    } else {
      home.D++;
      away.D++;
      home.Pts++;
      away.Pts++;
    }

    home.GD = home.GF - home.GA;
    away.GD = away.GF - away.GA;
  }

  const rows = Array.from(table.values());

  rows.sort((a, b) =>
    (b.Pts - a.Pts) ||
    (b.GD - a.GD) ||
    (b.GF - a.GF) ||
    a.team.localeCompare(b.team)
  );

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
      <td>${r.P}</td>
      <td>${r.W}</td>
      <td>${r.D}</td>
      <td>${r.L}</td>
      <td>${r.GF}</td>
      <td>${r.GA}</td>
      <td>${r.GD >= 0 ? "+" : ""}${r.GD}</td>
      <td><strong>${r.Pts}</strong></td>
    `;
    body.appendChild(tr);
  });
}

// ===============================
// RESULTS SEARCH + WEEK TOGGLE
// ===============================
function getCurrentWeekListIds() {
  const isW1 = ($("week1Block")?.style.display || "") !== "none";
  const isW2 = ($("week2Block")?.style.display || "none") !== "none";
  const isW3 = ($("week3Block")?.style.display || "none") !== "none";
  const isW4 = ($("week4Block")?.style.display || "none") !== "none";
  const isW5 = ($("week5Block")?.style.display || "none") !== "none";

  if (isW5) return ["resultsListA5", "resultsListB5"];
  if (isW4) return ["resultsListA4", "resultsListB4"];
  if (isW3) return ["resultsListA3", "resultsListB3"];
  if (isW2) return ["resultsListA2", "resultsListB2"];
  return ["resultsListA1", "resultsListB1"];
}

function applyResultSearch() {
  const q = (($("resultSearch")?.value) || "").toLowerCase().trim();
  const ids = getCurrentWeekListIds();

  for (const id of ids) {
    const list = $(id);
    if (!list) continue;

    for (const li of list.querySelectorAll("li")) {
      const t = li.textContent.toLowerCase();
      li.style.display = !q || t.includes(q) ? "" : "none";
    }
  }
}

function setActiveWeekButton(activeId) {
  document.querySelectorAll(".week-btn").forEach((btn) => btn.classList.remove("active"));
  $(activeId)?.classList.add("active");
}

function showOnlyWeek(blockId, buttonId) {
  ["week1Block", "week2Block", "week3Block", "week4Block", "week5Block"].forEach((id) => {
    const el = $(id);
    if (el) el.style.display = id === blockId ? "" : "none";
  });

  setActiveWeekButton(buttonId);

  if ($("resultSearch")) $("resultSearch").value = "";
  applyResultSearch();
}

function showWeek1() { showOnlyWeek("week1Block", "btnShowWeek1"); }
function showWeek2() { showOnlyWeek("week2Block", "btnShowWeek2"); }
function showWeek3() { showOnlyWeek("week3Block", "btnShowWeek3"); }
function showWeek4() { showOnlyWeek("week4Block", "btnShowWeek4"); }
function showWeek5() { showOnlyWeek("week5Block", "btnShowWeek5"); }

// ===============================
// FIXTURES
// ===============================
function setActiveFixtureWeekButton(activeId) {
  document.querySelectorAll(".fixture-week-btn").forEach((btn) => btn.classList.remove("active"));
  $(activeId)?.classList.add("active");
}

function renderFixtures() {
  const body = $("fixturesBody");
  const title = $("fixtureWeekTitle");
  const meta = $("fixtureWeekMeta");
  if (!body) return;

  const fixtures = getCurrentFixtureList();
  const q = (($("fixtureSearch")?.value) || "").toLowerCase().trim();

  const filtered = fixtures.filter((m) => {
    const streamOk = fixtureFilter === "ALL" || m.stream === fixtureFilter;
    const searchText = `${m.home} ${m.away} ${m.venue} ${m.status}`.toLowerCase();
    const queryOk = !q || searchText.includes(q);
    return streamOk && queryOk;
  });

  if (title && meta) {
    if (currentFixtureWeek === "4") {
      title.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Week 4 Fixtures • Sunday, 08 March 2026`;
      meta.textContent = "Kick off 16H00 • All matches postponed";
    } else {
      title.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Week 6 Fixtures • Sunday, 22 March 2026`;
      meta.textContent = "Kick off 16H00 • Scheduled fixtures";
    }
  }

  body.innerHTML = "";

  if (!filtered.length) {
    body.innerHTML = `<tr><td colspan="6" class="muted">No fixtures found.</td></tr>`;
    return;
  }

  filtered.forEach((m) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${safeText(m.date)}</td>
      <td>${safeText(m.time)}</td>
      <td><strong>${safeText(m.home)}</strong> vs ${safeText(m.away)}</td>
      <td>${safeText(m.venue)}</td>
      <td>${safeText(m.stream)}</td>
      <td><span class="pill small-pill">${safeText(m.status)}</span></td>
    `;
    body.appendChild(tr);
  });
}

function showFixturesWeek4() {
  currentFixtureWeek = "4";
  setActiveFixtureWeekButton("btnShowFixturesWeek4");
  renderFixtures();
}

function showFixturesWeek6() {
  currentFixtureWeek = "6";
  setActiveFixtureWeekButton("btnShowFixturesWeek6");
  renderFixtures();
}

function setFixtureFilter(type) {
  fixtureFilter = type;
  $("btnStreamA")?.classList.toggle("active", type === "A");
  $("btnStreamB")?.classList.toggle("active", type === "B");
  renderFixtures();
}

// ===============================
// HERO
// ===============================
function renderHighlight() {
  const highlight = $("highlightResult");
  if (!highlight) return;

  const played = getAllPlayedMatches();
  const latest = played[played.length - 1];

  if (!latest) {
    highlight.textContent = "No result yet";
    return;
  }

  highlight.textContent = `${latest.home} ${latest.homeGoals}–${latest.awayGoals} ${latest.away}`;
}

function renderCurrentFixtureCard() {
  const nextMatch = $("nextMatch");
  const nextMatchMeta = $("nextMatchMeta");
  if (!nextMatch || !nextMatchMeta) return;

  nextMatch.textContent = "Week 6 • Sunday 22 March 2026";
  nextMatchMeta.textContent = "8 matches scheduled • Kick off 16H00";
}

// ===============================
// DONATE
// ===============================
function renderDonateLink() {
  const donateLink = $("donateLink");
  if (donateLink) donateLink.href = DONATE_URL;
}

// ===============================
// PHOTOS
// ===============================
function renderPhoto() {
  const img = $("slideImage");
  const title = $("slideTitle");
  const meta = $("slideMeta");
  if (!img || !title || !meta || !photos.length) return;

  const photo = photos[currentPhotoIndex];
  img.src = photo.src;
  img.alt = photo.title;
  title.textContent = photo.title;
  meta.textContent = photo.meta;

  img.onerror = function () {
    this.src = "";
    title.textContent = "Photo not found";
    meta.textContent = `Please add ${photo.src}`;
  };
}

function nextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  renderPhoto();
}

function prevPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  renderPhoto();
}

// ===============================
// FOOTER
// ===============================
function renderYear() {
  const yearNow = $("yearNow");
  if (yearNow) yearNow.textContent = new Date().getFullYear();
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderResults("resultsListA1", week1.A);
  renderResults("resultsListB1", week1.B);

  renderResults("resultsListA2", week2.A);
  renderResults("resultsListB2", week2.B);

  renderResults("resultsListA3", week3.A);
  renderResults("resultsListB3", week3.B);

  renderResults("resultsListA4", week4.A);
  renderResults("resultsListB4", week4.B);

  renderResults("resultsListA5", week5.A);
  renderResults("resultsListB5", week5.B);

  const rowsA = computeTable("A", overall);
  const rowsB = computeTable("B", overall);

  renderLog("logBodyA", rowsA);
  renderLog("logBodyB", rowsB);

  if ($("leaderA")) {
    $("leaderA").textContent = rowsA[0]?.team
      ? `A: ${rowsA[0].team} (${rowsA[0].Pts} pts)`
      : "A: N/A";
  }

  if ($("leaderB")) {
    $("leaderB").textContent = rowsB[0]?.team
      ? `B: ${rowsB[0].team} (${rowsB[0].Pts} pts)`
      : "B: N/A";
  }

  renderHighlight();
  renderDonateLink();
  renderCurrentFixtureCard();
  renderFixtures();
  renderPhoto();
  renderYear();

  $("resultSearch")?.addEventListener("input", applyResultSearch);

  $("btnClearResults")?.addEventListener("click", () => {
    if ($("resultSearch")) $("resultSearch").value = "";
    applyResultSearch();
  });

  $("btnShowWeek1")?.addEventListener("click", showWeek1);
  $("btnShowWeek2")?.addEventListener("click", showWeek2);
  $("btnShowWeek3")?.addEventListener("click", showWeek3);
  $("btnShowWeek4")?.addEventListener("click", showWeek4);
  $("btnShowWeek5")?.addEventListener("click", showWeek5);

  $("btnShowFixturesWeek4")?.addEventListener("click", showFixturesWeek4);
  $("btnShowFixturesWeek6")?.addEventListener("click", showFixturesWeek6);

  $("fixtureSearch")?.addEventListener("input", renderFixtures);

  $("btnStreamA")?.addEventListener("click", () => setFixtureFilter("A"));
  $("btnStreamB")?.addEventListener("click", () => setFixtureFilter("B"));

  $("btnClearFixture")?.addEventListener("click", () => {
    fixtureFilter = "ALL";
    if ($("fixtureSearch")) $("fixtureSearch").value = "";
    $("btnStreamA")?.classList.remove("active");
    $("btnStreamB")?.classList.remove("active");
    renderFixtures();
  });

  $("nextPhoto")?.addEventListener("click", nextPhoto);
  $("prevPhoto")?.addEventListener("click", prevPhoto);

  showWeek1();
  showFixturesWeek4();
});
