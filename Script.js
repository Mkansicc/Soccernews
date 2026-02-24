"use strict";

/* Script.js v21
  ✅ Existing site kept
  ✅ Added Excel-like slicer + table for:
     - Top Goals (sorted by team, then goals desc)
     - Yellow Cards (sorted by team, then count desc)
     - Red Cards (sorted by team)
*/

const DONATE_URL ="https://www.paypal.com/donate/?business=mkansicc@gmail.com&currency_code=ZAR";

// ===============================
// FIXTURES (WEEK 3 - EXACT AS IMAGE)
// ===============================
const fixtures = [
  // STREAM A — WEEK 3 (Friday 27 Feb 2026)
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "", home: "Eastern Rangers", away: "FC Wonderous", venue: "", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "", home: "Crusaders", away: "Morning Stars", venue: "", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "", home: "Royal Tigers", away: "Movers", venue: "", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "", home: "Highlanders", away: "Fast 11", venue: "", status: "Scheduled" },

  // STREAM B — WEEK 3 (Friday 27 Feb 2026)
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "", home: "Xihuhuri", away: "Liverpool", venue: "", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "", home: "City Pillars", away: "Bhubhezi", venue: "", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "", home: "Real Rangers", away: "Junior Pirates", venue: "", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "", home: "W/ Masters", away: "Labamba", venue: "", status: "Scheduled" },
];

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
// RESULTS DATA
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
    { home: "Junior Pirates FC", away: "Xihuhuri FC", homeGoals: 1, awayGoals: 3 },
    { home: "Bhubhezi FC", away: "Labamba FC", homeGoals: 2, awayGoals: 1 },
    { home: "Real Rangers FC", away: "Welverdiend Masters FC", homeGoals: 1, awayGoals: 3 },
  ],
};

const overall = { A: [...week1.A, ...week2.A], B: [...week1.B, ...week2.B] };

// ===============================
// SLIDESHOW
// ===============================
const slides = [
  { src: "images/photo1.jpg", title: "WSL Action", meta: "Welverdiend Soccer League" },
  { src: "images/photo2.jpg", title: "Match Day", meta: "Stream A & Stream B" },
  { src: "images/photo3.jpg", title: "Team Spirit", meta: "BLFA Updates" },
];

// ===============================
// GOALS & DISCIPLINE (Excel slicer style)
// ===============================
const statsData = {
  goals: [
    { team: "Xihuhuri FC", player: "Invite", stat: 4 },
    { team: "Crusaders FC", player: "Luthando", stat: 3 },

    { team: "Crusaders FC", player: "Charny", stat: 2 },
    { team: "Bhubezi FC", player: "Brave", stat: 2 },
    { team: "Welverdiend Masters FC", player: "Sgonondo", stat: 2 },
    { team: "Xihuhuri FC", player: "Aubrey", stat: 2 },
    { team: "Highlanders FC", player: "Kgome", stat: 2 },
    { team: "Welverdiend Masters FC", player: "Condry", stat: 2 },
    { team: "Highlanders FC", player: "Ian", stat: 2 },
    { team: "Morning Stars FC", player: "Musa", stat: 2 },

    { team: "Labamba FC", player: "Puse", stat: 1 },
    { team: "Labamba FC", player: "Buda", stat: 1 },
    { team: "Labamba FC", player: "Masure", stat: 1 },
    { team: "Labamba FC", player: "Reply", stat: 1 },
    { team: "Labamba FC", player: "Ruse", stat: 1 },
    { team: "Labamba FC", player: "Kgose", stat: 1 },
    { team: "Labamba FC", player: "Levy", stat: 1 },
    { team: "City Pillars FC", player: "Tower", stat: 1 },
    { team: "Xihuhuri FC", player: "Thomas", stat: 1 },
    { team: "Welverdiend Masters FC", player: "Zinto", stat: 1 },
    { team: "Liverpool FC", player: "Cosner", stat: 1 },
    { team: "Liverpool FC", player: "Shongwe", stat: 1 },
    { team: "Liverpool FC", player: "Alpha", stat: 1 },
    { team: "Morning Stars FC", player: "Dala", stat: 1 },
    { team: "Morning Stars FC", player: "Nhlari", stat: 1 },
    { team: "Morning Stars FC", player: "Bella", stat: 1 },
    { team: "Morning Stars FC", player: "Thabang", stat: 1 },
    { team: "Morning Stars FC", player: "Trust", stat: 1 },
    { team: "Eastern Rangers FC", player: "Gift", stat: 1 },
    { team: "Eastern Rangers FC", player: "Jabu Zuma", stat: 1 },
    { team: "Bhubezi FC", player: "Potential", stat: 1 },
    { team: "Bhubezi FC", player: "Bee", stat: 1 },
    { team: "Bhubezi FC", player: "Bright", stat: 1 },
    { team: "Bhubezi FC", player: "Snenhlahla", stat: 1 },
    { team: "Real Rangers FC", player: "Samu", stat: 1 },
    { team: "Welverdiend Masters FC", player: "Phoo", stat: 1 },
    { team: "FC Wondrous", player: "Nkosinathi", stat: 1 },
    { team: "FC Wondrous", player: "Wisdom", stat: 1 },
    { team: "Movers FC", player: "Liberty", stat: 1 },
    { team: "Fast XI FC", player: "Brandon", stat: 1 },
    { team: "Junior Pirates FC", player: "Protect", stat: 1 },
  ],

  yellow: [
    { team: "Movers FC", player: "Levis Mashaba", stat: 2 },
    { team: "Crusaders FC", player: "Clenthon", stat: 2 },

    { team: "Liverpool FC", player: "Sipho", stat: 1 },
    { team: "Liverpool FC", player: "Cosner", stat: 1 },
    { team: "Liverpool FC", player: "Tito", stat: 1 },
    { team: "Liverpool FC", player: "Tsetsa", stat: 1 },

    { team: "Xihuhuri FC", player: "Aubrey", stat: 1 },
    { team: "Xihuhuri FC", player: "Theo", stat: 1 },

    { team: "Crusaders FC", player: "Dumazi", stat: 1 },
    { team: "Crusaders FC", player: "Forestance", stat: 1 },
    { team: "Crusaders FC", player: "Fumani", stat: 1 },

    { team: "Bhubezi FC", player: "Bee", stat: 1 },
    { team: "Real Rangers FC", player: "Muzi", stat: 1 },
    { team: "FC Wondrous", player: "Robert", stat: 1 },
    { team: "Highlanders FC", player: "Matimu", stat: 1 },

    { team: "Eastern Rangers FC", player: "Mpomo", stat: 1 },
    { team: "Eastern Rangers FC", player: "Jabu", stat: 1 },
    { team: "Eastern Rangers FC", player: "Storo", stat: 1 },

    { team: "Royal Tigers", player: "Njojo", stat: 1 },

    { team: "Bhubezi FC", player: "Vuyo", stat: 1 },
    { team: "Bhubezi FC", player: "Bongani", stat: 1 },
    { team: "Bhubezi FC", player: "Palmer", stat: 1 },
    { team: "Bhubezi FC", player: "Potential", stat: 1 },

    { team: "Labamba FC", player: "Bophelo", stat: 1 },
    { team: "Labamba FC", player: "Combine", stat: 1 },
    { team: "Labamba FC", player: "Ruse", stat: 1 },

    { team: "Morning Stars FC", player: "Leon", stat: 1 },
    { team: "Fast Eleven FC", player: "Loyiso", stat: 1 },
  ],

  red: [
    { team: "Highlanders FC", player: "Jeepers", stat: 1 },
    { team: "Labamba FC", player: "Dalos", stat: 1 },
  ]
};

const statLabels = {
  goals: "Goals",
  yellow: "Yellow Cards",
  red: "Red Cards"
};

let currentStatType = "goals";     // goals | yellow | red
let currentTeamFilter = "ALL";     // ALL or team name

function uniqueTeamsFrom(type) {
  const set = new Set((statsData[type] || []).map(x => x.team));
  return Array.from(set).sort((a,b)=>a.localeCompare(b));
}

function buildTeamSlicer(type) {
  const slicer = document.getElementById("teamSlicer");
  if (!slicer) return;

  const teams = uniqueTeamsFrom(type);
  slicer.innerHTML = "";

  const optAll = document.createElement("option");
  optAll.value = "ALL";
  optAll.textContent = "All Teams";
  slicer.appendChild(optAll);

  teams.forEach(t => {
    const o = document.createElement("option");
    o.value = t;
    o.textContent = t;
    slicer.appendChild(o);
  });

  slicer.value = "ALL";
  currentTeamFilter = "ALL";
}

function sortStats(type, arr) {
  if (type === "goals") {
    return arr.slice().sort((a,b) =>
      a.team.localeCompare(b.team) ||
      (b.stat - a.stat) ||
      a.player.localeCompare(b.player)
    );
  }
  if (type === "yellow") {
    return arr.slice().sort((a,b) =>
      a.team.localeCompare(b.team) ||
      (b.stat - a.stat) ||
      a.player.localeCompare(b.player)
    );
  }
  // red
  return arr.slice().sort((a,b) =>
    a.team.localeCompare(b.team) ||
    a.player.localeCompare(b.player)
  );
}

function renderStatsTable() {
  const body = document.getElementById("disciplineBody");
  const header = document.getElementById("statHeader");
  if (!body || !header) return;

  header.textContent = statLabels[currentStatType] || "Stat";

  const raw = statsData[currentStatType] || [];
  const filtered = currentTeamFilter === "ALL"
    ? raw
    : raw.filter(x => x.team === currentTeamFilter);

  const rows = sortStats(currentStatType, filtered);

  body.innerHTML = "";
  if (!rows.length) {
    body.innerHTML = `<tr><td colspan="3" class="muted">No data found.</td></tr>`;
    return;
  }

  // If ALL, show grouped like Excel (Team header + rows + totals)
  if (currentTeamFilter === "ALL") {
    let currentTeam = null;
    let teamTotal = 0;

    const flushTotal = () => {
      if (!currentTeam) return;
      const trT = document.createElement("tr");
      trT.className = "row-total";
      trT.innerHTML = `<td colspan="2">Total (${currentTeam})</td><td>${teamTotal}</td>`;
      body.appendChild(trT);
      teamTotal = 0;
    };

    rows.forEach(r => {
      if (r.team !== currentTeam) {
        flushTotal();
        currentTeam = r.team;

        const trG = document.createElement("tr");
        trG.className = "row-group";
        trG.innerHTML = `<td colspan="3">${currentTeam}</td>`;
        body.appendChild(trG);
      }

      teamTotal += Number(r.stat) || 0;

      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${r.team}</td><td><strong>${r.player}</strong></td><td>${r.stat}</td>`;
      body.appendChild(tr);
    });

    flushTotal();
    return;
  }

  // Single team view (simple table)
  rows.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.team}</td><td><strong>${r.player}</strong></td><td>${r.stat}</td>`;
    body.appendChild(tr);
  });

  // Team total row
  const total = rows.reduce((s,x)=> s + (Number(x.stat)||0), 0);
  const trTotal = document.createElement("tr");
  trTotal.className = "row-total";
  trTotal.innerHTML = `<td colspan="2">Total (${currentTeamFilter})</td><td>${total}</td>`;
  body.appendChild(trTotal);
}

function setStatType(type) {
  currentStatType = type;
  buildTeamSlicer(type);
  renderStatsTable();
}

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
  body.innerHTML = "";
  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><strong>${safeText(r.team)}</strong></td>
      <td>${r.P}</td><td>${r.W}</td><td>${r.D}</td><td>${r.L}</td>
      <td>${r.GF}</td><td>${r.GA}</td><td>${r.GD >= 0 ? "+" : ""}${r.GD}</td>
      <td><strong>${safeText(r.Pts)}</strong></td>
    `;
    body.appendChild(tr);
  });
}

function bestHighlightLatestPlayed() {
  const played = [...week2.A, ...week2.B, ...week1.A, ...week1.B].filter(isPlayed);
  if (!played.length) return "No played matches yet";
  played.sort((x, y) => (Math.abs(y.homeGoals - y.awayGoals) - Math.abs(x.homeGoals - x.awayGoals)) || ((y.homeGoals + y.awayGoals) - (x.homeGoals + x.awayGoals)));
  const m = played[0];
  return `${m.home} ${m.homeGoals} – ${m.awayGoals} ${m.away}`;
}

// ===============================
// FIXTURES UI
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
// RESULTS SEARCH + WEEK TOGGLE
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

function nextSlide() { slideIndex = (slideIndex + 1) % slides.length; renderSlide(); }
function prevSlide() { slideIndex = (slideIndex - 1 + slides.length) % slides.length; renderSlide(); }

// ===============================
// INIT
// ===============================
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

  const rowsA = computeTable("A", overall);
  const rowsB = computeTable("B", overall);
  renderLog("logBodyA", rowsA);
  renderLog("logBodyB", rowsB);

  $("leaderA").textContent = rowsA[0]?.team ? `A: ${rowsA[0].team} (${rowsA[0].Pts} pts)` : "A: N/A";
  $("leaderB").textContent = rowsB[0]?.team ? `B: ${rowsB[0].team} (${rowsB[0].Pts} pts)` : "B: N/A";
  $("highlightResult").textContent = bestHighlightLatestPlayed();

  $("resultSearch").addEventListener("input", applyResultSearch);
  $("btnClearResults").addEventListener("click", () => { $("resultSearch").value = ""; applyResultSearch(); });
  $("btnShowWeek1").addEventListener("click", showWeek1);
  $("btnShowWeek2").addEventListener("click", showWeek2);

  $("fixtureSearch").addEventListener("input", applyFixtureFilters);
  $("btnStreamA").addEventListener("click", () => { fixtureStreamFilter = "A"; applyFixtureFilters(); });
  $("btnStreamB").addEventListener("click", () => { fixtureStreamFilter = "B"; applyFixtureFilters(); });
  $("btnClearFixture").addEventListener("click", () => { fixtureStreamFilter = null; $("fixtureSearch").value = ""; applyFixtureFilters(); });

  // ✅ Excel-style slicer + tabs
  const slicer = $("teamSlicer");
  if (slicer) {
    slicer.addEventListener("change", () => {
      currentTeamFilter = slicer.value || "ALL";
      renderStatsTable();
    });
  }

  $("tabGoals")?.addEventListener("click", () => setStatType("goals"));
  $("tabYellow")?.addEventListener("click", () => setStatType("yellow"));
  $("tabRed")?.addEventListener("click", () => setStatType("red"));

  $("tabClear")?.addEventListener("click", () => {
    currentTeamFilter = "ALL";
    const s = $("teamSlicer");
    if (s) s.value = "ALL";
    renderStatsTable();
  });

  // Default: Goals
  buildTeamSlicer("goals");
  renderStatsTable();

  renderSlide();
  $("nextPhoto")?.addEventListener("click", nextSlide);
  $("prevPhoto")?.addEventListener("click", prevSlide);
  setInterval(() => { if (slides.length > 1) nextSlide(); }, 7000);

  showWeek1();
});
