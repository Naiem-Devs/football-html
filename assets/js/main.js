(function($) {
  "use strict";
  


  // owlCarousel
  $(".group__slider").owlCarousel({
    loop: true,
    rtl: true,
    margin: 20,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false
  });

  // owlCarousel
  $(".card__slider").owlCarousel({
    loop: true,
    rtl: true,
    margin: 20,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false
  });


		// ------------ Counter BEGIN ------------ 
		$(".counter__increment, .counter__decrement").click(function(e)
		{
            e.preventDefault()
			var $this = $(this);
			var $counter__input = $(this).parent().find(".counter__input");
			var $currentVal = parseInt($(this).parent().find(".counter__input").val());

			//Increment
			if ($currentVal != NaN && $this.hasClass('counter__increment'))
			{
				$counter__input.val($currentVal + 1);
			}
			//Decrement
			else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
			{
				if ($currentVal >= 1) {
					$counter__input.val($currentVal - 1);
				}
			}
		});
		// ------------ Counter END ------------ 

 
})(jQuery);
