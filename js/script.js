$(document).ready(function(){
	var courseCode_list = $(".courseCode-list");
    $('[data-toggle="popover"]').popover({trigger: "hover"});   
	$(".btn-dropdown").mouseup(function() {
		$(".courseCode-list").slideDown();
    	$(".nama-matkul").focus();
	});
	$(".nama-matkul").blur(function() {
	    $(".courseCode-list").slideUp();
	});
});
