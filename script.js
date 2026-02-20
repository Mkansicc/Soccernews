// ============================
// DATA (EDIT WHEN YOU HAVE NEW WEEK)
// ============================

const siteInfo = {
  homeGround: "Welverdiend Sports Ground",
  contact: "Enq: Senkie Nyathi 076 8062 013 | Clife Juzie 078 084 6573",
  donateUrl: "https://www.paypal.com/" // replace with PayFast/BackaBuddy/WhatsApp donation link
};

// NEXT matches (Fixtures)
// Your picture is Week 1 log & results. Add real next fixtures here when you have them.
const fixtures = [
  { date: "2026-03-01", time: "14:00", home: "TBC", away: "TBC", venue: "Welverdiend Ground", status: "Upcoming" }
];

// RESULTS (Week 1) — Stream A + Stream B
const results = [
  // STREAM A
  { date: "2026-02-23", home: "FC Wonderous", away: "Royal Tigers FC", homeGoals: 0, awayGoals: 2, venue: "Welverdiend", notes: "Stream A (W/O)" },
  { date: "2026-02-23", home: "Fast Eleven FC", away: "Crusaders FC", homeGoals: 0, awayGoals: 2, venue: "Welverdiend", notes: "Stream A" },
  { date: "2026-02-23", home: "Highlanders FC", away: "Eastern Rangers FC", homeGoals: 2, awayGoals: 1, venue: "Welverdiend", notes: "Stream A" },
  { date: "2026-02-23", home: "Movers FC", away: "Morning Stars FC", homeGoals: 0, awayGoals: 4, venue: "Welverdiend", notes: "Stream A" },

  // STREAM B
  { date: "2026-02-23", home: "Liverpool FC", away: "Junior Pirates FC", homeGoals: 2, awayGoals: 0, venue: "Welverdiend", notes: "Stream B (Liverpool won)" },
  { date: "2026-02-23", home: "Labamba FC", away: "City Pillars FC", homeGoals: 7, awayGoals: 1, venue: "Welverdiend", notes: "Stream B" },
  { date: "2026-02-23", home: "Welverdiend Masters", away: "Xihuhuri FC", homeGoals: 3, awayGoals: 4, venue: "Welverdiend", notes: "Stream B" },
  { date: "2026-02-23", home: "Real Rangers", away: "Bhubhezi FC", homeGoals: 0, awayGoals: 4, venue: "Welverdiend", notes: "Stream B" }
];

// STANDINGS (Log table) — Stream A + Stream B
const standings = [
  // STREAM A
  { team: "Stream A - Morning Stars FC", MP: 1, W: 1, D: 0, L: 0, GF: 4, GA: 0, Pts: 3 },
  { team: "Stream A - Crusaders FC", MP: 1, W: 1, D: 0, L: 0, GF: 2, GA: 0, Pts: 3 },
  { team: "Stream A - Royal Tigers FC", MP: 1, W: 1, D: 0, L: 0, GF: 2, GA: 0, Pts: 3 },
  { team: "Stream A - Highlanders FC", MP: 1, W: 1, D: 0, L: 0, GF: 2, GA: 1, Pts: 3 },
  { team: "Stream A - Eastern Rangers FC", MP: 1, W: 0, D: 0, L: 1, GF: 1, GA: 2, Pts: 0 },
  { team: "Stream A - Fast Eleven FC", MP: 1, W: 0, D: 0, L: 1, GF: 0, GA: 2, Pts: 0 },
  { team: "Stream A - FC Wonderous", MP: 1, W: 0, D: 0, L: 1, GF: 0, GA: 2, Pts: 0 },
  { team: "Stream A - Movers FC", MP: 1, W: 0, D: 0, L: 1, GF: 0, GA: 4, Pts: 0 },

  // STREAM B
  { team: "Stream B - Labamba FC", MP: 1, W: 1, D: 0, L: 0, GF: 7, GA: 1, Pts: 3 },
  { team: "Stream B - Bhubhezi FC", MP: 1, W: 1, D: 0, L: 0, GF: 4, GA: 0, Pts: 3 },
  { team: "Stream B - Liverpool FC", MP: 1, W: 1, D: 0, L: 0, GF: 2, GA: 0, Pts: 3 },
  { team: "Stream B - Xihuhuri FC", MP: 1, W: 1, D: 0, L: 0, GF: 4, GA: 3, Pts: 3 },
  { team: "Stream B - Welverdiend Masters", MP: 1, W: 0, D: 0, L: 1, GF: 3, GA: 4, Pts: 0 },
  { team: "Stream B - Junior Pirates FC", MP: 1, W: 0, D: 0, L: 1, GF: 0, GA: 2, Pts: 0 },
  { team: "Stream B - Real Rangers", MP: 1, W: 0, D: 0, L: 1, GF: 0, GA: 4, Pts: 0 },
  { team: "Stream B - City Pillars FC", MP: 1, W: 0, D: 0, L: 1, GF: 1, GA: 7, Pts: 0 }
];

// Executive members (edit anytime)
const executiveMembers = [
  { role: "Chairperson", name: "Jethro Gumede", phone: "" },
  { role: "Deputy Chair", name: "Seepane Emanuel", phone: "" },
  { role: "Treasurer", name: "Thabiso Ndlovu", phone: "" },
  { role: "Secretary", name: "Clife Ndlovu", phone: "" },
  { role: "H. Referee", name: "Bophelo Mogakane", phone: "" },
  { role: "Marketing Director", name: "Jomo Unisi", phone: "" },
  { role: "DC", name: "Gift Ndlovu", phone: "" },
  { role: "Media", name: "Ripfumelo Mlambo", phone: "" },
  { role: "Admin", name: "Senkie Nyathi", phone: "076 8062 013" }
];

// Captain (edit)
const captain = {
  name: "Captain Name",
  position: "Position",
  phone: ""
};

// Banking details (edit carefully)
const banking = {
  bankName: "Bank Name",
  accountName: "Team Name",
  accountNumber: "******1234",
  branchCode: "000000",
  reference: "Sponsor + Your Name"
};

// Photo slideshow (add your own images)
const photoSlides = [
  { src: "images/photo1.jpg", title: "Team Photo", meta: "Welverdiend • Season 2026" },
  { src: "images/photo2.jpg", title: "Match Day", meta: "Supporters & Players" },
  { src: "images/photo3.jpg", title: "Training", meta: "Fitness & Drills" }
];

// ============================
// APP LOGIC (DON'T EDIT BELOW)
// ============================

const $ = (id) => document.getElementById(id);

function formatDate(iso) {
  const [y,m,d] = iso.split("-").map(Number);
  const dt = new Date(y, m-1, d);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

function computeGD(row){ return (row.GF - row.GA); }

function pickNextFixture() {
  const now = new Date();
  const upcoming = fixtures
    .map(f => ({...f, dt: new Date(f.date + "T" + (f.time || "00:00"))}))
    .filter(f => !isNaN(f.dt.getTime()))
    .sort((a,b)=>a.dt-b.dt);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return upcoming.find(f => f.dt >= today) || upcoming[0] || null;
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
    $("nextMatchMeta").textContent = "Add fixtures in Script.js";
  }

  const latest = pickLatestResult();
  if(latest){
    $("latestResult").textContent = `${latest.home} ${latest.homeGoals} - ${latest.awayGoals} ${latest.away}`;
    $("latestResultMeta").textContent = `${formatDate(latest.date)} • ${latest.venue}`;
  } else {
    $("latestResult").textContent = "No results yet";
    $("latestResultMeta").textContent = "Add results in Script.js";
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
    if(b.Pts !== a.Pts) return b.Pts - a.Pts;
    if(computeGD(b) !== computeGD(a)) return computeGD(b) - computeGD(a);
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
    li.innerHTML = `<strong>${m.role}:</strong> ${m.name} ${m.phone ? `<span class="muted small">(${m.phone})</span>` : ""}`;
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
    $("slideMeta").textContent = "Add photoSlides in Script.js";
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
