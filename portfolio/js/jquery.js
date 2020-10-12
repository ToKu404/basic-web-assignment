$(window).on("scroll", function () {
	let scroll = $(this).scrollTop();
	if (scroll < 100) {
		$(".card").css({
			opacity: "0",
			transform: "translateY(-50px)",
		});
	} else {
		if (scroll >= $("#service").offset().top - 300) {
			$(".card").each(function (index) {
				setTimeout(() => {
					$(".card").eq(index).css({
						opacity: "1",
						transform: "translateY(0) ",
					});

				}, 300 * index);
			});
		}
	}
});