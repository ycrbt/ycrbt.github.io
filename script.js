// Portfolio Tab Navigation System with Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and tab panes
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab content
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
                
                // Reset scroll position to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Reset text animations for new tab
                setTimeout(() => {
                    resetTextAnimations();
                    initScrollAnimations();
                }, 100);
            }
        });
    });
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Function to initialize scroll animations
    function initScrollAnimations() {
        const contentOverlays = document.querySelectorAll('.content-overlay');
        
        // Create intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add delay based on scroll direction
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 200);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Observe all content overlays
        contentOverlays.forEach(overlay => {
            observer.observe(overlay);
        });
    }
    
    // Function to reset text animations
    function resetTextAnimations() {
        const contentOverlays = document.querySelectorAll('.content-overlay');
        contentOverlays.forEach(overlay => {
            overlay.classList.remove('visible');
        });
    }
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const activeTab = document.querySelector('.tab-button.active');
        const currentIndex = Array.from(tabButtons).indexOf(activeTab);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % tabButtons.length;
            tabButtons[nextIndex].click();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex === 0 ? tabButtons.length - 1 : currentIndex - 1;
            tabButtons[nextIndex].click();
        }
    });
    
    // Add touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            const activeTab = document.querySelector('.tab-button.active');
            const currentIndex = Array.from(tabButtons).indexOf(activeTab);
            
            if (diff > 0 && currentIndex < tabButtons.length - 1) {
                // Swipe left - next tab
                tabButtons[currentIndex + 1].click();
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right - previous tab
                tabButtons[currentIndex - 1].click();
            }
        }
    }
    
    // Initialize with first tab active
    console.log('Portfolio navigation system with scroll animations initialized successfully!');
});

// Export functions for potential external use
window.PortfolioApp = {
    switchTab: function(tabName) {
        const targetButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (targetButton) {
            targetButton.click();
        }
    },
    
    getActiveTab: function() {
        const activeButton = document.querySelector('.tab-button.active');
        return activeButton ? activeButton.getAttribute('data-tab') : null;
    }
};
