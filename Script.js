const teamsA = [
"Fast Eleven FC",
"FC Wondrous",
"Royal Tigers FC",
"Highlanders FC",
"Movers FC",
"Crusaders FC",
"Eastern Rangers FC",
"Morning Stars FC"
];

const teamsB = [
"Liverpool FC",
"Labamba FC",
"Junior Pirates FC",
"Welverdiend Masters FC",
"Real Rangers FC",
"City Pillars FC",
"Xihuhuri FC",
"Bhubhezi FC"
];

function createTable(teams){

return teams.map(team=>({
team,
P:0,
W:0,
D:0,
L:0,
GF:0,
GA:0,
GD:0,
PTS:0
}));

}

let tableA=createTable(teamsA);
let tableB=createTable(teamsB);

function updateTable(table,home,away,hg,ag){

let h=table.find(t=>t.team===home);
let a=table.find(t=>t.team===away);

h.P++;
a.P++;

h.GF+=hg;
h.GA+=ag;

a.GF+=ag;
a.GA+=hg;

if(hg>ag){
h.W++;
a.L++;
h.PTS+=3;
}

else if(ag>hg){
a.W++;
h.L++;
a.PTS+=3;
}

else{
h.D++;
a.D++;
h.PTS++;
a.PTS++;
}

h.GD=h.GF-h.GA;
a.GD=a.GF-a.GA;

}

const week5={

A:[
{home:"Fast Eleven FC",away:"FC Wondrous",hg:1,ag:0},
{home:"Royal Tigers FC",away:"Highlanders FC",hg:2,ag:1},
{home:"Movers FC",away:"Crusaders FC",hg:0,ag:0},
{home:"Eastern Rangers FC",away:"Morning Stars FC",hg:3,ag:1}
],

B:[
{home:"Liverpool FC",away:"Labamba FC",hg:1,ag:2},
{home:"Junior Pirates FC",away:"Welverdiend Masters FC",hg:0,ag:0},
{home:"Real Rangers FC",away:"City Pillars FC",hg:2,ag:0},
{home:"Xihuhuri FC",away:"Bhubhezi FC",hg:1,ag:1}
]

};

const week7={

A:[],

B:[
{home:"Liverpool FC",away:"Labamba FC",hg:2,ag:2},
{home:"Bhubhezi FC",away:"Xihuhuri FC",hg:2,ag:2}
]

};

function processWeek(week,table){

week.forEach(match=>{

updateTable(
table,
match.home,
match.away,
match.hg,
match.ag
);

});

}

processWeek(week5.A,tableA);
processWeek(week5.B,tableB);
processWeek(week7.B,tableB);

function renderResults(id,list){

let el=document.getElementById(id);
el.innerHTML="";

list.forEach(match=>{

let li=document.createElement("li");

li.textContent=
match.home+" "+
match.hg+" - "+
match.ag+" "+
match.away;

el.appendChild(li);

});

}

renderResults("resultsListA5",week5.A);
renderResults("resultsListB5",week5.B);
renderResults("resultsListB7",week7.B);

function renderTable(id,table){

table.sort((a,b)=>
b.PTS-a.PTS ||
b.GD-a.GD ||
b.GF-a.GF
);

let body=document.getElementById(id);

body.innerHTML="";

table.forEach((t,i)=>{

let tr=document.createElement("tr");

tr.innerHTML=`

<td>${i+1}</td>
<td>${t.team}</td>
<td>${t.P}</td>
<td>${t.W}</td>
<td>${t.D}</td>
<td>${t.L}</td>
<td>${t.GF}</td>
<td>${t.GA}</td>
<td>${t.GD}</td>
<td>${t.PTS}</td>

`;

body.appendChild(tr);

});

}

renderTable("logBodyA",tableA);
renderTable("logBodyB",tableB);

document.getElementById("yearNow").textContent =
new Date().getFullYear();

document.getElementById("btnShowWeek5").onclick=()=>{
document.getElementById("week5Block").style.display="block";
document.getElementById("week7Block").style.display="none";
};

document.getElementById("btnShowWeek7").onclick=()=>{
document.getElementById("week5Block").style.display="none";
document.getElementById("week7Block").style.display="block";
};
