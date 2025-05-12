const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute(
        "class", 
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

//header container
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// about container
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about_content .about_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

//service container 
ScrollReveal().reveal(".service_card", {
    ...scrollRevealOption,
    interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
    duration: 1000,
    interval: 500,
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const modal = document.getElementById("messageModal");
    const closeModalButton = document.getElementById("closeModal");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        // Log data to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Show modal
        modal.style.display = "flex";

        // Reset the form
        contactForm.reset();
    });

    // Close modal on button click
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Show the button when the user scrolls near the footer
    window.addEventListener("scroll", function () {
        const footer = document.querySelector("footer");
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerPosition < windowHeight) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});