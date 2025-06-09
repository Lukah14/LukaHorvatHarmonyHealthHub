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
  const sections={
    /* LATEST  (big hero list) */
    latest: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/11/1609515-The-10-Best-Sustainable-Activewear-Brands-for-2022-732x549-Feature-732x549.jpg',
        h   : 'Isprobali smo 10 najboljih održivih marki sportske odjeće',
        p   : 'Održiva moda uključuje proizvodnju odjeće na etičan i okolišno osviješten način. Pogledajte održive marke koje su naši stručnjaci izdvojili kao najbolje.',
        link: 'https://www.healthline.com/health/fitness/best-sustainable-activewear-brands'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/10/15793671-The-7-Best-Vegan-Ice-Creams-According-to-a-Dietitian-732x549-Feature-732x549.jpg',
        h   : '7 najboljih veganskih sladoleda, prema dijetetičaru',
        p   : 'Želite desert na biljnoj bazi? Pogledajte veganske sladolede koje preporučuje naš registrirani dijetetičar…',
        link: 'https://www.healthline.com/healthy/best-vegan-ice-cream'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/09/male_with_eye_glasses_working_on_laptop-732x549-thumbnail-732x549.jpg',
        h   : 'Što trebate znati o D.L. Eyewear',
        p   : 'Smjeli dizajni i doprinos zajednici obilježavaju brend D.L. Eyewear. Evo što trebate znati…',
        link: 'https://www.healthline.com/health/dl-eyewear'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/09/1495525-10-Best-Teeth-Whitening-Pens-732x549-Feature-732x549.jpg',
        h   : '10 najboljih olovaka za izbjeljivanje zubi',
        p   : 'Olovke za izbjeljivanje zubi tanke su plastične tube koje sadrže gel za uklanjanje zubnih mrlja…',
        link: 'https://www.healthline.com/healthy/10-best-teeth-whitening-pens'
      }
    ],
  
    /* ----------  Najpopularnije  ---------- */
    mostPopular: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/08/Best-Prenatal-Vitamins-UGC-732x549-THUMBNAIL.jpg',
        h   : '8 najboljih prenatalnih vitamina za 2025.: odabrali dijetetičari, odobrile mame',
        p   : 'Otkrijte najbolje prenatalne vitamine za 2025., koje su dijetetičari provjerili radi sigurnosti i učinkovitosti…',
        link: 'https://www.healthline.com/health/pregnancy/best-prenatal-vitamons'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/03/updated-best-CBD-gummies-UGC-thumbnail-732x549-2.jpg',
        h   : '6 najboljih CBD gumenih bombona za 2025.: testirano i odobreno',
        p   : 'Tražite najbolje CBD gumene bombone? Naši su urednici testirali više od 150 proizvoda kako bi pronašli vrhunske…',
        link: 'https://www.healthline.com/cbd/best-cbd-gummies'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/05/thumbnail-image.jpg',
        h   : 'Jesu li kućni testovi osjetljivosti na hranu pouzdani? Što umjesto toga isprobati',
        p   : 'Testovi osjetljivosti na hranu obećavaju otkriti namirnice okidače — evo zašto rezultati mogu biti varljivi…',
        link: 'https://www.healthline.com/health/food-sensitivity-test'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2023/03/2824072-PP-CLONE-Market-Tier-1-March-Updates-Buy-Viagra-Online-The-4-Best-Sources-732x549-Feature-732x549.jpg',
        h   : 'Kupnja Viagre online 2025. (+ zašto je generička Viagra jeftinija i …)',
        p   : 'Praktična recenzija i usporedba dobavljača lijekova za erektilnu disfunkciju.',
        link: 'https://www.healthline.com/health/mens-health/viagra-online'
      }
    ],
  
    /* ----------  Izbor urednika  ---------- */
    editorsPicks: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/04/hydrow-rowing-machine-732x549-thumbnail.jpg',
        h   : 'Recenzija Hydrowa: isprobali smo “Teslu” veslačkih sprava',
        p   : 'Tražite recenziju Hydrowa? Donosimo zaključke uredničkog tima Healthlinea…',
        link: 'https://www.healthline.com/health/fitness/hydrow-review'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/06/944264-The-10-Best-Home-Gym-Equipment-Items-to-Own-732x549-Feature.jpg',
        h   : '25 najboljih artikala za kućnu teretanu',
        p   : '25 najboljih komada opreme za kućnu teretanu koje trebate imati ove godine.',
        link: 'https://www.healthline.com/health/fitness/home-gym-equipment'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/05/feature-image_fully-tested-badge.jpg',
        h   : 'Naši odabiri za najbolje usluge dostave zdravih obroka za 2025.',
        p   : '9 najboljih usluga dostave zdravih obroka u 2024.',
        link: 'https://www.healthline.com/nutrition/healthy-meal-delivery'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/10/1639738-1587911-11-Best-Products-from-The-Ordinary-732x549-Feature-2-732x549.jpg',
        h   : '20 najboljih proizvoda brenda The Ordinary',
        p   : 'Naši omiljeni povoljni dragulji za njegu kože.',
        link: 'https://www.healthline.com/healthy/best-the-ordinary-products'
      }
      /* …dodajte stavke 5-7 po želji */
    ],
  
    /* ----------  Vitamini i dodaci prehrani  ---------- */
    vitaminsSupplements: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/feb2025-best-vitamin-brands-UGC-thumbnail-732x549-1.jpg',
        h   : '7 najboljih marki vitamina za 2025., prema stručnjacima i testirano u praksi',
        p   : 'Ovo su marke i proizvodi vitamina koje su provjerili urednički i medicinski timovi Healthlinea…',
        link: 'https://www.healthline.com/nutrition/best-vitamin-brands'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/Update2-Best-Multivitamins-for-men-UGC-thumbnail-732x549-1.jpg',
        h   : '4 najbolja multivitamina za muškarce koje preporučuje dijetetičar',
        p   : 'Pregledali smo više od 100 proizvoda kako bismo odabrali najbolji multivitamin za muškarce…',
        link: 'https://www.healthline.com/nutrition/best-multivitamins-for-men'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/updated-womens-multivitamins-732x549-thumbnail.jpg',
        h   : '4 najbolja multivitamina za žene — i zašto jeftinije može biti bolje',
        p   : 'Urednici, dijetetičari i medicinski tim Healthlinea usporedili su više od 100 proizvoda…',
        link: 'https://www.healthline.com/nutrition/multivitamins-womens-health'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/03/UPDATE-02-3425607-Clone-Market-Feb-T1-6-Best-Personalized-Vitamin-Subscription-Services-for-2024-According-to-Dietitians-1200x628-Facebook-732x549.jpg',
        h   : '5 najboljih personaliziranih pretplata na vitamine za 2025., prema stručnjacima',
        p   : 'Usluge pretplate na vitamine olakšavaju praćenje što i kada uzimati.',
        link: 'https://www.healthline.com/nutrition/personalized-vitamins'
      }
    ],
  
    /* ----------  Spavanje  ---------- */
    sleep: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2022/05/2271086-CLONE-Algo-Update–June-Drop-The-11-Best-Mattresses-for-Lower-Back-Pain-in-2022-732x549-Feature-732x549.jpg',
        h   : '10 najboljih madraca za bolove u donjem dijelu leđa',
        p   : 'Madraci srednje tvrdoće mogu pružiti izvrsnu potporu poravnanju kralježnice i ublažavanju boli…',
        link: 'https://www.healthline.com/health/healthy-sleep/best-mattress-for-lower-back-pain'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2023/11/3264148-Best-Pillows-for-Neck-Pain-of-2023-732x549-Feature-732x549.jpg',
        h   : 'Bol u vratu? Naš izbor 10 najboljih jastuka za bolove u vratu',
        p   : 'Zaokružili smo najbolje jastuke za bolove u vratu. Pogledajte detalje i praktične recenzije.',
        link: 'https://www.healthline.com/health/neck-pain/best-pillow-for-neck-pain'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2023/09/3163122-The-10-Best-Extra-Firm-Mattresses-of-2023-732x549-Feature-732x549.jpg',
        h   : 'Najbolji ekstra tvrdi madraci',
        p   : 'Pregledali smo i ocijenili neke od najboljih ekstra tvrdih madraca dostupnih online.',
        link: 'https://www.healthline.com/health/healthy-sleep/best-extra-firm-mattresses'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2021/01/938511-The-Best-Comforters-732x549-Feature-732x549.jpg',
        h   : 'Najbolji popluni 2023.: naših 9 najudobnijih izbora',
        p   : 'Želite nadograditi poplun ili deku? Pogledajte naše odabire najboljih popluna za ugodan san.',
        link: 'https://www.healthline.com/healthy/best-comforters'
      }
    ],
  
    /* ----------  CBD  ---------- */
    cbd: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/update-best-cbd-oil-2025-UGC-THUMBNAIL-732x549-1.jpg',
        h   : '7 najboljih CBD ulja za 2025.: testirano i provjereno',
        p   : 'Kada je riječ o CBD uljima, izbor je velik. Donosimo nekoliko izvrsnih opcija i savjeta…',
        link: 'https://www.healthline.com/cbd/best-cbd-oil'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/CBD-for-anxiety-UGC-thumbnail-732x549-1.jpg',
        h   : 'Najbolji CBD gumeni bomboni za anksioznost i stres u 2025.',
        p   : 'Istraživanja su u tijeku, ali dosadašnji rezultati podupiru uporabu CBD-a za pomoć kod anksioznosti.',
        link: 'https://www.healthline.com/health/best-cbd-gummies-for-anxiety'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/10/Screenshot-2024-11-25-at-4.12.53 PM-1.png',
        h   : 'Najbolji CBD za spavanje u 2025.: 9 proizvoda koji su poboljšali naš san',
        p   : 'Evo što trebate znati o korištenju CBD-a za bolji san te koje proizvode preporučujemo…',
        link: 'https://www.healthline.com/health/best-cbd-for-sleep'
      }
    ],
  
    /* ----------  Mentalno zdravlje  ---------- */
    mentalHealth: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/02/best-online-therapy-2025-UGC-732x549-thumbnail.jpg',
        h   : '12 najboljih online terapijskih usluga za 2025.: testirano, ocijenjeno i recenzirano',
        p   : 'Deset praktičnih recenzija za 12 teleterapijskih usluga? Da — donosimo sve detalje.',
        link: 'https://www.healthline.com/health/our-top-10-online-therapy-picks'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/05/4275716-affordable-therapy-from-home-.jpg',
        h   : 'Pristupačna terapija od kuće: najbolje online opcije za 2025.',
        p   : 'Evo popisa pristupačnih online opcija za mentalnu zdravstvenu skrb.',
        link: 'https://www.healthline.com/health/therapy-for-every-budget'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/thumbnail-1.jpg',
        h   : 'Najbolje online platforme za psihijatre za 2025.',
        p   : 'Razmišljate o virtualnom susretu s psihijatrom? Istražili smo najbolje platforme…',
        link: 'https://www.healthline.com/health/mental-health/online-psychiatrist'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2023/09/3157732-We-Tried-BetterHelp-A-Complete-2023-Review-of-Features-Cost-and-More-1296x728-732x549-Feature-732x549.jpg',
        h   : 'Isprobali smo BetterHelp: pregled značajki, cijene i više za 2025.',
        p   : 'Dva zaposlenika Healthlinea podijelila su svoja iskustva s BetterHelpom.',
        link: 'https://www.healthline.com/health/mental-health/betterhelp-review'
      }
    ],
  
    /* ----------  Prehrana  ---------- */
    nutrition: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/Best-meal-delivery-for-weight-loss-UGC-collages-732x549-Thumbnail.jpg',
        h   : '9 najboljih usluga dostave obroka za mršavljenje u 2025., testirano i odobreno',
        p   : 'Praktičnost i mršavljenje? Da! Pogledajte devet najboljih usluga dostave obroka za mršavljenje.',
        link: 'https://www.healthline.com/nutrition/weight-loss-meal-delivery'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/08/Best-meal-delivery-services-2024-THUMBNAIL.jpg',
        h   : '5 najboljih usluga dostave obroka u 2025., testirano od strane stručnjaka',
        p   : 'Naši su stručni testeri isprobali najpopularnije usluge dostave obroka kako bi vam pomogli pri odabiru.',
        link: 'https://www.healthline.com/nutrition/best-meal-delivery-service'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/08/best-gluten-free-meal-delivery-service-UGC-732x549-THUMBNAIL.jpg',
        h   : '6 najboljih bezglutenskih dostava obroka u 2025., testirano od strane dijetetičara',
        p   : 'Bez glutena, a nemate vremena za kupovinu i kuhanje? Ovo su najbolja rješenja dostave.',
        link: 'https://www.healthline.com/nutrition/gluten-free-meal-delivery'
      }
    ],
  
    /* ----------  Kućno testiranje  ---------- */
    atHomeTesting: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/best-at-home-STD-test-UGC-thumbnail-732x549-1.jpg',
        h   : '7 najboljih kućnih STD testova u 2025. kojima vjerujemo',
        p   : 'Pogledajte našu praktičnu recenziju testnog kompleta te ostalih brendova koji su ušli u uži izbor.',
        link: 'https://www.healthline.com/health/at-home-std-test'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/03/feature-image.jpg',
        h   : '3 najbolja kućna testa kortizola u 2025.',
        p   : 'Kućni testovi kortizola praktičan su i učinkovit način praćenja razine stresa.',
        link: 'https://www.healthline.com/health/cortisol-tests'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2023/10/3214661-Quick-Partial-CE-CLONE-Market-Tier-2-Oct-Updates-The-4-Best-At-Home-Hormone-Tests-of-2023-732x549-Feature-732x549.jpg',
        h   : '5 najboljih kućnih hormonskih testova u 2025.: trebate li ih koristiti?',
        p   : 'Kućni hormonski testovi mogu biti koristan prvi korak za dobivanje zdravstvenih informacija.',
        link: 'https://www.healthline.com/health/hormone-test-at-home'
      }
    ],
  
    /* ----------  Žensko zdravlje  ---------- */
    womensHealth: [
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/02/3461407-Clone_Market_T2_March_The_5_Best_At_Home_Fertility_Tests_for_2024-732x549-Feature.jpg',
        h   : '6 najboljih kućnih testova plodnosti za žene',
        p   : 'Saznajte više o svojoj plodnosti što je prije moguće.',
        link: 'https://www.healthline.com/health/infertility/best-at-home-fertility-test'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2022/10/2547829-waiting-on-assets-2022-Uqora-Review-Is-It-Effective-Against-UTIs-732x549-Feature-732x549.jpg',
        h   : 'Recenzija Uqora: je li učinkovit protiv urinarnih infekcija?',
        p   : 'Uqora je prirodni dodatak prehrani namijenjen prevenciji urinarnih infekcija.',
        link: 'https://www.healthline.com/health/womens-health/uqora-review'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2024/02/3360625-8-UTI-Home-Remedies-Other-Than-Antibiotics-732xx549-feature.jpg',
        h   : '8 kućnih lijekova za UTI osim antibiotika',
        p   : 'Kućni lijekovi koje možete isprobati za ublažavanje simptoma urinarne infekcije.',
        link: 'https://www.healthline.com/health/womens-wellness-uti-antibiotics'
      },
      {
        img : 'https://media.post.rvohealth.io/wp-content/uploads/2025/02/thumbnail-image.png',
        h   : 'Najbolje tablete, kreme i tretmani za gljivične infekcije u 2025.',
        p   : 'Gljivične infekcije su česte. Donosimo osam najboljih proizvoda bez recepta.',
        link: 'https://www.healthline.com/health/womens-health/yeast-infection-pill'
      }
    ],
    
      /* -------------------------------------- */
      /*  MEN’S HEALTH                         */
      /* -------------------------------------- */
      mensHealth: [
        {
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/04/2132560-CLONE-Algo-Update-April-Drop-Hims-vs-Roman-What-To-Know-732x549-feature-732x549.jpg',
          h: 'Comparing Hims vs. Roman 2025: What to Know About These Men’s Health…',
          p: 'We look at Hims and Roman, two of the biggest names in telehealth services for men. Here…',
          link: 'https://www.healthline.com/health/hims-vs-roman'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/02/2326469-Viagra-Price-2022-Costs-and-Tips-to-Save-732x549-Feature.jpg',
          h: 'How Much Does Viagra Cost? Viagra Prices and Savings Tips for 2025',
          p: 'Prices for Viagra can vary from a few hundred dollars to $1,000 or more for a month’s…',
          link: 'https://www.healthline.com/health/viagra-price'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/02/best-hair-growth-product-thumbnail_732x549.jpg',
          h: 'Best Hair Loss Treatments for Men in 2025: Costs, Benefits, and More',
          p: 'See the best methods to remedy hair loss for men.',
          link: 'https://www.healthline.com/health/hair-loss-treatments-for-men'
        }
      ],
    
      /* -------------------------------------- */
      /*  FITNESS                               */
      /* -------------------------------------- */
      fitness: [
        {
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/03/2072075-The-5-Best-NordicTrack-Treadmills-of-2022-732x549-Feature-732x549.jpg',
          h: 'NordicTrack Treadmills Review',
          p: 'See which NordicTrack treadmill would fit best in your home gym.',
          link: 'https://www.healthline.com/health/fitness/nordictrack-treadmill'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/01/3364935-T3-10-8-14-23-Market-The-7-Best-Recumbent-Exercise-Bikes-for-Home-Workouts-in-2024-732x549-Feature.jpg',
          h: 'The 5 Best Recumbent Exercise Bikes for Home Workouts',
          p: 'Sit back, relax and ride with one of our top five vetted recumbent exercise bikes.',
          link: 'https://www.healthline.com/health/fitness/best-recumbent-exercise-bikes'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/05/3614609-T3-MAY-MARKET-The-7-Best-Ellipticals-of-2024-732x549-Feature.jpg',
          h: 'The 6 Best Ellipticals',
          p: 'Which is the best elliptical for your home space? See our top picks for 2024.',
          link: 'https://www.healthline.com/nutrition/best-elliptical'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/06/2332494-The-11-Best-Fitness-Trackers-of-2022-732x549-Feature-732x549.jpg',
          h: 'The 11 Best Fitness Trackers',
          p: 'Fitness trackers are a great way to measure your daily activities and health stats. Here…',
          link: 'https://www.healthline.com/nutrition/best-fitness-tracker'
        }
      ],
    
  /* -------------------------------------- */
  /*  PARENTHOOD                            */
  /* -------------------------------------- */
  parenthood: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/12/3321230-Clone-Market-Dec-T3-The-Best-Breast-Pumps-for-2023-Moms-Weigh-In-732x549-Feature.jpg',
      h: 'The 7 Best Breast Pumps We’ve Tried: Electric, Manual, Hospital‑Grade…',
      p: 'Finding the best breast pump can be a challenge. That’s why we’ve put together this list…',
      link: 'https://www.healthline.com/health/pregnancy/best-breast-pump'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/03/257375_From_Bedtime_Stories_to_Bilingual_Tales_732x549-732x549.png',
      h: 'From Bedtime Stories to Bilingual Tales: Our Best Baby Book Picks',
      p: 'It’s never too early to start reading to your little one — and these best baby books are…',
      link: 'https://www.healthline.com/healthy/best-baby-books'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/04/Target_Nursery_Thumbnail-732x549.png',
      h: '8 Nursery Must‑Haves You Can Find at Target',
      p: 'Target is a one‑stop shop for many household items, including important furniture for your…',
      link: 'https://www.healthline.com/healthy/target-nursery-essentials'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/06/Nursing_Tops_732x549-732x549.png',
      h: '9 Comfy and Functional Nursing Tops for Breastfeeding',
      p: 'Here are some cute camis, T‑shirts, and other tops that are designed to give your body the…',
      link: 'https://www.healthline.com/healthy/best-nursing-tops'
    }
  ],

  /* -------------------------------------- */
  /*  CBD                                   */
  /* -------------------------------------- */
  cbd: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/update-best-cbd-oil-2025-UGC-THUMBNAIL-732x549-1.jpg',
      h: 'The 7 Best CBD Oils for 2025: Tested and Vetted',
      p: 'When it comes to CBD oils, there are many to choose from. We share some great options and…',
      link: 'https://www.healthline.com/cbd/best-cbd-oil'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/CBD-for-anxiety-UGC-thumbnail-732x549-1.jpg',
      h: 'Best CBD Gummies for Anxiety and Stress in 2025',
      p: 'Research is ongoing, but so far it supports the use of CBD to help with anxiety.',
      link: 'https://www.healthline.com/health/best-cbd-gummies-for-anxiety'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/10/Screenshot-2024-11-25-at-4.12.53%E2%80%AFPM-1.png',
      h: 'The Best CBD for Sleep in 2025: 9 Products That Improved Our Sleep',
      p: 'Here’s what to know about using CBD to help you get some shut‑eye, as well as…',
      link: 'https://www.healthline.com/health/best-cbd-for-sleep'
    }
  ],



  /* -------------------------------------- */
  /*  AT‑HOME TESTING                       */
  /* -------------------------------------- */
  atHomeTesting: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/best-at-home-STD-test-UGC-thumbnail-732x549-1.jpg',
      h: '7 Best At‑Home STD Tests of 2025 That We Trust',
      p: 'See our hands‑on review of an STD test kit, plus what other brands made our cut.',
      link: 'https://www.healthline.com/health/at-home-std-test'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/03/feature-image.jpg',
      h: '3 Best At‑Home Cortisol Tests in 2025',
      p: 'At‑home cortisol tests are a convenient and efficient way to monitor your stress.',
      link: 'https://www.healthline.com/health/cortisol-tests'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/10/3214661-Quick-Partial-CE-CLONE-Market-Tier-2-Oct-Updates-The-4-Best-At-Home-Hormone-Tests-of-2023-732x549-Feature-732x549.jpg',
      h: '5 Best At‑Home Hormone Tests of 2025: Should You Use Them?',
      p: 'At‑home hormone tests are a starting point to get the health information you need.',
      link: 'https://www.healthline.com/health/hormone-test-at-home'
    }
  ],

  /* -------------------------------------- */
  /*  WOMEN’S HEALTH                        */
  /* -------------------------------------- */
  womensHealth: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/02/3461407-Clone_Market_T2_March_The_5_Best_At_Home_Fertility_Tests_for_2024-732x549-Feature.jpg',
      h: '6 Best At‑Home Fertility Tests for Women',
      p: 'Find out about your fertility as soon as possible.',
      link: 'https://www.healthline.com/health/infertility/best-at-home-fertility-test'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/10/2547829-waiting-on-assets-2022-Uqora-Review-Is-It-Effective-Against-UTIs-732x549-Feature-732x549.jpg',
      h: 'Uqora Review: Is It Effective Against UTIs?',
      p: 'Uqora is a natural supplements brand that works to prevent UTIs.',
      link: 'https://www.healthline.com/health/womens-health/uqora-review'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/02/3360625-8-UTI-Home-Remedies-Other-Than-Antibiotics-732xx549-feature.jpg',
      h: '8 UTI Home Remedies Other Than Antibiotics',
      p: 'At‑home remedies to try.',
      link: 'https://www.healthline.com/health/womens-wellness-uti-antibiotics'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/02/thumbnail-image.png',
      h: 'The Best Yeast Infection Pills, Creams, and Treatment Options for 2025',
      p: 'Yeast infections are common. Here are eight of the best over‑the‑counter yeast infection…',
      link: 'https://www.healthline.com/health/womens-health/yeast-infection-pill'
    }
  ],

  /* -------------------------------------- */
  /*  MEN’S HEALTH                          */
  /* -------------------------------------- */
  mensHealth: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/04/2132560-CLONE-Algo-Update-April-Drop-Hims-vs-Roman-What-To-Know-732x549-feature-732x549.jpg',
      h: 'Comparing Hims vs. Roman 2025: What to Know About These Men’s Health…',
      p: 'We look at Hims and Roman, two of the biggest names in telehealth services for men. Here…',
      link: 'https://www.healthline.com/health/hims-vs-roman'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/02/2326469-Viagra-Price-2022-Costs-and-Tips-to-Save-732x549-Feature.jpg',
      h: 'How Much Does Viagra Cost? Viagra Prices and Savings Tips for 2025',
      p: 'Prices for Viagra can vary from a few hundred dollars to $1,000 or more for a month’s…',
      link: 'https://www.healthline.com/health/viagra-price'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/02/best-hair-growth-product-thumbnail_732x549.jpg',
      h: 'Best Hair Loss Treatments for Men in 2025: Costs, Benefits, and More',
      p: 'See the best methods to remedy hair loss for men.',
      link: 'https://www.healthline.com/health/hair-loss-treatments-for-men'
    }
  ]
};
  
  /* ------------------------------------------------------------------
     RENDER  ⟶ one pass auto-renders every <ul> that follows the
     <sectionKey>-list convention.
     ------------------------------------------------------------------ */
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
      const start = location.pathname.replace(/^\/|\.html$/g,"") || "home";
      loadPage(start, false);           
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