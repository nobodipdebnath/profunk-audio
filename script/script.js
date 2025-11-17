const menuBtn = document.getElementById('mobile-menu');
const links = document.getElementById('links');

// Toggle Show/Hide
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // বাইরে ক্লিক ধরতে সমস্যা না হয়
    links.classList.toggle('active');
});

// বাইরে ক্লিক করলে Hide হবে
document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && e.target !== menuBtn) {
        links.classList.remove('active');
    }
});
