var body = $("body");
var selected = "#" + body.attr("class");
// on first load
$(selected).addClass("selected");

// toggle skin
$("#skintoggle a.site").click( function() {
	$("#skintoggle a.site").removeClass("selected");
	$(this).addClass("selected");
	body.attr("class", $(this).attr("id"));
});

$("#skintoggle .work").click( function() {
	if ($(this).hasClass("active")) {
		$("main > section").removeAttr("id");
		$(this).html("Enable work skin");
	}
	else {
		$("main > section").attr("id", "workskin");
		$(this).html("Disable work skin");
	}
	$(this).toggleClass("active inactive");
});