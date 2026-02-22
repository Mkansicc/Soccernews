"use strict";

/* Script.js v16
  - Fixtures updated from attached PDFs:
    Stream A fixture list (Weeks 1–14) :contentReference[oaicite:2]{index=2}
    Stream B fixture list (Weeks 1–14) :contentReference[oaicite:3]{index=3}
  - Week 1 results kept as-is
  - Week 2 results updated (Morning Stars 3-1 Fast Eleven)
  - OVERALL LOG = Week1 + Week2 combined (played matches only)
*/

const DONATE_URL = "https://example.com/donate"; // change if you want

// ===============================
// FIXTURES (FROM PDFs) — Stream A + Stream B
// Date format kept readable for your table
// Time/Venue not provided in PDFs → set to TBC
// Status: Week 1–2 Played, Week 3–14 Scheduled
// ===============================
const fixtures = [
  // ---------------------------
  // STREAM A
  // ---------------------------
  // WEEK 1 — Saturday 14 Feb 2026
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "FC Wondrous", away: "Royal Tigers FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Fast Eleven FC", away: "Crusaders FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Highlanders FC", away: "Eastern Rangers FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Movers FC", away: "Morning Stars FC", venue: "TBC", status: "Played" },

  // WEEK 2 — Sunday 22 Feb 2026
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Crusaders FC", away: "FC Wondrous", venue: "TBC", status: "Played" },
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Royal Tigers FC", away: "Eastern Rangers FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Morning Stars FC", away: "Fast Eleven FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Movers FC", away: "Highlanders FC", venue: "TBC", status: "Played" },

  // WEEK 3 — Friday 27 Feb 2026
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Eastern Rangers FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Crusaders FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Royal Tigers FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Highlanders FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },

  // WEEK 4 — Sunday 8 March 2026
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "FC Wondrous", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Movers FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Highlanders FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Fast Eleven FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },

  // WEEK 5 — Saturday 14 March 2026
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "FC Wondrous", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Morning Stars FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Eastern Rangers FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Royal Tigers FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },

  // WEEK 6 — Sunday 22 March 2026
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Highlanders FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Movers FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Morning Stars FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Crusaders FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },

  // WEEK 7 — Saturday 28 March 2026
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Fast Eleven FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Royal Tigers FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Movers FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Eastern Rangers FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },

  // WEEK 8 — Monday 6 April 2026
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Royal Tigers FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Crusaders FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Eastern Rangers FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Morning Stars FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },

  // WEEK 9 — Saturday 11 April 2026
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "FC Wondrous", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Eastern Rangers FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Fast Eleven FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Highlanders FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },

  // WEEK 10 — Sunday 19 April 2026
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "FC Wondrous", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Morning Stars FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Movers FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Fast Eleven FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },

  // WEEK 11 — Saturday 25 April 2026
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Morning Stars FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Eastern Rangers FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Crusaders FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Royal Tigers FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },

  // WEEK 12 — Sunday 3 May 2026
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Movers FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Highlanders FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Fast Eleven FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Crusaders FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },

  // WEEK 13 — Saturday 9 May 2026
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "FC Wondrous", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Fast Eleven FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Royal Tigers FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Eastern Rangers FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },

  // WEEK 14 — Sunday 17 May 2026
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "FC Wondrous", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Highlanders FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Crusaders FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Morning Stars FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },

  // ---------------------------
  // STREAM B
  // ---------------------------
  // WEEK 1 — Saturday 14 Feb 2026
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Liverpool FC", away: "Junior Pirates FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Labamba FC", away: "City Pillars FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Xihuhuri FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Real Rangers FC", away: "Bhubhezi FC", venue: "TBC", status: "Played" },

  // WEEK 2 — Sunday 22 Feb 2026
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "City Pillars FC", away: "Liverpool FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Junior Pirates FC", away: "Xihuhuri FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Bhubhezi FC", away: "Labamba FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Real Rangers FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Played" },

  // WEEK 3 — Friday 27 Feb 2026
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Xihuhuri FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "City Pillars FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Real Rangers FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },

  // WEEK 4 — Sunday 8 March 2026
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Liverpool FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Xihuhuri FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "City Pillars FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Labamba FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },

  // WEEK 5 — Saturday 14 March 2026
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Real Rangers FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Bhubhezi FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Xihuhuri FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Junior Pirates FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },

  // WEEK 6 — Sunday 22 March 2026
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Labamba FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Bhubhezi FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "City Pillars FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },

  // WEEK 7 — Saturday 28 March 2026
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Liverpool FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Junior Pirates FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Real Rangers FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Xihuhuri FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },

  // WEEK 8 — Monday 6 April 2026
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Junior Pirates FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "City Pillars FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Xihuhuri FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Bhubhezi FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },

  // WEEK 9 — Saturday 11 April 2026
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Liverpool FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Xihuhuri FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Labamba FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },

  // WEEK 10 — Sunday 19 April 2026
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Liverpool FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Bhubhezi FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Junior Pirates FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Labamba FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },

  // WEEK 11 — Saturday 25 April 2026
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Bhubhezi FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Real Rangers FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Welverdiend Masters FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Junior Pirates FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },

  // WEEK 12 — Sunday 3 May 2026
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Liverpool FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Labamba FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "City Pillars FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },

  // WEEK 13 — Saturday 9 May 2026
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Liverpool FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Real Rangers FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Junior Pirates FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Xihuhuri FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },

  // WEEK 14 — Sunday 17 May 2026
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Labamba FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "City Pillars FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Bhubhezi FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
];

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

// WEEK 2 (as last edited by you)
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

// Overall results set (Week1 + Week2)
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
      <td>${safeText(f.date)} <span class="pill small-pill">W${safeText(f.week)}</span></td>
      <td>${safeText(f.time)}</td>
      <td><strong>${safeText(f.home)}</strong> vs ${safeText(f.away)} <span class="pill small-pill">Stream ${safeText(f.stream)}</span></td>
      <td>${safeText(f.venue)}</td>
      <td>${safeText(f.status)}</td>
    `;
    body.appendChild(tr);
  }
}

function applyFixtureFilters() {
  const q = ($("fixtureSearch").value || "").toLowerCase().trim();

  const filtered = fixtures.filter((f) => {
    if (fixtureStreamFilter && f.stream !== fixtureStreamFilter) return false;
    if (!q) return true;
    const hay = `${f.home} ${f.away} ${f.venue} ${f.stream} week ${f.week} ${f.date}`.toLowerCase();
    return hay.includes(q);
  });

  renderFixtures(filtered);
}

function setNextMatchCard() {
  // pick first Scheduled match
  const f = fixtures.find(x => x.status === "Scheduled") || fixtures[0];
  if (!f) {
    $("nextMatch").textContent = "No fixtures set";
    $("nextMatchMeta").textContent = "";
    return;
  }
  $("nextMatch").textContent = `${f.home} vs ${f.away}`;
  $("nextMatchMeta").textContent = `Stream ${f.stream} • Week ${f.week} • ${f.date} ${f.time} • ${f.venue}`;
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
document.addEventListener("DOMContentLoaded", () => {
  $("yearNow").textContent = new Date().getFullYear();

  const d = $("donateLink");
  if (d) d.href = DONATE_URL;

  // fixtures
  renderFixtures(fixtures);
  setNextMatchCard();

  // results
  renderResults("resultsListA1", week1.A);
  renderResults("resultsListB1", week1.B);
  renderResults("resultsListA2", week2.A);
  renderResults("resultsListB2", week2.B);

  // overall logs
  const rowsA = computeTable("A", overall);
  const rowsB = computeTable("B", overall);
  renderLog("logBodyA", rowsA);
  renderLog("logBodyB", rowsB);

  // leaders
  $("leaderA").textContent = rowsA[0]?.team ? `A: ${rowsA[0].team} (${rowsA[0].Pts} pts)` : "A: N/A";
  $("leaderB").textContent = rowsB[0]?.team ? `B: ${rowsB[0].team} (${rowsB[0].Pts} pts)` : "B: N/A";

  $("highlightResult").textContent = bestHighlightLatestPlayed();

  // result search + week toggle
  $("resultSearch").addEventListener("input", applyResultSearch);
  $("btnClearResults").addEventListener("click", () => {
    $("resultSearch").value = "";
    applyResultSearch();
  });
  $("btnShowWeek1").addEventListener("click", showWeek1);
  $("btnShowWeek2").addEventListener("click", showWeek2);

  // fixture filters
  $("fixtureSearch").addEventListener("input", applyFixtureFilters);
  $("btnStreamA").addEventListener("click", () => { fixtureStreamFilter = "A"; applyFixtureFilters(); });
  $("btnStreamB").addEventListener("click", () => { fixtureStreamFilter = "B"; applyFixtureFilters(); });
  $("btnClearFixture").addEventListener("click", () => { fixtureStreamFilter = null; $("fixtureSearch").value = ""; applyFixtureFilters(); });

  // slideshow
  renderSlide();
  $("nextPhoto").addEventListener("click", nextSlide);
  $("prevPhoto").addEventListener("click", prevSlide);
  setInterval(() => { if (slides.length > 1) nextSlide(); }, 7000);

  showWeek1();
});
