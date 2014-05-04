$(document).ready(function(){
$("#bcbox").on('mouseenter', function(){
	$(this).find('.arrowleft').show();
	$(this).closest('#content').find('#bc-header').show();
	$('#mainheader').hide();
});
$("#bcbox").on('mouseleave', function(){
	$(this).find('.arrowleft').hide();
	$(this).closest('#content').find('#bc-header').hide();
	$('#mainheader').show();
});
$("#hrbox").on('mouseenter', function(){
	$(this).find('.arrowleft').show();
	$(this).closest('#content').find('#hr-header').show();
	$('#mainheader').hide();
});
$("#hrbox").on('mouseleave', function(){
	$(this).find('.arrowleft').hide();
	$(this).closest('#content').find('#hr-header').hide();
	$('#mainheader').show();
});
$("#cfbox").on('mouseenter', function(){
	$(this).find('.arrowright').show();
	$(this).closest('#content').find('#cf-header').show();
	$('#mainheader').hide();
});
$("#cfbox").on('mouseleave', function(){
	$(this).find('.arrowright').hide();
	$(this).closest('#content').find('#cf-header').hide();
	$('#mainheader').show();
});

$('nav a').on('mouseenter', function(){
	$(this).slideDown('slow');
});
});