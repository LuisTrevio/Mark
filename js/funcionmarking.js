const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
    
        document.querySelectorAll('.menuon').forEach((result) => {result.classList.toggle('menu-toggle');})

    })

function tock() {
    checkbox.click()
}
    