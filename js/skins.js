// set site skin on initial page load
if (!siteSkinIsSet()) {
	$("#default").click(); // set site skin to default
}
else { // site skin is set in sessionStorage
	var skin = "#" + sessionStorage.getItem("siteSkin");
	$(skin).click(); // set site skin to whatever the user selected
}



function siteSkinIsSet() {
	return !!sessionStorage.getItem('siteSkin');
}



// toggle site skin
$("#skintoggle a.site").click( function() { // when clicking a site skin button
	
	$("#skintoggle a.site").removeClass("selected"); // un-highlight all
	$(this).addClass("selected"); // highlight selected skin button
	
	var skin = $(this).attr("id");
	$("body").attr("class", skin); // set body skin

	sessionStorage.setItem("siteSkin", skin); // store selected skin in browser

});



// toggle work skin
$("#skintoggle .work").click( function() {

	if ($(this).hasClass("active")) { // clicking Disable Work Skin
		$("main > section").removeAttr("id");
		$(this).html("Enable work skin");
	}

	else { // clicking Enable Work Skin
		$("main > section").attr("id", "workskin");
		$(this).html("Disable work skin");
	}

	$(this).toggleClass("active"); // flip what action the button uses
});