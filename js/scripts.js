$(document).ready(function(){
	
	new WOW().init();
	
	//comments: more - less
	$('.all').click(function(){
		$(this).siblings('.comment-text').toggleClass('more-text');
		$(this).children('.glyphicon').toggleClass('rotate');
		let text = $(this).children('.more-less').text();
		if(text == 'Читать полностью') {
			$(this).children('.more-less').text('Свернуть');
		}
		else {
			$(this).children('.more-less').text('Читать полностью');
		}
	});
	
	$('.close-btn').click(function(){
		$('.modal-window').css('display','none');
		$('body').css('overflow','visible');
	})
	$('.yellow-btn').not('.modal-btn').click(function(){
		$('.modal-window').css('display','flex');
		$('body').css('overflow','hidden');
	})
});

/*$(window).load(function(){
	
	$('.sup-items').slick({
	  infinite: true,
	  autoplay: true,
	  speed: 1500,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 680,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
});*/