const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const typeText = async (
  element: HTMLElement,
  text: string,
  beforeElement: HTMLElement,
) => {
  if (!element) return;
  for (const letter of text) {
    await sleep(100);
    const letterSpan = document.createElement("span");
    letterSpan.textContent = letter;
    element.insertBefore(letterSpan, beforeElement);
  }
};

const deleteText = async (element: HTMLElement, length: number) => {
  for (let i = 0; i < length; i++) {
    await sleep(100);
    if (element.childNodes.length > 1 && element.lastChild?.previousSibling)
      element.removeChild(element.lastChild.previousSibling);
  }
};
export { sleep, typeText, deleteText };
