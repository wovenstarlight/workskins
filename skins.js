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
	}
	else {
		$("link[class='custom']").prop('disabled', false);
	}
	$(this).toggleClass("active inactive");
});