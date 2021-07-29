var body = $("body");
var workskin = $("#workskin");
var selected = "#" + body.attr("class");
// highlight selected theme on first load
$(selected).addClass("selected");



// toggle site skin
$("#skintoggle a.site").click( function() { // when clicking a site skin button
	
	$("#skintoggle a.site").removeClass("selected"); // un-highlight all
	$(this).addClass("selected"); // highlight selected skin button
	
	body.attr("class", $(this).attr("id")); // set body skin
	
});



// toggle work skin
$("#skintoggle .work").click( function() {

	if ($(this).hasClass("active")) { // clicking Disable Work Skin
		workskin.removeAttr("id");
		$(this).html("Enable work skin");
	}

	else { // clicking Enable Work Skin
		workskin.attr("id", "workskin");
		$(this).html("Disable work skin");
	}

	$(this).toggleClass("active"); // flip what action the button uses
	
});