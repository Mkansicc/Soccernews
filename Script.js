<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Welverdiend Soccer League (WSL) | Updates</title>
  <meta name="description" content="Welverdiend Soccer League updates: fixtures, results, log tables, photos, donations." />

  <link rel="stylesheet" href="style.css" />

  <!-- Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <!-- Google AdSense (replace ca-pub-XXXX with your publisher ID after approval) -->
  <script async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"
    crossorigin="anonymous"></script>
</head>

<body>
  <!-- Animated background -->
  <div class="bg-anim" aria-hidden="true">
    <div class="glow"></div>
    <div class="ball"></div>
    <div class="ball ball2"></div>
    <div class="ball ball3"></div>
  </div>

  <header class="topbar">
    <div class="container topbar-inner">
      <div class="brand">
        <img class="wsl-logo" src="images/wsl-logo.png" alt="WSL Logo" onerror="this.style.display='none'">
        <div class="brand-text">
          <div class="brand-title">WELVERDIEND SOCCER LEAGUE (WSL)</div>
          <div class="brand-subtitle">Fixtures • Results • Logs</div>
        </div>
      </div>

      <nav class="nav">
        <a href="#fixtures"><i class="fa-solid fa-calendar-days"></i> Next Matches</a>
        <a href="#results"><i class="fa-solid fa-trophy"></i> Results</a>
        <a href="#streamA"><i class="fa-solid fa-table-list"></i> Stream A Log</a>
        <a href="#streamB"><i class="fa-solid fa-table-list"></i> Stream B Log</a>
        <a href="#photos"><i class="fa-solid fa-image"></i> Photos</a>
        <a class="btn btn-donate" href="#donate"><i class="fa-solid fa-heart"></i> Donate</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <h1>WSL Match Updates</h1>
          <p class="muted">
          
          </p>

          <div class="hero-actions">
            <a class="btn" href="#fixtures"><i class="fa-solid fa-bolt"></i> View Fixtures</a>
            <a class="btn btn-outline" href="#results"><i class="fa-solid fa-trophy"></i> View Results</a>
          </div>

          <div class="quick-cards">
            <div class="card">
              <div class="card-title"><i class="fa-solid fa-calendar-check"></i> Next Match</div>
              <div id="nextMatch" class="card-big">Loading…</div>
              <div id="nextMatchMeta" class="muted small"></div>
            </div>

            <div class="card">
              <div class="card-title"><i class="fa-solid fa-star"></i> Highlight</div>
              <div id="highlightResult" class="card-big">Loading…</div>
              <div class="muted small">Latest played match</div>
            </div>

            <div class="card">
              <div class="card-title"><i class="fa-solid fa-crown"></i> Leaders (Overall)</div>
              <div id="leaderA" class="card-big">A: Loading…</div>
              <div id="leaderB" class="card-big">B: Loading…</div>
            </div>
          </div>

        </div>

        <div class="hero-side">
          <div class="card card-highlight" id="donate">
            <div class="card-title"><i class="fa-solid fa-hand-holding-heart"></i> Sponsor / Donate</div>
            <p class="muted">Support kits, transport, balls, and youth development.</p>

            <a id="donateLink" class="btn btn-donate wide" href="#" target="_blank" rel="noopener">
              <i class="fa-solid fa-heart"></i> Donate Now
            </a>

            <div class="muted small" style="margin-top:10px;">
              <code></code>
            </div>

            <div class="sponsor-row">
              <span class="pill"><i class="fa-solid fa-shirt"></i> Kits</span>
              <span class="pill"><i class="fa-solid fa-bus"></i> Transport</span>
              <span class="pill"><i class="fa-solid fa-futbol"></i> Balls</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FIXTURES -->
    <section id="fixtures" class="section">
      <div class="container">
        <div class="section-head">
          <h2><i class="fa-solid fa-calendar-days"></i> Fixtures</h2>
          <div class="tools">
            <input id="fixtureSearch" class="input" placeholder="Search team..." />
          </div>
        </div>

        <div class="search-actions">
          <button class="btn btn-outline small-btn" type="button" id="btnStreamA">
            <i class="fa-solid fa-filter"></i> Stream A
          </button>
          <button class="btn btn-outline small-btn" type="button" id="btnStreamB">
            <i class="fa-solid fa-filter"></i> Stream B
          </button>
          <button class="btn btn-outline small-btn" type="button" id="btnClearFixture">
            <i class="fa-solid fa-eraser"></i> Clear
          </button>
        </div>

        <div class="table-wrap">
          <table class="table" aria-label="Next matches">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Match</th>
                <th>Venue (Home)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="fixturesBody">
              <tr><td colspan="5" class="muted">Loading fixtures…</td></tr>
            </tbody>
          </table>
        </div>

        <p class="muted small" style="margin-top:10px;">
          
        </p>
      </div>
    </section>

    <!-- RESULTS -->
    <section id="results" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2><i class="fa-solid fa-trophy"></i> Results</h2>
          <div class="tools">
            <input id="resultSearch" class="input" placeholder="Search team..." />
          </div>
        </div>

        <div class="search-actions">
          <button class="btn btn-outline small-btn" type="button" id="btnShowWeek1">
            <i class="fa-solid fa-1"></i> Week 1
          </button>
          <button class="btn btn-outline small-btn" type="button" id="btnShowWeek2">
            <i class="fa-solid fa-2"></i> Week 2
          </button>
          <button class="btn btn-outline small-btn" type="button" id="btnClearResults">
            <i class="fa-solid fa-eraser"></i> Clear Search
          </button>
        </div>

        <!-- WEEK 1 -->
        <div id="week1Block">
          <h3 class="subhead"><i class="fa-solid fa-circle-check"></i> Week 1</h3>
          <div class="grid-2">
            <div class="card">
              <div class="card-title"><i class="fa-solid fa-a"></i> Stream A • Results</div>
              <ol id="resultsListA1" class="muted list-ol"></ol>
            </div>

            <div class="card">
              <div class="card-title"><i class="fa-solid fa-b"></i> Stream B • Results</div>
              <ol id="resultsListB1" class="muted list-ol"></ol>
            </div>
          </div>
        </div>

        <!-- WEEK 2 -->
        <div id="week2Block" style="display:none; margin-top:14px;">
          <h3 class="subhead"><i class="fa-solid fa-fire"></i> Week 2</h3>
          <div class="grid-2">
            <div class="card">
              <div class="card-title"><i class="fa-solid fa-a"></i> Stream A • Results</div>
              <ol id="resultsListA2" class="muted list-ol"></ol>
            </div>

            <div class="card">
              <div class="card-title"><i class="fa-solid fa-b"></i> Stream B • Results</div>
              <ol id="resultsListB2" class="muted list-ol"></ol>
            </div>
          </div>
        </div>

        <!-- Ad block -->
        <div class="ad-box">
          <div class="muted small">Advertisement</div>
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      </div>
    </section>

    <!-- STREAM A OVERALL LOG -->
    <section id="streamA" class="section">
      <div class="container">
        <div class="section-head">
          <h2><i class="fa-solid fa-table-list"></i> Stream A • Log Table (Overall)</h2>
        </div>

        <div class="table-wrap">
          <table class="table" aria-label="Stream A overall log table">
            <thead>
              <tr>
                <th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
              </tr>
            </thead>
            <tbody id="logBodyA">
              <tr><td colspan="10" class="muted">Loading log…</td></tr>
            </tbody>
          </table>
        </div>

        <p class="muted small" style="margin-top:10px;">Overall log = Week 1 + Week 2 played matches (❓ excluded).</p>
      </div>
    </section>

    <!-- STREAM B OVERALL LOG -->
    <section id="streamB" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2><i class="fa-solid fa-table-list"></i> Stream B • Log Table (Overall)</h2>
        </div>

        <div class="table-wrap">
          <table class="table" aria-label="Stream B overall log table">
            <thead>
              <tr>
                <th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
              </tr>
            </thead>
            <tbody id="logBodyB">
              <tr><td colspan="10" class="muted">Loading log…</td></tr>
            </tbody>
          </table>
        </div>

        <p class="muted small" style="margin-top:10px;">Overall log = Week 1 + Week 2 played matches (❓ excluded).</p>

        <div class="card" style="margin-top:12px;">
          <div class="card-title"><i class="fa-solid fa-users"></i> WSL Executive</div>
          <p class="muted small" style="line-height:1.6; margin:0;">
            Jethro Gumede (Chairperson), Seepane Emanuel (Deputy Chair), Thabiso Ndlovu (Treasure),
            Clife Ndlovu (Secretary), Bophelo Mogakane (H. Referee), Jomo Unisi (Marketing Director),
            Gift Ndlovu (DC), Ripfumelo Mlambo (Media), Senkie Nyathi (Admin)
          </p>
        </div>
      </div>
    </section>

    <!-- PHOTOS -->
    <section id="photos" class="section">
      <div class="container">
        <div class="section-head">
          <h2><i class="fa-solid fa-image"></i> Photos</h2>
          <div class="tools">
            <button class="btn btn-outline small-btn" type="button" id="prevPhoto"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="btn btn-outline small-btn" type="button" id="nextPhoto"><i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>

        <div class="slideshow card">
          <div class="slide-frame">
            <img id="slideImage" alt="Team photo slideshow" />
          </div>
          <div class="slide-caption">
            <div id="slideTitle" class="slide-title">Loading…</div>
            <div id="slideMeta" class="muted small"></div>
          </div>
        </div>

        <p class="muted small">Add photos in <code>images/photo1.jpg</code>, <code>images/photo2.jpg</code>, <code>images/photo3.jpg</code>.</p>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer-inner">
        <div class="muted small">© <span id="yearNow"></span> Welverdiend Soccer League</div>
        <div class="muted small">Designed by CC Mkansi • Built for GitHub Pages</div>
      </div>
    </footer>
  </main>

  <script src="Script.js?v=18" defer></script>
</body>
</html>
