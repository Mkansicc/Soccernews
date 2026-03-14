"use strict";

/* Script.js v32
  ✅ Week 4 = postponed only
  ✅ Week 4 does not affect log table
  ✅ Week 5 added
  ✅ Only 4 Week 5 matches counted as played
  ✅ Week toggle + result search included
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

// ✅ WEEK 4 = POSTPONED ONLY
const week4 = {
  A: [
    { home: "Royal Tigers FC", away: "Crusaders FC", status: "Postponed" },
    { home: "FC Wondrous", away: "Movers FC", status: "Postponed" },
    { home: "Morning Stars FC", away: "Highlanders FC", status: "Postponed" },
    { home: "Eastern Rangers FC", away: "Fast Eleven FC", status: "Postponed" },
  ],
  B: [
    { home: "Real Rangers FC", away: "Liverpool FC", status: "Postponed" },
    { home: "Bhubhezi FC", away: "Welverdiend Masters FC", status: "Postponed" },
    { home: "Xihuhuri FC", away: "Labamba FC", status: "Postponed" },
    { home: "Junior Pirates FC", away: "City Pillars FC", status: "Postponed" },
  ],
};

// ✅ WEEK 5 = ONLY 4 MATCHES PLAYED
const week5 = {
  A: [
    { home: "Royal Tigers FC", away: "Crusaders FC", homeGoals: 1, awayGoals: 3 },
    { home: "FC Wondrous", away: "Movers FC", status: "Results not posted on Facebook" },
    { home: "Morning Stars FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 0 },
    { home: "Eastern Rangers FC", away: "Fast Eleven FC", status: "Results not posted on Facebook" },
  ],
  B: [
    { home: "Real Rangers FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 7 },
    { home: "Bhubhezi FC", away: "Welverdiend Masters FC", homeGoals: 2, awayGoals: 2 },
    { home: "Xihuhuri FC", away: "Labamba FC", status: "Results not posted on Facebook" },
    { home: "Junior Pirates FC", away: "City Pillars FC", status: "Results not posted on Facebook" },
  ],
};

const overall = {
  A: [...week1.A, ...week2.A, ...week3.A, ...week4.A, ...week5.A],
  B: [...week1.B, ...week2.B, ...week3.B, ...week4.B, ...week5.B],
};

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
      Pts: 0
    });
  }

  for (const m of resultsSet[streamKey]) {
    if (!isPlayed(m)) continue;

    const home = table.get(m.home) || {
      team: m.home, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0
    };
    const away = table.get(m.away) || {
      team: m.away, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0
    };

    home.P++;
    away.P++;

    home.GF += m.homeGoals;
    home.GA += m.awayGoals;

    away.GF += m.awayGoals;
    away.GA += m.homeGoals;

    if (m.homeGoals > m.awayGoals) {
      home.W++;
      home.Pts += 3;
      away.L++;
    } else if (m.homeGoals < m.awayGoals) {
      away.W++;
      away.Pts += 3;
      home.L++;
    } else {
      home.D++;
      away.D++;
      home.Pts++;
      away.Pts++;
    }

    home.GD = home.GF - home.GA;
    away.GD = away.GF - away.GA;

    table.set(m.home, home);
    table.set(m.away, away);
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
function applyResultSearch() {
  const q = (($("resultSearch")?.value) || "").toLowerCase().trim();

  const isW1 = ($("week1Block")?.style.display || "") !== "none";
  const isW2 = ($("week2Block")?.style.display || "none") !== "none";
  const isW3 = ($("week3Block")?.style.display || "none") !== "none";
  const isW4 = ($("week4Block")?.style.display || "none") !== "none";
  const isW5 = ($("week5Block")?.style.display || "none") !== "none";

  const ids = isW5 ? ["resultsListA5", "resultsListB5"]
    : isW4 ? ["resultsListA4", "resultsListB4"]
    : isW3 ? ["resultsListA3", "resultsListB3"]
    : isW2 ? ["resultsListA2", "resultsListB2"]
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
  $("week4Block").style.display = "none";
  $("week5Block").style.display = "none";
  $("resultSearch").value = "";
  applyResultSearch();
}

function showWeek2() {
  $("week1Block").style.display = "none";
  $("week2Block").style.display = "";
  $("week3Block").style.display = "none";
  $("week4Block").style.display = "none";
  $("week5Block").style.display = "none";
  $("resultSearch").value = "";
  applyResultSearch();
}

function showWeek3() {
  $("week1Block").style.display = "none";
  $("week2Block").style.display = "none";
  $("week3Block").style.display = "";
  $("week4Block").style.display = "none";
  $("week5Block").style.display = "none";
  $("resultSearch").value = "";
  applyResultSearch();
}

function showWeek4() {
  $("week1Block").style.display = "none";
  $("week2Block").style.display = "none";
  $("week3Block").style.display = "none";
  $("week4Block").style.display = "";
  $("week5Block").style.display = "none";
  $("resultSearch").value = "";
  applyResultSearch();
}

function showWeek5() {
  $("week1Block").style.display = "none";
  $("week2Block").style.display = "none";
  $("week3Block").style.display = "none";
  $("week4Block").style.display = "none";
  $("week5Block").style.display = "";
  $("resultSearch").value = "";
  applyResultSearch();
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

  $("resultSearch")?.addEventListener("input", applyResultSearch);

  $("btnClearResults")?.addEventListener("click", () => {
    $("resultSearch").value = "";
    applyResultSearch();
  });

  $("btnShowWeek1")?.addEventListener("click", showWeek1);
  $("btnShowWeek2")?.addEventListener("click", showWeek2);
  $("btnShowWeek3")?.addEventListener("click", showWeek3);
  $("btnShowWeek4")?.addEventListener("click", showWeek4);
  $("btnShowWeek5")?.addEventListener("click", showWeek5);

  showWeek1();
});
