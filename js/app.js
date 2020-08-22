window.addEventListener('load', (event) => {
    gsap.from(".board", {duration: 3, opacity: 0,ease: "back.out(2)", y:100});
    gsap.from(".welcom ",{duration: 3, opacity: 0});
    gsap.from(".form-div ",{duration: 3, opacity: 0});
  });