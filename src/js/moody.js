/* ============================================
   MOODY EYEWEAR — Global JavaScript
   Micro-interactions & shared behaviours
   ============================================ */

(function () {

  /* ---- Mobile Menu ---- */
  const mobileMenuBtn   = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu      = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  /* ---- Custom Cursor (desktop only) ---- */
  const cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX - 20 + 'px';
      cursor.style.top  = e.clientY - 20 + 'px';
    });

    document.querySelectorAll('a, button, .group').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.6)';
        cursor.style.backgroundColor = 'rgba(83,101,0,0.12)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
      });
    });
  }

  /* ---- Handmade card tilt on hover ---- */
  document.querySelectorAll('.handmade-border').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const rotation = (Math.random() - 0.5) * 4;
      card.style.transform = `rotate(${rotation}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotate(0deg) scale(1)';
    });
  });

  /* ---- Hero Manifesto Marquee (scroll-based) ---- */
  const marquee = document.querySelector('.animate-marquee');
  if (marquee) {
    // Clone for seamless loop
    marquee.innerHTML += marquee.innerHTML;
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      marquee.style.transform = `translateX(${scrolled * 0.5}px)`;
    });
  }

  /* ---- Scroll Ticker (horizontal infinite) ---- */
  const tickerTrack = document.querySelector('.ticker-track');
  if (tickerTrack) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
  }

  /* ---- Reveal on scroll (IntersectionObserver) ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .stagger-item').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  /* ---- Stagger items reveal ---- */
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-item').forEach(item => {
    item.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
    staggerObserver.observe(item);
  });

  /* ---- About page: Ticker animation clone ---- */
  const aboutTicker = document.querySelector('.about-ticker');
  if (aboutTicker) {
    aboutTicker.innerHTML += aboutTicker.innerHTML;
  }

  /* ---- Contact page: Submit button hover ---- */
  const submitBtn = document.querySelector('button[type="submit"]');
  if (submitBtn) {
    const original = submitBtn.innerText;
    submitBtn.addEventListener('mouseenter', () => { submitBtn.innerText = 'GO GO GO!'; });
    submitBtn.addEventListener('mouseleave', () => { submitBtn.innerText = original; });
  }

  /* ---- Contact page: Organic blob parallax ---- */
  const blobs = document.querySelectorAll('.organic-blob');
  if (blobs.length) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 18;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }

  /* ---- Collection page: Parallax on group images ---- */
  const groupImgs = document.querySelectorAll('.parallax-img');
  if (groupImgs.length) {
    document.addEventListener('mousemove', e => {
      const amount = 10;
      const x = (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      groupImgs.forEach(img => {
        img.style.transform = `translate(${x * amount}px, ${y * amount}px) scale(1.05)`;
      });
    });
  }

  /* ---- Active nav link highlight ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[href]').forEach(link => {
    const href = link.getAttribute('href').split('#')[0];
    if (href === currentPage) {
      link.classList.add('text-secondary', 'font-bold');
      link.classList.remove('opacity-80');
    }
  });

})();
