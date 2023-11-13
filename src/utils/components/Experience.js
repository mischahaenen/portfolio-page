const initializeObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("experience__item--hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  document.querySelectorAll(".experience__item").forEach((item) => {
    item.classList.add("experience__item--hidden");
    observer.observe(item);
  });
};
initializeObserver();
