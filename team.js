$(function(){
	
	AOS.init();

	$(window).scrollTop(0);

	let navCount = true;

	if($(window).width() < 480){
		$('.navbar').css({backgroundColor:'black'});
	}

	$(window).on('scroll', function(){
		let currentPosition = $(".navbar").offset().top;
		if(currentPosition > 0.5){
			if(navCount){
				$('.navbar-toggle .icon-bar').css({backgroundColor:'black'});
				$('.logo').attr('src', 'img/logo.svg');
				navCount = false;
				$(".navbar").css({transition: " .5s ease-in-out 0s"});
				$(".navbar").css({backgroundColor:'white'});
				$("nav li a").css({color: 'black'});
				$(".nav>li>a, .nav>li>a").hover(function(){
					$(this).css({color:'red',backgroundColor:'transparent'});
				},function(){
					$(this).css({color:'black',backgroundColor:'transparent'});
				});
				$("nav li .hireUs").hover(function() {
					$(this).css({backgroundColor: 'black',color:'white'});
				}, function() {
					$(this).css({backgroundColor: 'red',color:'black'});
				});
			}
		}else {
			if($(window).width() < 480){
				$('.navbar').css({backgroundColor:'black'});
			}else{
				$(".navbar").css({backgroundColor:'transparent'});
			}
			$('.navbar-toggle .icon-bar').css({backgroundColor:'white'});
			$('.logo').attr('src', 'img/logoWhite.svg');
			navCount = true;
			$(".navbar").css({transition: " .5s ease-in-out 0s"});
			$(".nav li a").css({color: 'white'});
			$(".nav li a").hover(function(){
				$(this).css({color:'red',backgroundColor:'transparent'});
			},function(){
				$(this).css({color:'white',backgroundColor:'transparent'});
			});
			$("nav li .hireUs").hover(function() {
				$(this).css({backgroundColor: 'white',color:'black'});
			}, function() {
				$(this).css({backgroundColor: 'red',color:'white'})
			});
		}
	});
	
	let teamLis = $(".teamLi");
	for(let i = 0; i < teamLis.length; i++){
		$(teamLis[i]).delay(i * 150).animate({opacity:"1"});
	}

	function setDate() {
		const date = new Date();

		const seconds = date.getUTCSeconds();
		const mins = date.getUTCMinutes();
		const hour = date.getUTCHours();

		var secondsDegrees;
		secondsDegrees = (seconds * 6) + 90;
		document.querySelector('.second-handLondon').style.transform = `rotate(${secondsDegrees}deg)`//London
		document.querySelector('.second-handNY').style.transform = `rotate(${secondsDegrees}deg)`;//New York
		document.querySelector('.second-handToronto').style.transform = `rotate(${secondsDegrees}deg)`//Toronto
		document.querySelector('.second-handHK').style.transform = `rotate(${secondsDegrees}deg)`//Hong Kong
		document.querySelector('.second-handBucharest').style.transform = `rotate(${secondsDegrees}deg)`//Bucharest
		document.querySelector('.second-handWarsaw').style.transform = `rotate(${secondsDegrees}deg)`//Warsaw

		var minsDegrees;
		minsDegrees = (mins * 6) + 90;
		document.querySelector('.min-handLondon').style.transform = `rotate(${minsDegrees}deg)`;//London
		document.querySelector('.min-handNY').style.transform = `rotate(${minsDegrees}deg)`;//New York
		document.querySelector('.min-handToronto').style.transform = `rotate(${minsDegrees}deg)`//Toronto
		document.querySelector('.min-handHK').style.transform = `rotate(${minsDegrees}deg)`//Hong Kong
		document.querySelector('.min-handBucharest').style.transform = `rotate(${minsDegrees}deg)`//Bucharest
		document.querySelector('.min-handWarsaw').style.transform = `rotate(${minsDegrees}deg)`//Warsaw

		var hourDegrees;
		hourDegrees = (hour * 30) + 90;
		document.querySelector('.hour-handLondon').style.transform = `rotate(${hourDegrees}deg)`;//London
		hourDegrees -= minsDegrees;
		hourDegrees = (hour * 30 - 120) + 90 ;
		document.querySelector('.hour-handNY').style.transform = `rotate(${hourDegrees}deg)`;//New York
		document.querySelector('.hour-handToronto').style.transform = `rotate(${hourDegrees}deg)`//Toronto
		hourDegrees -= hourDegrees;
		hourDegrees = (hour * 30 + 240) + 90 ;
		document.querySelector('.hour-handHK').style.transform = `rotate(${hourDegrees}deg)`//Hong Kong
		hourDegrees -= hourDegrees;
		hourDegrees = (hour * 30 + 60) + 90 ;
		document.querySelector('.hour-handBucharest').style.transform = `rotate(${hourDegrees}deg)`//Bucharest
		hourDegrees -= hourDegrees;
		hourDegrees = (hour * 30 + 30) + 90 ;
		document.querySelector('.hour-handWarsaw').style.transform = `rotate(${hourDegrees}deg)`//Warsaw
	}

	setInterval(setDate, 1000);

	setDate();

	$(".hiddenPlusText").hide();
	$(".fa-plus").click(function(){
		// $(this).addClass('clicked');
		$(this).animate({opacity:'0.1'},100,function(){
			$(this).animate({opacity:'1'},100);
		})
		$(this).toggleClass('fa-minus');
		$(this).toggleClass('fa-plus');
		$(this).parent().parent().children('h5').slideToggle('fast');
		$('.plussesDiv div i').not(this).parent().parent().children('h5').slideUp('fast');
		$('.plussesDiv div i').not(this).removeClass('fa-minus');
		$('.plussesDiv div i').not(this).addClass('fa-plus');
	});


	//If we open inspect and and go to 425px it will not remove the attributes-why would someone do this.
	//Thatws why when  we open the website for the first time on phone this will work and will remove the attributes.
	if($(window).width() <= 480) {
		$(".clockDiv").removeAttr('data-aos');
		$(".global").removeAttr('data-aos');
		$(".btnsCol div").removeAttr('data-aos');
		$('.location').removeAttr('data-aos');
	}

});
