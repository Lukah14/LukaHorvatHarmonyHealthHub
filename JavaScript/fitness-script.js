/* (() => {
    const root = document.documentElement;
    const modeToggle = document.getElementById('modeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') root.classList.add('dark');
    modeToggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  
    const burger = document.querySelector('.hamburger');
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      // potential: toggle a side‑menu here later
    });
  

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
  })();  */

  (() => {
    /* ------------------------------------------------------------ */
    /*  1. THEME TOGGLE                                             */
    /* ------------------------------------------------------------ */
    const root = document.documentElement;
    const modeToggle = document.getElementById('modeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') root.classList.add('dark');
    modeToggle?.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  
    /* ------------------------------------------------------------ */
    /*  2. HAMBURGER ANIMATION (icon only – hook up menu later)     */
    /* ------------------------------------------------------------ */
    const burger = document.querySelector('.hamburger');
    burger?.addEventListener('click', () => burger.classList.toggle('open'));
  
    /* ------------------------------------------------------------ */
    /*  3. LIGHT ROUTER (optional – disable if you use full reload) */
    /* ------------------------------------------------------------ */
    const contentEl = document.getElementById('content');
    const links = document.querySelectorAll('.nav-link, .logo, .footer-nav a');
  
    function setActive(page){
      links.forEach(l=>l.classList.toggle('active', l.dataset.page===page));
    }
  
    function loadPage(page, push=true){
      // simple: full reload for external pages, ajax‑swap for in‑page links
      if(page==='sleep'){ // we are already here – do nothing
        setActive('sleep');
        return;
      }
      window.location.href = page==='home' ? 'index.html' : `${page}.html`;
    }
  
    links.forEach(a=>a.addEventListener('click',e=>{
      const pg = a.dataset.page;
      if(!pg) return;
      e.preventDefault();
      loadPage(pg);
    }));
  
    /* ------------------------------------------------------------ */
    /*  4. DATA SOURCE – edit/extend at will                        */
    /* ------------------------------------------------------------ */
    const sections = {
      featured: [
        {
          img: "https://media.post.rvohealth.io/wp-content/uploads/2021/10/HL-Welcome_to_Healthline_Fitness-Letter_from_the_Editor-Thumbnail-732x549.png",
          h:   "Welcome to Healthline Fitness: A Letter from the Editor",
          p:   "Fitness isn't about what you can lose. It's about what you can gain.",
          link:"https://www.healthline.com/health/fitness/welcome-to-healthline-fitness"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/07/7040-hispanic_female_exercise-732x549-thumbnail-732x549.jpg",
          h:"10 Exercises to Tone Every Inch of Your Body",
          p:"We’ve rounded up the 10 best and most powerful exercises to do every single day…",
          link:"https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2019/04/Plank_Exercise_Field_Group-732x549-THumbnail.jpg",
          h:"The Best Core Exercises for All Fitness Levels",
          p:"Strengthening your core muscles helps stabilize your body and support your spine.",
          link:"https://www.healthline.com/health/best-core-exercises"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2024/04/woman-exercising-working-out-lifting-weights-yoga-mat-outdoors-732x549-thumbnail.jpg",
          h:"A Beginner’s Guide to Weight Training",
          p:"Weight training is an excellent way to build muscle mass and tone your body…",
          link:"https://www.healthline.com/health/how-to-start-lifting-weights"
        }
      ],
    
      exercise: [
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2018/11/Footprint-732x549-thumbnail.jpg",
          h:"How Many Steps Do People Take Per Day on Average?",
          p:"How many steps do people actually take per day? See how the numbers break down by age, sex,",
          link:"https://www.healthline.com/health/average-steps-per-day"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2019/09/Athletes-doing-burpee-exercise-in-crossfit-gym-732x549-thumbnail.jpg",
          h:"The Benefits of Burpees and How to Do Them",
          p:"If you're looking for a way to build strength and endurance, burpees are a great exercise…",
          link:"https://www.healthline.com/health/how-to-do-a-burpee"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2019/04/Runner_Stretch_Park_Orange-732x549-Thumbnail.jpg",
          h:"12 Exercises That Burn the Most Calories",
          p:"Running burns the most calories per hour, but that doesn't mean it's the only exercise…",
          link:"https://www.healthline.com/health/what-exercise-burns-the-most-calories"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/04/Female_Squat_732x549-thumbnail-732x549.jpg",
          h:"What Muscle Groups Are Best to Work Out Together?",
          p:"There is no right or wrong way to pair muscle groups for a strength workout, but some…",
          link:"https://www.healthline.com/health/exercise-fitness/muscle-groups-to-workout-together"
        }
      ],
    
      cardio: [
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/08/Female_Stretching_Outside_732x549-thumbnail-732x549.jpg",
          h:"Which Is Better for Your Health: Walking or Running?",
          p:"While running and walking are both good for your health, each has a few benefits over the other…",
          link:"https://www.healthline.com/health/walking-vs-running"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/09/runner-running-732x549-thumbnail-732x549.jpg",
          h:"What Is a Runner’s Body? It’s More Than a Look",
          p:"A runner's body is more than just a look. In fact, runners come in every shape and size…",
          link:"https://www.healthline.com/health/fitness/runners-body"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/10/Female_Running_732x549-thumbnail-732x549.jpg",
          h:"Here’s the Lowdown on How Running Affects Your Knees",
          p:"Lots of people want to know whether running is bad for their knees. We've got the answer…",
          link:"https://www.healthline.com/health/fitness/is-running-bad-for-your-knees"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/03/Male_VO2_Testing_732x549-thumbnail-732x549.jpg",
          h:"Everything to Know About VO₂ Max",
          p:"VO₂ max is a good benchmark for measuring your aerobic fitness levels…",
          link:"https://www.healthline.com/health/vo2-max"
        }
      ],
    
      products: [
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/07/1377301-1183869-The-8-Best-Weight-Benches-of-2021-732x549-Feature-732x549.jpg",
          h:"The 9 Best Weight Benches",
          p:"Whether you're a beginner or expert lifter, an exercise bench is an essential piece of…",
          link:"https://www.healthline.com/health/fitness/weight-bench"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/06/944264-The-10-Best-Home-Gym-Equipment-Items-to-Own-732x549-Feature.jpg",
          h:"The 25 Best Home Gym Equipment Items",
          p:"We're listing the 25 best pieces of home gym equipment to have on hand this year.",
          link:"https://www.healthline.com/health/fitness/home-gym-equipment"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2022/08/2426499-Clone-The-9-Best-Personal-Training-Apps-of-2022-732x549-Feature-732x549.jpg",
          h:"The 5 Best Personal Training Apps",
          p:"Personal training apps are an excellent way to get guidance on specific workouts…",
          link:"https://www.healthline.com/nutrition/personal-trainer-app"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/10/678693-The-8-Best-Peloton-Bike-Alternatives-of-2020-732x549-Feature-732x549.jpg",
          h:"The 9 Best Peloton Bike Alternatives",
          p:"Peloton is a well-known smart stationary bike, but it isn't your only option.",
          link:"https://www.healthline.com/nutrition/peloton-bike-alternatives"
        }
      ],
    
      strengthTraining: [
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/04/female-weight-lifting-home-kettlebell-732x549-thumbnail.jpg",
          h:"How to Gain Muscle, No Matter Who You Are",
          p:"If you're looking to see gains in strength, you may wonder how to gain muscle without gaining fat…",
          link:"https://www.healthline.com/health/fitness/how-to-gain-muscle"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2019/05/Female_Lifting_Weights_732x549-thumbnail.jpg",
          h:"How Much Muscle Mass Should I Have, and How Do I Measure It?",
          p:"Muscle mass is a part of your lean body mass. It’s difficult to calculate…",
          link:"https://www.healthline.com/health/muscle-mass-percentage"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/08/Asian_female_cooking_smiling-732x549-thumbnail-732x549.jpg",
          h:"Mesomorph Body Type: What It Is, Diet, and More",
          p:"Your body type is determined by your skeletal frame and body composition…",
          link:"https://www.healthline.com/health/mesomorph-body-type-diet"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/01/senior-exercise-pullup-grandchild-732x549-thumbnail-732x549.jpg",
          h:"How to Improve Your Grip Strength",
          p:"Grip strength refers to how firmly and securely you can hold onto things…",
          link:"https://www.healthline.com/health/grip-strength"
        }
      ],
    
      yoga: [
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/05/yoga-childs-pose-relaxation-732x549-thumbnail.jpg",
          h:"Here’s How to Use Yoga for Stress Reduction",
          p:"If you're interested in using yoga for stress reduction, there are a few techniques you'll…",
          link:"https://www.healthline.com/health/fitness/yoga-for-stress"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/02/yoga-732x549-thumbnail-732x549.jpg",
          h:"Can Yoga Help Aid Digestion? 9 Poses to Try",
          p:"When you have digestive issues, you may want to find relief fast. This article…",
          link:"https://www.healthline.com/nutrition/yoga-posture-for-digestion"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/08/766x415_Pilates_vs_Yoga-The_Differences_and_Whats_Right_for_You-1-732x415.jpg",
          h:"Pilates vs. Yoga: The Differences and What's Right for You",
          p:"",
          link:"https://www.healthline.com/health/fitness-exercise/pilates-vs-yoga"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/10/Older_Female_Pilates_732x549-thumbnail-732x549.jpg",
          h:"Health Benefits of Pilates for Older Adults",
          p:"What are the benefits of Pilates for older adults? Read on to find out…",
          link:"https://www.healthline.com/health/fitness/pilates-for-seniors"
        }
      ],
    
      holisticFitness: [
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/09/woman-doing-yoga-in-bed-732x549-thumbnail-732x549.jpg",
          h:"13 Fatigue-Fighting Hacks to Supercharge Your Mornings",
          p:"You could be feeling tired in the morning for any number of reasons…",
          link:"https://www.healthline.com/health/morning-fatigue-remedies"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2024/05/young-woman-stretching-childs-pose-yoga-mat-indoors-732x549-thumbnail.jpg",
          h:"7 Lower Back Stretches to Reduce Pain and Improve Mobility",
          p:"Learn to relieve lower back pain and tightness with these 7 stretches…",
          link:"https://www.healthline.com/health/lower-back-stretches"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/09/6271-Women_Exercising_Running_Staircase-732x549-thumbnail-732x549.jpg",
          h:"What Causes Muscle Fatigue?",
          p:"Muscle fatigue is a symptom that decreases your muscles' ability to perform over time…",
          link:"https://www.healthline.com/health/muscle-fatigue"
        },
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2020/09/woman-using-foam-roller-732x549-thumbnail-1-732x549.jpg",
          h:"14 Tips to Maximize Muscle Recovery",
          p:"Learn 14 tips to maximize muscle recovery and avoid injuries…",
          link:"https://www.healthline.com/health/muscle-recovery"
        }
      ]
    };    
  
    /* ------------------------------------------------------------ */
    /*  5. RENDER HELPERS                                           */
    /* ------------------------------------------------------------ */
    const el = (tag, cls='') => Object.assign(document.createElement(tag), { className: cls });
  
    function buildList(arr, targetSel){
      const ul = typeof targetSel==='string' ? document.querySelector(targetSel) : targetSel;
      if(!ul) return;
      arr.forEach(a => {
        const li = el('li');
        const img = el('img'); img.src = a.img; img.alt = '';
        const wrap = el('div');
        const h3 = el('h3'); h3.textContent = a.h; wrap.appendChild(h3);
        if(a.p){ const p = el('p'); p.textContent = a.p; wrap.appendChild(p); }
        li.append(img, wrap);
        li.addEventListener('click', () => window.open(a.link || '#', '_blank'));
        ul.appendChild(li);
      });
    }
  
    /* ------------------------------------------------------------ */
    /*  6. AUTO‑RENDER ALL SECTIONS (matching  <sectionKey>-list )  */
    /* ------------------------------------------------------------ */
    Object.entries(sections).forEach(([key, arr]) => {
      const sel = '#' + key.replace(/([A-Z])/g, '-$1').toLowerCase() + '-list';
      buildList(arr, sel);
    });
  })();