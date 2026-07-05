document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tabs');
    const contents = document.querySelectorAll('.p');

    contents.forEach((content, index) => {
        if (index === 0) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Hide all content text blocks
            contents.forEach(content => {
                content.style.display = 'none';
            });

            
            if (contents[index]) {
                contents[index].style.display = 'block';
            }
        });
    });
});
