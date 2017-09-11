$(document).ready(function(){
    $('[data-toggle="popover"]').popover({trigger: "hover"});   
	$(".btn-dropdown").mouseup(function() {
		$(".courseCode-list").slideToggle();
    	$(".nama-matkul").focus();
	});
	$(".btn-detail").click(function() {
		$(".category-wrapper").slideToggle('slow');
	});
	$(".course-code").click(function() {
		$(".nama-matkul").val($(this).text());
	});
});
$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".btn-dropdown");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.courseCode-list').slideUp();
    }
})
