const initializeObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("experience-list-item--state-hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  document.querySelectorAll(".experience-list-item").forEach((item) => {
    item.classList.add("experience-list-item--state-hidden");
    observer.observe(item);
  });
};
initializeObserver();
