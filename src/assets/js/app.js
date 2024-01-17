// export function slikk() {

//     $('.customer-logos').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 1
//             }
//         }]
//     });
//     $('.hospedajeDetalle').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 1
//             }
//         }]
//     });
// }
$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

});