function marqueAnimation() {
  window.addEventListener('wheel', function (dets) {
    if (dets.deltaY > 0) {
      gsap.to('.marque', {
        xPercent: -200,
        repeat: -1,
        duration: 4,
        ease: 'none',
      });

      gsap.to('.marque img', {
        rotate: 180,
      });
    } else {
      gsap.to('.marque', {
        xPercent: 0,
        repeat: -1,
        duration: 4,
        ease: 'none',
      });

      gsap.to('.marque img', {
        rotate: 0,
      });
    }
  });
}

marqueAnimation();
