# mac-dock-hover-concept
it is the concept how animation works on mac dock
To apply CSS to elements both before and after a hovered element, you'll need to use a different approach, as CSS doesn't allow you to select previous siblings directly.

However, you can achieve this effect with a combination of CSS and JavaScript. Here's how you can do it:

### HTML Structure

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
</div>
```

### CSS

```css
.container {
    display: flex;
    justify-content: space-around;
}

.item {
    padding: 20px;
    background-color: #f0f0f0;
    transition: background-color 0.3s, transform 0.3s, opacity 0.3s;
}

.item:hover {
    background-color: #b0c4de;
    transform: scale(1.1);
}
```

### JavaScript

You can use JavaScript to dynamically add classes to the elements before and after the hovered element.

```javascript
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
```

### Additional CSS for Hover Effects

You can define the styles for the `.before-hover` and `.after-hover` classes:

```css
.before-hover {
    opacity: 0.5; /* Style for the previous item */
}

.after-hover {
    opacity: 0.5; /* Style for the next item */
}
```

### Explanation

1. **HTML Structure**: Simple list of items.
2. **CSS**: Basic styling for items and hover effects for the item being hovered.
3. **JavaScript**:
   - Adds event listeners for `mouseenter` and `mouseleave`.
   - On hover, it applies classes to the previous and next items.
   - On mouse leave, it removes these classes to reset styles.

This way, you can effectively control the styles of both the hovered item and its adjacent elements. Adjust the styles as needed for your design!
