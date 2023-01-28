// "use strict";
//
// var color = "#239123";
//
// let master = {
//
//     window_event_listeners: function () { 
//
//         $(window).scroll(function () {
//
//             if ($(this).scrollTop() > 199)
//                 $('navbar').addClass('navbarfixed');
//             else
//                 $('navbar').removeClass('navbarfixed');
//
//             $('section').each(function () {
//
//                 if ($(window).scrollTop() >= $(this).offset().top-95) {
//
//                     let id = $(this).attr('id');
//                     $('navbar a').css('color','#666');
//                     $('navbar a[href*="'+id+'"]').css('color', color);
//
//                 }
//
//             });
//
//         });
//
//     },
//
//     notifications: function () {
//
//         if ($(".notification").length)
//             $(".notification").delay(9000).fadeOut("slow");
//
//     },
//
//     navbar: function () {
//
//         $('navbar ul li a').hover(function () {
//
//             $('navbar ul li a').css('opacity','0.4'); 
//             $(this).css('opacity','1');
//
//         }, function () {
//
//             $('navbar ul li a').css('opacity','1'); 
//
//         });
//
//     },
//
//     smooth_pagination: function () {
//
//         let $root = $('html,body');
//
//         $(function (e) {
//
//             $('a[href*="#"]:not([href="#"])').on('click',function(e) {
//
//                 if (this.hash !== "") {
//
//                     e.preventDefault();
//                     $root.animate({ scrollTop: $(this.hash).offset().top-90 },900 ); 
//                     window.location.hash = "";
//
//                 }
//
//             });
//
//         });
//
//     },
//
//     init: function () {
//         
//         this.window_event_listeners();
//         this.notifications();
//         this.navbar();
//         this.smooth_pagination();
//
//     }
//
// }
//
// let contact_form = {
//
//     check_input: function () {
//
//
//     },
//
//     init: function () {
//         
//         this.check_input();
//
//     }
//
// }
//
// let calendar = {
//
//     check_input: function () {
//
//
//     },
//
//     init: function () {
//         
//         this.check_input();
//
//     }
//
// }
// $ (function () {
//
//     master.init();
//     contact_form.init();
//     calendar.init();
//
// });
