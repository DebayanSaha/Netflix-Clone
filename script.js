const rows = document.querySelectorAll('.row');

rows.forEach(row => {
    row.addEventListener('wheel', (event) => {
        event.preventDefault();
        row.scrollLeft += event.deltaY > 0 ? 100 : -100;
    });
});
