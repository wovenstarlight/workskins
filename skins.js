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
		$("link[class='custom']").prop('disabled', true);
		$(this).html("Enable work skin");
	}
	else {
		$("link[class='custom']").prop('disabled', false);
		$(this).html("Disable work skin");
	}
	$(this).toggleClass("active inactive");
});