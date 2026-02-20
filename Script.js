// ============================
// EDIT THIS SECTION (YOUR DATA)
// ============================

const siteInfo = {
  homeGround: "Welverdiend Sports Ground",
  contact: "League Secretary: +27 00 000 0000",
  donateUrl: "https://www.paypal.com/" // replace with PayPal/PayFast/BackaBuddy/WhatsApp link
};

// Next matches (fixtures)
const fixtures = [
  { date: "2026-03-28", time: "14:00", home: "Welverdiend FC", away: "Ludlow United", venue: "Welverdiend Ground", status: "Scheduled" },
  { date: "2026-04-04", time: "15:00", home: "Delani Stars", away: "Welverdiend FC", venue: "Delani Ground", status: "Scheduled" },
  { date: "2026-04-11", time: "13:00", home: "Welverdiend FC", away: "Hluvukani Rovers", venue: "Welverdiend Ground", status: "Scheduled" }
];

// Match results
const results = [
  { date: "2026-02-15", home: "Welverdiend FC", away: "Delani Stars", homeGoals: 2, awayGoals: 1, venue: "Welverdiend Ground", notes: "Good game" },
  { date: "2026-02-08", home: "Ludlow United", away: "Welverdiend FC", homeGoals: 0, awayGoals: 0, venue: "Ludlow Ground", notes: "Clean sheet" }
];

// Standings table (log)
// MP: matches played, W/D/L: win/draw/loss, GF/GA: goals for/against, Pts: points
const standings = [
  { team: "Welverdiend FC", MP: 10, W: 6, D: 2, L: 2, GF: 18, GA: 10, Pts: 20 },
  { team: "Delani Stars",   MP: 10, W: 6, D: 1, L: 3, GF: 16, GA: 11, Pts: 19 },
  { team: "Ludlow United",  MP: 10, W: 5, D: 3, L: 2, GF: 14, GA: 9,  Pts: 18 },
  { team: "Hluvukani Rovers",MP:10, W: 4, D: 2, L: 4, GF: 12, GA: 13, Pts: 14 }
];

// Executive members
const executiveMembers = [
  { role: "Chairperson", name: "Name Surname", phone: "+27 ..." },
  { role: "Secretary", name: "Name Surname", phone: "+27 ..." },
  { role: "Treasurer", name: "Name Surname", phone: "+27 ..." },
  { role: "Coach", name: "Name Surname", phone: "+27 ..." }
];

// Captain
const captain = {
  name: "Captain Name",
  position: "Midfielder",
  phone: "+27 ..."
};

// Banking details (be careful what you publish publicly)
const banking = {
  bankName: "Bank Name",
  accountName: "Welverdiend FC",
  accountNumber: "1234567890", // consider masking like ******7890
  branchCode: "000000",
  reference: "Sponsor + Your Name"
};

// Photo slideshow
// Put your images in: images/photo1.jpg, images/photo2.jpg etc.
const photoSlides = [
  { src: "images/photo1.jpg", title: "Team Photo", meta: "Welverdiend FC • 2026 Season" },
  { src: "images/photo2.jpg", title: "Match Day", meta: "Home Ground • Supporters" },
  { src: "images/photo3.jpg", title: "Training Session", meta: "Fitness & Drills" }
];

// ============================
// APP LOGIC (NO NEED TO EDIT)
// ============================

const $ = (id) => document.getElementById(id);

function formatDate(iso) {
  // ISO: YYYY-MM-DD
  const [y,m,d] = iso.split("-").map(Number);
  const dt = new Date(y, m-1, d);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

function computeGD(row){
  return (row.GF - row.GA);
}

function pickNextFixture() {
  const now = new Date();
  const upcoming = fixtures
    .map(f => ({...f, dt: new Date(f.date + "T" + (f.time || "00:00"))}))
    .filter(f => !isNaN(f.dt.getTime()))
    .sort((a,b)=>a.dt-b.dt);

  // first fixture that is today or future
  const next = upcoming.find(f => f.dt >= new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  return next || upcoming[0] || null;
}

function pickLatestResult() {
  const sorted = results
    .map(r => ({...r, dt: new Date(r.date + "T00:00")}))
    .filter(r => !isNaN(r.dt.getTime()))
    .sort((a,b)=>b.dt-a.dt);
  return sorted[0] || null;
}

function renderHeroCards(){
  $("homeGround").textContent = siteInfo.homeGround;
  $("contactInfo").textContent = siteInfo.contact;
  $("donateLink").href = siteInfo.donateUrl;

  const next = pickNextFixture();
  if(next){
    $("nextMatch").textContent = `${next.home} vs ${next.away}`;
    $("nextMatchMeta").textContent = `${formatDate(next.date)} • ${next.time} • ${next.venue}`;
  } else {
    $("nextMatch").textContent = "No fixtures yet";
    $("nextMatchMeta").textContent = "Add fixtures in script.js";
  }

  const latest = pickLatestResult();
  if(latest){
    $("latestResult").textContent = `${latest.home} ${latest.homeGoals} - ${latest.awayGoals} ${latest.away}`;
    $("latestResultMeta").textContent = `${formatDate(latest.date)} • ${latest.venue}`;
  } else {
    $("latestResult").textContent = "No results yet";
    $("latestResultMeta").textContent = "Add results in script.js";
  }
}

function badge(text){
  return `<span class="badge">${text}</span>`;
}

function renderFixtures(filterText=""){
  const q = filterText.trim().toLowerCase();
  const body = $("fixturesBody");
  body.innerHTML = "";

  const list = fixtures.filter(f => {
    if(!q) return true;
    const s = `${f.home} ${f.away} ${f.venue}`.toLowerCase();
    return s.includes(q);
  });

  if(list.length === 0){
    body.innerHTML = `<tr><td colspan="5" class="muted">No matches found.</td></tr>`;
    return;
  }

  for(const f of list){
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${formatDate(f.date)}</td>
      <td>${f.time || "-"}</td>
      <td><strong>${f.home}</strong> vs <strong>${f.away}</strong></td>
      <td>${f.venue || "-"}</td>
      <td>${badge(f.status || "Scheduled")}</td>
    `;
    body.appendChild(row);
  }
}

function renderResults(filterText=""){
  const q = filterText.trim().toLowerCase();
  const body = $("resultsBody");
  body.innerHTML = "";

  const list = results
    .slice()
    .sort((a,b)=> new Date(b.date) - new Date(a.date))
    .filter(r => {
      if(!q) return true;
      const s = `${r.home} ${r.away} ${r.venue} ${r.notes || ""}`.toLowerCase();
      return s.includes(q);
    });

  if(list.length === 0){
    body.innerHTML = `<tr><td colspan="5" class="muted">No results found.</td></tr>`;
    return;
  }

  for(const r of list){
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${formatDate(r.date)}</td>
      <td><strong>${r.home}</strong> vs <strong>${r.away}</strong></td>
      <td>${badge(`${r.homeGoals} - ${r.awayGoals}`)}</td>
      <td>${r.venue || "-"}</td>
      <td class="muted">${r.notes || ""}</td>
    `;
    body.appendChild(row);
  }
}

let standingsSorted = false;

function renderStandings(){
  const body = $("standingsBody");
  body.innerHTML = "";

  const list = standings.map(s => ({...s, GD: computeGD(s)}));
  const sorted = list.slice().sort((a,b)=>{
    // Pts desc, GD desc, GF desc, name asc
    if(b.Pts !== a.Pts) return b.Pts - a.Pts;
    if(b.GD !== a.GD) return b.GD - a.GD;
    if(b.GF !== a.GF) return b.GF - a.GF;
    return a.team.localeCompare(b.team);
  });

  const final = standingsSorted ? sorted : list;

  final.forEach((s, idx)=>{
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${idx+1}</td>
      <td><strong>${s.team}</strong></td>
      <td>${s.MP}</td>
      <td>${s.W}</td>
      <td>${s.D}</td>
      <td>${s.L}</td>
      <td>${s.GF}</td>
      <td>${s.GA}</td>
      <td>${computeGD(s)}</td>
      <td><strong>${s.Pts}</strong></td>
    `;
    body.appendChild(row);
  });
}

function renderTeam(){
  const ul = $("execList");
  ul.innerHTML = "";
  for(const m of executiveMembers){
    const li = document.createElement("li");
    li.innerHTML = `<strong>${m.role}:</strong> ${m.name} <span class="muted small">(${m.phone})</span>`;
    ul.appendChild(li);
  }

  $("captainBox").innerHTML = `
    <strong>${captain.name}</strong>
    <div class="muted">${captain.position}</div>
    <div class="muted small">${captain.phone}</div>
  `;

  $("bankBox").innerHTML = `
    <div class="row"><div class="key">Bank</div><div class="val">${banking.bankName}</div></div>
    <div class="row"><div class="key">Account Name</div><div class="val">${banking.accountName}</div></div>
    <div class="row"><div class="key">Account No.</div><div class="val">${banking.accountNumber}</div></div>
    <div class="row"><div class="key">Branch Code</div><div class="val">${banking.branchCode}</div></div>
    <div class="row"><div class="key">Reference</div><div class="val">${banking.reference}</div></div>
  `;
}

let slideIndex = 0;
let slideTimer = null;

function showSlide(i){
  if(photoSlides.length === 0){
    $("slideTitle").textContent = "No photos yet";
    $("slideMeta").textContent = "Add photoSlides in script.js";
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
  renderTeam();

  // Search filters
  $("fixtureSearch").addEventListener("input", (e)=> renderFixtures(e.target.value));
  $("resultSearch").addEventListener("input", (e)=> renderResults(e.target.value));

  // Sort standings
  $("sortStandingsBtn").addEventListener("click", ()=>{
    standingsSorted = !standingsSorted;
    $("sortStandingsBtn").textContent = standingsSorted ? "Show Original Order" : "Sort by Points";
    renderStandings();
  });

  // Slides
  $("prevPhoto").addEventListener("click", ()=> { showSlide(slideIndex - 1); startAutoSlides(); });
  $("nextPhoto").addEventListener("click", ()=> { showSlide(slideIndex + 1); startAutoSlides(); });

  showSlide(0);
  startAutoSlides();
}

document.addEventListener("DOMContentLoaded", init);
