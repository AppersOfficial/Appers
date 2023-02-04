var pageInPortraitMode;

// Listen for window resizes to detect orientation changes
window.addEventListener("resize", windowSizeChanged);

// Set the global orientation variable as soon as the page loads
addEventListener("load", function() {
    pageInPortraitMode = window.innerHeight > window.innerWidth;
    document.getElementById("viewport").setAttribute("content", "width=" + window.innerWidth + ", height=" + window.innerHeight + ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
    
});

sigin.addEventListener("click", function() {
    
});

// Adjust viewport values only if orientation has changed (not on every window resize)
function windowSizeChanged() {
    if (((pageInPortraitMode === true) && (window.innerHeight < window.innerWidth)) || ((pageInPortraitMode === false) && (window.innerHeight > window.innerWidth))) {
        pageInPortraitMode = window.innerHeight > window.innerWidth;
        document.getElementById("viewport").setAttribute("content", "width=" + window.innerWidth + ", height=" + window.innerHeight + ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
    }
}
