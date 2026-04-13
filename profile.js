// --- SCROLL ANIMATION LOGIC ---

// 1. Setup the Intersection Observer
// This is a browser tool that watches if an element is visible in the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        // 2. Check if the element is currently visible on screen
        if (entry.isIntersecting) {
            
            // 3. Add the 'show' CSS class to the element
            // This triggers the CSS transition (fade in and slide up)
            entry.target.classList.add('show');
        } 
    });
}, {
    // Options for the observer:
    // rootMargin: '0px' means look at the exact viewport size
    // threshold: 0.1 means trigger when 10% of the item is visible
    threshold: 0.1 
});

// 4. Find all HTML elements that have the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// 5. Tell the observer to start watching every hidden element found
hiddenElements.forEach((el) => observer.observe(el));


// --- NAVIGATION BAR BACKGROUND ---
// This changes the nav bar from transparent to dark when you scroll down
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // If we have scrolled down more than 50 pixels...
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.9)'; // Dark background
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)'; // Add shadow
    } else {
        // If we are at the top...
        nav.style.background = 'transparent'; // No background
        nav.style.boxShadow = 'none'; // No shadow
    }
});