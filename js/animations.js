// Advanced Animations JavaScript

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 1200,
        once: false,
        mirror: true,
        offset: 120,
        easing: 'ease-in-out-cubic'
    });

    // Apply custom animations to elements
    initializeAnimations();
    
    // Initialize particle effects
    initializeParticles();
    
    // Add parallax scrolling effect
    initializeParallax();
    
    // Add 3D tilt effect to portfolio items
    initialize3DTilt();
    
    // Add typing effect to intro heading
    initializeTypingEffect();
    
    // Add scroll animations
    initializeScrollAnimations();
});

// Function to initialize basic animations
function initializeAnimations() {
    // Animate section headings when they come into view
    const sectionHeadings = document.querySelectorAll('section h2.section-heading');
    sectionHeadings.forEach(heading => {
        heading.setAttribute('data-aos', 'fade-up');
    });
    
    // Animate section subheadings
    const sectionSubheadings = document.querySelectorAll('section h3.section-subheading');
    sectionSubheadings.forEach(subheading => {
        subheading.setAttribute('data-aos', 'fade-up');
        subheading.setAttribute('data-aos-delay', '300');
    });
    
    // Animate portfolio items
    const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.setAttribute('data-aos', 'flip-left');
        item.setAttribute('data-aos-delay', (index * 100).toString());
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline > li');
    timelineItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.setAttribute('data-aos', 'fade-right');
        } else {
            item.setAttribute('data-aos', 'fade-left');
        }
        item.setAttribute('data-aos-delay', (index * 150).toString());
    });
    
    // Add animation to team section
    const teamMember = document.querySelector('.team-member');
    if (teamMember) {
        teamMember.setAttribute('data-aos', 'zoom-in');
    }
    
    // Animate contact form
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.setAttribute('data-aos', 'fade-up');
    }
    
    // Show header button after delay
    setTimeout(() => {
        const headerButton = document.querySelector('header .btn-xl');
        if (headerButton) {
            headerButton.style.opacity = '1';
        }
    }, 2000);
}

// Function to initialize particle effects
function initializeParticles() {
    // Create particles container for header
    const header = document.querySelector('header');
    if (header) {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles-js';
        header.insertBefore(particlesContainer, header.firstChild);
        
        // Load particles.js library dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = function() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        };
        document.body.appendChild(script);
    }
}

// Function to initialize parallax scrolling effect
function initializeParallax() {
    // Add parallax effect to header
    const header = document.querySelector('header');
    if (header) {
        header.classList.add('parallax-bg');
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            header.style.backgroundPosition = 'center '  (scrollPosition * 0.5)  'px';
        });
    }
    
    // Add parallax effect to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.classList.add('parallax-bg');
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const contactOffset = contactSection.offsetTop;
            const parallaxOffset = (scrollPosition - contactOffset) * 0.4;
            
            if (scrollPosition > contactOffset - window.innerHeight) {
                contactSection.style.backgroundPosition = 'center parallaxOffset px' ;
            }
        });
    }
}

// Function to initialize 3D tilt effect
function initialize3DTilt() {
    // Load vanilla-tilt.js library dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/vanilla-tilt@1.7.0/dist/vanilla-tilt.min.js';
    script.onload = function() {
        // Apply tilt effect to portfolio items
        const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');
        if (portfolioItems.length > 0 && typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(portfolioItems, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5
            });
        }
        
        // Apply tilt effect to team member image
        const teamMemberImg = document.querySelector('.team-member img');
        if (teamMemberImg && typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(teamMemberImg, {
                max: 20,
                speed: 400,
                glare: true,
                "max-glare": 0.3,
                scale: 1.1
            });
        }
    };
    document.body.appendChild(script);
}

// Function to initialize typing effect
function initializeTypingEffect() {
    // Add typing effect to intro heading
    const introHeading = document.querySelector('.intro-heading');
    if (introHeading) {
        introHeading.classList.add('typing-effect');
    }
}

// Function to initialize scroll animations
function initializeScrollAnimations() {
    // Animate elements on scroll
    window.addEventListener('scroll', function() {
        // Get all elements with the class 'animated-element'
        const animatedElements = document.querySelectorAll('.animated-element');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
        
        // Add floating animation to navbar when scrolled
        const navbar = document.querySelector('.navbar-custom');
        if (navbar && window.scrollY > 300) {
            navbar.style.animation = 'none';
            navbar.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                navbar.style.transition = 'transform 0.5s ease';
                navbar.style.transform = 'translateY(0)';
            }, 50);
        }
    });
    
    // Add scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<div class="scroll-arrow"></div>';
    document.body.appendChild(scrollIndicator);
    
    // Style the scroll indicator
    const style = document.createElement('style');
    style.textContent = `
        .scroll-indicator {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(58, 153, 255, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            animation: pulse 2s infinite;
        }
        
        .scroll-arrow {
            width: 10px;
            height: 10px;
            border-right: 2px solid white;
            border-bottom: 2px solid white;
            transform: rotate(45deg);
            margin-top: -5px;
        }
    `;
    document.head.appendChild(style);
    
    // Add click event to scroll to top
    scrollIndicator.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll indicator based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollIndicator.style.display = 'flex';
        } else {
            scrollIndicator.style.display = 'none';
        }
    });
}

// Add mousemove parallax effect to header
document.addEventListener('mousemove', function(e) {
    const header = document.querySelector('header');
    if (header) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const depth1 = `${50 - mouseX * 10}% ${50 - mouseY * 10}%`;
        const depth2 = `${50 - mouseX * 20}% ${50 - mouseY * 20}%`;
        
        header.style.backgroundPosition = depth1;
    }
});

// Add interactive hover effects to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', function(e) {
        const x = e.pageX - button.offsetLeft;
        const y = e.pageY - button.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = x  'px';
        ripple.style.top = y  'px';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// Add ripple effect style
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple 1s;
        opacity: 0;
    }
    
    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(3);
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add cursor trail effect
function addCursorTrailEffect() {
    const cursorTrailContainer = document.createElement('div');
    cursorTrailContainer.className = 'cursor-trail-container';
    document.body.appendChild(cursorTrailContainer);
    
    const cursorTrailStyle = document.createElement('style');
    cursorTrailStyle.textContent = `
        .cursor-trail {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: rgba(58, 153, 255, 0.5);
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s, opacity 0.5s;
        }
    `;
    document.head.appendChild(cursorTrailStyle);
    
    document.addEventListener('mousemove', function(e) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX  'px';
        trail.style.top = e.pageY  'px';
        
        cursorTrailContainer.appendChild(trail);
        
        setTimeout(() => {
            trail.style.width = '5px';
            trail.style.height = '5px';
            trail.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            trail.remove();
        }, 500);
    });
}

// Initialize cursor trail effect
addCursorTrailEffect();

// Add magnetic effect to social buttons
function addMagneticEffect() {
    const socialButtons = document.querySelectorAll('.social-buttons li a');
    
    socialButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const boundingRect = button.getBoundingClientRect();
            const buttonX = boundingRect.left  boundingRect.width / 2;
            const buttonY = boundingRect.top  boundingRect.height / 2;
            
            const distanceX = e.clientX - buttonX;
            const distanceY = e.clientY - buttonY;
            
            button.style.transform = `translate(${distanceX / 5}px, ${distanceY / 5}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Initialize magnetic effect
addMagneticEffect();

// Add gradient text effect to section headings
function addGradientTextEffect() {
    const sectionHeadings = document.querySelectorAll('section h2.section-heading');
    
    const gradientStyle = document.createElement('style');
    gradientStyle.textContent = `
        .gradient-text {
            background: linear-gradient(45deg, #3A99FF, #23d5ab, #23a6d5, #23d5ab);
            background-size: 300% 300%;
            animation: gradientBG 15s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    `;
    document.head.appendChild(gradientStyle);
    
    sectionHeadings.forEach(heading => {
        heading.classList.add('gradient-text');
    });
}

// Initialize gradient text effect
addGradientTextEffect();

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});