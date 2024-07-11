document.addEventListener('DOMContentLoaded', () => {
    const Vert = document.querySelectorAll('.Vertika');
    const Hori = document.querySelectorAll('.Horison');
    const HoriLef = document.querySelectorAll('.HorisonLeft');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    Vert.forEach(Vert => {
        observer.observe(Vert);
    });
    Hori.forEach(Hori => {
        observer.observe(Hori);
    });
    HoriLef.forEach(HoriLef => {
        observer.observe(HoriLef);
    });

});