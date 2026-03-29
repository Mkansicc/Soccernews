"use strict";

/* Script.js v40 FIXED */

const DONATE_URL = "https://www.paypal.com/donate/?business=mkansicc@gmail.com&currency_code=ZAR";

/* ===============================
TEAMS
=============================== */

const teams = {
A:[
"Morning Stars FC",
"Crusaders FC",
"Royal Tigers FC",
"Highlanders FC",
"Eastern Rangers FC",
"Fast Eleven FC",
"FC Wondrous",
"Movers FC"
],

B:[
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

const week1={
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

const week2={
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

const week3={
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

const week4={
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

const week5={
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

const week6={
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

const overall={
A:[...week1.A,...week2.A,...week3.A,...week4.A,...week5.A,...week6.A],
B:[...week1.B,...week2.B,...week3.B,...week4.B,...week5.B,...week6.B]
};

/* ===============================
HELPERS
=============================== */

const $=id=>document.getElementById(id);

function renderResults(id,data){

const el=$(id);
if(!el)return;

el.innerHTML="";

data.forEach(m=>{
const li=document.createElement("li");

li.innerHTML=`<strong>${m.home}</strong> ${m.homeGoals} – ${m.awayGoals} ${m.away}`;

el.appendChild(li);
});
}

/* ===============================
LOG TABLE
=============================== */

function computeTable(streamKey){

const table={};

teams[streamKey].forEach(t=>{
table[t]={team:t,P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,Pts:0};
});

overall[streamKey].forEach(m=>{

const h=table[m.home];
const a=table[m.away];

h.P++; a.P++;

h.GF+=m.homeGoals;
h.GA+=m.awayGoals;

a.GF+=m.awayGoals;
a.GA+=m.homeGoals;

if(m.homeGoals>m.awayGoals){

h.W++; a.L++; h.Pts+=3;

}else if(m.homeGoals<m.awayGoals){

a.W++; h.L++; a.Pts+=3;

}else{

h.D++; a.D++; h.Pts++; a.Pts++;

}

});

Object.values(table).forEach(t=>t.GD=t.GF-t.GA);

return Object.values(table).sort((a,b)=>
b.Pts-a.Pts||b.GD-a.GD||b.GF-a.GF
);

}

function renderLog(id,rows){

const body=$(id);

body.innerHTML="";

rows.forEach((r,i)=>{

const tr=document.createElement("tr");

tr.innerHTML=`
<td>${i+1}</td>
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

document.addEventListener("DOMContentLoaded",()=>{

renderResults("resultsListA1",week1.A);
renderResults("resultsListB1",week1.B);

renderResults("resultsListA2",week2.A);
renderResults("resultsListB2",week2.B);

renderResults("resultsListA3",week3.A);
renderResults("resultsListB3",week3.B);

renderResults("resultsListA4",week4.A);
renderResults("resultsListB4",week4.B);

renderResults("resultsListA5",week5.A);
renderResults("resultsListB5",week5.B);

renderResults("resultsListA6",week6.A);
renderResults("resultsListB6",week6.B);

renderLog("logBodyA",computeTable("A"));
renderLog("logBodyB",computeTable("B"));

});
