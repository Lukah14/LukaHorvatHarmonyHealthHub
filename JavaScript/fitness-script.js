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

/* ----------  1. DATA ---------- */
const sections = {
    /* Medium-image list */
    trainingBasics: [
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2024/05/pushup-man-park-732x549-thumbnail.jpg',
        h:'Push-Up Progression: Form Fixes & Variations',
        p:'Master the classic body-weight move and level-up safely.',
        link:'https://www.healthline.com/health/exercise-fitness/pushup-form'
      },
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2023/07/gym-woman-deadlift-732x549-thumb.jpg',
        h:'Deadlift 101: Muscles Worked, Benefits, and How-To',
        p:'A physiotherapist breaks down perfect technique.',
        link:'https://www.healthline.com/health/exercise-fitness/how-to-deadlift'
      },
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/12/woman-running-road-sunrise-732x549-thumb.jpg',
        h:'Couch-to-5 K in 8 Weeks',
        p:'A beginner-friendly running plan that actually sticks.',
        link:'https://www.healthline.com/health/fitness-exercise/couch-to-5k'
      }
    ],
  
    /* Thumb-row carousel (videos) */
    workoutVideos: [
      {
        img:'https://img.youtube.com/vi/UBMk30rjy0o/hqdefault.jpg',
        time:'12:04',
        link:'https://www.youtube.com/watch?v=UBMk30rjy0o'
      },
      {
        img:'https://img.youtube.com/vi/UItWltVZZmE/hqdefault.jpg',
        time:'15:32',
        link:'https://www.youtube.com/watch?v=UItWltVZZmE'
      },
      {
        img:'https://img.youtube.com/vi/ML7dK3b0Om0/hqdefault.jpg',
        time:'09:20',
        link:'https://www.youtube.com/watch?v=ML7dK3b0Om0'
      },
      {
        img:'https://img.youtube.com/vi/qWy_aOlB45Y/hqdefault.jpg',
        time:'10:11',
        link:'https://www.youtube.com/watch?v=qWy_aOlB45Y'
      }
    ],
  
    recoveryAndMobility: [
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2022/02/foam-rolling-quads-732x549-thumb.jpg',
        h:'Foam-Rolling: 5 Moves for Tight Quads & IT-Bands',
        p:'Ease soreness in under 10 minutes.',
        link:'https://www.healthline.com/health/foam-roller-exercises'
      },
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2024/03/runner-stretch-calf-732x549-thumb.jpg',
        h:'Dynamic vs. Static Stretching — When to Use Each',
        p:'Spoiler: it depends on workout timing.',
        link:'https://www.healthline.com/health/fitness/dynamic-stretching'
      },
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2023/03/ice-bath-recovery-732x549-thumb.jpg',
        h:'Ice Baths: Benefits, Risks, and How Cold to Go',
        p:'Do they really boost recovery? We dive in.',
        link:'https://www.healthline.com/health/ice-bath-benefits'
      }
    ],
  
    gearGuides: [
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2025/01/best-dumbbells-732x549-thumb.jpg',
        h:'The 9 Best Adjustable Dumbbells of 2025',
        p:'Trainer-tested picks for every budget.',
        link:'https://www.healthline.com/health/fitness/best-adjustable-dumbbells'
      },
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2024/11/running-shoes-gear-guide-732x549-thumb.jpg',
        h:'How to Buy Running Shoes (Without a Gait Lab)',
        p:'A podiatrist explains fit, cushioning, and drop.',
        link:'https://www.healthline.com/health/exercise-fitness/best-running-shoes'
      },
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2023/08/fitness-tracker-smartwatch-732x549-thumb.jpg',
        h:'Fitness Trackers Compared: Apple vs. Garmin vs. Fitbit',
        p:'Which wearable nails accuracy for heart-rate & GPS?',
        link:'https://www.healthline.com/health/fitness/best-fitness-trackers'
      }
    ]
  };
  
  /* ------------------------------------------------------------
     2. RENDER HELPERS – same as nutrition‑script (keep once!)
     ------------------------------------------------------------ */
  function el(tag, cls) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }
  
  function buildList(arr, targetSel) {
    const ul = document.querySelector(targetSel);
    if (!ul) return;
    arr.forEach(a => {
      const li = el('li');
      const img = el('img');
      img.src = a.img;
      img.alt = '';
      const wrap = el('div');
      const h3 = el('h3');
      h3.textContent = a.h;
      wrap.appendChild(h3);
      if (a.p) {
        const p = el('p');
        p.textContent = a.p;
        wrap.appendChild(p);
      }
      li.appendChild(img);
      li.appendChild(wrap);
      ul.appendChild(li);
      li.addEventListener('click', () => window.open(a.link || '#', '_blank'));
    });
  }
  
  function buildThumbRow(arr, targetSel) {
    const ul = document.querySelector(targetSel);
    if (!ul) return;
    arr.forEach(a => {
      const li = el('li');
      const img = el('img');
      img.src = a.img;
      img.alt = '';
      li.appendChild(img);
      if (a.time) {
        const badge = el('span', 'time-badge');
        badge.textContent = a.time;
        li.appendChild(badge);
      }
      ul.appendChild(li);
      li.addEventListener('click', () => window.open(a.link || '#', '_blank'));
    });
  }
  
  /* ------------------------------------------------------------
     3. RENDER – auto‑match section → <ul id="section-key-list">
     ------------------------------------------------------------ */
  Object.entries(sections).forEach(([key, arr]) => {
    const sel = '#' + key.replace(/([A-Z])/g, '-$1').toLowerCase() + '-list';
    (key === 'betterSleepVideos' ? buildThumbRow : buildList)(arr, sel);
  });