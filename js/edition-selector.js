document.addEventListener('DOMContentLoaded', function() {
    const editionSelect = document.getElementById('edition-select');
    if (!editionSelect) return;
    
    function updateEditionDisplay() {
        const selectedEdition = editionSelect.value;
        const standardRows = document.querySelectorAll('.standard-row');
        const deluxeRows = document.querySelectorAll('.deluxe-row');
        
        if (selectedEdition === 'standard') {
            standardRows.forEach(row => row.style.display = 'table-row');
            deluxeRows.forEach(row => row.style.display = 'none');
        } else {
            standardRows.forEach(row => row.style.display = 'none');
            deluxeRows.forEach(row => row.style.display = 'table-row');
        }
    }
    
    updateEditionDisplay();
    editionSelect.addEventListener('change', updateEditionDisplay);
});