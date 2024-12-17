document.addEventListener('DOMContentLoaded', function () {
    const events = document.querySelectorAll('.event');

    const checkScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        events.forEach((event) => {
            const eventTop = event.getBoundingClientRect().top + scrollY;
            const eventHeight = event.offsetHeight;

            if (scrollY + windowHeight > eventTop + eventHeight * 0.2) {
                event.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();  // Initial check
});
