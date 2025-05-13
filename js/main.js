
$(document).ready(function(){
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true,
        navigationPosition: 'right',
        autoScrolling:true,
        // scrollHorizontally: true,
        keyboardScrolling: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		anchors: ['intro', 'secondPage', '3rdPage', '4thpage', '5thpage','6thpage', 'lastpage'],
        onLeave: function(){
			$('.section [data-aos]').each(function(){
				$(this).removeClass("aos-animate");
			});
		},
		onSlideLeave: function(){
			$('.slide [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		afterSlideLoad: function(){
			$('.slide.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
		},
		afterLoad: function(){
			$('.section.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
			let section = $('.section');
			section.removeClass('on')
			if(section.hasClass('active')){
				this.addClass('on')
			}else{
				this.removeClass('on')
			}
		}
    });
	
	const elts = {
		text1: document.getElementById("txt1"),
		text2: document.getElementById("txt2")
	};
	
	const texts = [
		"hello",
		"wellcome",
		"to",
		"my",
		"portfolio",
		"have a",		
		"nice",
		"day",
		";)"
	];

	const morphTime = 1.2;
	const cooldownTime = 0.25;

	let textIndex = texts.length - 1;
	let time = new Date();
	let morph = 0;
	let cooldown = cooldownTime;
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];

	function doMorph() {
		morph -= cooldown;
		cooldown = 0;
		
		let fraction = morph / morphTime;
		
		if (fraction > 1) {
			cooldown = cooldownTime;
			fraction = 1;
		}
		
		setMorph(fraction);
	}

	function setMorph(fraction) {
		
		elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
		
		fraction = 1 - fraction;
		elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
		
		elts.text1.textContent = texts[textIndex % texts.length];
		elts.text2.textContent = texts[(textIndex + 1) % texts.length];
	}
	
	function doCooldown() {
		morph = 0;
		
		elts.text2.style.filter = "";
		elts.text2.style.opacity = "100%";
		
		elts.text1.style.filter = "";
		elts.text1.style.opacity = "0%";
	}
	
	// Animation loop, which is called every frame.
	function animate() {
		requestAnimationFrame(animate);
		
		let newTime = new Date();
		let shouldIncrementIndex = cooldown > 0;
		let dt = (newTime - time) / 1000;
		time = newTime;
		
		cooldown -= dt;
		
		if (cooldown <= 0) {
			if (shouldIncrementIndex) {
				textIndex++;
			}
			
			doMorph();
		} else {
			doCooldown();
		}
	}
	
	// Start the animation.
	animate();
});

