$(function(){
	
	AOS.init();

	$(window).scrollTop(0);
	let navCount = true;
	$(window).scroll( ()=> {
		let currentPosition = $(".navbar").offset().top;
		if(currentPosition > 0.5){
			if(navCount){
				navCount = false;
				$(".navbar").fadeOut(200);
				$(".navbar").addClass('navBackgroundColor');
				$(".hireUs").addClass('hireUsBorder');
				$("nav li a").css({color: 'black',fontWeight: '900'});
				$(".navbar").fadeIn(200);
				$(".navbar-brand").css({color: 'black',fontWeight:'900'});
			}
		}else {
			$(".navbar").fadeOut(200);
			$(".navbar").removeClass('navBackgroundColor');
			$(".hireUs").removeClass('hireUsBorder');
			$("nav li a").css({color: 'white'});
			$(".navbar-brand").css({color: 'white',fontWeight:'100'});
			$(".navbar").fadeIn(200);
			navCount = true;
			$("nav li .hireUs").hover(function() {
				$(this).css({color:'black'});
			}, function() {
				$(this).css({color:'white'})
			});
		}
	});
	
	let teamLis = $(".teamLi");
	for(let i = 0; i < teamLis.length; i++){
		$(teamLis[i]).delay(i * 100).animate({marginLeft:"0"},1000);
	}
	$(window).scrollTop(0);

	const secondHand = document.querySelector('.second-hand');
	const minsHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

	let secounds = document.querySelectorAll('.sec');
	let minss = document.querySelectorAll('.min');
	let hours = document.querySelectorAll('.hour');
	function setDate() {
		const now = new Date();

		const seconds = now.getSeconds();
		const secondsDegrees = (seconds * 6) + 90;
		secounds.forEach( function(element, index) {
			element.style.transform = `rotate(${secondsDegrees}deg)`;
		});

		const mins = now.getMinutes();
		const minsDegrees = (mins * 6) + 90;
		minss.forEach( function(element, index) {
			element.style.transform = `rotate(${minsDegrees}deg)`;
		});

		const hour = now.getHours();
		const hourDegrees = (hour * 30) + 90;
		hours.forEach( function(element, index) {
			element.style.transform = `rotate(${hourDegrees}deg)`;
		});
	}

	setInterval(setDate, 1000);

	setDate();
	$(".hiddenPlusText").hide();
	$(".fa-plus").click(function(){
		$(this).fadeOut("fast").delay(10).fadeIn('fast');
		$(this).toggleClass('fa-minus');
		$(this).toggleClass('fa-plus');
		$(this).parent().parent().children('h5').slideToggle('fast');
	});

});
