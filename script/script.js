const menuBtn = document.getElementById('mobile-menu');
const links = document.getElementById('links');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    links.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && e.target !== menuBtn) {
        links.classList.remove('active');
    }
});
