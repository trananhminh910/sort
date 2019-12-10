		$(".icon-left").click(function() {
			$(".vertical").addClass("animated slideOutLeft");
			setTimeout(function() {
				$(".vertical").hide();
				$(".icon-right").show();
			},900);
		});

		$(".icon-right").click(function() {
			$(".icon-right").hide();
			$(".vertical").removeClass("animated slideOutLeft");
			$(".vertical").show();
			$(".vertical").addClass("animated slideInLeft");
		});

		$(".card").each(function() {
			$(".card").mouseover(function() {
				$(this).addClass("animated bounce");
			})
		});


		for(let i=0; i< 5; i++) {
			$(".profile").eq(i).click(function() {
				$(".member-more").eq(i).css("display","flex");
			})
		};
		
		$(".close-button").click(function() {
			$(".member-more").hide();
		})

		$(window).scroll(function() {
		    if ($(this).scrollTop()) {
		        $('.back-top').fadeIn();
		    } else {
		        $('.back-top').fadeOut();
		    }
		});
		$(".back-top").click(function() {
		    $("html, body").animate({scrollTop: 0}, 1000);
		 });

		// slide show
		var slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		// Thumbnail image controls
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("demo");
		  var captionText = document.getElementById("caption");
		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";
		  }
		  for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].className += " active";
		  captionText.innerHTML = dots[slideIndex-1].alt;
		}

		
		function autoSlide() {
			setTimeout(function(){
				$(".mySlides").hide();
				$(".demo").removeClass("active");
				$(".mySlides").eq(0).show();
				$(".demo").eq(0).addClass("active");
			},2000);
			setTimeout(function(){
				$(".mySlides").hide();
				$(".demo").removeClass("active");
				$(".mySlides").eq(1).show();
				$(".demo").eq(1).addClass("active");
			},4000);
			setTimeout(function(){
				$(".mySlides").hide();
				$(".demo").removeClass("active");
				$(".mySlides").eq(2).show();
				$(".demo").eq(2).addClass("active");
			},6000);
			setTimeout(function(){
				$(".mySlides").hide();
				$(".demo").removeClass("active");
				$(".mySlides").eq(3).show();
				$(".demo").eq(3).addClass("active");
			},8000);
			setTimeout(function(){
				$(".mySlides").hide();
				$(".demo").removeClass("active");
				$(".mySlides").eq(4).show();
				$(".demo").eq(4).addClass("active");
			},10000);
			setTimeout(function(){
				$(".mySlides").hide();
				$(".demo").removeClass("active");
				$(".mySlides").eq(5).show();
				$(".demo").eq(5).addClass("active");
			},12000);
		}
		autoSlide();
		setInterval(() => {
			autoSlide();
		},12000);

// Iplement
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();