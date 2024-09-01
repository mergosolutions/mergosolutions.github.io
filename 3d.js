document.querySelectorAll('.card').forEach(card => {
    const cardInner = card.querySelector('.card-content');

    card.addEventListener('mousemove', (event) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const rotateX = ((mouseY - cardCenterY) / cardRect.height) * -10;
        const rotateY = ((mouseX - cardCenterX) / cardRect.width) * 10;

        cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        cardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});