      /*
        ====================================================================
        CONFIGURATION ARRAYS — edit these and the footer will update
      */
        const SOCIAL_LINKS = [
            {
              label: "Facebook",
              icon: "/Icons/Facebook_Logo_Icon.png",
              href: "#",
            },
            { label: "Twitter", icon: "/Icons/X_Logo_Icon.png", href: "#" },
            {
              label: "Pinterest",
              icon: "/Icons/Pinterest_Logo_Icon.png",
              href: "#",
            },
            {
              label: "Instagram",
              icon: "/Icons/Instagram_Logo_Icon.png",
              href: "#",
            },
            { label: "YouTube", icon: "/Icons/YouTube_Logo_Icon.png", href: "#" },
            {
              label: "Flipboard",
              icon: "/Icons/Flipboard_Logo_Icon.png",
              href: "#",
            },
          ];
    
          const NAV_LINKS = [
            { page: "home", label: "Home", href: "home.html" },
            { page: "nutrition", label: "Nutrition", href: "nutrition.html" },
            { page: "sleep", label: "Sleep", href: "sleep.html" },
            { page: "fitness", label: "Fitness", href: "fitness.html" },
            {
              page: "mental-health",
              label: "Mental Health",
              href: "mental_health.html",
            },
            {
              page: "product-reviews",
              label: "Product Reviews",
              href: "product_reviews.html",
            },
          ];
    
          const LINK_GROUPS = [
            [
              { label: "About Us", href: "#" },
              { label: "Contact Us", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Advertising Policy", href: "#" },
              { label: "Health Topics", href: "#" },
            ],
            [
              { label: "Sitemap", href: "#" },
              { label: "Medical Affairs", href: "#" },
              { label: "Content Integrity", href: "#" },
              { label: "Newsletters", href: "#" },
            ],
          ];
    
          const BRAND_LINKS = [
            { label: "Harmony Health Hub", href: "#" },
            { label: "Mindful Living", href: "#" },
            { label: "Fit Future", href: "#" },
          ];
    
          /*
            ====================================================================
            BUILD FOOTER
          */
          function buildFooter() {
            const footer = document.getElementById("hhh-footer");
    
            // --- Top section ---------------------------------------------------
            const top = document.createElement("div");
            top.className = "footer-top";
    
            // Brand & social; ----------------------------------------------------
            const brand = document.createElement("div");
            brand.className = "footer-brand";
    
            const logo = document.createElement("a");
            logo.className = "footer-logo";
            logo.href = "home.html";
            logo.innerHTML = `HARMONY<span>HEALTH HUB</span>`;
            brand.appendChild(logo);
    
            const socials = document.createElement("nav");
            socials.className = "social-icons";
            SOCIAL_LINKS.forEach((s) => {
              const a = document.createElement("a");
              a.href = s.href;
              a.setAttribute("aria-label", s.label);
              const img = document.createElement("img");
              img.src = s.icon;
              img.alt = s.label;
              a.appendChild(img);
              socials.appendChild(a);
            });
            brand.appendChild(socials);
            top.appendChild(brand);
    
            // Navigation list; ---------------------------------------------------
            const nav = document.createElement("nav");
            nav.className = "footer-nav";
            const navUl = document.createElement("ul");
            NAV_LINKS.forEach((n) => {
              const li = document.createElement("li");
              const a = document.createElement("a");
              a.href = n.href;
              a.textContent = n.label;
              a.dataset.page = n.page;
              li.appendChild(a);
              navUl.appendChild(li);
            });
            nav.appendChild(navUl);
            top.appendChild(nav);
    
            // Link columns; ------------------------------------------------------
            const linkWrapper = document.createElement("div");
            linkWrapper.className = "footer-links";
            LINK_GROUPS.forEach((group) => {
              const ul = document.createElement("ul");
              group.forEach((l) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = l.href;
                a.textContent = l.label;
                li.appendChild(a);
                ul.appendChild(li);
              });
              linkWrapper.appendChild(ul);
            });
            top.appendChild(linkWrapper);
    
            footer.appendChild(top);
    
            // --- Bottom section -------------------------------------------------
            const bottom = document.createElement("div");
            bottom.className = "footer-bottom";
    
            const p = document.createElement("p");
            const year = new Date().getFullYear();
            p.textContent = `© ${year} Harmony Health Hub. All rights reserved. Content is for informational purposes and does not constitute medical advice.`;
            bottom.appendChild(p);
    
            const brands = document.createElement("div");
            brands.className = "brands";
            const span = document.createElement("span");
            span.textContent = "OUR BRANDS";
            brands.appendChild(span);
            BRAND_LINKS.forEach((b) => {
              const a = document.createElement("a");
              a.href = b.href;
              a.textContent = b.label;
              brands.appendChild(a);
            });
            bottom.appendChild(brands);
    
            footer.appendChild(bottom);
          }
    
          /*
            ====================================================================
            HIGHLIGHT CURRENT PAGE LINK
          */
          function setActiveFooterLink() {
            const current = window.location.pathname.split("/").pop();
            document
              .querySelectorAll(".footer-nav a")
              .forEach((link) => {
                if (link.getAttribute("href") === current) {
                  link.classList.add("active");
                }
              });
          }
    
          /*
            ====================================================================
            INITIALISE
          */
          document.addEventListener("DOMContentLoaded", () => {
            buildFooter();
            setActiveFooterLink();
          });