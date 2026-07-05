// Get video, image elements
const videoElement = document.getElementById('backgroundVideo');
const imageElement = document.getElementById('backgroundImage');

// Function to check if the screen is mobile
function isMobileScreen() {
    return window.innerWidth <= 768;
}

// Function to show the video
function showVideo(source) {
    if (isMobileScreen()) return; // Disable on mobile screens
    imageElement.classList.add('hidden'); // Hide image if visible
    videoElement.src = source;
    videoElement.classList.remove('hidden');
    videoElement.style.opacity = 1; // Fade in video
}

// Function to show the image
function showImage(source) {
    if (isMobileScreen()) return; // Disable on mobile screens
    videoElement.classList.add('hidden'); // Hide video if visible
    imageElement.src = source;
    imageElement.classList.remove('hidden');
    imageElement.style.opacity = 1; // Fade in image
}

// Function to hide both video and image immediately
function hideMedia() {
    videoElement.style.opacity = 0;
    imageElement.style.opacity = 0;
    videoElement.classList.add('hidden');
    imageElement.classList.add('hidden');
}

// Initialize event listeners only if not on mobile screen
function initializeHoverEffects() {
    if (!isMobileScreen()) {
        document.querySelectorAll('.link').forEach(link => {
            link.addEventListener('mouseenter', handleMouseEnter);
            link.addEventListener('mouseleave', handleMouseLeave);
        });
    }
}

// Remove hover event listeners on mobile screens
function removeHoverEffects() {
    document.querySelectorAll('.link').forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
    });
}

// Handlers for mouse enter and leave
function handleMouseEnter(event) {
    const mediaSource = event.target.getAttribute('data-media');
    if (mediaSource.endsWith('.webm')) {
        showVideo(mediaSource);
    } else if (mediaSource.endsWith('.jpg') || mediaSource.endsWith('.png')) {
        showImage(mediaSource);
    }
}

function handleMouseLeave() {
    hideMedia();
}

// Check screen size on load and resize
function setupResponsiveHover() {
    if (isMobileScreen()) {
        removeHoverEffects();
    } else {
        initializeHoverEffects();
    }
}

// Run setup on initial load
setupResponsiveHover();

// Re-run setup when resizing the window
window.addEventListener('resize', setupResponsiveHover);


document.addEventListener('DOMContentLoaded', () => {
    // Select the header and all links
    const header = document.querySelector('header');
    const links = document.querySelectorAll('.links li');

    // Apply animation to header
    header.style.animation = `fadeIn 0.8s ease forwards`;

    // Delay in milliseconds for each link
    let delay = 300;

    // Apply animation with incremental delay to each link
    links.forEach((link, index) => {
        link.style.animation = `fadeIn 0.8s ease forwards`;
        link.style.animationDelay = `${delay * (index + 1)}ms`;
    });
});
