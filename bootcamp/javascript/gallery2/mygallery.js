new Swiper(".swiper-container", {
    speed:400, 
    spaceBetween:100, 
    effect: "cards",
    cardsEffect : {
        slideShadows : false,
    },
    loop : true,
    navigation: {
        nextEl : ".swiper-button-next" , 
        prevEl : ".swiper-button-prev" , 
    }
});