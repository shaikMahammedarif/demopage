//countdown timer
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const presentYear = new Date().getFullYear();
const hackathonDay = new Date(`April 1 ${presentYear} 00:00:00`);

function updateTime() {
  const currentTime = new Date();
  const diff = hackathonDay - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateTime, 1000);

gsap .registerPlugin(ScrollTrigger);
gsap.to("h1",{
    x:700,
    duration:3,
    scrollTrigger:"h1",
})
