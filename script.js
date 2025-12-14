// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe writing sections
document.querySelectorAll('.writing-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add click handler for writing items
document.querySelectorAll('.writing-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // If clicking on the read more link, let it handle navigation
        if (e.target.classList.contains('read-more')) {
            return;
        }
        
        // Otherwise, find the read more link and click it
        const readMoreLink = this.querySelector('.read-more');
        if (readMoreLink) {
            readMoreLink.click();
        }
    });
});

// Profile image upload handler (optional feature)
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    // You can add image upload functionality here if needed
    profileImage.addEventListener('error', function() {
        // Fallback if image fails to load
        this.src = 'https://via.placeholder.com/300x300?text=Your+Photo';
    });
}

