document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
});

window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach((card, i) => {
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, i * 200);
    });
});
