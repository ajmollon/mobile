$(document).ready(function(){
	$(".scroll").on("click", function(){

		var sectionHeight= $("#first-episode").offset().top;

		var totalHeight = sectionHeight - 100;

		// console.log(sectionHeight);

	$("body,html").animate({
		scrollTop: totalHeight
	},1000);

	return false;

	});

});