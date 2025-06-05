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
 
/* ----------------------------------------------------------------
   1. DATA SOURCE – one master object, keys mirror section IDs
   ---------------------------------------------------------------- */
   const sections = {
    /* ----------  Featured  ---------- */
    featured: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/01/eat-it-or-leave-it-healthlines-comprehensive-ingredient-dictionary-to-simplify-your-shopping-trip-thumb-732x549-1-732x549.jpg',
        h: 'Eat It or Leave It? A Comprehensive Ingredient Dictionary to Simplify Your Shopping Trip',
        p: 'Get grocery shopping savvy with our A‑Z ingredients dictionary.',
        link: 'https://www.healthline.com/nutrition/eat-it-or-leave-it-a-comprehensive-ingredient-dictionary-to-simplify-your-shopping-trip'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/01/Healthy_Eating-Lisa_Valente-Portrait-Letter_from_the_editor-02.jpg',
        h: 'Healthy Eating Refresh: Letter from the Editor',
        p: 'At Harmony Health Hub Nutrition, we want to help you eat food that makes you feel good…',
        link: 'https://www.healthline.com/nutrition/healthy-eating-refresh-letter-from-the-editor'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/01/Woman-eating-pizza-thumbnail-732x549.jpg',
        h: 'Get Your Vitamin P: Why Pleasure Matters When It Comes to What You Eat',
        p: 'Vitamin P (for pleasure) matters too.',
        link: 'https://www.healthline.com/nutrition/get-your-vitamin-p-why-pleasure-matters-when-it-comes-to-what-you-eat'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/06/shopping-cart-grocery-pattern-pink-background-732x549-thumbnail-732x549.jpg',
        h: '10 Ways to Lower Your Grocery Bill as Prices Increase',
        p: 'Whether you’re shopping for one or a large family, keep these strategies in mind.',
        link: 'https://www.healthline.com/nutrition/lower-grocery-bill-inflation'
      }
    ],
  
    /* ----------  Fresh Food Fast  (video thumbs)  ---------- */
    freshFoodFast: [
      { img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/Ginger_Root_732x549-thumbnail.jpg', h: 'Top 5 Drinks for Immune Health', time: '5:08', link: '#' },
      { img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/03/Thumbnail_08-732x549-1.jpg', h: 'Top 10 Healthy Costco Foods', time: '9:13', link: '#' },
      { img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/09/Thumbnail_02-732x549-1.jpg', h: 'The Best Foods to Get More Protein in Your Diet', time: '13:01', link: '#' },
      { img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/benefits-of-creatine-732x549-thumbnail.jpg', h: 'Creatine for Maximum Results: Not Just for Gym Bros!', time: '7:46', link: '#' }
    ],
  
    /* ----------  Healthy Eating IRL  ---------- */
    healthyEatingIRL: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/Roast-chicken-with-potatoes-and-onios-thumbnail-732x549.jpg',
        h: '15 Staple Foods to Make Healthy Eating Easy All Week Long',
        p: "Here's how to always have something to make for dinner.",
        link: 'https://www.healthline.com/nutrition/staple-foods-to-make-healthy-eating-easy-all-week-long'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/06/healthy-eating-food-kitchen-732x549-thumbnail.jpg',
        h: 'The Definitive Guide to Healthy Eating in Real Life',
        p: 'You may hear a lot of talk about how to eat healthy, but getting started is another matter.',
        link: 'https://www.healthline.com/nutrition/how-to-eat-healthy-guide'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/01/female-buying-frozen-food-732-549-feature-thumb-732x549.jpg',
        h: 'How to Stock Your Pantry for Quick & Easy Meals in Minutes',
        p: "You'll be eating in no time.",
        link: 'https://www.healthline.com/nutrition/how-to-stock-your-pantry-for-quick-easy-meals-in-minutes'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/soy-protein-beans-tofu-732x549-thumbnail-732x549.jpg',
        h: 'Plant‑based Protein: The Best, the Worst, and Everything In Between',
        p: 'The pros, the cons, and how to get started.',
        link: 'https://www.healthline.com/nutrition/plant-based-protein-the-best-the-worst-and-everything-in-between'
      }
    ],
  
    /* ----------  Food Freedom  ---------- */
    foodFreedom: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/food_cravings_thumb_732x549-732x549.png',
        h: 'How to Find Wisdom in Food Cravings, Plus 7 Ways to Make Peace With Them',
        p: "Cravings aren't the enemy. They're a tool to help you heal.",
        link: 'https://www.healthline.com/nutrition/finding-the-wisdom-in-food-cravings-plus-tk-techniques-to-make-peace-with-them'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/01/friends-eating-laughing-food-truck-732-549-feature-thumb-732x549.jpg',
        h: 'How to Ditch Diet Culture and Learn to Trust Your Body’s Cues',
        p: 'Eating without worrying about numbers may sound easy — but diet culture is loud.',
        link: 'https://www.healthline.com/nutrition/what-is-food-freedom-getting-started-weight-loss-and-tips'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/07/diet-culture-black-friends-female-portrait-strong-732x549-thumbnail-732x549.jpg',
        h: 'Dear Fat, Black Girls Who Were Not Spared from Diet Culture — I…',
        p: 'Exploring identity, body image, and healing.',
        link: 'https://www.healthline.com/health/diet-culture-affects-fat-black-women'
      }
    ],
  
    /* ----------  Feel‑Good Food  ---------- */
    feelGoodFood: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/11/quinoa-732x549-thumbnail-732x549.jpg',
        h: '12 High‑Carb Foods That Are Incredibly Healthy',
        p: 'Carbs get a bad rap, but many nutrient‑dense foods contain them.',
        link: 'https://www.healthline.com/nutrition/12-healthy-high-carb-foods'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/Divya-Alter-Chef-732x549-thumbnail-732x549.jpg',
        h: "9 Tips for Joyful, Balanced Eating from Divya's Ayurvedic Kitchen",
        p: "For chef Divya Alter, food isn't just fuel—it's a friend.",
        link: 'https://www.healthline.com/nutrition/tips-for-finding-balance-and-joy-through-food-from-divyas-ayurvedic-kitchen'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/tabay-atkins-chef-732x549-thumbnail-732x549.jpg',
        h: 'Vegan Teen Chef Tabay Atkins on Healthy, Heart‑Based Eating',
        p: 'This young yogi is bringing plant‑based food to Orange County.',
        link: 'https://www.healthline.com/nutrition/vegan-teen-chef-tabay-atkins-on-healthy-heart-based-eating'
      }
    ],
  
    /* ----------  Weight Management  (medium image cards) ---------- */
    weightManagement: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/01/friends-eating-laughing-food-truck-732-549-feature-thumb-732x549.jpg',
        h: 'How to Ditch Diet Culture and Learn to Trust Your Body’s Cues',
        p: 'Eating without worrying about numbers is possible — here’s how.',
        link: 'https://www.healthline.com/nutrition/what-is-food-freedom-getting-started-weight-loss-and-tips'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/12/black-women-serious-portrait-732x549-thumbnail-732x549.jpg',
        h: 'Is BMI a Fair Health Metric for Black Women?',
        p: 'The BMI formula may not work for everyone — here’s why.',
        link: 'https://www.healthline.com/nutrition/bmi-for-black-women'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/05/group-outside-doing-moderate-exercise-732x549-thumbnail-732x549.jpg',
        h: 'How Long Does It Take to Lose Weight?',
        p: 'Factors that influence a healthy rate of weight loss.',
        link: 'https://www.healthline.com/nutrition/how-long-does-it-take-to-lose-weight'
      }
    ],
  
    /* ----------  Vitamins & Supplements  ---------- */
    vitaminsSupplements: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/01/omega-fish-oil-pills-supplements-732x549-thumbnail-732x549.jpg',
        h: 'Omega‑3 Supplement Guide',
        p: 'Learn the different types of omega‑3 supplements and how to choose one.',
        link: 'https://www.healthline.com/nutrition/omega-3-supplement-guide'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/12/supplements-vitamins-pills-732x549-thumbnail-732x549.jpg',
        h: 'The 15 Best Supplements to Boost Your Immune System',
        p: 'No supplement will cure disease, but some may help your immune response.',
        link: 'https://www.healthline.com/nutrition/immune-boosting-supplements'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/01/431490-8-of-the-Best-Vitamin-D-Supplements-732x549-Feature.jpg',
        h: '8 Best Vitamin D Supplements in 2025 for Optimal Absorption',
        p: 'Reviewed and ranked by our dietitians.',
        link: 'https://www.healthline.com/nutrition/best-vitamin-d-supplements'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/05/vitamin-pill-732x549-thumbnail-732x549.jpg',
        h: 'Can Vitamin D Lower Your Risk of COVID‑19?',
        p: 'What the evidence says so far.',
        link: 'https://www.healthline.com/nutrition/vitamin-d-coronavirus'
      }
    ],
  
    /* ----------  Nutrition for Conditions  ---------- */
    nutritionConditions: [
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/citrus-orange-grapefruit-juice-juicer-732x549-thumbnail.jpg',
        h: 'The 17 Best Foods for High Blood Pressure',
        p: 'Nutrients that help lower and maintain healthy blood pressure.',
        link: 'https://www.healthline.com/nutrition/foods-high-blood-pressure'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/11/berries-732x549-thumbnail-1.jpg',
        h: 'The 13 Most Anti‑Inflammatory Foods You Can Eat',
        p: 'Reduce chronic inflammation with these choices.',
        link: 'https://www.healthline.com/nutrition/13-anti-inflammatory-foods'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/10/healthy-eating-food-cooking-vegetables-fruit-salad-oil-dressing-732x549-thumbnail-732x549.jpg',
        h: 'Hashimoto Diet: Foods, Supplements, and Tips',
        p: 'Diet changes that may help manage Hashimoto’s disease.',
        link: 'https://www.healthline.com/nutrition/hashimoto-diet'
      },
      {
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/03/chickpeas-732x549-thumbnail-732x549.jpg',
        h: '18 of the Best Non‑Perishables for People with Diabetes',
        p: 'Diabetes‑friendly pantry staples that last.',
        link: 'https://www.healthline.com/nutrition/non-perishables-for-people-with-diabetes'
      }
    ],
  
    /* ----------  Editors’ Picks  ---------- */
    editorsPicks: [
      { img:'https://media.post.rvohealth.io/wp-content/uploads/2021/06/The-Sustainable-Table-Editors-Letter-732x549-Thumbnail-1-1.png', h:'The Sustainable Table: Eating and Living with the Earth in Mind', link:'https://www.healthline.com/program/the-sustainable-table' },
      { img:'https://media.post.rvohealth.io/wp-content/uploads/2022/02/noella-profile-illustration-732x549.png', h:'Reflecting on the Intersection of Veganism and Blackness', link:'https://www.healthline.com/nutrition/reflecting-on-the-intersection-of-veganism-and-blackness-2' },
      { img:'https://media.post.rvohealth.io/wp-content/uploads/2022/02/pelau-caribbean-food-732-549-feature-thumb-732x549.jpg', h:'How to Build a Balanced Caribbean Meal', link:'https://www.healthline.com/nutrition/balanced-caribbean-meal' },
      { img:'https://media.post.rvohealth.io/wp-content/uploads/2021/04/1044185-Im-a-Black-RD.-I-Want-to-Educate-White-People-on-Respecting-Cultural-Foodways_Thumbnail-1.jpg', h:'I’m a Black Dietitian — Food and Racism', link:'https://www.healthline.com/health/food-nutrition/black-dietician-food-and-racism' }
    ],
  
    /* ----------  More in Nutrition  ---------- */
    moreNutrition: [
      { img:'https://media.post.rvohealth.io/wp-content/uploads/2020/02/doctor-patient-732x549-thumbnail-732x549.jpg', h:'What’s the Difference Between a Dietitian and a Nutritionist?', link:'https://www.healthline.com/nutrition/dietitian-vs-nutritionist' },
      { img:'https://media.post.rvohealth.io/wp-content/uploads/2021/04/male-man-men-talking-kitchen-732x549-thumbnail.jpg', h:'Cultural Competence in Nutrition and Dietetics', link:'https://www.healthline.com/nutrition/cultural-competence-in-dietetics' },
      { img:'https://media.post.rvohealth.io/wp-content/uploads/2021/05/food-packaging-containers-bamboo-glass-eco-732x549-thumbnail.jpg', h:'5 Types of Eco‑Friendly Food Packaging (and 3 to Avoid)', link:'https://www.healthline.com/nutrition/eco-friendly-food-packaging' }
    ]
  };
  
  /* ----------------------------------------------------------------
     2. RENDER HELPERS (unchanged) – creates <li> for list or thumb row
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
  
  /* ----------------------------------------------------------------
     3. RENDER – call helpers for each section
     ---------------------------------------------------------------- */
  // Featured hero list
  buildList(sections.featured, '#featured-list');
  // Fresh Food Fast (video row)
  buildThumbRow(sections.freshFoodFast, '#fff-list');
  // Healthy Eating IRLBuildList
  buildList(sections.healthyEatingIRL, '#healthy-eating-irl-list')  
  // Food Freedom
  buildList(sections.foodFreedom, '#foodFreedom-list');
  // Feel‑Good Food
  buildList(sections.feelGoodFood, '#feelGood-list');
  // Weight Management
  buildList(sections.weightManagement, '#weightMgmt-list');
  // Vitamins & Supplements
  buildList(sections.vitaminsSupplements, '#vitSupp-list');
  // Nutrition for Conditions
  buildList(sections.nutritionConditions, '#conditions-list');
  // Editors' Picks
  buildList(sections.editorsPicks, '#editorsPicks-list');
  // More in Nutrition
  buildList(sections.moreNutrition, '#moreNutrition-list');
  
/* RELOAD */
window.addEventListener('DOMContentLoaded', () => {
  // derive page from the current URL (e.g. /sleep.html → "sleep")
  const start = location.pathname.replace(/^\/|\.html$/g,'') || 'home';
  loadPage(start, false);           // don’t pushState again
});

function loadPage(page, push = true) {
  const url = page === 'home' ? 'home.html' : `${page}.html`;

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
}