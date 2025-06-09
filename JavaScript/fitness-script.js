(() => {
  /* ------------------------------------------------------------ */
  /*  THEME TOGGLE                                                */
  /* ------------------------------------------------------------ */
  const root = document.documentElement;
  const modeToggle = document.getElementById("modeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") root.classList.add("dark");
  modeToggle?.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  });

  /* ------------------------------------------------------------ */
  /*  HAMBURGER ANIMATION                                         */
  /* ------------------------------------------------------------ */
  const burger = document.querySelector(".hamburger");
  burger?.addEventListener("click", () => burger.classList.toggle("open"));

  /* ------------------------------------------------------------ */
  /*  SIMPLE ROUTER                                               */
  /* ------------------------------------------------------------ */
  const contentEl = document.getElementById("content");
  const links = document.querySelectorAll(".nav-link, .logo, .footer-nav a");

  function setActive(page){
    links.forEach(l=>l.classList.toggle("active", l.dataset.page===page));
  }

  function loadPage(page, push=true){
    if(page==="home"){
      contentEl.innerHTML = HOME_TEMPLATE;
    }else{
      fetch(`${page}.html`).then(r=>r.ok?r.text():"<p>Page not found.</p>").then(html=>contentEl.innerHTML=html);
    }
    setActive(page);
    if(push) history.pushState({page}, "", page==="home"?"index.html":`${page}.html`);
  }

  links.forEach(a=>a.addEventListener("click",e=>{e.preventDefault();loadPage(a.dataset.page);}));
  window.addEventListener("popstate", e => loadPage(e.state?.page || "home", false));
})();

/* ----------------------------------------------------------------
   1. DATA SOURCE – one master object, keys mirror section IDs
   ---------------------------------------------------------------- */
   const sections = {
    /* ----------  Istaknuto  ---------- */
    featured: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/10/HL-Welcome_to_Healthline_Fitness-Letter_from_the_Editor-Thumbnail-732x549.png",
        h   : "Dobrodošli u Healthline Fitness: Pismo urednika",
        p   : "Kondicija nije pitanje onoga što možete izgubiti, već onoga što možete dobiti.",
        link: "https://www.healthline.com/health/fitness/welcome-to-healthline-fitness"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/07/7040-hispanic_female_exercise-732x549-thumbnail-732x549.jpg",
        h   : "10 vježbi za toniranje svakog centimetra vašeg tijela",
        p   : "Sastavili smo popis od 10 najboljih i najmoćnijih vježbi koje možete raditi svaki dan…",
        link: "https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2019/04/Plank_Exercise_Field_Group-732x549-THumbnail.jpg",
        h   : "Najbolje vježbe za trup za sve razine kondicije",
        p   : "Jačanje mišića trupa pomaže u stabilizaciji tijela i podupiranju kralježnice.",
        link: "https://www.healthline.com/health/best-core-exercises"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2024/04/woman-exercising-working-out-lifting-weights-yoga-mat-outdoors-732x549-thumbnail.jpg",
        h   : "Vodič za početnike u treningu s utezima",
        p   : "Trening s utezima izvrstan je način za izgradnju mišićne mase i toniranje tijela…",
        link: "https://www.healthline.com/health/how-to-start-lifting-weights"
      }
    ],
  
    /* ----------  Vježbanje  ---------- */
    exercise: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2018/11/Footprint-732x549-thumbnail.jpg",
        h   : "Koliko koraka ljudi u prosjeku naprave dnevno?",
        p   : "Koliko koraka ljudi zapravo naprave dnevno? Pogledajte kako se brojke raščlanjuju po dobi i spolu.",
        link: "https://www.healthline.com/health/average-steps-per-day"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2019/09/Athletes-doing-burpee-exercise-in-crossfit-gym-732x549-thumbnail.jpg",
        h   : "Prednosti burpeeja i kako ih izvoditi",
        p   : "Ako tražite način za izgradnju snage i izdržljivosti, burpeeji su odlična vježba…",
        link: "https://www.healthline.com/health/how-to-do-a-burpee"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2019/04/Runner_Stretch_Park_Orange-732x549-Thumbnail.jpg",
        h   : "12 vježbi koje sagorijevaju najviše kalorija",
        p   : "Trčanje sagorijeva najviše kalorija na sat, ali to ne znači da je to jedina vježba…",
        link: "https://www.healthline.com/health/what-exercise-burns-the-most-calories"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/04/Female_Squat_732x549-thumbnail-732x549.jpg",
        h   : "Koje je mišićne skupine najbolje vježbati zajedno?",
        p   : "Ne postoji ispravan ili pogrešan način uparivanja mišićnih skupina za trening snage, ali neke kombinacije daju bolji rezultat…",
        link: "https://www.healthline.com/health/exercise-fitness/muscle-groups-to-workout-together"
      }
    ],
  
    /* ----------  Kardio  ---------- */
    cardio: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/08/Female_Stretching_Outside_732x549-thumbnail-732x549.jpg",
        h   : "Što je bolje za vaše zdravlje: hodanje ili trčanje?",
        p   : "I trčanje i hodanje dobri su za vaše zdravlje, no svako ima svoje prednosti…",
        link: "https://www.healthline.com/health/walking-vs-running"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/09/runner-running-732x549-thumbnail-732x549.jpg",
        h   : "Što je tijelo trkača? To je više od izgleda",
        p   : "Tijelo trkača je više od samog izgleda. Trkači dolaze u svim oblicima i veličinama…",
        link: "https://www.healthline.com/health/fitness/runners-body"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/10/Female_Running_732x549-thumbnail-732x549.jpg",
        h   : "Evo kako trčanje utječe na vaša koljena",
        p   : "Mnogi se pitaju je li trčanje loše za koljena. Donosimo odgovor i savjete kako čuvati zglobove…",
        link: "https://www.healthline.com/health/fitness/is-running-bad-for-your-knees"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/03/Male_VO2_Testing_732x549-thumbnail-732x549.jpg",
        h   : "Sve što trebate znati o VO₂ Max",
        p   : "VO₂ max je ključni pokazatelj aerobne kondicije. Saznajte kako se mjeri i kako ga povećati…",
        link: "https://www.healthline.com/health/vo2-max"
      }
    ],
  
    /* ----------  Proizvodi  ---------- */
    products: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/07/1377301-1183869-The-8-Best-Weight-Benches-of-2021-732x549-Feature-732x549.jpg",
        h   : "9 najboljih klupa za utege",
        p   : "Bez obzira jeste li početnik ili stručnjak, klupa za vježbanje ključan je komad opreme…",
        link: "https://www.healthline.com/health/fitness/weight-bench"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/06/944264-The-10-Best-Home-Gym-Equipment-Items-to-Own-732x549-Feature.jpg",
        h   : "25 najboljih predmeta za kućnu teretanu",
        p   : "Donosimo 25 najboljih sprava i dodataka koje vrijedi imati pri ruci ove godine.",
        link: "https://www.healthline.com/health/fitness/home-gym-equipment"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2022/08/2426499-Clone-The-9-Best-Personal-Training-Apps-of-2022-732x549-Feature-732x549.jpg",
        h   : "5 najboljih aplikacija za osobni trening",
        p   : "Aplikacije za osobni trening pružaju stručno vodstvo za ciljane vježbe…",
        link: "https://www.healthline.com/nutrition/personal-trainer-app"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/10/678693-The-8-Best-Peloton-Bike-Alternatives-of-2020-732x549-Feature-732x549.jpg",
        h   : "9 najboljih alternativa za Peloton bicikl",
        p   : "Peloton je popularan pametni sobni bicikl, ali nije vaša jedina opcija.",
        link: "https://www.healthline.com/nutrition/peloton-bike-alternatives"
      }
    ],
  
    /* ----------  Trening snage  ---------- */
    strengthTraining: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/04/female-weight-lifting-home-kettlebell-732x549-thumbnail.jpg",
        h   : "Kako dobiti mišiće, bez obzira tko ste",
        p   : "Želite povećati snagu? Evo znanstveno potkrijepljenih savjeta kako dobiti mišiće bez suvišne masnoće…",
        link: "https://www.healthline.com/health/fitness/how-to-gain-muscle"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2019/05/Female_Lifting_Weights_732x549-thumbnail.jpg",
        h   : "Koliko mišićne mase trebam imati i kako je mjeriti?",
        p   : "Mišićna masa dio je nemasne tjelesne mase, a precizno je mjerenje izazovno. Evo kako pristupiti…",
        link: "https://www.healthline.com/health/muscle-mass-percentage"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/08/Asian_female_cooking_smiling-732x549-thumbnail-732x549.jpg",
        h   : "Mezomorfni tip tijela: Što je to, prehrana i više",
        p   : "Vaš tip tijela određen je skeletnim okvirom i sastavom tijela. Saznajte preporuke za mezomorfe…",
        link: "https://www.healthline.com/health/mesomorph-body-type-diet"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/01/senior-exercise-pullup-grandchild-732x549-thumbnail-732x549.jpg",
        h   : "Kako poboljšati snagu stiska",
        p   : "Snaga stiska mjeri koliko čvrsto i sigurno možete držati predmete. Naučite kako je povećati…",
        link: "https://www.healthline.com/health/grip-strength"
      }
    ],
  
    /* ----------  Joga  ---------- */
    yoga: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/05/yoga-childs-pose-relaxation-732x549-thumbnail.jpg",
        h   : "Evo kako koristiti jogu za smanjenje stresa",
        p   : "Želite li koristiti jogu za smanjenje stresa, isprobajte ove provjerene tehnike…",
        link: "https://www.healthline.com/health/fitness/yoga-for-stress"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/02/yoga-732x549-thumbnail-732x549.jpg",
        h   : "Može li joga pomoći probavi? 9 poza koje treba isprobati",
        p   : "Kod probavnih tegoba poželite brzo olakšanje. Ovi položaji mogu pomoći…",
        link: "https://www.healthline.com/nutrition/yoga-posture-for-digestion"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/08/766x415_Pilates_vs_Yoga-The_Differences_and_Whats_Right_for_You-1-732x415.jpg",
        h   : "Pilates vs. joga: Razlike i što je pravo za vas",
        p   : "I Pilates i joga učinkoviti su oblici vježbanja koji mogu poboljšati vaše zdravlje…",
        link: "https://www.healthline.com/health/fitness-exercise/pilates-vs-yoga"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/10/Older_Female_Pilates_732x549-thumbnail-732x549.jpg",
        h   : "Zdravstvene prednosti Pilatesa za starije odrasle osobe",
        p   : "Koje su prednosti Pilatesa za starije odrasle osobe? Čitajte dalje i saznajte…",
        link: "https://www.healthline.com/health/fitness/pilates-for-seniors"
      }
    ],
  
    /* ----------  Holistički fitness  ---------- */
    holisticFitness: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/09/woman-doing-yoga-in-bed-732x549-thumbnail-732x549.jpg",
        h   : "13 trikova za borbu protiv umora koji će vam poboljšati jutra",
        p   : "Ujutro se možete osjećati umorno iz brojnih razloga. Evo kako vratiti energiju…",
        link: "https://www.healthline.com/health/morning-fatigue-remedies"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2024/05/young-woman-stretching-childs-pose-yoga-mat-indoors-732x549-thumbnail.jpg",
        h   : "7 istezanja donjeg dijela leđa za smanjenje boli i poboljšanje pokretljivosti",
        p   : "Naučite ublažiti bol i ukočenost u donjem dijelu leđa pomoću ovih 7 istezanja, uz detaljne upute…",
        link: "https://www.healthline.com/health/lower-back-stretches"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/09/6271-Women_Exercising_Running_Staircase-732x549-thumbnail-732x549.jpg",
        h   : "Što uzrokuje umor mišića?",
        p   : "Umor mišića smanjuje sposobnost mišića da rade kroz vrijeme. Saznajte uzroke i prevenciju…",
        link: "https://www.healthline.com/health/muscle-fatigue"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/09/woman-using-foam-roller-732x549-thumbnail-1-732x549.jpg",
        h   : "14 savjeta za maksimiziranje oporavka mišića",
        p   : "Pridržavajte se ovih 14 savjeta kako biste ubrzali oporavak mišića i spriječili ozljede…",
        link: "https://www.healthline.com/health/muscle-recovery"
      }
    ]
  };

/* ----------------------------------------------------------------
   2. RENDER HELPERS – creates <li> for list or thumb row
   ---------------------------------------------------------------- */
function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

function buildList(arr, targetSel) {
  const ul = document.querySelector(targetSel);
  if (!ul) return;
  arr.forEach(a => {
    const li = el("li");
    const img = el("img");
    img.src = a.img;
    img.alt = "";
    const wrap = el("div");
    const h3 = el("h3");
    h3.textContent = a.h;
    wrap.appendChild(h3);
    if (a.p) {
      const p = el("p");
      p.textContent = a.p;
      wrap.appendChild(p);
    }
    li.appendChild(img);
    li.appendChild(wrap);
    ul.appendChild(li);
    li.addEventListener("click", () => window.open(a.link || "#", "_blank"));
  });
}

function buildThumbRow(arr, targetSel) {
  const ul = document.querySelector(targetSel);
  if (!ul) return;
  arr.forEach(a => {
    const li = el("li");
    const img = el("img");
    img.src = a.img;
    img.alt = "";
    li.appendChild(img);
    if (a.time) {
      const badge = el("span", "time-badge");
      badge.textContent = a.time;
      li.appendChild(badge);
    }
    ul.appendChild(li);
    li.addEventListener("click", () => window.open(a.link || "#", "_blank"));
  });
}

/* ----------------------------------------------------------------
   3. RENDER – call helpers for each section
   ---------------------------------------------------------------- */
Object.entries(sections).forEach(([key, arr]) => {
  const sel = "#" + key.replace(/([A-Z])/g, "-$1").toLowerCase() + "-list";
  buildList(arr, sel);
});

/* RELOAD */
window.addEventListener("DOMContentLoaded", () => {
  // derive page from the current URL (e.g. /fitness.html → "fitness")
  const start = location.pathname.replace(/^\/|\.html$/g,"") || "home";
  loadPage(start, false);           // don't pushState again
});

function loadPage(page, push = true) {
  const url = page === "home" ? "home.html" : `${page}.html`;

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
  if (push) history.pushState({ page }, "", page === "home" ? "index.html" : `${page}.html`);
}