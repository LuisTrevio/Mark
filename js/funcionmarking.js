const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
    
        document.querySelectorAll('.bdark').forEach((result) => {result.classList.toggle('dark');})

        document.querySelectorAll('.ndark').forEach((result) => {result.classList.toggle('nodark');})

        document.querySelectorAll('.cdark').forEach((result) => {result.classList.toggle('chesh');})

        document.querySelectorAll('.fdark').forEach((result) => {result.classList.toggle('footerdark');})

        document.querySelectorAll('.sdark').forEach((result) => {result.classList.toggle('sombra-dark');})
       
    })
    