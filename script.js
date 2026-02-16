const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.links');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
        document.body.style.overflow = 'auto'; // Enable scroll
    }
});

// Scroll Spy Logic
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu-list .links');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust offset for better triggering
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-link');
                let targetLink = document.querySelector('.menu-list a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active-link');
                }
            });
        }
    });
};

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active'); // Wait, earlier code had hamburger toggling too
        // Keeping consistant with previous snippet logic which just removed classes
        document.body.style.overflow = 'auto';
    });
});

// Resume Modal Logic
const modal = document.getElementById("resumeModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close-btn")[0];
const viewBtn = document.getElementById("viewResumeBtn");
const backBtn = document.getElementById("backToOptionsBtn");
const optionsDiv = document.getElementById("resumeOptions");
const viewerDiv = document.getElementById("resumeViewer");

btn.onclick = function () {
    modal.style.display = "block";
    // Reset to options view when opening
    optionsDiv.style.display = "block";
    viewerDiv.style.display = "none";
}

span.onclick = function () {
    modal.style.display = "none";
}

viewBtn.onclick = function () {
    optionsDiv.style.display = "none";
    viewerDiv.style.display = "block";
}

backBtn.onclick = function () {
    viewerDiv.style.display = "none";
    optionsDiv.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}