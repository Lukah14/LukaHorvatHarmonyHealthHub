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
    /* ----------  Liječenje anksioznosti  ---------- */
    treatmentForAnxiety: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2022/12/psychotherapy-session-732x549-thumbnail-732x549.jpg",
        h   : "Koja je vrsta psihoterapije najbolja za anksioznost?",
        p   : "Psihoterapija vam može pomoći u upravljanju simptomima anksioznosti. Pronađite najbolju vrstu terapije za vas.",
        link: "https://www.healthline.com/health/anxiety/psychotherapy-for-anxiety"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/02/732x549_SEO_Anxiety_Thumb-732x549.jpg",
        h   : "Učinkovite tehnike suočavanja s anksioznošću",
        p   : "Identificiranje vaših okidača može potrajati i zahtijevati samorefleksiju. U međuvremenu, evo 11 strategija koje možete isprobati…",
        link: "https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2024/12/close-up-multiple-pills-supplements-on-white-surface-732x549-thumbnail-.jpg",
        h   : "Alternativni tretmani za anksioznost",
        p   : "Evo nekoliko alternativnih tretmana koji pomažu kod anksioznosti.",
        link: "https://www.healthline.com/health/anxiety-alternative-treatments"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2025/04/females-playing-board-game-732-549-feature-thumb.jpg",
        h   : "5 uobičajenih zabluda o antidepresivima",
        p   : "Postoje mnoge zablude o antidepresivima. Ako ih razmatrate, vrijedi odvojiti malo vremena da…",
        link: "https://www.healthline.com/health/depression/common-misconceptions-about-antidepressants"
      }
    ],
  
    /* ----------  Liječenje depresije  ---------- */
    treatmentForDepression: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2023/06/variety-of-different-multicolored-chairs-against-wall-732x549-thumbnail-732x549.jpg",
        h   : "Koje su vrste terapije za depresiju?",
        p   : "Depresija se može liječiti raznim terapijskim tehnikama.",
        link: "https://www.healthline.com/health/depression/types-of-depression-therapy"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/09/depression-help-for-depression_thumb-1-732x549.jpg",
        h   : "Kako mogu dobiti pomoć za depresiju?",
        p   : "Depresija može biti iscrpljujuća za one koji je doživljavaju. Ali postoje mnogi učinkoviti…",
        link: "https://www.healthline.com/health/depression/help-for-depression"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/11/taking-medication-with-water-1296x728-header-732x549.jpg",
        h   : "Selektivni inhibitori ponovne pohrane serotonina (SSRI): Što trebate znati",
        p   : "SSRI su vrsta antidepresiva. Saznajte više o ovim često propisivanim lijekovima, uključujući…",
        link: "https://www.healthline.com/health/depression/selective-serotonin-reuptake-inhibitors-ssris"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2025/04/heavy-overweight-woman-sitting-on-rocks-by-water-ocean-beach-contemplating-732x549-thumbnail.jpg",
        h   : "Briga o sebi tijekom depresije i debljanja",
        p   : "Debljanje i depresija povezani su s nekoliko čimbenika. Evo što potiče…",
        link: "https://www.healthline.com/health/depression/understanding-depression-and-weight-gain"
      }
    ],
  
    /* ----------  Bolji san  ---------- */
    betterSleep: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/02/sleep-sleeping-bed-732x549-thumbnail-732x549.jpg",
        h   : "15 najboljih dokazanih savjeta za bolji san noću",
        p   : "Ovaj članak navodi 15 savjeta temeljenih na dokazima za bolji san noću. Dobar san važan je za optimalno zdravlje.",
        link: "https://www.healthline.com/nutrition/17-tips-to-sleep-better"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2025/01/evening-bed-gummies-moon-reflection-hemp-branch-732x549-thumbnail.jpg",
        h   : "Što melatonin radi i kako djeluje?",
        p   : "Saznajte više o učinkovitosti melatonina za san, sigurnosti dodataka prehrani, korištenju u trudnoći i još mnogo toga.",
        link: "https://www.healthline.com/nutrition/melatonin-and-sleep"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/08/woman-tired-sleeping-sleep-bed-732x549-thumbnail-1-732x549.jpg",
        h   : "12 savjeta za zdravu higijenu spavanja",
        p   : "Higijena spavanja odnosi se na zdrave navike spavanja. Pogledajte koja ponašanja tijekom dana i prije spavanja utječu na…",
        link: "https://www.healthline.com/health/sleep-hygiene"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2023/07/close-up-digital-alarm-clock-midnight-numbers-display-732x549-thumbnail.jpg",
        h   : "Zašto sam toliko umoran, ali ne mogu spavati?",
        p   : "Još uvijek ne možete zaspati kad ste mrtvi umorni? Savjeti za miran noćni san, bez obzira na sve.",
        link: "https://www.healthline.com/health/healthy-sleep/tired-but-cant-sleep"
      }
    ],
  
    /* ----------  Prehrana i dodaci prehrani  ---------- */
    nutritionSupplements: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2025/01/woman-mid-section-cooking-veggies-in-a-pan-732x549-thumbnail.jpg",
        h   : "Prehrana i mentalno zdravlje: Može li ono što jedete utjecati na to kako se osjećate?",
        p   : "Prehrana je ključna komponenta socijalnog, emocionalnog i mentalnog zdravlja. Evo kako.",
        link: "https://www.healthline.com/nutrition/diet-and-mental-health-can-what-you-eat-affect-how-you-feel"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/09/fried-egg-732x549-thumbnail-732x549.jpg",
        h   : "6 namirnica koje bi mogle povisiti razinu serotonina",
        p   : "Serotonin je kemijski glasnik za koji se vjeruje da podiže raspoloženje. Ove namirnice mogu pomoći…",
        link: "https://www.healthline.com/health/healthy-sleep/foods-that-could-boost-your-serotonin"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2025/02/Best-Vitamins-and-Supplements-for-stress-thumbnail_732x549.jpg",
        h   : "8 najboljih vitamina i dodataka prehrani za stres, prema stručnjacima",
        p   : "Stres može biti uzrokovan mnogim čimbenicima. Evo dodataka prehrani potkrijepljenih istraživanjima koji mogu pomoći.",
        link: "https://www.healthline.com/nutrition/vitamins-for-stress"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2024/08/close-up-hands-veggies-tomatoes-lettuce-732x549-thumbnail.jpg",
        h   : "Može li hrana djelovati kao lijek? Sve što trebate znati",
        p   : "Mnogi ljudi tvrde da je hrana lijek. Evo znanosti koja stoji iza terapijske upotrebe hrane.",
        link: "https://www.healthline.com/nutrition/food-as-medicine"
      }
    ],
  
    /* ----------  Izgradnja odnosa  ---------- */
    buildingRelationships: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2019/11/Lesbian_Couple_Outside_732x549-thumbnail.jpg",
        h   : "Kako se nositi s anksioznošću u vezi",
        p   : "Stalno preispitujete svoju vezu? Naučite kako prepoznati i prevladati anksioznost u vezi.",
        link: "https://www.healthline.com/health/relationship-anxiety"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2022/09/asian-woman-preparing-meal-with-husband-in-background-732x549-thumbnail-732x549.jpg",
        h   : "Vaš vodič za suovisne veze i oporavak",
        p   : "Mogući znakovi suovisnih veza i načini na koje vi i vaš partner možete raditi na zdravijoj vezi.",
        link: "https://www.healthline.com/health/relationships/codependent-relationship"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/12/relationship-concept-732x549-thumbnail-732x549.jpg",
        h   : "Je li vaša veza toksična? Znakovi i kako se nositi s tim",
        p   : "Što je toksična veza, kako je možete izliječiti ili otići te razlika između nasilnih i toksičnih veza.",
        link: "https://www.healthline.com/health/toxic-relationship"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2019/10/Couple_Outside_732x549-thumbnail.jpg",
        h   : "Savjeti za izgradnju jače veze",
        p   : "Kako izgleda zdrava veza i kako je njegovati.",
        link: "https://www.healthline.com/health/healthy-relationship"
      }
    ],
  
    /* ----------  Emocionalno blagostanje  ---------- */
    emotionalWellBeing: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2022/01/african_american_woman_journaling_at_home-732x549-thumbnail-732x549.jpg",
        h   : "6 prednosti vođenja dnevnika i kako odmah započeti",
        p   : "Vođenje dnevnika nudi prednosti od smanjenja stresa do osobnog rasta. Evo kako započeti.",
        link: "https://www.healthline.com/health/benefits-of-journaling"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/04/eating-salad-732x549-thumbnail.jpg",
        h   : "32 aktivnosti svjesnosti za pronalaženje mira u bilo kojoj dobi",
        p   : "Imate samo 5 minuta? Isprobajte ove aktivnosti svjesnosti dok kuhate, hodate ili…",
        link: "https://www.healthline.com/health/mind-body/mindfulness-activities"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Female_Sitting_Breathing_732x549-thumbnail.jpg",
        h   : "10 vježbi disanja koje možete isprobati kada ste pod stresom",
        p   : "Dokazane vježbe disanja za smanjenje stresa i poboljšanje mira.",
        link: "https://www.healthline.com/health/breathing-exercise"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2024/09/colorful-portrait-woman-close-up-happy-flowers-732x549-thumbnail-1.jpg",
        h   : "Kako biti sretan: 12 navika koje možete dodati svojoj rutini",
        p   : "Sreća se ponekad može činiti nemogućom, ali ovi praktični savjeti mogu vas približiti…",
        link: "https://www.healthline.com/health/how-to-be-happy"
      }
    ],
  
    /* ----------  Terapija  ---------- */
    therapy: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/08/Female_Therapy_732x549-thumbnail-732x549.jpg",
        h   : "Kako pronaći terapeuta: 8 savjeta stručnjaka o potrazi za pravim terapeutom",
        p   : "Savjeti za pronalaženje pravog terapeuta za liječenje traume, gubitka, problema u vezi ili mentalnih stanja.",
        link: "https://www.healthline.com/health/how-to-find-a-therapist"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2021/03/behavioral-talk-therapy-732x549-thumbnail-1.jpg",
        h   : "Niste sigurni o čemu razgovarati na terapiji? 12 stvari koje treba uzeti u obzir",
        p   : "Desetak korisnih prijedloga kada se osjećate zaglavljeno u sesiji.",
        link: "https://www.healthline.com/health/what-to-talk-about-in-therapy"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2025/05/4275716-affordable-therapy-from-home-.jpg",
        h   : "Pristupačna terapija od kuće: Najbolje online opcije za 2025.",
        p   : "Odabrani popis pristupačnih online usluga mentalnog zdravlja.",
        link: "https://www.healthline.com/health/therapy-for-every-budget"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/12/telemedicine-psychotherapy-session-from-bed-732x549-thumbnail.jpg",
        h   : "Koja je razlika između psihologa i terapeuta? Kako odabrati",
        p   : "Ključne razlike kako biste znali koga odabrati za podršku.",
        link: "https://www.healthline.com/health/psychologist-vs-therapist"
      }
    ],
  
    /* ----------  Podrška u krizi  ---------- */
    crisisSupport: [
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2018/09/turquoise-retro-rotary-phone-on-purple-table-732x549-thumbnail.jpg",
        h   : "Vodič za resurse za sprječavanje samoubojstva",
        p   : "Smrt samoubojstvom je 10. vodeći uzrok smrti u SAD-u. Ako vi ili…",
        link: "https://www.healthline.com/health/mental-health/suicide-resource-guide"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2023/01/two-friends-men-male-talking-by-water-outdoors-732x549-thumbnail-732x549.jpg",
        h   : "Kako razgovarati o samoubojstvu s ljudima koje volite",
        p   : "Jezik je važan — evo kako se snalaziti u teškim razgovorima o samoubojstvu.",
        link: "https://www.healthline.com/health/mental-health/how-to-talk-about-suicide"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/09/young-woman-african-american-cell-phone-city-732x549-thumbnail-732x549.jpg",
        h   : "10 načina za pružanje pomoći u krizi mentalnog zdravlja",
        p   : "Definitivan vodič za progovaranje i traženje pomoći tijekom krize mentalnog zdravlja.",
        link: "https://www.healthline.com/health/mental-health/how-to-reach-out"
      },
      {
        img : "https://media.post.rvohealth.io/wp-content/uploads/2020/06/Young-female-friends-encouraging-depressed-man-1296x728-header-732x549.jpg",
        h   : "Kako podržati preživjele pokušaja samoubojstva",
        p   : "Često zaboravljamo da su neki ljudi na drugoj strani pokušaja samoubojstva — evo kako pomoći.",
        link: "https://www.healthline.com/health/mental-health/7-ways-we-can-do-better-by-suicide-attempt-survivors"
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
  // derive page from the current URL (e.g. /mental_health.html → "mental-health")
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