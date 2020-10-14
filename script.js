$ = (queryString) => document.querySelector(queryString);
// function to set new color 60 times a second
const shifthue = (hue) => (hue + 1) % 360;

let hue = 0;

// function to pass callback for animation
const animate = () => {
  hue = shiftHue(hue);
  const color = "hsl(${hue}, 100%, 50%)";
  $("a-sphere").settAttribute("color", color);
  requestAnimationFrame(animate);
};
// create animation
requestAnimationFrame(animate);
