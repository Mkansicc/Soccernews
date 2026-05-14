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
RESULTS
=============================== */

// Weeks 1–11 (unchanged, already in your file)

// Week 12 (NEW)
const week12 = {
  A: [
    { home: "FC Wondrous", away: "Highlanders FC", homeGoals: 1, awayGoals: 2 },
    { home: "Fast Eleven FC", away: "Movers FC", homeGoals: 2, awayGoals: 3 },
    { home: "Royal Tigers FC", away: "Morning Stars FC", homeGoals: 3, awayGoals: 4 },
    { home: "Eastern Rangers FC", away: "Crusaders FC", homeGoals: 0, awayGoals: 2, note: "Walkover" }
  ],
  B: [
    { home: "Liverpool FC", away: "Welverdiend Masters FC", homeGoals: 3, awayGoals: 1 },
    { home: "Real Rangers FC", away: "Labamba FC", homeGoals: 1, awayGoals: 3 },
    { home: "Junior Pirates FC", away: "Bhubhezi FC", homeGoals: 0, awayGoals: 1 },
    { home: "Xihuhuri FC", away: "City Pillars FC", homeGoals: 2, awayGoals: 0, note: "Walkover" }
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
  { key: 8, label: "Week 8", A: week8.A, B: week8.B },
  { key: 9, label: "Week 9", A: week9.A, B: week9.B },
  { key: 10, label: "Week 10", A: week10.A, B: week10.B },
  { key: 11, label: "Week 11", A: week11.A, B: week11.B },
  { key: 12, label: "Week 12", A: week12.A, B: week12.B }
];

const overall = {
  A: [
    ...week1.A, ...week2.A, ...week3.A, ...week4.A, ...week5.A,
    ...week6.A, ...week7.A, ...week8.A, ...week9.A, ...week10.A,
    ...week11.A, ...week12.A
  ],
  B: [
    ...week1.B, ...week2.B, ...week3.B, ...week4.B, ...week5.B,
    ...week6.B, ...week7.B, ...week8.B, ...week9.B, ...week10.B,
    ...week11.B, ...week12.B
  ]
};

/* ===============================
FIXTURES
=============================== */
// (Keep your existing fixtures array as-is)

/* ===============================
HELPERS
=============================== */
// (Keep your helper functions as-is)

/* ===============================
INIT
=============================== */

document.addEventListener("DOMContentLoaded", () => {
  const donateLink = $("donateLink");
  if (donateLink) donateLink.href = DONATE_URL;

  const yearNow = $("yearNow");
  if (yearNow) yearNow.textContent = new Date().getFullYear();

  // Render results for Weeks 1–11 (unchanged)
  renderResults("resultsListA1", week1.A);
  renderResults("resultsListB1", week1.B);
  // ...
  renderResults("resultsListA11", week11.A);
  renderResults("resultsListB11", week11.B);

  // Week 12 (NEW)
  renderResults("resultsListA12", week12.A);
  renderResults("resultsListB12", week12.B);

  renderLog("logBodyA", computeTable("A"));
  renderLog("logBodyB", computeTable("B"));

  renderFixtures();
  setLeaders();
  setupWeekButtons();
  setupFixtureFilters();
  setupResultSearch();
  setupPhotos();
  showWeek(12); // Show latest week by default
});
