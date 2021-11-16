// scroll to top
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#scroll-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

// animating composents
window.sr = new ScrollReveal({});
		sr.reveal('.caption h1', {
		opacity: 0.9, origin: 'left', distance:'700px',
		duration: 900
		});

		sr.reveal('.caption h2', {
		opacity: 0.9, origin: 'right', distance:'500px',
		duration: 900
		});

		sr.reveal('.caption h3', {
		opacity: 0.9, origin: 'right', distance:'500px',
		duration: 900
		});

		sr.reveal('.btn-outline-light', {
		opacity: 0.9, origin: 'bottom', distance:'300px',
		duration: 900
		});

		sr.reveal('.heading-underline', {
		opacity: 0.9, origin: 'bottom', distance:'300px',
		duration: 900
		});

		sr.reveal('.heading', {
		opacity: 0.9, origin: 'bottom', distance:'300px',
		duration: 900
		});
		
		sr.reveal('.revealleft', {
		opacity: 0.9, origin: 'left', distance:'500px',
		duration: 900
		});

		sr.reveal('.revealright', {
		opacity: 0.9, origin: 'right', distance:'500px',
		duration: 900
		});

		sr.reveal('.revealbottom', {
		opacity: 0.9, origin: 'bottom', distance:'300px',
		duration: 900

	  });
	  