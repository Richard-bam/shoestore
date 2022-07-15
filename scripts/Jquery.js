$('nav ul li').slideUp(0)
$(function () {
    //will fade out delivery options 
    $(".toggled").fadeOut(0);
    //will fade the delivery options in after checkOut button is clicked
    $("#checkoutBtn").click(function () {
        $(".toggled").fadeToggle(500);
    });

    //function to display dropdown  menu when ul is hovered over
    $('nav ul').hover((function () {
            $('li', this).stop().slideDown(200)
        }),
        function () {
            $('li', this).stop().slideUp(200)
        }
    )
})