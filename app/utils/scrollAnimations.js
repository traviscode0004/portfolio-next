// utils/scrollAnimations.js
export const setupScrollAnimations = () => {
    const elements = document.querySelectorAll('[data-scroll]');
  
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Once it's in, set data-scroll="in" so it animates in...
            entry.target.setAttribute('data-scroll', 'in');
  
            // ... then stop observing so it never goes back to "out."
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Adjust as needed
      }
    );
  
    elements.forEach((el) => observer.observe(el));
  };
  