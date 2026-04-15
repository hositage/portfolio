document.addEventListener('mousemove', (e) => {
    const iris = document.querySelector('.iris');
    const socket = document.querySelector('.eye-socket');
    
    if (!iris || !socket) return;

    const rect = socket.getBoundingClientRect();
    
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    
    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
    
    
    const maxDistance = 6; 
    
    const moveX = Math.cos(angle) * maxDistance;
    const moveY = Math.sin(angle) * maxDistance;

    iris.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



const skillsGrid = document.getElementById('skillsGrid');
if (skillsGrid) {
    const cards = skillsGrid.querySelectorAll('.skill-card');

    cards.forEach(card => {
        
        card.addEventListener('mouseenter', () => {
            skillsGrid.classList.add('has-focus');
        });

        
        card.addEventListener('mouseleave', () => {
            skillsGrid.classList.remove('has-focus');
        });
    });
}



document.getElementById('enter-btn').addEventListener('click', function() {
    const splash = document.getElementById('splash-screen');
    splash.classList.add('fade-out');
    
    
    const videos = document.querySelectorAll('video');
    videos.forEach(v => v.play());
});


const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            
        }
    });
}, observerOptions);


document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
    observer.observe(el);
});


window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    document.getElementById("scroll-progress").style.width = scrollPercent + "%";
});

