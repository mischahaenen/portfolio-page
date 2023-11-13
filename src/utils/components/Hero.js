import { sleep, typeText, deleteText } from "../typing";

const heading = document.querySelector("h1");
const cursorSpan = document.querySelector(".cursor");
const texts = [
  heading?.dataset.name || "Mischa Haenen",
  heading?.dataset.title || "Web Engineer",
];

let animationFrameId = null;
let isAnimating = false;

const runAnimation = async () => {
  if (!heading || !cursorSpan) return;
  isAnimating = true;
  heading.innerHTML = "";
  heading.appendChild(cursorSpan);

  for (const text of texts) {
    await typeText(heading, text, cursorSpan);
    await sleep(2000);
    await deleteText(heading, text.length);
  }

  if (isAnimating) {
    animationFrameId = window.requestAnimationFrame(runAnimation);
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isAnimating) {
      runAnimation();
    }
    if (!entry.isIntersecting && isAnimating) {
      window.cancelAnimationFrame(animationFrameId);
      isAnimating = false;
      heading.innerHTML = "";
    }
  },
  { threshold: 0.1 },
);

observer.observe(heading);
