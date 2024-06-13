document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".share-button");
  const tooltip = document.querySelector(".tooltip");
  const author = document.querySelector(".author-details");

  shareButton.addEventListener("click", (e) => {
    const isTooltipVisible = tooltip.style.display === "flex";
    const isSmallScreen = window.innerWidth <= 768;

    if (isSmallScreen) {
      if (isTooltipVisible) {
        tooltip.style.display = "none";
        author.style.display = "flex";
      } else {
        tooltip.style.display = "flex";
        author.style.display = "none";
      }
    } else {
      tooltip.style.display = isTooltipVisible ? "none" : "flex";
    }
  });
  window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 768) {
      author.style.display = "flex";
      tooltip.style.display = "none";
    } else {
      author.style.display = "flex";
      tooltip.style.display = "none";
    }
  });
});
