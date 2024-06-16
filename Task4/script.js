document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const profilePhoto = document.querySelector('.profile-photo img');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const handleScroll = () => {
        const rect = profilePhoto.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
            profilePhoto.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
