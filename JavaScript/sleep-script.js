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
    window.addEventListener('popstate', e => loadPage(e.state?.page || 'home', false));
  })();  

/* ------------------------------------------------------------
   1. DATA SOURCE – each key = one content block/section
      (You can rename, delete, or add keys at will; just keep
      the array-of‑objects shape.)                                
   ------------------------------------------------------------ */
   const sections = {
    /* ----------  Better Sleep  (medium‑image list)  ---------- */
    betterSleep: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/02/sleep-sleeping-bed-732x549-thumbnail-732x549.jpg',
        h   : '15 provjerenih savjeta za bolji san noću',
        p   : 'Savjeti temeljeni na dokazima za dublji i okrepljujući odmor.',
        link: 'https://www.healthline.com/nutrition/17-tips-to-sleep-better'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/evening-bed-gummies-moon-reflection-hemp-branch-732x549-thumbnail.jpg',
        h   : 'Što melatonin radi i kako djeluje?',
        p   : 'Znanost, sigurnosni profil i pametna upotreba melatonina.',
        link: 'https://www.healthline.com/nutrition/melatonin-and-sleep'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/woman-tired-sleeping-sleep-bed-732x549-thumbnail-1-732x549.jpg',
        h   : '12 savjeta za zdravu higijenu spavanja',
        p   : 'Navike od dana do noći koje vas pripremaju za kvalitetan san.',
        link: 'https://www.healthline.com/health/sleep-hygiene'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/07/close-up-digital-alarm-clock-midnight-numbers-display-732x549-thumbnail.jpg',
        h   : 'Zašto sam toliko umoran, ali ne mogu spavati?',
        p   : 'Uobičajeni krivci za taj osjećaj umora i napetosti — plus rješenja.',
        link: 'https://www.healthline.com/health/healthy-sleep/tired-but-cant-sleep'
      }
    ],
  
    /* ----------  Sleep Disorders & Treatment  ---------- */
    sleepDisorders: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/close-up-multiple-pills-supplements-on-white-surface-732x549-thumbnail-.jpg',
        h: 'Alternativni tretmani za nesanicu',
        p: 'Istraživanje dodataka prehrani, KBT-I i intervencija u načinu života.',
        link: 'https://www.healthline.com/health/insomnia/alternative-treatments'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/psychotherapy-session-732x549-thumbnail-732x549.jpg',
        h: 'Koja je vrsta psihoterapije najbolja za anksioznost u snu?',
        p: 'Vodič za KBT, ACT, EMDR i još mnogo toga.',
        link: 'https://www.healthline.com/health/anxiety/psychotherapy-for-anxiety'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/females-playing-board-game-732-549-feature-thumb.jpg',
        h   : '5 uobičajenih zabluda o lijekovima za spavanje',
        p   : 'Odvajanje činjenica od fikcije kako biste donosili sigurne odluke.',
        link: 'https://www.healthline.com/health/depression/common-misconceptions-about-antidepressants'
      }
    ],
  
    /* ----------  Mind & Body  ---------- */
    mindAndBody: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/01/african_american_woman_journaling_at_home-732x549-thumbnail-732x549.jpg',
        h   : '6 prednosti vođenja dnevnika i kako započeti večeras',
        p   : 'Navika niske tehnologije koja se prevodi u bolje spavanje.',
        link: 'https://www.healthline.com/health/benefits-of-journaling'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/04/eating-salad-732x549-thumbnail.jpg',
        h   : '32 aktivnosti svjesnosti za opuštanje prije spavanja',
        p   : 'Petominutne vježbe koje možete uklopiti u bilo koju rutinu.',
        link: 'https://www.healthline.com/health/mind-body/mindfulness-activities'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/depression-help-for-depression_thumb-1-732x549.jpg',
        h   : 'Učinkovite tehnike suočavanja s noćnom anksioznošću',
        p   : '11 strategija za smirivanje jurećih misli kada se svjetla ugase.',
        link: 'https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety'
      }
    ]
  };
  
  /* ------------------------------------------------------------
     2. HELPERS – identical to your nutrition‑script.js           
     ------------------------------------------------------------ */
  function el(tag, cls) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }
  
  function buildList(arr, targetSel) {
    const ul = typeof targetSel === 'string' ? document.querySelector(targetSel) : targetSel;
    if (!ul) return;
    arr.forEach(a => {
      const li   = el('li');
      const img  = el('img'); img.src = a.img; img.alt = '';
      const wrap = el('div');
      const h3   = el('h3'); h3.textContent = a.h;
      wrap.appendChild(h3);
      if (a.p) { const p = el('p'); p.textContent = a.p; wrap.appendChild(p); }
      li.appendChild(img);
      li.appendChild(wrap);
      ul.appendChild(li);
      li.addEventListener('click', () => window.open(a.link || '#', '_blank'));
    });
  }
  
  /* ------------------------------------------------------------
     3. RENDER – auto‑create <section> + <ul> for each key        
     ------------------------------------------------------------ */
  const main = document.getElementById('content');
  
  Object.entries(sections).forEach(([key, arr]) => {
    // Create the section shell
    const section   = el('section', 'section');
    section.id      = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  
    // Section header
    const head      = el('div', 'section-head');
    const h2        = el('h2', 'section-title');
    h2.textContent  = key.replace(/([A-Z])/g, ' $1')  // camelCase → spaced words
                       .replace(/^./, m => m.toUpperCase());
    head.appendChild(h2);
    section.appendChild(head);
  
    // The list container
    const ul        = el('ul', 'article-list');
    section.appendChild(ul);
  
    // Inject into DOM, then populate
    main.appendChild(section);
    buildList(arr, ul);
  });
  
  /* ------------------------------------------------------------
     4. (Optional) Header nav / dark‑mode / hamburger scripts
        These are shared across all pages; import the same file
        you use on the Home page, or paste the logic here.       
     ------------------------------------------------------------ */