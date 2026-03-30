"use strict";

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

const week7={
A:[
{home:"Fast Eleven FC",away:"FC Wondrous",homeGoals:0,awayGoals:3,note:"Walkover"},
{home:"Royal Tigers FC",away:"Highlanders FC",homeGoals:2,awayGoals:1},
{home:"Eastern Rangers FC",away:"Morning Stars FC",homeGoals:0,awayGoals:0},
{home:"Movers FC",away:"Crusaders FC",homeGoals:0,awayGoals:0}
],

B:[
{home:"Liverpool FC",away:"Labamba FC",homeGoals:2,awayGoals:2},
{home:"Junior Pirates FC",away:"Welverdiend Masters FC",homeGoals:0,awayGoals:2},
{home:"Real Rangers FC",away:"City Pillars FC",homeGoals:0,awayGoals:3,note:"Walkover"},
{home:"Xihuhuri FC",away:"Bhubhezi FC",homeGoals:2,awayGoals:2}
]
};

/* ===============================
COMBINE ALL WEEKS
=============================== */

const overall={
A:[...week6.A,...week7.A],
B:[...week6.B,...week7.B]
};

/* ===============================
RENDER RESULTS
=============================== */

function renderResults(id,data){
const el=document.getElementById(id);
if(!el)return;

el.innerHTML="";
data.forEach(m=>{
const li=document.createElement("li");

li.innerHTML=`
<strong>${m.home}</strong> ${m.homeGoals} – ${m.awayGoals} ${m.away}
${m.note?`<span class="small-pill">(${m.note})</span>`:""}
`;

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
const body=document.getElementById(id);
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

renderResults("resultsListA6",week6.A);
renderResults("resultsListB6",week6.B);

renderResults("resultsListA7",week7.A);
renderResults("resultsListB7",week7.B);

renderLog("logBodyA",computeTable("A"));
renderLog("logBodyB",computeTable("B"));

});
