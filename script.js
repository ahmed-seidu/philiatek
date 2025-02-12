document.addEventListener("DOMContentLoaded", function () {
    /** ✅ Navigation Menu **/
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    /** ✅ Hero Section Animation **/
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        heroSection.style.opacity = 0;
        heroSection.style.transition = "opacity 1.5s ease-in-out";
        setTimeout(() => { heroSection.style.opacity = 1; }, 500);
    }

    const heroHeading = document.querySelector(".hero h1");
    const heroButton = document.querySelector(".hero .btn");

    if (heroHeading && heroButton) {
        heroHeading.style.opacity = 0;
        heroHeading.style.transform = "translateY(-20px)";
        heroHeading.style.transition = "all 1s ease-in-out";

        heroButton.style.opacity = 0;
        heroButton.style.transform = "translateY(20px)";
        heroButton.style.transition = "all 1s ease-in-out 0.3s";

        setTimeout(() => {
            heroHeading.style.opacity = 1;
            heroHeading.style.transform = "translateY(0)";
        }, 600);

        setTimeout(() => {
            heroButton.style.opacity = 1;
            heroButton.style.transform = "translateY(0)";
        }, 900);
    }

    /** ✅ Form Validation **/
    const form = document.querySelector(".contact form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let message = document.getElementById("message");

            clearErrors();

            if (name.value.trim() === "") { 
                showError(name, "Name is required."); 
                isValid = false; 
            }

            if (email.value.trim() === "" || !isValidEmail(email.value)) { 
                showError(email, "Valid email is required."); 
                isValid = false; 
            }

            if (message.value.trim() === "") { 
                showError(message, "Message cannot be empty."); 
                isValid = false; 
            }

            if (isValid) {
                showSuccess("Thank you! Your message has been sent.");
                form.reset();
            }
        });

        function showError(input, message) {
            let error = document.createElement("p");
            error.className = "error-message";
            error.textContent = message;
            input.parentNode.appendChild(error);

            // ✅ Prevent inline styles from modifying layout
            input.classList.add("input-error");
        }

        function clearErrors() {
            document.querySelectorAll(".error-message").forEach(el => el.remove());
            document.querySelectorAll(".contact input, .contact textarea").forEach(el => el.classList.remove("input-error"));
        }

        function isValidEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email.trim());
        }

        function showSuccess(message) {
            let successMsg = document.createElement("p");
            successMsg.className = "success-message";
            successMsg.textContent = message;
            form.appendChild(successMsg);

            setTimeout(() => successMsg.remove(), 3000);
        }
    }

    /** ✅ Fade-in Animation on Scroll **/
    const sections = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load

    /** ✅ Testimonials Slider (Fixes & Optimizations) **/
    const testimonials = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;

    function showTestimonial(n) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === n) { 
                testimonial.classList.add("active"); 
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            index = index === 0 ? testimonials.length - 1 : index - 1;
            showTestimonial(index);
        });

        nextBtn.addEventListener("click", function () {
            index = index === testimonials.length - 1 ? 0 : index + 1;
            showTestimonial(index);
        });

        showTestimonial(index);
    }
});
