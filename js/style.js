const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.getElementById("mainNavbar");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
        }
    });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! Your message is ready to send.");
});

const revealSections = document.querySelectorAll(".reveal-section");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.16,
    }
);

revealSections.forEach((section) => {
    revealObserver.observe(section);
});
