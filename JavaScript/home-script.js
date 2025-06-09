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
        <div class="section-head"><h2 class="section-title">Upravo stiglo</h2><a class="view-all" href="#">View All</a></div>
        <div class="tji-list">
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1551776235-dde6d4829809?auto=format&fit=crop&w=400&q=60" alt="Sleep"><div><h3>Zašto imam smrdljive pazuhe?</h3><p>Liječenje ovisi o uzroku i težini tjelesnog mirisa.</p></div></article>
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1496317556649-f930d733eea0?auto=format&fit=crop&w=400&q=60" alt="Shower"><div><h3>Je li bolje tuširati se ujutro ili navečer?</h3><p>Ali je li to zapravo važno?</p></div></article>
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1601924582975-4cc9dfe06cf3?auto=format&fit=crop&w=400&q=60" alt="Pizza"><div><h3>6 faktora koji mogu uzrokovati nagli porast kolesterola</h3><p>Stalno povišene razine mogu povećati rizik od određenih srčanih bolesti.</p></div></article>
          <article class="tji-item"><img src="https://images.unsplash.com/photo-1506808547685-e2ba962dedf5?auto=format&fit=crop&w=400&q=60" alt="Salad"><div><h3>Hoće li ove popularne dijete poboljšati vašu kožu?</h3><p>Evo što ljudi jedu - i pomaže li im to zapravo.</p></div></article>
        </div>
      </section>
  
      <section class="section" id="top-reads">
        <div class="section-head"><h2 class="section-title">Više najčitanijih knjiga</h2><a class="view-all" href="#">View All</a></div>
        <div class="card-row">
          <div class="card"><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60"><h4>7 Ways to Remove Dead Skin from Your Feet</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=60"><h4>Symptoms and Causes of High Cortisol Levels</h4></div>
          <div class="card"><img src="https://goop-img.com/wp-content/uploads/2021/11/A-Cozy-Winter-Dinner-Menu_20211022_EDITORIAL_FOOD_COZY_SHOT-03_319_CROPPED-1.jpg"><h4>Comforting Recipes for a Cozy Dinner</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=60"><h4>How to Deal With a Toxic Work Environment</h4></div>
        </div>
      </section>
  
      <section class="section" id="top-videos">
        <div class="section-head"><h2 class="section-title">Više najboljih videa</h2><a class="view-all" href="#">View All</a></div>
        <div class="card-row">
          <div class="card"><img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60"><h4>Video Diaries: Meradi's Story</h4></div>
          <div class="card"><img src="https://baldwinscholars.duke.edu/sites/default/files/styles/focal_point_large/public/d595c6d4257df29341425898ecc46adb.jpg?h=310db5a0&itok=-8VQPqwu"><h4>Savjeti: Manjusha Kulkharni (izvršna direktorica AAPI Equity Alliance)</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1520975698510-6a43a042e79c?auto=format&fit=crop&w=400&q=60"><h4>Alopecia Facts and Stories</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60"><h4>Atopic Dermatitis Facts and Stories</h4></div>
        </div>
      </section>
  
      <section class="section" id="conditions">
        <div class="section-head"><h2 class="section-title">Zdravstveno stanje</h2><a class="view-all" href="#">View All</a></div>
        <p style="color:var(--muted);max-width:60ch;">Istražite vodiče temeljene na dokazima za stotine uobičajenih stanja - od prevencije do mogućnosti liječenja.</p>
      </section>
  
      <section class="section" id="spotlight">
        <div class="section-head"><h2 class="section-title">Istaknuto</h2><a class="view-all" href="#">View All</a></div>
        <div class="card-row">
          <div class="card"><img src="https://images.unsplash.com/photo-1554260570-345501925ce7?auto=format&fit=crop&w=400&q=60"><h4>Joga za početnike za ublažavanje stresa</h4></div>
          <div class="card"><img src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?auto=format&fit=crop&w=400&q=60"><h4>Tehnike meditacije potkrijepljene znanošću</h4></div>
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

