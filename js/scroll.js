document.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    
});document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".stat h2");
    const button = document.querySelector('a[href="#about"] button');
    const duration = 2000; // doba animace v milisekundách

    const startAnimation = () => {
        counters.forEach(counter => {
            const target = +counter.innerText; // konečná hodnota
            counter.innerText = "0"; // začínáme od 0

            const increment = target / (duration / 50); // vypočítání přírůstku

            const updateCounter = () => {
                const current = +counter.innerText;
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 50);
                } else {
                    counter.innerText = target; // ujistíme se, že konečná hodnota je správná
                }
            };

            updateCounter();
        });
    };

    button.addEventListener("click", function (e) {
        e.preventDefault(); // Zabraň přímému skoku na #about
        const aboutSection = document.querySelector("#about");
        aboutSection.scrollIntoView({ behavior: "smooth" }); // Plynulé posunutí na sekci #about
        setTimeout(startAnimation, 500); // Spuštění animace s malým zpožděním po skrolování
    });

     startAnimation();
});



