"use strict";

/* Script.js v41
   ✅ Week 7 results added
   ✅ Liverpool FC 2-2 Labamba FC
   ✅ Log table now includes Week 7
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
A:[
{home:"Morning Stars FC",away:"Movers FC",homeGoals:4,awayGoals:0},
{home:"Crusaders FC",away:"FC Wondrous",homeGoals:2,awayGoals:0},
{home:"Royal Tigers FC",away:"Fast Eleven FC",homeGoals:2,awayGoals:0},
{home:"Highlanders FC",away:"Eastern Rangers FC",homeGoals:2,awayGoals:1}
],
B:[
{home:"Labamba FC",away:"City Pillars FC",homeGoals:7,awayGoals:1},
{home:"Bhubhezi FC",away:"Real Rangers FC",homeGoals:4,awayGoals:0},
{home:"Liverpool FC",away:"Junior Pirates FC",homeGoals:2,awayGoals:0},
{home:"Xihuhuri FC",away:"Welverdiend Masters FC",homeGoals:4,awayGoals:3}
]
};

const week2 = {
A:[
{home:"Crusaders FC",away:"FC Wondrous",homeGoals:3,awayGoals:2},
{home:"Royal Tigers FC",away:"Eastern Rangers FC",homeGoals:0,awayGoals:1},
{home:"Morning Stars FC",away:"Fast Eleven FC",homeGoals:3,awayGoals:1},
{home:"Movers FC",away:"Highlanders FC",homeGoals:1,awayGoals:2}
],
B:[
{home:"City Pillars FC",away:"Liverpool FC",homeGoals:0,awayGoals:1},
{home:"Junior Pirates FC",away:"Xihuhuri FC",homeGoals:2,awayGoals:0},
{home:"Bhubhezi FC",away:"Labamba FC",homeGoals:2,awayGoals:1},
{home:"Real Rangers FC",away:"Welverdiend Masters FC",homeGoals:1,awayGoals:3}
]
};

const week3 = {
A:[
{home:"Eastern Rangers FC",away:"FC Wondrous",homeGoals:1,awayGoals:2},
{home:"Crusaders FC",away:"Morning Stars FC",homeGoals:0,awayGoals:1},
{home:"Royal Tigers FC",away:"Movers FC",homeGoals:4,awayGoals:2},
{home:"Highlanders FC",away:"Fast Eleven FC",homeGoals:4,awayGoals:1}
],
B:[
{home:"Xihuhuri FC",away:"Liverpool FC",homeGoals:0,awayGoals:0},
{home:"City Pillars FC",away:"Bhubhezi FC",homeGoals:1,awayGoals:2},
{home:"Real Rangers FC",away:"Junior Pirates FC",homeGoals:0,awayGoals:1},
{home:"Welverdiend Masters FC",away:"Labamba FC",homeGoals:0,awayGoals:0}
]
};

const week4 = {
A:[
{home:"FC Wondrous",away:"Morning Stars FC",homeGoals:0,awayGoals:1},
{home:"Highlanders FC",away:"Crusaders FC",homeGoals:1,awayGoals:1},
{home:"Movers FC",away:"Eastern Rangers FC",homeGoals:2,awayGoals:1},
{home:"Fast Eleven FC",away:"Royal Tigers FC",homeGoals:0,awayGoals:2}
],
B:[
{home:"Liverpool FC",away:"Bhubhezi FC",homeGoals:2,awayGoals:0},
{home:"Xihuhuri FC",away:"Real Rangers FC",homeGoals:7,awayGoals:0},
{home:"City Pillars FC",away:"Welverdiend Masters FC",homeGoals:1,awayGoals:0},
{home:"Labamba FC",away:"Junior Pirates FC",homeGoals:3,awayGoals:1}
]
};

const week5 = {
A:[
{home:"FC Wondrous",away:"Movers FC",homeGoals:6,awayGoals:0},
{home:"Morning Stars FC",away:"Highlanders FC",homeGoals:1,awayGoals:0},
{home:"Eastern Rangers FC",away:"Fast Eleven FC",homeGoals:2,awayGoals:0,note:"Walkover"},
{home:"Royal Tigers FC",away:"Crusaders FC",homeGoals:1,awayGoals:3}
],
B:[
{home:"Real Rangers FC",away:"Liverpool FC",homeGoals:0,awayGoals:7},
{home:"Bhubhezi FC",away:"Welverdiend Masters FC",homeGoals:2,awayGoals:2},
{home:"Xihuhuri FC",away:"Labamba FC",homeGoals:0,awayGoals:4},
{home:"Junior Pirates FC",away:"City Pillars FC",homeGoals:3,awayGoals:2}
]
};

const week6 = {
A:[
{home:"Highlanders FC",away:"FC Wondrous",homeGoals:0,awayGoals:1},
{home:"Movers FC",away:"Fast Eleven FC",homeGoals:2,awayGoals:1},
{home:"Morning Stars FC",away:"Royal Tigers FC",homeGoals:4,awayGoals:0},
{home:"Crusaders FC",away:"Eastern Rangers FC",homeGoals:1,awayGoals:2}
],
B:[
{home:"Welverdiend Masters FC",away:"Liverpool FC",homeGoals:1,awayGoals:2},
{home:"Labamba FC",away:"Real Rangers FC",homeGoals:6,awayGoals:0},
{home:"Bhubhezi FC",away:"Junior Pirates FC",homeGoals:1,awayGoals:1},
{home:"City Pillars FC",away:"Xihuhuri FC",homeGoals:2,awayGoals:3}
]
};

// ===============================
// WEEK 7 RESULTS
// ===============================
const week7 = {
A:[
{home:"Fast Eleven FC",away:"FC Wondrous",homeGoals:null,awayGoals:null},
{home:"Royal Tigers FC",away:"Highlanders FC",homeGoals:null,awayGoals:null},
{home:"Movers FC",away:"Crusaders FC",homeGoals:null,awayGoals:null},
{home:"Eastern Rangers FC",away:"Morning Stars FC",homeGoals:null,awayGoals:null}
],
B:[
{home:"Liverpool FC",away:"Labamba FC",homeGoals:2,awayGoals:2},
{home:"Junior Pirates FC",away:"Welverdiend Masters FC",homeGoals:null,awayGoals:null},
{home:"Real Rangers FC",away:"City Pillars FC",homeGoals:null,awayGoals:null},
{home:"Xihuhuri FC",away:"Bhubhezi FC",homeGoals:null,awayGoals:null}
]
};

// ===============================
// OVERALL RESULTS
// ===============================
const overall = {
A:[
...week1.A,
...week2.A,
...week3.A,
...week4.A,
...week5.A,
...week6.A,
...week7.A
],
B:[
...week1.B,
...week2.B,
...week3.B,
...week4.B,
...week5.B,
...week6.B,
...week7.B
]
};

// ===============================
// TABLE CALCULATION
// ===============================
function computeTable(streamKey, resultsSet){

const table=new Map();

for(const t of teams[streamKey]){
table.set(t,{team:t,P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,Pts:0});
}

for(const m of resultsSet[streamKey]){

if(!Number.isInteger(m.homeGoals)||!Number.isInteger(m.awayGoals))continue;

const home=table.get(m.home);
const away=table.get(m.away);

home.P++;away.P++;

home.GF+=m.homeGoals;
home.GA+=m.awayGoals;
away.GF+=m.awayGoals;
away.GA+=m.homeGoals;

if(m.homeGoals>m.awayGoals){
home.W++;away.L++;home.Pts+=3;
}
else if(m.homeGoals<m.awayGoals){
away.W++;home.L++;away.Pts+=3;
}
else{
home.D++;away.D++;home.Pts++;away.Pts++;
}

home.GD=home.GF-home.GA;
away.GD=away.GF-away.GA;

}

const rows=[...table.values()];

rows.sort((a,b)=>
(b.Pts-a.Pts)||(b.GD-a.GD)||(b.GF-a.GF)
);

return rows;

}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded",()=>{

const rowsA=computeTable("A",overall);
const rowsB=computeTable("B",overall);

console.log("Stream A Table",rowsA);
console.log("Stream B Table",rowsB);

});
