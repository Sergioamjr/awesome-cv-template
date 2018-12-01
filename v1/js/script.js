$(document).ready(function(){
 	$('.hamburger').click(function() {
 		if(!$(this).hasClass('hamburger-exemple')) {
	 		$(this).toggleClass('is-active');
	 		if($(".nav-content").hasClass('showMenu')) {
	 			$(".nav-content").removeClass('showMenu').slideUp('slow');
	 		} else {
	 			$(".nav-content").addClass('showMenu').slideDown('slow');
	 		}
 		} else {
 			if($(this).closest('.nav').find('.nav-exemple').hasClass('showMenu')) {
 				$(this).closest('.nav').find('.nav-exemple').removeClass('showMenu').slideUp('slow');
 			} else {
 				$(".nav-exemple").removeClass('showMenu').slideUp('slow');
				$(this).closest('.nav').find('.nav-exemple').addClass('showMenu').slideDown('slow');
 			}
 		}
 	});
});

// function closeModal(e) {
// 	console.log(e);
// }

// var element = document.querySelector('.modal-overlay');
// element.addEventListener('click', function(e) {
// 	var target = e.target.className;
// 	closeModal(e);
// });
