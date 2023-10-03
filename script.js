document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.tns-item');

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            // Check if the first item is active after a click
            if (items[0].classList.contains('tns-slide-active')) {
                // Remove the .reduced-opacity class from all items
                items.forEach(i => i.classList.remove('reduced-opacity'));
            } else {
                // Add the .reduced-opacity class to non-active items
                items.forEach(i => {
                    if (!i.classList.contains('tns-slide-active')) {
                        i.classList.add('reduced-opacity');
                    } else {
                        i.classList.remove('reduced-opacity');
                    }
                });
            }
        });
    });
});
