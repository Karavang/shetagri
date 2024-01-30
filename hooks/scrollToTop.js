const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "instant" });
};
export const scrollToFeed = () => {
  const targetElement = document.getElementById("feed");

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};
export default scrollToTop;
