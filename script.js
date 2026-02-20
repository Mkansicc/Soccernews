// ============================
// WEEK 1 (FROM YOUR PICTURE)
// ============================

const siteInfo = {
  homeGround: "Welverdiend Sports Ground",
  contact: "Senkie Nyathi 076 8062 013 • Clife Juzie 078 084 6573",
  donateUrl: "https://www.paypal.com/" // replace with your donation link
};

// Picture has no fixtures, so we leave empty (site will show “No matches found”)
const fixtures = [];

// RESULTS — exactly as on the sheet
const resultsA = [
  { home: "FC Wonderous", away: "Royal Tigers FC", homeGoals: 0, awayGoals: 2, notes: "W/O" },
  { home: "Fast Eleven FC", away: "Crusaders FC", homeGoals: 0, awayGoals: 2, notes: "" },
  { home: "Highlanders FC", away: "Eastern Rangers FC", homeGoals: 2, awayGoals: 1, notes: "" },
  { home: "Movers FC", away: "Morning Stars FC", homeGoals: 0, awayGoals: 4, notes: "" }
];

const resultsB = [
  { home: "Liverpool FC", away: "Junior Pirates FC", homeGoals: 2, awayGoals: 0, notes: "Liverpool won" },
  { home: "Labamba FC", away: "City Pillars FC", homeGoals: 7, awayGoals: 1, notes: "" },
  { home: "Welverdiend Masters", away: "Xihuhuri FC", homeGoals: 3, awayGoals: 4, notes: "" },
  { home: "Real Rangers", away: "Bhubhezi FC", homeGoals: 0, awayGoals: 4, notes: "" }
];

// LOG TABLE — exactly as on the sheet
const standingsA = [
  { team: "Morning Stars FC", P: 1, W: 1, D: 0, L: 0, GF: 4, GA: 0, GD: 4, Pts: 3 },
  { team: "Crusaders FC",     P: 1, W: 1, D: 0, L: 0, GF: 2, GA: 0, GD: 2, Pts: 3 },
  { team: "Royal Tigers FC",  P: 1, W: 1, D: 0, L: 0, GF: 2, GA: 0, GD: 2, Pts: 3 },
  { team: "Highlanders FC",   P: 1, W: 1, D: 0, L: 0, GF: 2, GA: 1, GD: 1, Pts: 3 },
  { team: "Eastern Rangers FC", P: 1, W: 0, D: 0, L: 1, GF: 1, GA: 2, GD: -1, Pts: 0 },
  { team: "Fast Eleven FC",   P: 1, W: 0, D: 0, L: 1, GF: 0, GA: 2, GD: -2, Pts: 0 },
  { team: "FC Wonderous",     P: 1, W: 0, D: 0, L: 1, GF: 0, GA: 2, GD: -2, Pts: 0 },
  { team: "Movers FC",        P: 1, W: 0, D: 0, L: 1, GF: 0, GA: 4, GD: -4, Pts: 0 }
];

const standingsB = [
  { team: "Labamba FC",       P: 1, W: 1, D: 0, L: 0, GF: 7, GA: 1, GD: 6, Pts: 3 },
  { team: "Bhubhezi FC",      P: 1, W: 1, D: 0, L: 0, GF: 4, GA: 0, GD: 4, Pts: 3 },
  { team: "Liverpool FC",     P: 1, W: 1, D: 0, L: 0, GF: 2, GA: 0, GD: 2, Pts: 3 },
  { team: "Xihuhuri FC",      P: 1, W: 1, D: 0, L: 0, GF: 4, GA: 3, GD: 1, Pts: 3 },
  { team: "Welverdiend Masters", P: 1, W: 0, D: 0, L: 1, GF: 3, GA: 4, GD: -1, Pts: 0 },
  { team: "Junior Pirates FC", P: 1, W: 0, D: 0, L: 1, GF: 0, GA: 2, GD: -2, Pts: 0 },
  { team: "Real Rangers",     P: 1, W: 0, D: 0, L: 1, GF: 0, GA: 4, GD: -4, Pts: 0 },
  { team: "City Pillars FC",  P: 1, W: 0, D: 0, L: 1, GF: 1, GA: 7, GD: -6, Pts: 0 }
];

// Committee (from the bottom of the picture)
const executiveMembers = [
  { role: "Chairperson", name: "Jethro Gumede" },
  { role: "Deputy Chair", name: "Seepane Emanuel" },
  { role: "Treasurer", name: "Thabiso Ndlovu" },
  { role: "Secretary", name: "Clife Ndlovu" },
  { role: "H. Referee", name: "Bophelo Mogakane" },
  { role: "Marketing Director", name: "Jomo Unisi" },
  { role: "DC", name: "Gift Ndlovu" },
  { role: "Media", name: "Ripfumelo Mlambo" },
  { role: "Admin", name: "Senkie Nyathi" }
];

// Photo slideshow
const photoSlides = [
  { src: "images/photo1.jpg", title: "Team Photo", meta: "Welverdiend • Season" },
  { src: "images/photo2.jpg", title: "Match Day", meta: "Players & Supporters" },
  { src: "images/photo3.jpg", title: "Training", meta: "Fitness & Drills" }
];

// ============================
// APP LOGIC
// ============================

const $ = (id) => document.getElementById(id);

function badge(text){ return `<span class="badge">${text}</span>`; }

function renderHeroCards(){
  $("homeGround").textContent = siteInfo.homeGround;
  $("contactInfo").textContent = siteInfo.contact;
  $("donateLink").href = siteInfo.donateUrl;

  // Next match
  if(fixtures.length === 0){
    $("nextMatch").textContent = "No fixtures yet";
    $("nextMatchMeta").textContent = "Add fixtures in Script.js";
  } else {
    const f = fixtures[0];
    $("nextMatch").textContent = `${f.home} vs ${f.away}`;
    $("nextMatchMeta").textContent = `${f.date} • ${f.time} • ${f.venue}`;
  }

  // Highlighted result (Liverpool 2-0 Junior Pirates)
  const highlight = resultsB.find(r => r.home === "Liverpool FC" && r.away === "Junior Pirates FC") || resultsB[0];
  $("latestResult").textContent = `${highlight.home} ${highlight.homeGoals} - ${highlight.awayGoals} ${highlight.away}`;
  $("latestResultMeta").textContent = "Week 1 • Stream B";
}

function renderFixtures(filterText=""){
  const q = filterText.trim().toLowerCase();
  const body = $("fixturesBody");
  body.innerHTML = "";

  const list = fixtures.filter(f => {
    if(!q) return true;
    return `${f.home} ${f.away} ${f.venue}`.toLowerCase().includes(q);
  });

  if(list.length === 0){
    body.innerHTML = `<tr><td colspan="5" class="muted">No matches found.</td></tr>`;
    return;
  }

  for(const f of list){
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${f.date || "-"}</td>
      <td>${f.time || "-"}</td>
      <td><strong>${f.home}</strong> vs <strong>${f.away}</strong></td>
      <td>${f.venue || "-"}</td>
      <td>${badge(f.status || "Upcoming")}</td>
    `;
    body.appendChild(row);
  }
}

function renderResults(filterText=""){
  const q = filterText.trim().toLowerCase();

  const render = (rows, targetId) => {
    const body = $(targetId);
    body.innerHTML = "";

    const list = rows.filter(r => {
      if(!q) return true;
      return `${r.home} ${r.away} ${r.notes || ""}`.toLowerCase().includes(q);
    });

    if(list.length === 0){
      body.innerHTML = `<tr><td colspan="3" class="muted">No results found.</td></tr>`;
      return;
    }

    for(const r of list){
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${r.home}</strong> vs <strong>${r.away}</strong></td>
        <td>${badge(`${r.homeGoals} - ${r.awayGoals}`)}</td>
        <td class="muted">${r.notes || ""}</td>
      `;
      body.appendChild(tr);
    }
  };

  render(resultsA, "resultsBodyA");
  render(resultsB, "resultsBodyB");
}

let standingsSorted = false;

function sortStandings(list){
  return list.slice().sort((a,b)=>{
    if(b.Pts !== a.Pts) return b.Pts - a.Pts;
    if(b.GD !== a.GD) return b.GD - a.GD;
    if(b.GF !== a.GF) return b.GF - a.GF;
    return a.team.localeCompare(b.team);
  });
}

function renderStandings(){
  const render = (rows, targetId) => {
    const body = $(targetId);
    body.innerHTML = "";

    const list = standingsSorted ? sortStandings(rows) : rows;

    list.forEach((s, idx)=>{
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${idx+1}</td>
        <td><strong>${s.team}</strong></td>
        <td>${s.P}</td>
        <td>${s.W}</td>
        <td>${s.D}</td>
        <td>${s.L}</td>
        <td>${s.GF}</td>
        <td>${s.GA}</td>
        <td>${s.GD}</td>
        <td><strong>${s.Pts}</strong></td>
      `;
      body.appendChild(tr);
    });
  };

  render(standingsA, "standingsBodyA");
  render(standingsB, "standingsBodyB");
}

function renderCommittee(){
  const ul = $("execList");
  ul.innerHTML = "";
  executiveMembers.forEach(m=>{
    const li = document.createElement("li");
    li.innerHTML = `<strong>${m.role}:</strong> ${m.name}`;
    ul.appendChild(li);
  });
}

// Slideshow
let slideIndex = 0;
let slideTimer = null;

function showSlide(i){
  if(photoSlides.length === 0){
    $("slideTitle").textContent = "No photos yet";
    $("slideMeta").textContent = "Add photos in images folder";
    $("slideImage").removeAttribute("src");
    return;
  }

  slideIndex = (i + photoSlides.length) % photoSlides.length;
  const s = photoSlides[slideIndex];

  $("slideImage").src = s.src;
  $("slideTitle").textContent = s.title || "Team Photo";
  $("slideMeta").textContent = s.meta || "";
}

function startAutoSlides(){
  if(slideTimer) clearInterval(slideTimer);
  slideTimer = setInterval(()=> showSlide(slideIndex + 1), 4500);
}

function init(){
  $("yearNow").textContent = new Date().getFullYear();

  renderHeroCards();
  renderFixtures();
  renderResults();
  renderStandings();
  renderCommittee();

  $("fixtureSearch").addEventListener("input", (e)=> renderFixtures(e.target.value));
  $("resultSearch").addEventListener("input", (e)=> renderResults(e.target.value));

  $("sortStandingsBtn").addEventListener("click", ()=>{
    standingsSorted = !standingsSorted;
    $("sortStandingsBtn").textContent = standingsSorted ? "Show Original Order" : "Sort by Points";
    renderStandings();
  });

  $("prevPhoto").addEventListener("click", ()=> { showSlide(slideIndex - 1); startAutoSlides(); });
  $("nextPhoto").addEventListener("click", ()=> { showSlide(slideIndex + 1); startAutoSlides(); });

  showSlide(0);
  startAutoSlides();
}

document.addEventListener("DOMContentLoaded", init);
