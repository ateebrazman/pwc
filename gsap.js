//loader animations
function loader() {
  document.addEventListener("DOMContentLoaded", function () {
    // Wait 3 seconds then animate loader upwards
    setTimeout(() => {
      gsap.to(".loader", {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          document.querySelector(".loader").style.display = "none";
        },
      });
    }, 3000);
  });
}
loader();

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".testimonial-track");
  const cards = Array.from(track.children);

  // Clone testimonials for seamless loop
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  // Calculate total width of all testimonials
  let totalWidth = 0;
  document.querySelectorAll(".tesimonial-content-wrap").forEach((card) => {
    totalWidth += card.offsetWidth;
  });

  // GSAP Infinite Scroll
  gsap.to(track, {
    x: -totalWidth / 2,
    duration: 25,
    ease: "linear",
    repeat: -1,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const logoTrack = document.querySelector(".logo-track");
  const logos = Array.from(logoTrack.children);

  // Clone logos for seamless loop
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    logoTrack.appendChild(clone);
  });

  // Calculate total width of all logos
  let totalWidth = 0;
  document.querySelectorAll(".logo-imgs").forEach((logo) => {
    totalWidth += logo.offsetWidth;
  });

  // Animate logos infinitely to the left
  gsap.to(logoTrack, {
    x: -totalWidth / 2,
    duration: 10,
    ease: "linear",
    repeat: -1,
  });
});
function cursor() {
  document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0,
      mouseY = 0;

    // Move cursor & ring smoothly
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.3 });
    });

    // Expand ring on hover over clickable elements
    document.querySelectorAll("a, button, .clickable").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ring.classList.add("clickable");
      });
      el.addEventListener("mouseleave", () => {
        ring.classList.remove("clickable");
      });
    });
  });
}
cursor();
