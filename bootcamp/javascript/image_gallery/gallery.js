const prevButton = document.querySelector('.previous'); 
const nextButton = document.querySelector('.next');
// this is a NodeList of all the images in the gallery
const galleryImages = document.querySelectorAll('.gallery-image');
let currentimage = 0;// this variable will keep track of which image is currently being displayed


prevButton.addEventListener('click', function()  {
    galleryImages[currentimage].classList.remove('active');// remove the 'active' class from the current image
    currentimage --;
    galleryImages[currentimage].classList.add('active'); // add the 'active' class to the new current image
    nextButton.disabled = false;
    if (currentimage === 0){
        prevButton.disabled = true;
    }
});

nextButton.addEventListener('click', function()  {
    galleryImages[currentimage].classList.remove('active');// remove the 'active' class from the current image
    currentimage ++; // incremeent the current image index
    galleryImages[currentimage].classList.add('active'); // add the 'active' class to the new current image
    prevButton.disabled = false;
    if (currentimage === galleryImages.length - 1){
        nextButton.disabled = true;
    }
});

