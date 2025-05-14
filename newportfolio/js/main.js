$(function (){
    // main section scroll
    const sections = document.querySelectorAll('.section');
        let currentSection = 0;
        let isScrolling = false;

        const scrollToSection = (index) => {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrolling = false;
            currentSection = index;
        }, 1000); // smooth scroll duration
        };

        window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
            scrollToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
            scrollToSection(currentSection - 1);
        }
        });

        // Optional: arrow key navigation
        window.addEventListener('keydown', (e) => {
        if (isScrolling) return;
        if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
            scrollToSection(currentSection + 1);
        } else if (e.key === 'ArrowUp' && currentSection > 0) {
            scrollToSection(currentSection - 1);
        }
    });
})