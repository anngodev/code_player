function updateOutput() {
	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

	// excute js within the iframe
	document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());

}

$(".toggleButton").hover(
	function() {
	$(this).addClass("highlightedButton");
},	function() {
	$(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function() {
	$(this).toggleClass("active");

	$(this).removeClass("highlightedButton");

	var panelId = $(this).attr("id") + "Panel";

	// toggles the button clicked to hide or display
	$("#" + panelId).toggleClass("hidden");

	var numberOfActivePanels = 4 - $(".hidden").length;

	$(".panel").width(($(window).width() / numberOfActivePanels) - 10);

	});


$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

// update output when html code is entered
updateOutput();

// creates an inline html page full html file in iframe content 
$("textarea").on("change keyup paste", function() {
	updateOutput();
	});