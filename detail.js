

// details.js - Project data
const projectDetails = {
    project1: {
      title: "COVID 19 detection with Deep learning",
      images: [
        "./screenshots/cov/1.png",
        "./screenshots/cov/2.png",
        "./screenshots/cov/3.png",
        "./screenshots/cov/4.png",
        
      ]
    },
    project2: {
      title: "Diabates detection with ML",
      images: [
        "./screenshots/diabetes/1.png",
        "./screenshots/diabetes/2.png",
        "./screenshots/diabetes/3.png",
        
      ]
    },
    project3: {
      title: "Grocery management Software",
      images: [
        "./screenshots/bakawi/1.png",
        "./screenshots/bakawi/2.png",
        "./screenshots/bakawi/3.png",
        "./screenshots/bakawi/4.png",
        "./screenshots/bakawi/5.png",
      ]
    },
    project4: {
        title: "Blood donation management",
        images: [
          "./screenshots/blood/1.png",
        "./screenshots/blood/2.png",
        "./screenshots/blood/3.png",
        "./screenshots/blood/4.png",
        "./screenshots/blood/5.png",
        "./screenshots/blood/6.png",
        ]
      },

      project5: {
        title: "Dental clinic management",
        images: [
          "./screenshots/dentist/1.png",
        "./screenshots/dentist/2.png",
        
        ]
      },
      project6: {
        title: "MNK Game with MetaHeuristic",
        images: [
         "./screenshots/mnk/1.png",
        "./screenshots/mnk/2.png",
        "./screenshots/mnk/3.png",
        "./screenshots/mnk/4.png",
        "./screenshots/mnk/5.png",
        "./screenshots/mnk/6.png",
        "./screenshots/mnk/7.png",
        ]
      },
      project7: {
        title: "AES File Encryption",
        images: [
          "./screenshots/enc/1.png",
        "./screenshots/enc/2.png",
        "./screenshots/enc/3.png",
        
        ]
      },
      project8: {
        title: "SUDUKO app",
        images: [
          "./screenshots/sdk/1.png",
        "./screenshots/sdk/2.png",
        "./screenshots/sdk/3.png",
        "./screenshots/sdk/4.png",
        ]
      },
     
      project9: {
        title: "Plant doctor",
        images: [
          "./screenshots/plnt/1.png",
        "./screenshots/plnt/2.png",
        "./screenshots/plnt/3.png",
        "./screenshots/plnt/4.png",
        ]
      },
      project10: {
        title: "K-means IMG segmentation",
        images: [
          "./screenshots/kmeans/1.png",
        "./screenshots/kmeans/2.png",
        "./screenshots/kmeans/3.png",
        "./screenshots/kmeans/4.png",
        ]
      },
      project11: {
        title: "Medical image segmentation",
        images: [
          "./screenshots/fcm/0.png",
        "./screenshots/fcm/1.png",
        "./screenshots/fcm/2.png",
        "./screenshots/fcm/3.png",
        ]
      },
      project12: {
        title: "Metaheuristic Checkers",
        images: [
          "./screenshots/dama/0.png",
        "./screenshots/dama/1.png",
        "./screenshots/dama/2.png",
        "./screenshots/dama/3.png",
        ]
      },

      project13: {
        title: "Algerian Expatriates Agency",
        images: [
          "./screenshots/mogh/1.png",
        "./screenshots/mogh/2.png",
        "./screenshots/mogh/3.png",
        "./screenshots/mogh/4.png",
        ]
      },

      project14: {
        title: "EEG ADHD detector",
        images: [
          "./screenshots/eeg/1.png",
        "./screenshots/eeg/2.png",
        "./screenshots/eeg/3.png",
        "./screenshots/eeg/4.png",
        "./screenshots/eeg/5.png",
        "./screenshots/eeg/6.png",
        "./screenshots/eeg/7.png",
        ]
      },
    
  };
  
  // Modal functionality
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const slidesWrapper = document.getElementById('slides-wrapper');
    const dotsContainer = document.getElementById('dots-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Current slide index
    let currentSlideIndex = 0;
    let currentProject = null;
    
    // Add event listeners to all project tags
    const projectTags = document.querySelectorAll('[data-project]');
    projectTags.forEach(tag => {
      tag.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
      });
    });
    
    // Close modal when clicking the X button
    closeButton.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
    
    // Next and previous buttons
    prevBtn.addEventListener('click', function() {
      showSlide(currentSlideIndex - 1);
    });
    
    nextBtn.addEventListener('click', function() {
      showSlide(currentSlideIndex + 1);
    });
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(event) {
      if (!modal.classList.contains('active')) return;
      
      if (event.key === 'ArrowLeft') {
        showSlide(currentSlideIndex - 1);
      } else if (event.key === 'ArrowRight') {
        showSlide(currentSlideIndex + 1);
      }
    });
    
    // Handle swipe gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slidesWrapper.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    slidesWrapper.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, false);
    
    function handleSwipe() {
      const threshold = 50;
      if (touchEndX < touchStartX - threshold) {
        // Swipe left
        showSlide(currentSlideIndex + 1);
      } else if (touchEndX > touchStartX + threshold) {
        // Swipe right
        showSlide(currentSlideIndex - 1);
      }
    }
    
    // Function to open modal with project details
    function openModal(projectId) {
      const project = projectDetails[projectId];
      if (!project) return;
      
      currentProject = project;
      currentSlideIndex = 0;
      
      // Set project title
      document.getElementById('modal-title').textContent = project.title;
      
      // Create slides
      slidesWrapper.innerHTML = '';
      dotsContainer.innerHTML = '';
      
      project.images.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        // Create image element
        const img = document.createElement('img');
        img.className = 'slide-img';
        img.src = image;
        img.alt = `${project.title} - Image ${index + 1}`;
        
        // Add image to slide
        slide.appendChild(img);
        slidesWrapper.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
        
        // Preload image to calculate aspect ratio
        img.onload = function() {
          adjustSlideHeight();
        };
      });
      
      // Show first slide
      showSlide(0);
      
      // Show modal with animation
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      
      // Adjust slide height for first load
      adjustSlideHeight();
      
      // Adjust on window resize
      window.addEventListener('resize', adjustSlideHeight);
    }
    
    // Function to adjust slide height based on image aspect ratio
    function adjustSlideHeight() {
      const slides = document.querySelectorAll('.slide');
      if (slides.length === 0) return;
      
      // Reset the slideshow container height
      const slideshowContainer = document.querySelector('.slideshow-container');
      slideshowContainer.style.height = 'auto';
      
      const containerWidth = slideshowContainer.clientWidth;
      let maxHeight = window.innerHeight * 0.7; // Max 70% of viewport height
      
      // Set a minimum height to avoid too small slideshows
      const minHeight = Math.min(300, window.innerHeight * 0.3);
      
      slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (!img || !img.complete) return;
        
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        
        // For landscape images (width > height)
        if (aspectRatio > 1) {
          // Keep the width at 100% and calculate the appropriate height
          const calculatedHeight = containerWidth / aspectRatio;
          slide.style.paddingBottom = `${Math.min(Math.max(calculatedHeight, minHeight), maxHeight)}px`;
        } 
        // For portrait images (height > width)
        else {
          // Height should be capped at maxHeight
          const calculatedHeight = Math.min(containerWidth / aspectRatio, maxHeight);
          slide.style.paddingBottom = `${Math.max(calculatedHeight, minHeight)}px`;
        }
      });
    }
    
    // Function to close modal
    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Allow scrolling again
      
      // Remove resize event listener
      window.removeEventListener('resize', adjustSlideHeight);
      
      // Reset after animation
      setTimeout(() => {
        if (!modal.classList.contains('active')) {
          slidesWrapper.innerHTML = '';
          dotsContainer.innerHTML = '';
        }
      }, 300);
    }
    
    // Function to show a specific slide
    function showSlide(index) {
      if (!currentProject) return;
      
      const slides = slidesWrapper.querySelectorAll('.slide');
      const dots = dotsContainer.querySelectorAll('.dot');
      
      if (slides.length === 0) return;
      
      // Handle wrapping
      if (index >= slides.length) {
        index = 0;
      } else if (index < 0) {
        index = slides.length - 1;
      }
      
      // Update current slide index
      currentSlideIndex = index;
      
      // Move the slides
      slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
      
      // Update active dot
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  });