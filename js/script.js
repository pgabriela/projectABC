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
	$("#btn-login").click(function() {
		$(".signin").slideToggle();
	});
});
$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".btn-dropdown");

    if (container.has(e.target).length === 0) {
        $('.courseCode-list').slideUp();
    }
    if (e.target.id != 'signin' && !$('#btn-login').find(e.target).length) {
        $("#signin").slideUp();
    }
})
