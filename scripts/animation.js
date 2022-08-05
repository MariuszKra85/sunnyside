gsap.registerPlugin(ScrollTrigger);

const animation = {
  enabled: true,
  repositioning: 200,
  duration: 2,
  timingFunction: 'power1',
  stagger: 0.5,
  start: '-75% 20%',
  markers: false,
};

const animateLeftCardsOnScroll = (leftElements) => {
  leftElements.forEach((e) => {
    gsap.fromTo(
      e,
      { x: `-=${animation.repositioning}`, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: animation.duration,
        ease: animation.timingFunction,
        scrollTrigger: {
          trigger: e,
          start: animation.start,
          markers: animation.markers,
        },
      }
    );
  });
};

const animateRightCardsOnScroll = (rightElements) => {
  rightElements.forEach((e) => {
    gsap.fromTo(
      e,
      { x: `+=${animation.repositioning}`, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: animation.duration,
        ease: animation.timingFunction,
        scrollTrigger: {
          trigger: e,
          start: animation.start,
          markers: animation.markers,
        },
      }
    );
  });
};

const animateBottomCardsOnScroll = (bottomElements) => {
  gsap.fromTo(
    bottomElements,
    { y: `+=${animation.repositioning}`, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: animation.duration,
      ease: animation.timingFunction,
      stagger: animation.stagger,
      scrollTrigger: {
        trigger: bottomElements,
        start: animation.start,
        markers: animation.markers,
      },
    }
  );
};

const leftElements = [
  document.querySelector('.grid__info--transform'),
  document.querySelector('.grid__image--stand-out'),
  document.querySelector('.testimonials__container').children[0],
];

const rightElements = [
  document.querySelector('.grid__image--transform'),
  document.querySelector('.grid__info--stand-out'),
  document.querySelector('.testimonials__container').children[2],
];

const bottomElements = [
  document.querySelector('.grid__card--graphic-design'),
  document.querySelector('.grid__card--photography'),
  document.querySelector('.testimonials__heading'),
  document.querySelector('.testimonials__container').children[1],
];

const toggleAnimations = () => {
  animateLeftCardsOnScroll(leftElements);
  animateRightCardsOnScroll(rightElements);
  animateBottomCardsOnScroll(bottomElements);
};

const isWidthMatchingMediaQuery = () => {
  return window.matchMedia('(min-width: 85.375em)').matches;
};

if (animation.enabled && isWidthMatchingMediaQuery()) {
  toggleAnimations();
}