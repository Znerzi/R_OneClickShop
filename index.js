// Function to toggle the mobile menu
function toggleMenu() {
    var navLinks = document.getElementById('navbar-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
}

// Function to close the mobile menu when a link is clicked
function closeMenu() {
    var navLinks = document.getElementById('navbar-links');
    navLinks.classList.remove('active');
}

// Event listener to close the mobile menu when a link is clicked
document.querySelectorAll('#navbar-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});







// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// window.onload = function() {
//     scrollToTop(1500); // Adjust duration as needed (in milliseconds)
// };

// // Function for smooth scrolling to top
// function scrollToTop(duration) {
//     const scrollHeight = window.scrollY;
//     const scrollStep = Math.PI / (duration / 15); // Adjust divisor for slower or faster scrolling
//     const cosParameter = scrollHeight / 2;

//     let scrollCount = 0;
//     let scrollMargin;
//     requestAnimationFrame(step);

//     function step() {
//         setTimeout(function() {
//             if (window.scrollY != 0) {
//                 requestAnimationFrame(step);
//                 scrollCount = scrollCount + 1;
//                 scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
//                 window.scrollTo(0, (scrollHeight - scrollMargin));
//             }
//         }, 15);
//     }
// }