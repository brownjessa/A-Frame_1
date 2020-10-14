$ = (queryString) => document.querySelector(queryString)
// function to pass callback for animation
const animate() => {

    // make sphere blue for 60 seconds
    $('a-sphere').settAttribute('color', 'blue');
};
// create animation
requestAnimationFrame(animate);