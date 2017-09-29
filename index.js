window.addEventListener('scroll', function(e) {
    if (window.scrollY > 100){
        document.getElementsByTagName('header')[0].style.transform = 'translateY(0)';
    } else{
        document.getElementsByTagName('header')[0].style.transform = 'translateY(-4.5em)';
    }
})