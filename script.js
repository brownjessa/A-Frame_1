$ = (queryString) => document.querySelector(queryString)
// function to set new color 60 times a second
const shifthue = (hue) => (hue + 1) % 360;

let hue =0;

// function to pass callback for animation
const animate() => {
    hue = shiftHue(hue); 
    const color = 'hsl(${hue}, 100%, 50%)';
    // make sphere blue for 60 seconds
    $('a-sphere').settAttribute('color', color);
};
// create animation
requestAnimationFrame(animate);