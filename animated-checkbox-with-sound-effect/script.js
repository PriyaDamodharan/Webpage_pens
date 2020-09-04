const animateTickMark = gsap.timeline({ paused: true });
const animateCheckBox = new TimelineMax({ paused: true, yoyo: true });

let toggle = true;

animateTickMark
  .set(".checkbox", { border: "2px solid #3F71FF" })
  .to(".fill-color", 0.1, {
    webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  })
  .to(".tick-mark-1", 0.1, { webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" })
  .to(".tick-mark-2", 0.1, { webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });

animateCheckBox
  .to(".checkbox", 0.1, { rotate: 10 }, 0.2)
  .to(".checkbox", 0.1, { rotate: 0 }, 0.3)
  .to(".line-1", 0.1, { width: 15 }, 0.3)
  .to(".line-2", 0.1, { width: 15 }, 0.3)
  .to(".line-3", 0.1, { width: 15 }, 0.3)
  .to(".line-4", 0.1, { width: 15 }, 0.3)
  .set(".line-1", { width: 0 })
  .set(".line-2", { width: 0 })
  .set(".line-3", { width: 0 })
  .set(".line-4", { width: 0 })

$(".checkbox").click(() => {
  if(toggle){
   $("#myAudio")[0].play();
   animateTickMark.restart();
   animateCheckBox.restart();
  } else {
   animateTickMark.reverse();
  }
  toggle = !toggle;
});