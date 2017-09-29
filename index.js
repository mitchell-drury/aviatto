window.addEventListener('scroll', function(e) {
    if (window.scrollY > 100){
        document.getElementsByTagName('header')[0].style.transform = 'translateY(0)';
    } else{
        document.getElementsByTagName('header')[0].style.transform = 'translateY(-4.5em)';
    }
});

var carouselArray = document.getElementsByClassName('carousel-image');
var index = 0;
var intervalID = setInterval(function(){
    rotateCarousel(carouselArray);
},2500);

function rotateCarousel (pix) {
    let length = pix.length;
    pix[index%length].classList.add('hidden');         
    pix[(index+1)%length].classList.remove('hidden');  
    index += 1;
}