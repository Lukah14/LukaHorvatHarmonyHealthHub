/*
  ====================================================================
  DYNAMIC NAVBAR CONFIGURATION
  --------------------------------------------------------------------
  Add, remove, or reorder items in this array and the navbar will update
  automatically the next time the page loads.
*/
  const NAV_ITEMS = [
      {
        name: "Nutrition",
        icon: "/Navigation-Icons/Explore_By-Nutrition.png",
        href: "nutrition.html",
        page: "nutrition",
      },
      {
        name: "Sleep",
        icon: "/Navigation-Icons/Explore_By-Sleep.png",
        href: "sleep.html",
        page: "sleep",
      },
      {
        name: "Fitness",
        icon: "/Navigation-Icons/Explore_By-Fitness.png",
        href: "fitness.html",
        page: "fitness",
      },
      {
        name: "Mental Health",
        icon: "/Navigation-Icons/Explore_By-Mental_Health.png",
        href: "mental_health.html",
        page: "mental-health",
      },
      {
        name: "Product Reviews",
        icon: "/Navigation-Icons/Explore_By-Product_REviews.png",
        href: "product_reviews.html",
        page: "product-reviews",
      },
    ];
    /*
      ====================================================================
      BUILD NAVBAR
      --------------------------------------------------------------------
      1. Create <li> with <img> and <a> for each item.
      2. Append it to the <ul id="navbar"> element.
    */
    function buildNavbar() {
      const navList = document.getElementById("navbar");
      // Ensure the list is empty so you can call buildNavbar multiple times if needed.
      navList.innerHTML = "";
      NAV_ITEMS.forEach((item) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.icon;
        img.alt = `${item.name} icon`;
        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.name;
        link.classList.add("nav-link");
        link.dataset.page = item.page;
        li.append(img, link);
        navList.appendChild(li);
      });
    }
    /*
      ====================================================================
      SET ACTIVE STATE BASED ON URL
      --------------------------------------------------------------------
      Highlight the nav link whose href matches the current page.
    */
    function setActiveLink() {
      const currentPage = window.location.pathname.split("/").pop();
      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    }
    /*
      ====================================================================
      INITIALISE
    */
    document.addEventListener("DOMContentLoaded", () => {
      buildNavbar();
      setActiveLink();
    });