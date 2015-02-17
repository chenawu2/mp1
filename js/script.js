// var divs = document.getElementsByTagName('div');
// for(var i=0; i<divs.length; i++) {
//   divs[i].addEventListener("click", highlightThis);
//   /*
//   divs[i].addEventListener("click", highlightThis, true);
//   divs[i].addEventListener("click", highlightThis, false);*/
// }
var off = 77;
function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

$('#home, #profession, #modal, #video, #contact, #slider').on('click', function(e){
    e.preventDefault();
    var target = $(this).get(0).id;
    var target2 = $(this).get(0);
    if (target == 'home'){
		//$(this).get(0).style.color="blue";
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
		target2.style.color = "red";
	}

    $('html, body').stop().animate({
       scrollTop: target.offset().top-75
    }, 1000);
});

// var aTop, aProfession, aVideo, aContact, aSlider;
// function positionNav() {
// 	aTop = document.getElementById('top');
// 	aProfession = document.getElementById('aProfession');
// 	aVideo = document.getElementById('aVideo');
// 	aContact = document.getElementById('aContact');
// 	aSlider = document.getElementById('aSlider');

// 	var yPos = window.pageYOffset;

// 	if (yPos >= aTop.offsetTop) {
// 		var home = document.getElementById('home');
// 		home.style.color = "green";
// 	}
// 	if (yPos < aProfession.getBoundingClientRect().top) {
// 		var home = document.getElementById('profession');
// 		home.style.color = "green";
// 	}
// }
// window.addEventListener("scroll", positionNav);

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

function white(x) {
	$(x).children().each(function() {
		this.style.color = "white";
	});
}
