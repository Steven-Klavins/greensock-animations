
gsap.from(".staggerlogos", {duration: 1, opacity: 0, y: 150, stagger: 0.25 });
 
gsap.to(".logo", {duration: 2, rotation: 360, x: 300});
gsap.to(".logo2", {duration: 2, rotation: 360, x: 600});
gsap.to(".logo3", {duration: 2, rotation: 360, x: 900});

gsap.to(".rotate", {duration: 10, rotation: 360});