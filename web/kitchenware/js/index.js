// JavaScript Document

jQuery(document).ready(function($){ // START

	/********** Accordion **********/
	$( '.accordion-content' ).hide();
	$( '.accordion-title' ).click(function() {
	  $( '.accordion-content' ).slideUp( 'normal' );
	  $( '.accordion-title' ).removeClass( 'accordion-open' );
		if($(this).next().is( ':hidden' ) == true) {
		  $(this).next().slideDown( 'normal' );
		  $(this).addClass( 'accordion-open' );
		} 
	});

}); // END


//-BACK TO TOP--//



// create the back to top button
$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 400;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

//-BACK TO TOP--//



// mobile nav

// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});


$(".js-toggle-menu").on("click", function(e){
    $(".mobile-header-nav").show();

    $(document).one("click", function(){
        $(".mobile-header-nav").hide();
    });

    e.stopPropagation();
});

//


$("#NAVNAV1pc").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#CONTENT1-1").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});

$("#NAVNAV2pc").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#CONTENT2").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


$("#NAVNAV3pc").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#CONTENT3").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});




$("#NAVNAV6pc").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#CONTENT6").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


/*slide show 五金行/服務體驗*/


//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 100000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	

});//DOCUMENT READY
	


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}

