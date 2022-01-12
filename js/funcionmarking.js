const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
    
        document.querySelectorAll('.menu-on').forEach((result) => {result.classList.toggle('menu-toggle');})
       
    })
    