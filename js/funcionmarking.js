const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
    
        document.querySelectorAll('.bdark').forEach((result) => {result.classList.toggle('dark');})
       
    })
    