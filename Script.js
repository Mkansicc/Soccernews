"use strict";

/* Script.js v42 UPDATED */

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
RESULTS
=============================== */

const week1 = {
  A: [
    { home: "Morning Stars FC", away: "Movers FC", homeGoals: 4, awayGoals: 0 },
    { home: "Crusaders FC", away: "FC Wondrous", homeGoals: 2, awayGoals: 0 },
    { home: "Royal Tigers FC", away: "Fast Eleven FC", homeGoals: 2, awayGoals: 0 },
    { home: "Highlanders FC", away: "Eastern Rangers FC", homeGoals: 2, awayGoals: 1 }
  ],

  B: [
    { home: "Labamba FC", away: "City Pillars FC", homeGoals: 7, awayGoals: 1 },
    { home: "Bhubhezi FC", away: "Real Rangers FC", homeGoals: 4, awayGoals: 0 },
    { home: "Liverpool FC", away: "Junior Pirates FC", homeGoals: 2, awayGoals: 0 },
    { home: "Xihuhuri FC", away: "Welverdiend Masters FC", homeGoals: 4, awayGoals: 3 }
  ]
};

const week2 = {
  A: [
    { home: "Crusaders FC", away: "FC Wondrous", homeGoals: 3, awayGoals: 2 },
    { home: "Royal Tigers FC", away: "Eastern Rangers FC", homeGoals: 0, awayGoals: 1 },
    { home: "Morning Stars FC", away: "Fast Eleven FC", homeGoals: 3, awayGoals: 1 },
    { home: "Movers FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 2 }
  ],

  B: [
    { home: "City Pillars FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 1 },
    { home: "Junior Pirates FC", away: "Xihuhuri FC", homeGoals: 2, awayGoals: 0 },
    { home: "Bhubhezi FC", away: "Labamba FC", homeGoals: 2, awayGoals: 1 },
    { home: "Real Rangers FC", away: "Welverdiend Masters FC", homeGoals: 1, awayGoals: 3 }
  ]
};

const week3 = {
  A: [
    { home: "Eastern Rangers FC", away: "FC Wondrous", homeGoals: 1, awayGoals: 2 },
    { home: "Crusaders FC", away: "Morning Stars FC", homeGoals: 0, awayGoals: 1 },
    { home: "Royal Tigers FC", away: "Movers FC", homeGoals: 4, awayGoals: 2 },
    { home: "Highlanders FC", away: "Fast Eleven FC", homeGoals: 4, awayGoals: 1 }
  ],

  B: [
    { home: "Xihuhuri FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 0 },
    { home: "City Pillars FC", away: "Bhubhezi FC", homeGoals: 1, awayGoals: 2 },
    { home: "Real Rangers FC", away: "Junior Pirates FC", homeGoals: 0, awayGoals: 1 },
    { home: "Welverdiend Masters FC", away: "Labamba FC", homeGoals: 0, awayGoals: 0 }
  ]
};

const week4 = {
  A: [
    { home: "FC Wondrous", away: "Morning Stars FC", homeGoals: 0, awayGoals: 1 },
    { home: "Highlanders FC", away: "Crusaders FC", homeGoals: 1, awayGoals: 1 },
    { home: "Movers FC", away: "Eastern Rangers FC", homeGoals: 2, awayGoals: 1 },
    { home: "Fast Eleven FC", away: "Royal Tigers FC", homeGoals: 0, awayGoals: 2 }
  ],

  B: [
    { home: "Liverpool FC", away: "Bhubhezi FC", homeGoals: 2, awayGoals: 0 },
    { home: "Xihuhuri FC", away: "Real Rangers FC", homeGoals: 7, awayGoals: 0 },
    { home: "City Pillars FC", away: "Welverdiend Masters FC", homeGoals: 1, awayGoals: 0 },
    { home: "Labamba FC", away: "Junior Pirates FC", homeGoals: 3, awayGoals: 1 }
  ]
};

const week5 = {
  A: [
    { home: "FC Wondrous", away: "Movers FC", homeGoals: 6, awayGoals: 0 },
    { home: "Morning Stars FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 0 },
    { home: "Eastern Rangers FC", away: "Fast Eleven FC", homeGoals: 2, awayGoals: 0, note: "Walkover" },
    { home: "Royal Tigers FC", away: "Crusaders FC", homeGoals: 1, awayGoals: 3 }
  ],

  B: [
    { home: "Real Rangers FC", away: "Liverpool FC", homeGoals: 0, awayGoals: 7 },
    { home: "Bhubhezi FC", away: "Welverdiend Masters FC", homeGoals: 2, awayGoals: 2 },
    { home: "Xihuhuri FC", away: "Labamba FC", homeGoals: 0, awayGoals: 4 },
    { home: "Junior Pirates FC", away: "City Pillars FC", homeGoals: 3, awayGoals: 2 }
  ]
};

const week6 = {
  A: [
    { home: "Highlanders FC", away: "FC Wondrous", homeGoals: 0, awayGoals: 1 },
    { home: "Movers FC", away: "Fast Eleven FC", homeGoals: 2, awayGoals: 1 },
    { home: "Morning Stars FC", away: "Royal Tigers FC", homeGoals: 4, awayGoals: 0 },
    { home: "Crusaders FC", away: "Eastern Rangers FC", homeGoals: 1, awayGoals: 2 }
  ],

  B: [
    { home: "Welverdiend Masters FC", away: "Liverpool FC", homeGoals: 1, awayGoals: 2 },
    { home: "Labamba FC", away: "Real Rangers FC", homeGoals: 6, awayGoals: 0 },
    { home: "Bhubhezi FC", away: "Junior Pirates FC", homeGoals: 1, awayGoals: 1 },
    { home: "City Pillars FC", away: "Xihuhuri FC", homeGoals: 2, awayGoals: 3 }
  ]
};

const week7 = {
  A: [
    { home: "Fast Eleven FC", away: "FC Wondrous", homeGoals: 0, awayGoals: 3, note: "Walkover" },
    { home: "Royal Tigers FC", away: "Highlanders FC", homeGoals: 2, awayGoals: 1 },
    { home: "Eastern Rangers FC", away: "Morning Stars FC", homeGoals: 0, awayGoals: 0 },
    { home: "Movers FC", away: "Crusaders FC", homeGoals: 0, awayGoals: 0 }
  ],

  B: [
    { home: "Liverpool FC", away: "Labamba FC", homeGoals: 2, awayGoals: 2 },
    { home: "Junior Pirates FC", away: "Welverdiend Masters FC", homeGoals: 0, awayGoals: 2 },
    { home: "Real Rangers FC", away: "City Pillars FC", homeGoals: 0, awayGoals: 3, note: "Walkover" },
    { home: "Xihuhuri FC", away: "Bhubhezi FC", homeGoals: 2, awayGoals: 2 }
  ]
};

const week8 = {
  A: [
    { home: "Royal Tigers FC", away: "FC Wondrous", homeGoals: 7, awayGoals: 2 },
    { home: "Crusaders FC", away: "Fast Eleven FC", homeGoals: 4, awayGoals: 3 },
    { home: "Eastern Rangers FC", away: "Highlanders FC", homeGoals: 1, awayGoals: 1 },
    { home: "Morning Stars FC", away: "Movers FC", homeGoals: 2, awayGoals: 1 }
  ],

  B: [
    { home: "Junior Pirates FC", away: "Liverpool FC", homeGoals: 3, awayGoals: 2 },
    { home: "City Pillars FC", away: "Labamba FC", homeGoals: 0, awayGoals: 2 },
    { home: "Bhubhezi FC", away: "Real Rangers FC", homeGoals: 3, awayGoals: 1 }
  ]
};

const allWeeks = [
  { key: 1, label: "Week 1", A: week1.A, B: week1.B },
  { key: 2, label: "Week 2", A: week2.A, B: week2.B },
  { key: 3, label: "Week 3", A: week3.A, B: week3.B },
  { key: 4, label: "Week 4", A: week4.A, B: week4.B },
  { key: 5, label: "Week 5", A: week5.A, B: week5.B },
  { key: 6, label: "Week 6", A: week6.A, B: week6.B },
  { key: 7, label: "Week 7", A: week7.A, B: week7.B },
  { key: 8, label: "Week 8", A: week8.A, B: week8.B }
];

const overall = {
  A: [...week1.A, ...week2.A, ...week3.A, ...week4.A, ...week5.A, ...week6.A, ...week7.A, ...week8.A],
  B: [...week1.B, ...week2.B, ...week3.B, ...week4.B, ...week5.B, ...week6.B, ...week7.B, ...week8.B]
};

/* ===============================
FIXTURES
=============================== */

const fixtures = [
  { date: "Tuesday, 31 March 2026", time: "16:00", match: "Junior Pirates FC vs Liverpool FC", venue: "Junior Pirates FC", status: "FT • 3-2", stream: "B" },
  { date: "Tuesday, 31 March 2026", time: "16:00", match: "City Pillars FC vs Labamba FC", venue: "City Pillars FC", status: "FT • 0-2", stream: "B" },
  { date: "Tuesday, 31 March 2026", time: "16:00", match: "Bhubhezi FC vs Real Rangers FC", venue: "Bhubhezi FC", status: "FT • 3-1", stream: "B" },

  { date: "Tuesday, 31 March 2026", time: "16:00", match: "Royal Tigers FC vs FC Wondrous", venue: "Royal Tigers FC", status: "FT • 7-2", stream: "A" },
  { date: "Tuesday, 31 March 2026", time: "16:00", match: "Crusaders FC vs Fast Eleven FC", venue: "Crusaders FC", status: "FT • 4-3", stream: "A" },
  { date: "Tuesday, 31 March 2026", time: "16:00", match: "Eastern Rangers FC vs Highlanders FC", venue: "Eastern Rangers FC", status: "FT • 1-1", stream: "A" },
  { date: "Tuesday, 31 March 2026", time: "16:00", match: "Morning Stars FC vs Movers FC", venue: "Morning Stars FC", status: "FT • 2-1", stream: "A" },

  { date: "Monday, 06 April 2026", time: "16:00", match: "Xihuhuri FC vs Welverdiend Masters FC", venue: "Xihuhuri FC", status: "Postponed match", stream: "B" },
  { date: "Saturday, 11 April 2026", time: "-", match: "League resumes after Easter holiday", venue: "-", status: "Notice", stream: "NOTICE" }
];

/* ===============================
HELPERS
=============================== */

const $ = id => document.getElementById(id);

function renderResults(id, data) {
  const el = $(id);
  if (!el) return;

  el.innerHTML = "";

  data.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${m.home}</strong> ${m.homeGoals} – ${m.awayGoals} ${m.away}
      ${m.note ? `<span class="small-pill">${m.note}</span>` : ""}
    `;
    el.appendChild(li);
  });
}

function computeTable(streamKey) {
  const table = {};

  teams[streamKey].forEach(t => {
    table[t] = { team: t, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };
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
      h.D++; a.D++; h.Pts += 1; a.Pts += 1;
    }
  });

  Object.values(table).forEach(t => t.GD = t.GF - t.GA);

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

function renderFixtures(list = fixtures) {
  const body = $("fixturesBody");
  if (!body) return;

  body.innerHTML = "";

  list.forEach(f => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${f.date}</td>
      <td>${f.time}</td>
      <td>${f.match}</td>
      <td>${f.venue}</td>
      <td>${f.status}</td>
    `;
    body.appendChild(tr);
  });
}

function setLeaders() {
  const tableA = computeTable("A");
  const tableB = computeTable("B");

  $("leaderA").textContent = `A: ${tableA[0].team} (${tableA[0].Pts} pts)`;
  $("leaderB").textContent = `B: ${tableB[0].team} (${tableB[0].Pts} pts)`;
}

function showWeek(weekNo) {
  document.querySelectorAll(".week-block").forEach(block => {
    block.style.display = "none";
  });

  const activeBlock = $(`week${weekNo}Block`);
  if (activeBlock) activeBlock.style.display = "block";

  document.querySelectorAll(".week-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = $(`btnShowWeek${weekNo}`);
  if (activeBtn) activeBtn.classList.add("active");
}

function setupWeekButtons() {
  for (let i = 1; i <= 8; i++) {
    const btn = $(`btnShowWeek${i}`);
    if (btn) {
      btn.addEventListener("click", () => showWeek(i));
    }
  }
}

function setupFixtureFilters() {
  const searchInput = $("fixtureSearch");
  const btnA = $("btnStreamA");
  const btnB = $("btnStreamB");
  const btnClear = $("btnClearFixture");

  let activeStream = "";

  function applyFilters() {
    const term = (searchInput.value || "").toLowerCase();

    const filtered = fixtures.filter(f => {
      const streamMatch = !activeStream || f.stream === activeStream || f.stream === "NOTICE";
      const textMatch =
        !term ||
        f.match.toLowerCase().includes(term) ||
        f.venue.toLowerCase().includes(term) ||
        f.date.toLowerCase().includes(term) ||
        f.status.toLowerCase().includes(term);
      return streamMatch && textMatch;
    });

    renderFixtures(filtered);
  }

  if (searchInput) searchInput.addEventListener("input", applyFilters);

  if (btnA) {
    btnA.addEventListener("click", () => {
      activeStream = "A";
      applyFilters();
    });
  }

  if (btnB) {
    btnB.addEventListener("click", () => {
      activeStream = "B";
      applyFilters();
    });
  }

  if (btnClear) {
    btnClear.addEventListener("click", () => {
      activeStream = "";
      if (searchInput) searchInput.value = "";
      renderFixtures(fixtures);
    });
  }
}

function setupResultSearch() {
  const input = $("resultSearch");
  const clearBtn = $("btnClearResults");
  if (!input) return;

  const resultMap = {
    resultsListA1: week1.A, resultsListB1: week1.B,
    resultsListA2: week2.A, resultsListB2: week2.B,
    resultsListA3: week3.A, resultsListB3: week3.B,
    resultsListA4: week4.A, resultsListB4: week4.B,
    resultsListA5: week5.A, resultsListB5: week5.B,
    resultsListA6: week6.A, resultsListB6: week6.B,
    resultsListA7: week7.A, resultsListB7: week7.B,
    resultsListA8: week8.A, resultsListB8: week8.B
  };

  function applyResultSearch() {
    const term = input.value.trim().toLowerCase();

    Object.entries(resultMap).forEach(([id, matches]) => {
      if (!term) {
        renderResults(id, matches);
      } else {
        const filtered = matches.filter(m =>
          m.home.toLowerCase().includes(term) ||
          m.away.toLowerCase().includes(term)
        );
        renderResults(id, filtered);
      }
    });
  }

  input.addEventListener("input", applyResultSearch);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      applyResultSearch();
    });
  }
}

function setupPhotos() {
  const slideImage = $("slideImage");
  const slideTitle = $("slideTitle");
  const slideMeta = $("slideMeta");
  const prevPhoto = $("prevPhoto");
  const nextPhoto = $("nextPhoto");

  if (!slideImage || !slideTitle || !slideMeta) return;

  const photos = Array.from({ length: 16 }, (_, i) => ({
    src: `images/photo${i + 1}.jpg`,
    title: `WSL Photo ${i + 1}`,
    meta: `Photo ${i + 1} of 16`
  }));

  let index = 0;

  function renderPhoto() {
    const photo = photos[index];
    slideImage.src = photo.src;
    slideTitle.textContent = photo.title;
    slideMeta.textContent = photo.meta;
  }

  if (prevPhoto) {
    prevPhoto.addEventListener("click", () => {
      index = (index - 1 + photos.length) % photos.length;
      renderPhoto();
    });
  }

  if (nextPhoto) {
    nextPhoto.addEventListener("click", () => {
      index = (index + 1) % photos.length;
      renderPhoto();
    });
  }

  slideImage.onerror = function () {
    this.src = "";
    slideTitle.textContent = "Add your team photos";
    slideMeta.textContent = "Put images/photo1.jpg up to images/photo16.jpg";
  };

  renderPhoto();
}

/* ===============================
INIT
=============================== */

document.addEventListener("DOMContentLoaded", () => {
  const donateLink = $("donateLink");
  if (donateLink) donateLink.href = DONATE_URL;

  const yearNow = $("yearNow");
  if (yearNow) yearNow.textContent = new Date().getFullYear();

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

  renderResults("resultsListA6", week6.A);
  renderResults("resultsListB6", week6.B);

  renderResults("resultsListA7", week7.A);
  renderResults("resultsListB7", week7.B);

  renderResults("resultsListA8", week8.A);
  renderResults("resultsListB8", week8.B);

  renderLog("logBodyA", computeTable("A"));
  renderLog("logBodyB", computeTable("B"));

  renderFixtures();
  setLeaders();
  setupWeekButtons();
  setupFixtureFilters();
  setupResultSearch();
  setupPhotos();
  showWeek(8);
});
