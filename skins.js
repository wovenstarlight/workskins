var body = $("body");
var def = $("#default"),
	reversi = $("#reversi"),
	lowcon = $("low-contrast");

// on first load
document.getElementById(body.attr("class")).setAttribute("class", "selected");

// toggle skin
$("#skintoggle a").click( function() {
	$("#skintoggle a").removeClass("selected");
	$(this).addClass("selected");
	body.attr("class", $(this).attr("id"));
});