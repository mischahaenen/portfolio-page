const initializeObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("card-state-hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1,
    },
  );

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.add("card-state-hidden");
    observer.observe(card);
  });
};
initializeObserver();
