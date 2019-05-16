$(function () {


	$(".que").css({ display: 'none' });
	$('.que').eq(0).css({ display: 'block' });
	$(".progressText").attr("disabled", true);

	$(window).scrollTop(0);

	$(".key").on('keyup', function (e) {
		if (e.keycode === 13) {
			e.preventDefault();
			changed();
		}
		if (progressVal > 338) {
			$(".SubmitBtn").fadeIn(1000);
			$(".SubmitBtn").delay(1000).attr('disabled', true);
		}
	});

	let progressVal = 0;
	let counter = 0;
	$("input").on('change', changed);

	function changed() {
		if (counter >= $(this).parent().parent().attr('id')) {
			$(this).parent().parent().next().fadeIn(1500);
			var el = $(this);
			$(el.prev()).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
			$(el.prev()).siblings('label').css({ backgroundColor: '#7738FF' });
			$(el.prev()).css({ backgroundColor: '#5829BC' });
			$('#progress').css({ width: progressVal });
			var parel = $(el).parent().parent().parent().find(`.question${counter + 1}`).offset().top - 225;
			$('html, body').delay(500).animate({
				scrollTop: parel
			}, 500);
		} else {
			counter++;
			$(this).parent().parent().next().fadeIn(1500);
			progressVal += 22.6;
			var id = $(this).parent().parent().attr('id');
			if (progressVal > 338) {
				$(".progressText").fadeOut({
					duration: 'normal',
					easing: 'linear',
					complete: function(){
						$("#progress").text(`SUBMIT`);
					}
				});
				$('#progress').click(function() {
					$('form').submit();
				});
				$(".progressText").click(function() {
					$('form').submit();	
				})
			} else {
				$(".progressText").text(`${id}-15 Answered`);
			}
			var el = $(this);
			$(el.prev()).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
			$(el.prev()).siblings('label').css({ backgroundColor: '#7738FF' });
			$(el.prev()).css({ backgroundColor: '#5829BC' });
			$('#progress').css({ width: progressVal });
			var parel = $(el).parent().parent().next().offset().top - 225;
			$('html, body').delay(500).animate({
				scrollTop: parel
			}, 500);
		}
	}

	let countrys = ['Macedonia', 'Croatia', 'Bulgaria', 'Serbia'];

	$(".location").on('keyup', function () {
		let country = $(this).val();
		if (country !== '') {
			countrys.forEach(function (element, index) {
				let subbed = element.substring(0, country.length).toLowerCase();
				if (country === subbed) {
					let name = element;
					$('.location').val(`${name}`);
				}
			});
		}
	});


});