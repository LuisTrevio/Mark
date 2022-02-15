$(window).on("scroll", function() {
    if($(window).scrollTop() > 60) {
        $(".scroll").addClass("active");
    } else {
       $(".scroll").removeClass("active");
    }
});

const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
    
        document.querySelectorAll('.menuon').forEach((result) => {result.classList.toggle('menu-toggle');})
        document.querySelectorAll('.bar1').forEach((result) => {result.classList.toggle('action-1');})
        document.querySelectorAll('.bar2').forEach((result) => {result.classList.toggle('action-2');})
    })

function tock() {
    checkbox.click()
}
    