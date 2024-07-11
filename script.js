document.addEventListener('DOMContentLoaded', () => {
    const Vert = document.querySelectorAll('.Vertika');
    const Hori = document.querySelectorAll('.Horison');
    const HoriLef = document.querySelectorAll('.HorisonLeft');
    const HoriLefList = document.querySelectorAll('.HoriLefList');

    const observerOptions = {
        threshold: 0.1
    };
    const observerOptionsList = {
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

    const observerlist = new IntersectionObserver((entries, observerlist) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('list-show');
            } else {
                entry.target.classList.remove('list-show');
            }
        });
    }, observerOptionsList);

    HoriLefList.forEach(HoriLefList => {
        observerlist.observe(HoriLefList);
    });

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