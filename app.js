const progressBar = document.querySelector(".page-progress");

const setProgress = () => {
  // Cal max scroll height
  const scrollHeight = document.body.scrollHeight;
  const viewPortHeight = window.innerHeight;
  const maxScrollHeight = scrollHeight - viewPortHeight;

  // Set percentage
  const percentage = (window.scrollY / maxScrollHeight) * 100;
  progressBar.style.width = `${percentage}%`;
};

window.addEventListener("scroll", () => {
  setProgress();
});

window.addEventListener("resize", () => {
  setProgress();
});
