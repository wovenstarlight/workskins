var body = $("body");
var def = $("#default"),
	reversi = $("#reversi"),
	lowcon = $("low-contrast");

$("#skintoggle a").click( function() {
	body.attr("class", $(this).attr("id"));
});