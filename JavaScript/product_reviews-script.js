(() => {
    /* ------- THEME / BURGER *unchanged* -------- */
    const root=document.documentElement,toggle=document.getElementById('modeToggle');
    if(localStorage.getItem('theme')==='dark') root.classList.add('dark');
    toggle?.addEventListener('click',()=>{root.classList.toggle('dark');
      localStorage.setItem('theme',root.classList.contains('dark')?'dark':'light');});
    document.querySelector('.hamburger')?.addEventListener('click',e=>e.currentTarget.classList.toggle('open'));
  })();
  
  /* ---------- helpers shared by every hub page ---------- */
  const el=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e;};
  function buildList(arr,targetSel){
    const ul=document.querySelector(targetSel); if(!ul) return;
    arr.forEach(a=>{
      const li=el('li'); li.innerHTML=
        `<img src="${a.img}" alt="">
         <div><h3>${a.h}</h3><p>${a.p??''}</p></div>`;
      li.onclick=()=>window.open(a.link,'_blank'); ul.appendChild(li);
    });
  }
  function buildExploreRow(arr,targetSel){
    const container=document.querySelector(targetSel); if(!container) return;
    arr.forEach(c=>{
      const a=el('a');a.href=c.link;a.innerHTML=`<img src="${c.img}" alt=""><span>${c.h}</span>`;
      container.appendChild(a);
    });
  }
  
  /* ------------------------------------------------------------------
     DATA  ⟶ pulled 1-for-1 from the HTML you pasted (only first four
     items of each section shown below for brevity — keep adding until
     the arrays match every tile you need).
     ------------------------------------------------------------------ */
  const sections={
    /* LATEST  (big hero list) */
    latest:[
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/11/1609515-The-10-Best-Sustainable-Activewear-Brands-for-2022-732x549-Feature-732x549.jpg',
        h:'We Tried 10 of the Best Sustainable Activewear Brands',
        p:'Sustainable fashion involves producing clothing in an ethical and environmentally conscious way. See the sustainable clothing brands our expert hand-picked as the best.',
        link:'https://www.healthline.com/health/fitness/best-sustainable-activewear-brands'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/10/15793671-The-7-Best-Vegan-Ice-Creams-According-to-a-Dietitian-732x549-Feature-732x549.jpg',
        h:'The 7 Best Vegan Ice Creams, According to a Dietitian',
        p:'Craving a plant-based dessert? See the vegan ice creams our registered dietitian…',
        link:'https://www.healthline.com/healthy/best-vegan-ice-cream'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/09/male_with_eye_glasses_working_on_laptop-732x549-thumbnail-732x549.jpg',
        h:'What to Know About D.L. Eyewear',
        p:'Bold designs and community giving define the D.L. Eyewear brand. Here’s what to…',
        link:'https://www.healthline.com/health/dl-eyewear'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/09/1495525-10-Best-Teeth-Whitening-Pens-732x549-Feature-732x549.jpg',
        h:'10 Best Teeth Whitening Pens',
        p:'Teeth-whitening pens are thin, plastic tubes that contain gel to remove dental…',
        link:'https://www.healthline.com/healthy/10-best-teeth-whitening-pens'
      }
    ],
  
    /* EXPLORE-BY  (horizontal cards)  */
    exploreBy:[
      {img:'//i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/Vitamins-Supplements-8.png?w=451&h=336',
       h:'Vitamins & Supplements',link:'https://www.healthline.com/reviews/vitamin-and-supplement-products'},
      {img:'//i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/Sleep-8.png?w=451&h=336',
       h:'Sleep',link:'https://www.healthline.com/reviews/sleep-products'},
      {img:'//i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/Mental-Health-8.png?w=451&h=336',
       h:'Mental Health',link:'https://www.healthline.com/reviews/mental-health-services-and-products'},
      {img:'//i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/Nutrition-8.png?w=451&h=336',
       h:'Nutrition',link:'https://www.healthline.com/reviews/nutrition-products'},
      {img:'//i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/At-Home-Testing-8.png?w=451&h=336',
       h:'At-Home Testing',link:'https://www.healthline.com/reviews/at-home-testing-products'}
    ],
  
    /* MOST POPULAR  */
    mostPopular:[
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2024/08/Best-Prenatal-Vitamins-UGC-732x549-THUMBNAIL.jpg',
        h:'8 Best Prenatal Vitamins of 2025: Dietitian-Selected and Mom-Approved',
        p:'Discover the best prenatal vitamins of 2025, vetted by dietitians for safety and efficacy…',
        link:'https://www.healthline.com/health/pregnancy/best-prenatal-vitamons'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2025/03/updated-best-CBD-gummies-UGC-thumbnail-732x549-2.jpg',
        h:'The 6 Best CBD Gummies for 2025: Tested and Approved',
        p:'Looking for the best CBD gummies? Our editors tested more than 150 to find the top…',
        link:'https://www.healthline.com/cbd/best-cbd-gummies'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2025/05/thumbnail-image.jpg',
        h:'Are At-Home Food Sensitivity Tests Reliable? What to Try Instead',
        p:'Food-sensitivity tests promise to reveal your trigger foods — here’s why results can be tricky…',
        link:'https://www.healthline.com/health/food-sensitivity-test'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2023/03/2824072-PP-CLONE-Market-Tier-1-March-Updates-Buy-Viagra-Online-The-4-Best-Sources-732x549-Feature-732x549.jpg',
        h:'Buy Viagra Online in 2025 (+ Why Generic Viagra Is Cheaper and…',
        p:'Hands-on review and retailer comparison for ED medications.',
        link:'https://www.healthline.com/health/mens-health/viagra-online'
      }
    ],
  
    /* EDITORS' PICKS  */
    editorsPicks:[
      {
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/04/hydrow-rowing-machine-732x549-thumbnail.jpg',
        h:'Hydrow Review: We Tried the Tesla of Rowing Machines',
        p:'Looking for a Hydrow review? Here’s the scoop according to Healthline’s editorial team…',
        link:'https://www.healthline.com/health/fitness/hydrow-review'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/06/944264-The-10-Best-Home-Gym-Equipment-Items-to-Own-732x549-Feature.jpg',
        h:'The 25 Best Home Gym Equipment Items',
        p:'The 25 best pieces of home-gym equipment to have on hand this year.',
        link:'https://www.healthline.com/health/fitness/home-gym-equipment'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2025/05/feature-image_fully-tested-badge.jpg',
        h:'Our Picks for the Best Healthy Meal Delivery Services for 2025',
        p:'9 of the best healthy meal delivery services of 2024.',
        link:'https://www.healthline.com/nutrition/healthy-meal-delivery'
      },{
        img:'https://media.post.rvohealth.io/wp-content/uploads/2021/10/1639738-1587911-11-Best-Products-from-The-Ordinary-732x549-Feature-2-732x549.jpg',
        h:'20 Best Products from The Ordinary',
        p:'Our favorite wallet-friendly skin-care gems.',
        link:'https://www.healthline.com/healthy/best-the-ordinary-products'
      }
      /* …add items 5–7 to complete the list */
    ],
  
    /* --- More sections exactly like the above --- */
    vitaminsSupplements: [
        {
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/01/feb2025-best-vitamin-brands-UGC-thumbnail-732x549-1.jpg',
          h: '7 Best Vitamin Brands for 2025, Chosen by Experts and Tested by Our…',
          p: 'These are the vitamin brands and products Healthline’s editorial and medical teams…',
          link: 'https://www.healthline.com/nutrition/best-vitamin-brands'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/Update2-Best-Multivitamins-for-men-UGC-thumbnail-732x549-1.jpg',
          h: 'The 4 Best Multivitamins for Men Picked by a Dietitian',
          p: 'Our team has vetted more than 100 products to decide on the best multivitamin for men…',
          link: 'https://www.healthline.com/nutrition/best-multivitamins-for-men'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/updated-womens-multivitamins-732x549-thumbnail.jpg',
          h: 'The 4 Best Multivitamins for Women — and Why Cheaper Can Be Better',
          p: 'Healthline editors, dietitians, and medical integrity team members have vetted more than…',
          link: 'https://www.healthline.com/nutrition/multivitamins-womens-health'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/03/UPDATE-02-3425607-Clone-Market-Feb-T1-6-Best-Personalized-Vitamin-Subscription-Services-for-2024-According-to-Dietitians-1200x628-Facebook-732x549.jpg',
          h: '5 Best Personalized Vitamin Subscription Services for 2025, According…',
          p: 'Vitamin subscription services make what to take and when easier to track.',
          link: 'https://www.healthline.com/nutrition/personalized-vitamins'
        }
      ],
    
      /* -------------------------------------- */
      /*  SLEEP                                 */
      /* -------------------------------------- */
      sleep: [
        {
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2022/05/2271086-CLONE-Algo-Update–June-Drop-The-11-Best-Mattresses-for-Lower-Back-Pain-in-2022-732x549-Feature-732x549.jpg',
          h: '10 Best Mattresses for Lower Back Pain',
          p: 'Medium-firm mattresses can give great support for lower back pain by helping align the…',
          link: 'https://www.healthline.com/health/healthy-sleep/best-mattress-for-lower-back-pain'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/11/3264148-Best-Pillows-for-Neck-Pain-of-2023-732x549-Feature-732x549.jpg',
          h: 'Pain in the Neck? Our Picks of the 10 Best Pillows for Neck Pain in…',
          p: 'We rounded up the top pillows for neck pain. See details and hands‑on reviews.',
          link: 'https://www.healthline.com/health/neck-pain/best-pillow-for-neck-pain'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/09/3163122-The-10-Best-Extra-Firm-Mattresses-of-2023-732x549-Feature-732x549.jpg',
          h: 'The Best Extra‑Firm Mattresses',
          p: 'We reviewed and scored some of the best extra‑firm mattresses available online.',
          link: 'https://www.healthline.com/health/healthy-sleep/best-extra-firm-mattresses'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/01/938511-The-Best-Comforters-732x549-Feature-732x549.jpg',
          h: 'The Best Comforters in 2023: Our 9 Coziest Picks',
          p: 'Looking to upgrade your comforter or duvet? Check out our picks for the best comforters of…',
          link: 'https://www.healthline.com/healthy/best-comforters'
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
      /*  MENTAL HEALTH                         */
      /* -------------------------------------- */
      mentalHealth: [
        {
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/02/best-online-therapy-2025-UGC-732x549-thumbnail.jpg',
          h: '12 Best Online Therapy Services for 2025: Tested, Rated, and Reviewed',
          p: 'Ten hands‑on reviews for 12 teletherapy services? Yep and we have the details.',
          link: 'https://www.healthline.com/health/our-top-10-online-therapy-picks'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/05/4275716-affordable-therapy-from-home-.jpg',
          h: 'Affordable Therapy from Home: The Best Online Options for 2025',
          p: 'Here’s a list of affordable mental healthcare options.',
          link: 'https://www.healthline.com/health/therapy-for-every-budget'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/thumbnail-1.jpg',
          h: 'The Best Online Psychiatrist Platforms for 2025',
          p: 'If you’re considering meeting with a psychiatrist but prefer remote visits, online…',
          link: 'https://www.healthline.com/health/mental-health/online-psychiatrist'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/09/3157732-We-Tried-BetterHelp-A-Complete-2023-Review-of-Features-Cost-and-More-1296x728-732x549-Feature-732x549.jpg',
          h: 'We Tried BetterHelp: A 2025 Review of Features, Cost, and More',
          p: 'We’ve got two Healthline employees’ experiences with Betterhelp.',
          link: 'https://www.healthline.com/health/mental-health/betterhelp-review'
        }
      ],
    
      /* -------------------------------------- */
      /*  NUTRITION                             */
      /* -------------------------------------- */
      nutrition: [
        {
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/Best-meal-delivery-for-weight-loss-UGC-collages-732x549-Thumbnail.jpg',
          h: '9 Best Meal Delivery Services for Weight Loss in 2025, Tested and…',
          p: 'Convenience and weight loss? Yes! See nine top weight‑loss meal delivery services.',
          link: 'https://www.healthline.com/nutrition/weight-loss-meal-delivery'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/08/Best-meal-delivery-services-2024-THUMBNAIL.jpg',
          h: 'The 5 Best Meal Delivery Services of 2025 Tested by Our Expert…',
          p: 'Our expert testers tried the most popular meal delivery services to help you decide which…',
          link: 'https://www.healthline.com/nutrition/best-meal-delivery-service'
        },{
          img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/08/best-gluten-free-meal-delivery-service-UGC-732x549-THUMBNAIL.jpg',
          h: '6 Best Gluten‑Free Meal Delivery Services of 2025 Tested by Dietitians',
          p: 'Gluten‑free but don’t have the time to shop and prep from scratch? We’ve got you.',
          link: 'https://www.healthline.com/nutrition/gluten-free-meal-delivery'
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
  /*  MENTAL HEALTH                         */
  /* -------------------------------------- */
  mentalHealth: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/02/best-online-therapy-2025-UGC-732x549-thumbnail.jpg',
      h: '12 Best Online Therapy Services for 2025: Tested, Rated, and Reviewed',
      p: 'Ten hands‑on reviews for 12 teletherapy services? Yep and we have the details.',
      link: 'https://www.healthline.com/health/our-top-10-online-therapy-picks'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/05/4275716-affordable-therapy-from-home-.jpg',
      h: 'Affordable Therapy from Home: The Best Online Options for 2025',
      p: 'Here’s a list of affordable mental healthcare options.',
      link: 'https://www.healthline.com/health/therapy-for-every-budget'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/thumbnail-1.jpg',
      h: 'The Best Online Psychiatrist Platforms for 2025',
      p: 'If you’re considering meeting with a psychiatrist but prefer remote visits, online…',
      link: 'https://www.healthline.com/health/mental-health/online-psychiatrist'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/09/3157732-We-Tried-BetterHelp-A-Complete-2023-Review-of-Features-Cost-and-More-1296x728-732x549-Feature-732x549.jpg',
      h: 'We Tried BetterHelp: A 2025 Review of Features, Cost, and More',
      p: 'We’ve got two Healthline employees’ experiences with Betterhelp.',
      link: 'https://www.healthline.com/health/mental-health/betterhelp-review'
    }
  ],

  /* -------------------------------------- */
  /*  NUTRITION                             */
  /* -------------------------------------- */
  nutrition: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/12/Best-meal-delivery-for-weight-loss-UGC-collages-732x549-Thumbnail.jpg',
      h: '9 Best Meal Delivery Services for Weight Loss in 2025, Tested and…',
      p: 'Convenience and weight loss? Yes! See nine top weight‑loss meal delivery services.',
      link: 'https://www.healthline.com/nutrition/weight-loss-meal-delivery'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/08/Best-meal-delivery-services-2024-THUMBNAIL.jpg',
      h: 'The 5 Best Meal Delivery Services of 2025 Tested by Our Expert…',
      p: 'Our expert testers tried the most popular meal delivery services to help you decide which…',
      link: 'https://www.healthline.com/nutrition/best-meal-delivery-service'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/08/best-gluten-free-meal-delivery-service-UGC-732x549-THUMBNAIL.jpg',
      h: '6 Best Gluten‑Free Meal Delivery Services of 2025 Tested by Dietitians',
      p: 'Gluten‑free but don’t have the time to shop and prep from scratch? We’ve got you.',
      link: 'https://www.healthline.com/nutrition/gluten-free-meal-delivery'
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
  /*  VISION                                */
  /* -------------------------------------- */
  vision: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/09/3169831-The-8-Best-Places-to-Buy-Contacts-Online-in-2023-732x549-Feature-732x549.jpg',
      h: 'The Best Places to Buy Contacts Online',
      p: 'Try one of these top picks for your next order.',
      link: 'https://www.healthline.com/health/contacts-online'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/03/928254-The-8-Best-Places-to-Buy-Eyeglasses-Online-732x549-Feature-732x549.jpg',
      h: 'The 9 Best Places to Buy Prescription Eyeglasses Online',
      p: 'There are many places to buy glasses online. Some have retail stores you can also shop in…',
      link: 'https://www.healthline.com/health/glasses-online'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/02/928262-9-Best-Reading-Glasses-Online-732x549-Feature-732x549.jpg',
      h: '9 Reading Glasses You Can Find Online',
      p: 'We rounded up some of the best reading glasses you can buy online and in style.',
      link: 'https://www.healthline.com/health/best-reading-glasses'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2023/12/3310583-MARKET-T4-–-8.24.22-This-is-How-to-Find-Out-What-Prescription-Your-Glasses-Are-732x549-Feature.jpg',
      h: 'This is How to Find Out What Prescription Your Glasses Are',
      p: 'We tried the GlassesUSA Prescription Scanner app. See which others made our list.',
      link: 'https://www.healthline.com/health/how-to-find-out-what-prescription-your-glasses-are'
    }
  ],

  /* -------------------------------------- */
  /*  HEARING                               */
  /* -------------------------------------- */
  hearing: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2024/01/3302962-Market-T3-Dec-The-Best-Hearing-Aids-for-2024-732x549-Feature.jpg',
      h: '8 Best Hearing Aids',
      p: 'Hearing aids vary by function, position, and price. Here are the best options for…',
      link: 'https://www.healthline.com/health/best-hearing-aid'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/08/1359093-A-Guide-to-Hearing-Aids-for-Tinnitus-732x549-Feature-732x549.jpg',
      h: 'The 5 Best Hearing Aids for Tinnitus',
      p: 'Understanding your options.',
      link: 'https://www.healthline.com/health/hearing-aid-for-tinnitus'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/01/older_woman_putting_in_hearing_aid.jpg_732x549-thumbnail-732x549.jpg',
      h: 'Miracle‑Ear Review: What to Know Before You Buy',
      p: 'Miracle‑Ear hearing aids are available in stores only. Find out what you need to know…',
      link: 'https://www.healthline.com/health/miracle-ear'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/03/older_woman_using_tablet_732x549-thumbnail-732x549.jpg',
      h: 'Eargo Review: Is It Worth the Price?',
      p: 'Get to know what Eargo has to offer.',
      link: 'https://www.healthline.com/health/eargo-review'
    }
  ],

  /* -------------------------------------- */
  /*  SKIN CARE                             */
  /* -------------------------------------- */
  skinCare: [
    {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/11/face-beauty-skin-732x549-thumbnail-732x549.jpg',
      h: 'How to Get Rid of Acne: 14 Home Remedies for Pimples',
      p: 'From aloe to honey, you might be surprised what basic ingredients can help improve…',
      link: 'https://www.healthline.com/nutrition/13-acne-remedies'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/479754-15-Face-Washes-for-Acne-732x549-Feature-732x549.jpg',
      h: '15 Best Face Washes for Acne, According to Dermatologists',
      p: 'We spoke with skin professionals for the best face washes for acne based on skin type…',
      link: 'https://www.healthline.com/health/15-face-washes-for-acne'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2021/09/1579565-The-Best-10-Moisturizers-for-Dry-Skin-732x549-Feature-732x549.jpg',
      h: 'The Best 13 Moisturizers for Dry Skin',
      p: 'Dry skin can happen for a number of reasons. Here are the best moisturizers for dry skin…',
      link: 'https://www.healthline.com/health/moisturizer-for-dry-skin'
    },{
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2025/04/thumbnail-image-2.jpg',
      h: 'We Asked a Dermatologist What Makes the Best Eye Cream for Dark…',
      p: 'See our 16 picks to help with dark under‑eye circles, based on expert criteria.',
      link: 'https://www.healthline.com/health/beauty-skin-care/best-eye-cream-for-dark-circles'
    }
  ]
};
  
  /* ------------------------------------------------------------------
     RENDER  ⟶ one pass auto-renders every <ul> that follows the
     <sectionKey>-list convention.
     ------------------------------------------------------------------ */
  Object.entries(sections).forEach(([key, arr])=>{
    if(key==='exploreBy') return buildExploreRow(arr,'#explore-row');
    const sel='#'+key.replace(/([A-Z])/g,'-$1').toLowerCase()+'-list';
    buildList(arr, sel);
  });