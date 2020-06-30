$('.tutorial').each(function(){
    $(this).mouseenter(function(){
        $(this).find('.background-img').css('opacity','0.8');
    })

    $(this).mouseleave(function(){
        $(this).find('.background-img').css('opacity','1.0');
    })
});



$('.like').each(function(){
    $(this).click(function(){
        $(this).toggleClass('fa-heart-o fa-heart');
    });
});

$('.favourite').each(function(){
    $(this).click(function(){
        $(this).toggleClass('fa-star-o fa-star');
    });
});