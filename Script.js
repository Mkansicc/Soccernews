"use strict";

/* Script.js
  - Shows LOG first (Stream A + Stream B) using Week 1 + Week 2 results (combined)
  - Fixtures are displayed per WEEK using buttons (W1..W14 + All)
  - Stream filter (A/B) + Search works on fixtures
  - Results section: toggle Week 1 / Week 2 (does NOT change logs)
*/

const $ = (id) => document.getElementById(id);

// ===============================
// FIXTURES (Weeks 1–14)  Stream A + Stream B
// Time/Venue not provided -> TBC
// ===============================
const fixtures = [
  // -------- Stream A --------
  // Week 1
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "FC Wondrous", away: "Royal Tigers FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Fast Eleven FC", away: "Crusaders FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Highlanders FC", away: "Eastern Rangers FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Movers FC", away: "Morning Stars FC", venue: "TBC", status: "Played" },

  // Week 2
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Crusaders FC", away: "FC Wondrous", venue: "TBC", status: "Played" },
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Royal Tigers FC", away: "Eastern Rangers FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Morning Stars FC", away: "Fast Eleven FC", venue: "TBC", status: "Played" },
  { stream: "A", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Movers FC", away: "Highlanders FC", venue: "TBC", status: "Played" },

  // Week 3
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Eastern Rangers FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Crusaders FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Royal Tigers FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Highlanders FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },

  // Week 4
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "FC Wondrous", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Movers FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Highlanders FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Fast Eleven FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },

  // Week 5
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "FC Wondrous", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Morning Stars FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Eastern Rangers FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Royal Tigers FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },

  // Week 6
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Highlanders FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Movers FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Morning Stars FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Crusaders FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },

  // Week 7
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Fast Eleven FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Royal Tigers FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Movers FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Eastern Rangers FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },

  // Week 8
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Royal Tigers FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Crusaders FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Eastern Rangers FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Morning Stars FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },

  // Week 9
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "FC Wondrous", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Eastern Rangers FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Fast Eleven FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Highlanders FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },

  // Week 10
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "FC Wondrous", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Morning Stars FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Movers FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Fast Eleven FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },

  // Week 11
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Morning Stars FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Eastern Rangers FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Crusaders FC", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Royal Tigers FC", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },

  // Week 12
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Movers FC", away: "FC Wondrous", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Highlanders FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Fast Eleven FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Crusaders FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },

  // Week 13
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "FC Wondrous", away: "Highlanders FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Fast Eleven FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Royal Tigers FC", away: "Morning Stars FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Eastern Rangers FC", away: "Crusaders FC", venue: "TBC", status: "Scheduled" },

  // Week 14
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "FC Wondrous", away: "Fast Eleven FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Highlanders FC", away: "Royal Tigers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Crusaders FC", away: "Movers FC", venue: "TBC", status: "Scheduled" },
  { stream: "A", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Morning Stars FC", away: "Eastern Rangers FC", venue: "TBC", status: "Scheduled" },

  // -------- Stream B --------
  // Week 1
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Liverpool FC", away: "Junior Pirates FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Labamba FC", away: "City Pillars FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Xihuhuri FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 1, date: "Sat 14 Feb 2026", time: "TBC", home: "Real Rangers FC", away: "Bhubhezi FC", venue: "TBC", status: "Played" },

  // Week 2
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "City Pillars FC", away: "Liverpool FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Junior Pirates FC", away: "Xihuhuri FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Bhubhezi FC", away: "Labamba FC", venue: "TBC", status: "Played" },
  { stream: "B", week: 2, date: "Sun 22 Feb 2026", time: "TBC", home: "Real Rangers FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Played" },

  // Week 3
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Xihuhuri FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "City Pillars FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Real Rangers FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 3, date: "Fri 27 Feb 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },

  // Week 4
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Liverpool FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Xihuhuri FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "City Pillars FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 4, date: "Sun 08 Mar 2026", time: "TBC", home: "Labamba FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },

  // Week 5
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Real Rangers FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Bhubhezi FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Xihuhuri FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 5, date: "Sat 14 Mar 2026", time: "TBC", home: "Junior Pirates FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },

  // Week 6
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Labamba FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "Bhubhezi FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 6, date: "Sun 22 Mar 2026", time: "TBC", home: "City Pillars FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },

  // Week 7
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Liverpool FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Junior Pirates FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Real Rangers FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 7, date: "Sat 28 Mar 2026", time: "TBC", home: "Xihuhuri FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },

  // Week 8
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Junior Pirates FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "City Pillars FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Xihuhuri FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 8, date: "Mon 06 Apr 2026", time: "TBC", home: "Bhubhezi FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },

  // Week 9
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Liverpool FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Xihuhuri FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Labamba FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 9, date: "Sat 11 Apr 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },

  // Week 10
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Liverpool FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Bhubhezi FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Junior Pirates FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 10, date: "Sun 19 Apr 2026", time: "TBC", home: "Labamba FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },

  // Week 11
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Bhubhezi FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Real Rangers FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Welverdiend Masters FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 11, date: "Sat 25 Apr 2026", time: "TBC", home: "Junior Pirates FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },

  // Week 12
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Liverpool FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "Labamba FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 12, date: "Sun 03 May 2026", time: "TBC", home: "City Pillars FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },

  // Week 13
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Liverpool FC", away: "Welverdiend Masters FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Real Rangers FC", away: "Labamba FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Junior Pirates FC", away: "Bhubhezi FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 13, date: "Sat 09 May 2026", time: "TBC", home: "Xihuhuri FC", away: "City Pillars FC", venue: "TBC", status: "Scheduled" },

  // Week 14
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Labamba FC", away: "Liverpool FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Welverdiend Masters FC", away: "Junior Pirates FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "City Pillars FC", away: "Real Rangers FC", venue: "TBC", status: "Scheduled" },
  { stream: "B", week: 14, date: "Sun 17 May 2026", time: "TBC", home: "Bhubhezi FC", away: "Xihuhuri FC", venue: "TBC", status: "Scheduled" },
];

// ===============================
// RESULTS (Week 1 + Week 2)
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

// Teams for log tables
const teams = {
  A: ["Morning Stars FC","Crusaders FC","Royal Tigers FC","Highlanders FC","Eastern Rangers FC","Fast Eleven FC","FC Wondrous","Movers FC"],
  B: ["Labamba FC","Bhubhezi FC","Liverpool FC","Xihuhuri FC","Welverdiend Masters FC","Junior Pirates FC","Real Rangers FC","City Pillars FC"],
};

// ===============================
// LOG calculation (overall = week1 + week2)
// ===============================
function isPlayed(m) {
  return Number.isInteger(m.homeGoals) && Number.isInteger(m.awayGoals);
}

function computeTable(streamKey, allResults) {
  const table = new Map();
  for (const t of teams[streamKey]) {
    table.set(t, { team: t, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 });
  }

  for (const m of allResults) {
    if (!isPlayed(m)) continue;

    const home = table.get(m.home);
    const away = table.get(m.away);

    home.P++; away.P++;
    home.GF += m.homeGoals; home.GA += m.awayGoals;
    away.GF += m.awayGoals; away.GA += m.homeGoals;

    if (m.homeGoals > m.awayGoals) { home.W++; home.Pts += 3; away.L++; }
    else if (m.homeGoals < m.awayGoals) { away.W++; away.Pts += 3; home.L++; }
    else { home.D++; away.D++; home.Pts++; away.Pts++; }

    home.GD = home.GF - home.GA;
    away.GD = away.GF - away.GA;
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
  if (!body) return;
  body.innerHTML = "";

  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><strong>${r.team}</strong></td>
      <td>${r.P}</td><td>${r.W}</td><td>${r.D}</td><td>${r.L}</td>
      <td>${r.GF}</td><td>${r.GA}</td><td>${r.GD >= 0 ? "+" : ""}${r.GD}</td>
      <td><strong>${r.Pts}</strong></td>
    `;
    body.appendChild(tr);
  });
}

// ===============================
// RESULTS rendering (Week 1 / Week 2 toggle)
// ===============================
function formatScore(h, a) { return `${h} – ${a}`; }

function renderResultsForWeek(weekData) {
  const aList = $("resultsListA");
  const bList = $("resultsListB");
  if (!aList || !bList) return;

  aList.innerHTML = "";
  bList.innerHTML = "";

  weekData.A.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${m.home}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${m.away}`;
    aList.appendChild(li);
  });

  weekData.B.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${m.home}</strong> ${formatScore(m.homeGoals, m.awayGoals)} ${m.away}`;
    bList.appendChild(li);
  });
}

function applyResultSearch() {
  const q = ($("resultSearch")?.value || "").toLowerCase().trim();
  ["resultsListA","resultsListB"].forEach(id => {
    const list = $(id);
    if (!list) return;
    list.querySelectorAll("li").forEach(li => {
      li.style.display = !q || li.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
}

// ===============================
// FIXTURES per WEEK buttons
// ===============================
let selectedWeek = null;     // null => All
let fixtureStreamFilter = null; // null => All streams

function maxWeek() {
  return fixtures.reduce((m, f) => Math.max(m, Number(f.week || 0)), 0);
}

function getDefaultWeek() {
  // first week that has a scheduled match
  const scheduled = fixtures.filter(f => f.status === "Scheduled");
  if (!scheduled.length) return null;
  return scheduled.reduce((min, f) => Math.min(min, f.week), scheduled[0].week);
}

function renderWeekButtons() {
  const wrap = $("weekButtons");
  const hint = $("weekHint");
  if (!wrap) return;

  wrap.innerHTML = "";

  const makeBtn = (label, weekValue) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-outline small-btn";
    btn.textContent = label;

    btn.addEventListener("click", () => {
      selectedWeek = weekValue;
      if (hint) hint.textContent = selectedWeek === null ? "Showing: All weeks" : `Showing: Week ${selectedWeek}`;
      applyFixtureFilters();
      // small visual active state
      wrap.querySelectorAll("button").forEach(b => b.classList.remove("btn-donate"));
      btn.classList.add("btn-donate");
    });

    return btn;
  };

  // All button
  wrap.appendChild(makeBtn("All", null));

  const mw = maxWeek();
  for (let w = 1; w <= mw; w++) {
    wrap.appendChild(makeBtn(`W${w}`, w));
  }

  // set default active
  const def = getDefaultWeek();
  selectedWeek = def; // can be null
  if (hint) hint.textContent = selectedWeek === null ? "Showing: All weeks" : `Showing: Week ${selectedWeek}`;

  // mark active button
  const buttons = wrap.querySelectorAll("button");
  // buttons[0] is All
  if (selectedWeek === null) {
    buttons[0]?.classList.add("btn-donate");
  } else {
    const idx = selectedWeek; // W1 => index 1
    buttons[idx]?.classList.add("btn-donate");
  }
}

function renderFixtures(list) {
  const body = $("fixturesBody");
  if (!body) return;

  body.innerHTML = "";
  if (!list.length) {
    body.innerHTML = `<tr><td colspan="5" class="muted">No fixtures found.</td></tr>`;
    return;
  }

  list.forEach(f => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${f.date} <span class="pill small-pill">W${f.week}</span></td>
      <td>${f.time}</td>
      <td><strong>${f.home}</strong> vs ${f.away} <span class="pill small-pill">Stream ${f.stream}</span></td>
      <td>${f.venue}</td>
      <td>${f.status}</td>
    `;
    body.appendChild(tr);
  });
}

function applyFixtureFilters() {
  const q = ($("fixtureSearch")?.value || "").toLowerCase().trim();

  const filtered = fixtures.filter(f => {
    if (fixtureStreamFilter && f.stream !== fixtureStreamFilter) return false;
    if (selectedWeek !== null && f.week !== selectedWeek) return false;
    if (!q) return true;
    const hay = `${f.home} ${f.away} ${f.date} ${f.stream} week ${f.week}`.toLowerCase();
    return hay.includes(q);
  });

  renderFixtures(filtered);
}

// ===============================
// Init
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // year
  const y = $("yearNow");
  if (y) y.textContent = new Date().getFullYear();

  // Logs (overall week1 + week2)
  const overallA = [...week1.A, ...week2.A];
  const overallB = [...week1.B, ...week2.B];
  renderLog("logBodyA", computeTable("A", overallA));
  renderLog("logBodyB", computeTable("B", overallB));

  // Fixtures week buttons + default week view
  renderWeekButtons();
  applyFixtureFilters();

  // Stream filter buttons for fixtures
  $("btnStreamA")?.addEventListener("click", () => { fixtureStreamFilter = "A"; applyFixtureFilters(); });
  $("btnStreamB")?.addEventListener("click", () => { fixtureStreamFilter = "B"; applyFixtureFilters(); });
  $("btnClearFixture")?.addEventListener("click", () => {
    fixtureStreamFilter = null;
    if ($("fixtureSearch")) $("fixtureSearch").value = "";
    applyFixtureFilters();
  });

  $("fixtureSearch")?.addEventListener("input", applyFixtureFilters);

  // Results default Week 1
  renderResultsForWeek(week1);

  $("btnShowWeek1")?.addEventListener("click", () => { renderResultsForWeek(week1); applyResultSearch(); });
  $("btnShowWeek2")?.addEventListener("click", () => { renderResultsForWeek(week2); applyResultSearch(); });

  $("btnClearResults")?.addEventListener("click", () => {
    if ($("resultSearch")) $("resultSearch").value = "";
    applyResultSearch();
  });

  $("resultSearch")?.addEventListener("input", applyResultSearch);
});
