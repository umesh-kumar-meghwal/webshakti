  // FAQ Toggle (Fixed Logic)
      function toggleFaq(id) {
         const p = document.getElementById(`faq-${id}`);
         const icon = document.getElementById(`icon-${id}`);
         
         if (p.classList.contains('hidden')) {
            p.classList.remove('hidden');
            icon.classList.add('rotate-180');
         } else {
            p.classList.add('hidden');
            icon.classList.remove('rotate-180');
         }
      }

      // Mobile Menu Actions
      const menuBtn = document.getElementById('menu-btn');
      const closeMenu = document.getElementById('close-menu');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      menuBtn.addEventListener('click', () => {
         mobileMenu.classList.remove('hidden');
         mobileMenu.classList.add('flex');
      });

      function hideMenu() {
         mobileMenu.classList.add('hidden');
         mobileMenu.classList.remove('flex');
      }

      closeMenu.addEventListener('click', hideMenu);
      mobileLinks.forEach(link => {
         link.addEventListener('click', hideMenu);
      });