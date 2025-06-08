(() => {
    /* -------- THEME TOGGLE & BURGER (unchanged) -------- */
    const root  = document.documentElement;
    const toggle= document.getElementById('modeToggle');
    if (localStorage.getItem('theme')==='dark') root.classList.add('dark');
    toggle?.addEventListener('click',()=>{root.classList.toggle('dark');
      localStorage.setItem('theme',root.classList.contains('dark')?'dark':'light');});
    document.querySelector('.hamburger')?.addEventListener('click',e=>e.currentTarget.classList.toggle('open'));
  })();
  
  /* ---------- HELPERS (exactly the same as sleep / fitness) ---------- */
  function el(tag, cls){const e=document.createElement(tag);if(cls)e.className=cls;return e;}
  function buildList(arr, targetSel){
    const ul=document.querySelector(targetSel); if(!ul) return;
    arr.forEach(a=>{
      const li=el('li');
      li.innerHTML=`<img src="${a.img}" alt=""><div><h3>${a.h}</h3><p>${a.p||''}</p></div>`;
      li.onclick=()=>window.open(a.link,'_blank');
      ul.appendChild(li);
    });
  }
  
  /* ---------- DATA : pulled 1-to-1 from Healthline ---------- */
  const sections={
    treatmentForAnxiety:[
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2022/12/psychotherapy-session-732x549-thumbnail-732x549.jpg',
        h:'What Type of Psychotherapy Is Best for Anxiety?',
        p:'Psychotherapy can help you manage your anxiety symptoms. Find the best type of therapy for you.',
        link:'https://www.healthline.com/health/anxiety/psychotherapy-for-anxiety'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2020/02/732x549_SEO_Anxiety_Thumb-732x549.jpg',
        h:'Effective Coping Techniques for Anxiety',
        p:'Identifying your triggers can take time and self-reflection. In the meantime, here are 11 strategies you can try…',
        link:'https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2024/12/close-up-multiple-pills-supplements-on-white-surface-732x549-thumbnail-.jpg',
        h:'Alternative Treatments for Anxiety',
        p:'Here are some alternative treatments to help with anxiety.',
        link:'https://www.healthline.com/health/anxiety-alternative-treatments'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2025/04/females-playing-board-game-732-549-feature-thumb.jpg',
        h:'5 Common Misconceptions About Antidepressants',
        p:'There are many misconceptions about antidepressants. If you’re considering them, it’s worth taking a little time to…',
        link:'https://www.healthline.com/health/depression/common-misconceptions-about-antidepressants'
      }
    ],
  
    treatmentForDepression:[
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2023/06/variety-of-different-multicolored-chairs-against-wall-732x549-thumbnail-732x549.jpg',
        h:'What Are the Types of Therapy for Depression?',
        p:'Depression can be treated through a variety of therapeutic techniques.',
        link:'https://www.healthline.com/health/depression/types-of-depression-therapy'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2020/09/depression-help-for-depression_thumb-1-732x549.jpg',
        h:'How Can I Get Help for Depression?',
        p:'Depression can be debilitating for those who experience it. But there are many effective…',
        link:'https://www.healthline.com/health/depression/help-for-depression'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/11/taking-medication-with-water-1296x728-header-732x549.jpg',
        h:'Selective Serotonin Reuptake Inhibitors (SSRIs): What to Know',
        p:'SSRIs are a type of antidepressant. Learn about these commonly prescribed drugs, including…',
        link:'https://www.healthline.com/health/depression/selective-serotonin-reuptake-inhibitors-ssris'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2025/04/heavy-overweight-woman-sitting-on-rocks-by-water-ocean-beach-contemplating-732x549-thumbnail.jpg',
        h:'Caring for Yourself Through Depression and Weight Gain',
        p:'Weight gain and depression are linked through several factors. Here’s what drives the…',
        link:'https://www.healthline.com/health/depression/understanding-depression-and-weight-gain'
      }
    ],
  
    /* --- Better Sleep --- */
    betterSleep:[
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2020/02/sleep-sleeping-bed-732x549-thumbnail-732x549.jpg',
       h:'Top 15 Proven Tips to Sleep Better at Night',
       p:'This article lists 15 evidence-based tips to sleep better at night. Getting good sleep is important for optimal health.',
       link:'https://www.healthline.com/nutrition/17-tips-to-sleep-better'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2025/01/evening-bed-gummies-moon-reflection-hemp-branch-732x549-thumbnail.jpg',
       h:'What Does Melatonin Do, and How Does It Work?',
       p:'Learn about the effectiveness of melatonin for sleep, supplement safety, pregnancy use, and more.',
       link:'https://www.healthline.com/nutrition/melatonin-and-sleep'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2020/08/woman-tired-sleeping-sleep-bed-732x549-thumbnail-1-732x549.jpg',
       h:'12 Healthy Sleep Hygiene Tips',
       p:'Sleep hygiene is about having healthy sleep habits. See which behaviors during the day and bedtime affect…',
       link:'https://www.healthline.com/health/sleep-hygiene'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2023/07/close-up-digital-alarm-clock-midnight-numbers-display-732x549-thumbnail.jpg',
       h:'Why Am I So Tired, but Can’t Sleep?',
       p:'Still can’t sleep when you’re dead tired? Tips to get a restful night’s sleep, no matter what.',
       link:'https://www.healthline.com/health/healthy-sleep/tired-but-cant-sleep'}
    ],
  
    /* --- Nutrition & Supplements --- */
    nutritionSupplements:[
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2025/01/woman-mid-section-cooking-veggies-in-a-pan-732x549-thumbnail.jpg',
       h:'Diet and Mental Health: Can What You Eat Affect How You Feel?',
       p:'Diet is a critical component of social, emotional, and mental health. Here’s how.',
       link:'https://www.healthline.com/nutrition/diet-and-mental-health-can-what-you-eat-affect-how-you-feel'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2020/09/fried-egg-732x549-thumbnail-732x549.jpg',
       h:'6 Foods That Could Boost Your Serotonin Levels',
       p:'Serotonin is a chemical messenger believed to elevate your mood. These foods may help…',
       link:'https://www.healthline.com/health/healthy-sleep/foods-that-could-boost-your-serotonin'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2025/02/Best-Vitamins-and-Supplements-for-stress-thumbnail_732x549.jpg',
       h:'The 8 Best Vitamins and Supplements for Stress, According to…',
       p:'Stress may be caused by many factors. Here are research-backed supplements that can help.',
       link:'https://www.healthline.com/nutrition/vitamins-for-stress'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2024/08/close-up-hands-veggies-tomatoes-lettuce-732x549-thumbnail.jpg',
       h:'Can Food Act as Medicine? All You Need to Know',
       p:'Many people claim that food is medicine. Here’s the science behind using food therapeutically.',
       link:'https://www.healthline.com/nutrition/food-as-medicine'}
    ],
  
    /* --- Building Relationships --- */
    buildingRelationships:[
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2019/11/Lesbian_Couple_Outside_732x549-thumbnail.jpg',
       h:'How to Handle Relationship Anxiety',
       p:'Constantly questioning your relationship? Learn how to recognize and overcome relationship anxiety.',
       link:'https://www.healthline.com/health/relationship-anxiety'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2022/09/asian-woman-preparing-meal-with-husband-in-background-732x549-thumbnail-732x549.jpg',
       h:'Your Guide to Codependent Relationships and Recovery',
       p:'Possible signs of codependent relationships and ways you and your partner can work to have a healthier one.',
       link:'https://www.healthline.com/health/relationships/codependent-relationship'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2021/12/relationship-concept-732x549-thumbnail-732x549.jpg',
       h:'Is Your Relationship Toxic? Signs and How to Cope',
       p:'What a toxic relationship is, how you can heal it or leave, and the difference between abusive and toxic relationships.',
       link:'https://www.healthline.com/health/toxic-relationship'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2019/10/Couple_Outside_732x549-thumbnail.jpg',
       h:'Tips for Building a Stronger Relationship',
       p:'What a healthy relationship looks like and how to cultivate one.',
       link:'https://www.healthline.com/health/healthy-relationship'}
    ],
  
    /* --- Emotional Well-Being --- */
    emotionalWellBeing:[
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2022/01/african_american_woman_journaling_at_home-732x549-thumbnail-732x549.jpg',
       h:'6 Journaling Benefits and How to Start Right Now',
       p:'Journaling offers benefits from stress reduction to personal growth. Here’s how to begin.',
       link:'https://www.healthline.com/health/benefits-of-journaling'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2021/04/eating-salad-732x549-thumbnail.jpg',
       h:'32 Mindfulness Activities to Find Calm at Any Age',
       p:'Only have 5 minutes? Try these mindfulness activities when you’re cooking, walking, or…',
       link:'https://www.healthline.com/health/mind-body/mindfulness-activities'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2019/02/Female_Sitting_Breathing_732x549-thumbnail.jpg',
       h:'10 Breathing Exercises to Try When You’re Feeling Stressed',
       p:'Proven breathing exercises for lowering stress and improving calm.',
       link:'https://www.healthline.com/health/breathing-exercise'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2024/09/colorful-portrait-woman-close-up-happy-flowers-732x549-thumbnail-1.jpg',
       h:'How to Be Happy: 12 Habits to Add to Your Routine',
       p:'Happiness may feel impossible at times, but these practical tips can get you closer…',
       link:'https://www.healthline.com/health/how-to-be-happy'}
    ],
  
    /* --- Therapy --- */
    therapy:[
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2020/08/Female_Therapy_732x549-thumbnail-732x549.jpg',
       h:'How to Find a Therapist: 8 Tips from Experts on Searching for the Right Fit',
       p:'Tips for locating the right therapist to treat trauma, loss, relationship issues, or mental-health conditions.',
       link:'https://www.healthline.com/health/how-to-find-a-therapist'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2021/03/behavioral-talk-therapy-732x549-thumbnail-1.jpg',
       h:'Not Sure What to Talk About in Therapy? 12 Things to Consider',
       p:'A dozen helpful prompts when you feel stuck in session.',
       link:'https://www.healthline.com/health/what-to-talk-about-in-therapy'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2025/05/4275716-affordable-therapy-from-home-.jpg',
       h:'Affordable Therapy from Home: The Best Online Options for 2025',
       p:'A curated list of affordable online mental-health services.',
       link:'https://www.healthline.com/health/therapy-for-every-budget'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2020/12/telemedicine-psychotherapy-session-from-bed-732x549-thumbnail.jpg',
       h:'What’s the Difference Between a Psychologist and Therapist? How to Choose',
       p:'Key differences so you know who to choose for support.',
       link:'https://www.healthline.com/health/psychologist-vs-therapist'}
    ],
  
    /* --- Crisis Support --- */
    crisisSupport:[
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2018/09/turquoise-retro-rotary-phone-on-purple-table-732x549-thumbnail.jpg',
       h:'Suicide Prevention Resource Guide',
       p:'Death by suicide is the 10th-leading cause of death in the United States. If you or…',
       link:'https://www.healthline.com/health/mental-health/suicide-resource-guide'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2023/01/two-friends-men-male-talking-by-water-outdoors-732x549-thumbnail-732x549.jpg',
       h:'How to Talk About Suicide with the People You Love',
       p:'Language matters—here’s how to navigate hard conversations about suicide.',
       link:'https://www.healthline.com/health/mental-health/how-to-talk-about-suicide'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2020/09/young-woman-african-american-cell-phone-city-732x549-thumbnail-732x549.jpg',
       h:'10 Ways to Reach Out in a Mental Health Crisis',
       p:'A definitive guide to speaking up and seeking help during a mental-health crisis.',
       link:'https://www.healthline.com/health/mental-health/how-to-reach-out'},
      {img:'https://media.post.rvohealth.io/wp-content/uploads/2020/06/Young-female-friends-encouraging-depressed-man-1296x728-header-732x549.jpg',
       h:'How to Support Suicide Attempt Survivors',
       p:'We often forget some people are on the other side of a suicide attempt—here’s how to help.',
       link:'https://www.healthline.com/health/mental-health/7-ways-we-can-do-better-by-suicide-attempt-survivors'}
    ]
  };
  
  /* ---------- RENDER – 1-liner, same pattern you use elsewhere ---------- */
  Object.entries(sections).forEach(([key, arr])=>{
    const sel='#'+key.replace(/([A-Z])/g,'-$1').toLowerCase()+'-list';
    buildList(arr, sel);
  });