// Navigation Menu
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector("header");

    if (!navToggle || !navLinks || !header) {
        console.error("Navigation elements not found!");
        return;
    }

    navToggle.addEventListener("click", function () {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            navToggle.style.display = "block";
            navLinks.style.display = "none";
        } else {
            navToggle.style.display = "none";
            navLinks.style.display = "flex";
            navLinks.style.justifyContent = "flex-end";
            navLinks.style.marginLeft = "auto";
        }
    });
    
    window.dispatchEvent(new Event("resize"));
});






    // Ensure the hamburger menu appears at the correct position
//     function adjustNavTogglePosition() {
//         if (window.innerWidth <= 768) {
//             navToggle.style.position = "absolute";
//             navToggle.style.top = "15px";
//             navToggle.style.right = "20px";
//             navToggle.style.zIndex = "1001";
//         } else {
//             navToggle.style.position = "fixed";
//             navToggle.style.top = "15px";
//             navToggle.style.right = "20px";
//             navToggle.style.zIndex = "1001";
//         }
//     }

//     window.addEventListener("resize", adjustNavTogglePosition);
//     adjustNavTogglePosition();
// ;


    // Fade-in effect for hero section
    const heroSection = document.querySelector(".hero");
    heroSection.style.opacity = 0;
    heroSection.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        heroSection.style.opacity = 1;
    }, 500);

    // Hero Section Animation
    const heroHeading = document.querySelector(".hero h1");
    const heroButton = document.querySelector(".hero .btn");
    
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



/*Form Validation*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");
    
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevents actual form submission
            
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
            input.style.border = "1px solid red";
        }

        function clearErrors() {
            document.querySelectorAll(".error-message").forEach(el => el.remove());
            document.querySelectorAll(".contact input, .contact textarea").forEach(el => el.style.border = "");
        }

        function isValidEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email.trim());
        }
        
        }

        function showSuccess(message) {
            let successMsg = document.createElement("p");
            successMsg.className = "success-message";
            successMsg.textContent = message;
            form.appendChild(successMsg);

            setTimeout(() => successMsg.remove(), 3000);
        }
    }
);

document.addEventListener("DOMContentLoaded", function () {
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
});
