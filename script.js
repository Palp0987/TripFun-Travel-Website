let tl = gsap.timeline();

tl.from(".background", {
  opacity: 0,
  duration: 1,
  ease: "Expo.easeInOut",
})
  .from(".header", {
    opacity: 0,
    duration: 0.5,
    ease: "Expo.easeInOut",
  })
  .from(".navbar", {
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .from(
    ".main",
    {
      opacity: 0,
      duration: 4,
      ease: "Expo.easeInOut",
      rotation: 180,
    },
    "-=1"
  )
  .from(".customize", {
    duration: 2, // start the animation when ".box" enters the viewport (once)

    opacity: 0,
    ease: "Expo.easeInOut",
  });
