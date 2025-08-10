// Portfolio Tab Navigation System with Apple-style Scroll Animations
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
                
                // Trigger animations for the new content
                setTimeout(() => {
                    triggerScrollAnimations();
                }, 100);
            }
        });
    });
    
    // Scroll-triggered animations
    function triggerScrollAnimations() {
        const contentBlocks = document.querySelectorAll('.content-block');
        contentBlocks.forEach((block, index) => {
            // Reset animation state
            block.style.opacity = '0';
            block.style.transform = 'translateY(50px)';
            
            // Create intersection observer for each block
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add staggered animation delay
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            entry.target.classList.add('animate');
                        }, index * 200); // Stagger animations by 200ms
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            });
            
            observer.observe(block);
        });
    }
    
    // Initialize animations for the first active tab
    triggerScrollAnimations();
    
    // Parallax effect for images
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.image-container');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Throttled scroll handler for performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', requestTick);
    
    // Smooth reveal animations for content blocks
    function createRevealAnimations() {
        const contentBlocks = document.querySelectorAll('.content-block');
        
        contentBlocks.forEach((block, index) => {
            // Set initial state
            block.style.opacity = '0';
            block.style.transform = index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)';
            
            // Create reveal observer
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Staggered reveal animation
                        setTimeout(() => {
                            entry.target.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateX(0)';
                        }, index * 150);
                        
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            });
            
            revealObserver.observe(block);
        });
    }
    
    // Initialize reveal animations
    createRevealAnimations();
    
    // Enhanced hover effects for content blocks
    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Smooth scroll for navigation links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Here you can add actual navigation logic
            console.log('Navigating to:', this.textContent);
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.style.filter = 'grayscale(100%)';
        });
    });
    
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
            tabButtons[prevIndex].click();
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
    
    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            // Handle scroll-based animations here if needed
        }, 16); // 60fps
    });
    
    // Add click outside functionality to close any open modals (if added later)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.tab-button') && !e.target.closest('.tab-pane')) {
            // Handle any modal closing logic here
        }
    });
    
    // Initialize with first tab active (already done in HTML)
    console.log('Portfolio navigation system with Apple-style scroll animations initialized successfully!');
});

// Utility function for smooth animations
function animateElement(element, properties, duration = 300) {
    element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    Object.assign(element.style, properties);
}

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
    },
    
    triggerAnimations: function() {
        // Manually trigger scroll animations
        const contentBlocks = document.querySelectorAll('.content-block');
        contentBlocks.forEach((block, index) => {
            setTimeout(() => {
                block.style.opacity = '1';
                block.style.transform = 'translateY(0)';
                block.classList.add('animate');
            }, index * 200);
        });
    }
};
