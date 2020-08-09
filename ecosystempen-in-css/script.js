const polluted = document.querySelector(".polluted");
const slider = document.querySelector(".slider");
const width = polluted.offsetWidth;

window.addEventListener("mousemove", (e) => {
  var a,
    x = 0;
  e = e || window.event;
  /*get the x positions of the image:*/
  a = polluted.getBoundingClientRect();
  x = e.pageX - a.left;
  x = x - window.pageXOffset;
  polluted.style.width = x + "px";
  slider.style.left = polluted.offsetWidth + "px";
});