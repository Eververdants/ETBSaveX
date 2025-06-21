// 初始化GSAP动画
gsap.registerPlugin(ScrollTrigger);

// 导航栏滚动效果
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.padding = "10px 0";
    nav.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
  } else {
    nav.style.padding = "20px 0";
    nav.style.backgroundColor = "rgba(15, 23, 42, 0.5)";
  }
});

// 功能卡片动画
const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach((card, index) => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        card.classList.add("visible");
      },
    }
  );
});

// 应用模型悬停效果
const appModel = document.querySelector(".app-ui");
appModel.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  appModel.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

appModel.addEventListener("mouseenter", () => {
  appModel.style.transition = "none";
});

appModel.addEventListener("mouseleave", () => {
  appModel.style.transition = "transform 0.5s ease";
  appModel.style.transform =
    "perspective(1000px) rotateY(15deg) rotateX(10deg)";
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
