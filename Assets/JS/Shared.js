var cartActive = false;

function openNav() {
    document.getElementById("headLinks").style.width = "250px";
    document.getElementById("wrapper").style.opacity = "0.5";
    document.getElementById("wrapper").style.pointerEvents = "none";
}

function closeNav() {
    document.getElementById("headLinks").style.width = "0";
    document.getElementById("wrapper").style.opacity = "1";
    document.getElementById("wrapper").style.pointerEvents = "all";
}

showCart = function() {
    var div = document.getElementById('cart');
    div.style.display = 'block';
}
hideCart = function() {
    var div = document.getElementById('cart');
    div.style.display = 'none';
}

showSignOut = function() {
    var div = document.getElementById('signout');
    div.style.display = 'block';
}
hideSignOut = function() {
    var div = document.getElementById('signout');
    div.style.display = 'none';
}

$(document).ready(function(){
    $('#cartBtn').click(function() {
        if(cartActive == false)
        {
            cartActive = true;
            $('.cart').fadeIn('medium');
            $('#cartBtn').attr("src", '../Assets/Icons/Cart(y).png');
        }
        else{
            cartActive = false;
            $('.cart').fadeOut('medium');
            $('#cartBtn').attr("src", '../Assets/Icons/Cart(g).png');
        }
    });

    $(document).click(function(event) {
        if(!$(event.target).closest('#cartBtn').length) {
            $(".cart").fadeOut('medium');
            $('#cartBtn').attr("src", '../Assets/Icons/Cart(g).png');
        }
    })
})

