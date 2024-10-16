const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;
const elementsToToggle = document.querySelectorAll('header, .about, .skills, .experience, .education, .contact, footer');

// Dark mode'u etkinleştir ve devre dışı bırak
function toggleDarkMode(isDarkMode) {
    body.classList.toggle('dark-mode', isDarkMode);
    elementsToToggle.forEach(el => el.classList.toggle('dark-mode', isDarkMode));
}

// Kullanıcı tercihini yerel depolamaya kaydet
function saveUserPreference(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Kullanıcı tercihlerini yerel depolamadan al
function loadUserPreference() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        toggleDarkMode(true);
        toggleSwitch.checked = true; // Toggle switch'ini güncelle
    }
}

// Event listener for the dark mode switch
toggleSwitch.addEventListener('change', () => {
    const isDarkMode = toggleSwitch.checked;
    toggleDarkMode(isDarkMode);
    saveUserPreference(isDarkMode);
});

// Sayfa yüklendiğinde kullanıcı tercihini yükle
document.addEventListener("DOMContentLoaded", loadUserPreference);

// Harita fonksiyonu
function visitPlaces() {
    window.location.href = 'mappage.html'; // Harita sayfanın yolu
}

// Scroll görünürlüğü için gözlemci
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("header, section");

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
