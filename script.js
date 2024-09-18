
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Remove previous effects
        items.forEach(i => {
            i.classList.remove('before-hover', 'after-hover');
        });

        // Add classes to the previous and next items
        const prevItem = item.previousElementSibling;
        const nextItem = item.nextElementSibling;

        if (prevItem) {
            prevItem.classList.add('before-hover');
        }
        if (nextItem) {
            nextItem.classList.add('after-hover');
        }
    });

    item.addEventListener('mouseleave', () => {
        // Remove effects on mouse leave
        items.forEach(i => {
            i.classList.remove('before-hover', 'after-hover');
        });
    });
});
