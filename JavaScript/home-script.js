(() => {
    /* ------------------------------------------------------------ */
    /*  THEME TOGGLE                                                */
    /* ------------------------------------------------------------ */
    const root = document.documentElement;
    const modeToggle = document.getElementById('modeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') root.classList.add('dark');
    modeToggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  
    /* ------------------------------------------------------------ */
    /*  HAMBURGER ANIMATION                                         */
    /* ------------------------------------------------------------ */
    const burger = document.querySelector('.hamburger');
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      // potential: toggle a side‑menu here later
    });
  
    /* ------------------------------------------------------------ */
    /*  SIMPLE ROUTER                                               */
    /* ------------------------------------------------------------ */
    const contentEl = document.getElementById('content');
    const links = document.querySelectorAll('.nav-link, .logo, .footer-nav a');
  
    function setActive(page){
      links.forEach(l=>l.classList.toggle('active', l.dataset.page===page));
    }
  
    function loadPage(page, push=true){
      if(page==='home'){
        contentEl.innerHTML = HOME_TEMPLATE;
      }else{
        fetch(`${page}.html`).then(r=>r.ok?r.text():'<p>Page not found.</p>').then(html=>contentEl.innerHTML=html);
      }
      setActive(page);
      if(push) history.pushState({page}, '', page==='home'?'index.html':`${page}.html`);
    }
  
    links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();loadPage(a.dataset.page);}));
    window.addEventListener('popstate',e=>loadPage(e.state?.page||'home',false));
  
    /* ------------------------------------------------------------ */
    /*  HOME PAGE TEMPLATE                                          */
    /* ------------------------------------------------------------ */
    const HOME_TEMPLATE = `
      <section class="hero"><h1>HARMONY<br>HEALTH<br>HUB</h1></section>
  
      <section class="section" id="tji">
        <div class="section-head"><h2 class="section-title">This Just In</h2><a class="view-all" href="#">View All</a></div>
        <div class="tji-list">
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1551776235-dde6d4829809?auto=format&fit=crop&w=400&q=60" alt="Sleep"><div><h3>Why Do I Have Smelly Armpits?</h3><p>Treatment depends on the underlying cause and severity of the body odor.</p></div></article>
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1496317556649-f930d733eea0?auto=format&fit=crop&w=400&q=60" alt="Shower"><div><h3>Is It Better to Shower in the Morning or at Night?</h3><p>But does it actually matter?</p></div></article>
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1601924582975-4cc9dfe06cf3?auto=format&fit=crop&w=400&q=60" alt="Pizza"><div><h3>6 Factors That May Cause a Sudden Increase in Cholesterol</h3><p>Consistently elevated levels can increase your risk of certain heart conditions.</p></div></article>
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1506808547685-e2ba962dedf5?auto=format&fit=crop&w=400&q=60" alt="Salad"><div><h3>Will These Popular Diets Improve Your Skin?</h3><p>Here's what people are eating — and whether it actually helps.</p></div></article>
        </div>
      </section>
  
      <section class="section" id="top-reads">
        <div class="section-head"><h2 class="section-title">More Top Reads</h2><a class="view-all" href="#">View All</a></div>
        <div class="card-row">
          <div class="card"><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60"><h4>7 Ways to Remove Dead Skin from Your Feet</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=60"><h4>Symptoms and Causes of High Cortisol Levels</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1520209268518-b7615b1c7073?auto=format&fit=crop&w=400&q=60"><h4>Comforting Recipes for a Cozy Dinner</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=60"><h4>How to Deal With a Toxic Work Environment</h4></div>
        </div>
      </section>
  
      <section class="section" id="top-videos">
        <div class="section-head"><h2 class="section-title">More Top Videos</h2><a class="view-all" href="#">View All</a></div>
        <div class="card-row">
          <div class="card"><img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60"><h4>Video Diaries: Meradi's Story</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1573497162712-6673a5e36aa7?auto=format&fit=crop&w=400&q=60"><h4>Pieces of Advice: Tamara Marbury</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1520975698510-6a43a042e79c?auto=format&fit=crop&w=400&q=60"><h4>Alopecia Facts and Stories</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60"><h4>Atopic Dermatitis Facts and Stories</h4></div>
        </div>
      </section>
  
      <section class="section" id="conditions">
        <div class="section-head"><h2 class="section-title">Health Conditions</h2><a class="view-all" href="#">View All</a></div>
        <p style="color:var(--muted);max-width:60ch;">Explore evidence-based guides for hundreds of common conditions—from prevention to treatment options.</p>
      </section>
  
      <section class="section" id="spotlight">
        <div class="section-head"><h2 class="section-title">Spotlight</h2><a class="view-all" href="#">View All</a></div>
        <div class="card-row">
          <div class="card"><img src="https://images.unsplash.com/photo-1554260570-345501925ce7?auto=format&fit=crop&w=400&q=60"><h4>Beginner Yoga Flow for Stress Relief</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?auto=format&fit=crop&w=400&q=60"><h4>Meditation Techniques Backed by Science</h4></div>
        </div>
      </section>
    `;
  
    /* ------------------------------------------------------------ */
    /*  INITIAL LOAD                                                */
    /* ------------------------------------------------------------ */
    const firstPage = location.pathname.match(/([A-Za-z\-]+)\.html$/)?.[1] || 'home';
    loadPage(firstPage,false);
})();



  fetch(url)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then(html => contentEl.innerHTML = html)
    .catch(err => {
      contentEl.innerHTML = `<p class="error">Page failed to load (${err.message})</p>`;
    });

  setActive(page);
  if (push) history.pushState({ page }, '', page === 'home' ? 'index.html' : `${page}.html`);

