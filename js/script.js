
var off = 77;

//smooth scrolling
$('#home, #profession, #modal, #video, #contact, #slider').on('click', function(e){
    e.preventDefault();
    var target = $(this).get(0).id;
    var target2 = $(this).get(0);
    if (target == 'home'){
		target = $('#top');
	}
	else if (target == 'profession') {
		target = $('#aProfession');
	}
	else if (target == 'modal') {
		target = $('#aModal');
	}
	else if (target == 'video') {
		target = $('#aVideo');
	}
	else if (target == 'contact') {
		target = $('#aContact');
	}
	else if (target == 'slider') {
		target = $('#aSlider');
	}

    $('html, body').stop().animate({
       scrollTop: target.offset().top-75
    }, 1000);
});

//header position indicator
$(window).scroll(function() {
	if ($(window).scrollTop() >= $('#top').offset().top-off) {
		$('#home').css("color","red");
		$('#profession').css("color","white");
		$('#modal').css("color","white");
		$('#video').css("color","white");		
		$('#contact').css("color","white");
		$('#slider').css("color","white");
	}
	//console.log($(window).scrollTop(),$('#aProfession').offset().top-off,$('#aProfession').offset().top-off + $('#aProfession').innerHeight());
	if ($(window).scrollTop() >= $('#aProfession').offset().top-off && 
		$('#aProfession').offset().top-off + $('#aProfession').innerHeight()) {
		$('#profession').css("color","red");
		$('#home').css("color","white");
		$('#modal').css("color","white");
		$('#video').css("color","white");		
		$('#contact').css("color","white");
		$('#slider').css("color","white");
	}
	if ($(window).scrollTop() >= $('#aModal').offset().top-off) {
		$('#modal').css("color","red");
		$('#home').css("color","white");
		$('#profession').css("color","white");
		$('#contact').css("color","white");
		$('#video').css("color","white");		
		$('#slider').css("color","white");
	}
	if ($(window).scrollTop() >= $('#aVideo').offset().top-off) {
		$('#video').css("color","red");
		$('#home').css("color","white");
		$('#modal').css("color","white");
		$('#contact').css("color","white");
		$('#profession').css("color","white");		
		$('#slider').css("color","white");
	}
	if ($(window).scrollTop() >= $('#aContact').offset().top-off) {
		$('#contact').css("color","red");
		$('#home').css("color","white");
		$('#modal').css("color","white");
		$('#video').css("color","white");
		$('#profession').css("color","white");		
		$('#slider').css("color","white");

	}
	if ($(window).scrollTop() >= $('#aSlider').offset().top-off) {
		$('#slider').css("color","red");
		$('#contact').css("color","white");
		$('#home').css("color","white");
		$('#modal').css("color","white");
		$('#video').css("color","white");
		$('#profession').css("color","white");		

	}
});


//slider functions
var currentIndex = 0,
  items = $('.sliderContainer div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.sliderContainer div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

$('.next').click(function() {
  //clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
 // clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});



