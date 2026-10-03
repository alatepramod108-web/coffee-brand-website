import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // On mobile devices or reduced motion, instantly reveal all elements so content is 100% visible
    if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
        el.classList.add('in-view');
      });
      return;
    }

    const elements = document.querySelectorAll('.reveal, .reveal-scale');

    // On mobile devices, ensure above-the-fold or near-viewport elements are immediately visible
    const makeVisibleIfNear = (el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('in-view');
      }
    };

    elements.forEach(makeVisibleIfNear);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Once revealed, keep visible
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px 100px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: after 800ms, reveal any element that might have been skipped on mobile
    const fallbackTimer = setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.5) {
          el.classList.add('in-view');
        }
      });
    }, 600);

    return () => {
      clearTimeout(fallbackTimer);
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
