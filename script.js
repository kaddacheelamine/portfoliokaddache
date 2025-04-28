document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة "active" من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة "active" إلى الزر الذي تم النقر عليه
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
    
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(',').map(cat => cat.trim()); // تحويل الفئات إلى مصفوفة
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            
            contactForm.reset();
        });
    }
    
    // Animate progress bars when skills section comes into view
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }
    
    // Intersection Observer for skills section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});

// Certificate filtering (optional)
const certFilterButtons = document.querySelectorAll('.certificate-filter-btn');
const certCards = document.querySelectorAll('.certificate-card');

if (certFilterButtons.length > 0) {
    certFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            certFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            certCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for the code lines
    const codeLines = document.querySelectorAll('.code-content .code-line');
    
    codeLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50);
        }, 500 * (index + 1));
    });
    
    // Floating code elements animation
    const floatingCodeElements = document.querySelectorAll('.floating-code div');
    
    floatingCodeElements.forEach((el, index) => {
        // Randomize initial positions
        const randomTop = Math.random() * 80 + 5;
        const randomLeft = Math.random() * 80 + 5;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 10 + 10;
        
        el.style.top = `${randomTop}%`;
        el.style.left = `${randomLeft}%`;
        el.style.animationDelay = `${randomDelay}s`;
        el.style.animationDuration = `${randomDuration}s`;
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });
    
    // Thesis project animation
    const thesisProject = document.querySelector('.thesis-project');
    
    if (thesisProject) {
        const thesisObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        thesisProject.style.opacity = '0';
        thesisProject.style.transform = 'translateY(30px)';
        thesisProject.style.transition = 'all 0.7s ease 0.3s';
        thesisObserver.observe(thesisProject);
    }
});




