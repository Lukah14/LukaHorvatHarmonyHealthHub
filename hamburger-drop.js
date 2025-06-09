document.addEventListener('DOMContentLoaded', () => {
    /* ------------------------------------------------------------
     * 1.  GRAB ELEMENTS & DATA
     * ---------------------------------------------------------- */
    const burger = document.querySelector('.hamburger');
    const nav    = document.querySelector('nav');       
    const list   = document.getElementById('navbar');   
  
    /** Pages you want in the drop-down */
    const pages = [
      { text: 'Home',             href: 'home.html',            page: 'home' },
      { text: 'Nutrition',        href: 'nutrition.html',       page: 'nutrition' },
      { text: 'Sleep',            href: 'sleep.html',           page: 'sleep' },
      { text: 'Fitness',          href: 'fitness.html',         page: 'fitness' },
      { text: 'Mental Health',    href: 'mental_health.html',   page: 'mental-health' },
      { text: 'Product Reviews',  href: 'product_reviews.html', page: 'product-reviews' },
      { text: 'About Me',         href: 'about.html',           page: 'about' }
    ];
  
    /* ------------------------------------------------------------
     * 2.  BUILD THE LIST ONLY ONCE
     * ---------------------------------------------------------- */
    pages.forEach(({ text, href, page }) => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.textContent  = text;
      a.href         = href;
      a.dataset.page = page;      // if you’re using your light router later
      a.className    = 'nav-link';
      li.appendChild(a);
      list.appendChild(li);
    });
  
    /* ------------------------------------------------------------
     * 3.  TOGGLE LOGIC
     * ---------------------------------------------------------- */
    function toggleMenu(forceClose = false) {
      const isOpen = forceClose ? true : burger.classList.toggle('open');
      // sync classes & aria
      burger.classList.toggle('open',  !forceClose && !isOpen);
      nav   .classList.toggle('open',  !forceClose && !isOpen);
      burger.setAttribute('aria-expanded', (!forceClose && !isOpen).toString());
    }
  
    /* click / Enter / Space open-close */
    burger.addEventListener('click', () => toggleMenu());
    burger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
    });
  
    /* Escape closes it */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') toggleMenu(true);
    });
  
    /* Optional: click outside closes it */
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) toggleMenu(true);
    });
  });