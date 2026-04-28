"use strict";

const DONATE_URL = "https://www.paypal.com/donate/?business=mkansicc@gmail.com&currency_code=ZAR";

/* ===============================
TEAMS
=============================== */

const teams = {
  A: [
    "Morning Stars FC",
    "Crusaders FC",
    "Royal Tigers FC",
    "Highlanders FC",
    "Eastern Rangers FC",
    "Fast Eleven FC",
    "FC Wondrous",
    "Movers FC"
  ],

  B: [
    "Labamba FC",
    "Bhubhezi FC",
    "Liverpool FC",
    "Xihuhuri FC",
    "Welverdiend Masters FC",
    "Junior Pirates FC",
    "Real Rangers FC",
    "City Pillars FC"
  ]
};

/* ===============================
WEEK 11 (NEW)
=============================== */

const week11 = {
  A: [
    { home: "Crusaders FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 1 },
    { home: "Eastern Rangers FC", away: "Movers FC", homeGoals: null, awayGoals: null, note: "Pending" },
    { home: "Morning Stars FC", away: "FC Wondrous", homeGoals: 4, awayGoals: 0 },
    { home: "Royal Tigers FC", away: "Fast Eleven FC", homeGoals: 3, awayGoals: 0 }
  ],

  B: [
    { home: "Bhubhezi FC", away: "Liverpool FC", homeGoals: 1, awayGoals: 4 },
    { home: "Real Rangers FC", away: "Xihuhuri FC", homeGoals: null, awayGoals: null, note: "Pending" },
    { home: "Welverdiend Masters FC", away: "City Pillars FC", homeGoals: 2, awayGoals: 2 },
    { home: "Junior Pirates FC", away: "Labamba FC", homeGoals: 3, awayGoals: 4 },
    { home: "Bhubhezi FC", away: "City Pillars FC", homeGoals: 1, awayGoals: 2, note: "Outstanding" }
  ]
};

/* ===============================
ADD WEEK 11 TO SYSTEM
=============================== */

const allWeeks = [
  { key: 11, label: "Week 11", A: week11.A, B: week11.B }
];

const overall = {
  A: [...week11.A.filter(m => m.homeGoals !== null)],
  B: [...week11.B.filter(m => m.homeGoals !== null)]
};

/* ===============================
HELPERS
=============================== */

const $ = id => document.getElementById(id);

function renderResults(id, data) {
  const el = $(id);
  if (!el) return;

  el.innerHTML = "";

  if (!data.length) {
    el.innerHTML = "<li>No confirmed result yet.</li>";
    return;
  }

  data.forEach(m => {
    const li = document.createElement("li");

    if (m.homeGoals === null) {
      li.textContent = `${m.home} vs ${m.away} (${m.note})`;
    } else {
      li.innerHTML = `
        <strong>${m.home}</strong> ${m.homeGoals} – ${m.awayGoals} ${m.away}
        ${m.note ? `<span class="small-pill">${m.note}</span>` : ""}
      `;
    }

    el.appendChild(li);
  });
}

/* ===============================
TABLE LOGIC
=============================== */

function computeTable(streamKey) {
  const table = {};

  teams[streamKey].forEach(team => {
    table[team] = {
      team,
      P: 0, W: 0, D: 0, L: 0,
      GF: 0, GA: 0, GD: 0,
      Pts: 0
    };
  });

  overall[streamKey].forEach(m => {
    const h = table[m.home];
    const a = table[m.away];

    if (!h || !a) return;

    h.P++; a.P++;

    h.GF += m.homeGoals;
    h.GA += m.awayGoals;
    a.GF += m.awayGoals;
    a.GA += m.homeGoals;

    if (m.homeGoals > m.awayGoals) {
      h.W++; a.L++; h.Pts += 3;
    } else if (m.homeGoals < m.awayGoals) {
      a.W++; h.L++; a.Pts += 3;
    } else {
      h.D++; a.D++; h.Pts++; a.Pts++;
    }
  });

  Object.values(table).forEach(t => {
    t.GD = t.GF - t.GA;
  });

  return Object.values(table).sort((a, b) =>
    b.Pts - a.Pts || b.GD - a.GD || b.GF - a.GF
  );
}

function renderLog(id, rows) {
  const body = $(id);
  if (!body) return;

  body.innerHTML = "";

  rows.forEach((r, i) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${r.team}</td>
      <td>${r.P}</td>
      <td>${r.W}</td>
      <td>${r.D}</td>
      <td>${r.L}</td>
      <td>${r.GF}</td>
      <td>${r.GA}</td>
      <td>${r.GD}</td>
      <td>${r.Pts}</td>
    `;

    body.appendChild(tr);
  });
}

/* ===============================
INIT
=============================== */

document.addEventListener("DOMContentLoaded", () => {

  const donateLink = $("donateLink");
  if (donateLink) donateLink.href = DONATE_URL;

  renderResults("resultsListA11", week11.A);
  renderResults("resultsListB11", week11.B);

  renderLog("logBodyA", computeTable("A"));
  renderLog("logBodyB", computeTable("B"));

});
