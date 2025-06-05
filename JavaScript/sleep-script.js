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
        h: 'Top 15 Proven Tips to Sleep Better at Night',
        p: 'Evidence‑based advice for deeper, more restorative rest.',
        link: 'https://www.healthline.com/nutrition/17-tips-to-sleep-better'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/evening-bed-gummies-moon-reflection-hemp-branch-732x549-thumbnail.jpg',
        h: 'What Does Melatonin Do, and How Does It Work?',
        p: 'The science, safety profile, and smart usage of melatonin.',
        link: 'https://www.healthline.com/nutrition/melatonin-and-sleep'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/woman-tired-sleeping-sleep-bed-732x549-thumbnail-1-732x549.jpg',
        h: '12 Healthy Sleep Hygiene Tips',
        p: 'Day‑to‑night habits that set you up for quality sleep.',
        link: 'https://www.healthline.com/health/sleep-hygiene'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/07/close-up-digital-alarm-clock-midnight-numbers-display-732x549-thumbnail.jpg',
        h: 'Why Am I So Tired, but Can’t Sleep?',
        p: 'Common culprits behind that wired‑and‑tired feeling — plus fixes.',
        link: 'https://www.healthline.com/health/healthy-sleep/tired-but-cant-sleep'
      }
    ],
  
    /* ----------  Sleep Disorders & Treatment  ---------- */
    sleepDisorders: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/close-up-multiple-pills-supplements-on-white-surface-732x549-thumbnail-.jpg',
        h: 'Alternative Treatments for Insomnia',
        p: 'Exploring supplements, CBT‑I, and lifestyle interventions.',
        link: 'https://www.healthline.com/health/insomnia/alternative-treatments'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/psychotherapy-session-732x549-thumbnail-732x549.jpg',
        h: 'What Type of Psychotherapy Is Best for Sleep Anxiety?',
        p: 'A guide to CBT, ACT, EMDR, and more.',
        link: 'https://www.healthline.com/health/anxiety/psychotherapy-for-anxiety'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/females-playing-board-game-732-549-feature-thumb.jpg',
        h: '5 Common Misconceptions About Sleep Medications',
        p: 'Separating fact from fiction to help you make safe choices.',
        link: 'https://www.healthline.com/health/depression/common-misconceptions-about-antidepressants'
      }
    ],
  
    /* ----------  Mind & Body  ---------- */
    mindAndBody: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/01/african_american_woman_journaling_at_home-732x549-thumbnail-732x549.jpg',
        h: '6 Journaling Benefits and How to Start Tonight',
        p: 'A low‑tech habit that translates to better shut‑eye.',
        link: 'https://www.healthline.com/health/benefits-of-journaling'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/04/eating-salad-732x549-thumbnail.jpg',
        h: '32 Mindfulness Activities to Wind Down Before Bed',
        p: 'Five‑minute practices you can slot into any routine.',
        link: 'https://www.healthline.com/health/mind-body/mindfulness-activities'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/depression-help-for-depression_thumb-1-732x549.jpg',
        h: 'Effective Coping Techniques for Night‑Time Anxiety',
        p: '11 strategies to quiet racing thoughts when the lights go out.',
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