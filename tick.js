$( document ).ready(function(){	
	$('input').change(calc);
	$('input').focusout(calc);
	$('input').focus(calc);
	$('input').keydown(calc);
	$('input').keyup(calc);
	calc();
	
	$('input').change(error);
	$('input').focusout(error);
	$('input').focus(error);
	$('input').keydown(error);
	$('input').keyup(error);
	error();
});

function error() {
	
	if($('#year').val() == '' || $('#year').val() < 0 || isNaN ($('#year').val())){
        $('#year').parent().addClass("has-error");
    }else{
        $('#year').parent().removeClass("has-error");
    }
	
	if($('#day').val() == '' || $('#day').val() < 0 || isNaN ($('#day').val())){
        $('#day').parent().addClass("has-error");
    }else{
        $('#day').parent().removeClass("has-error");
    }
	
	if($('#hour').val() == '' || $('#hour').val() < 0 || isNaN ($('#hour').val())){
        $('#hour').parent().addClass("has-error");
    }else{
        $('#hour').parent().removeClass("has-error");
    }
	
	if($('#minute').val() == '' || $('#minute').val() < 0 || isNaN ($('#minute').val())){
        $('#minute').parent().addClass("has-error");
	}else{
        $('#minute').parent().removeClass("has-error");
    }
	
	if($('#second').val() == '' || $('#second').val() < 0 || isNaN ($('#second').val())){
        $('#second').parent().addClass("has-error");
    }else{
        $('#second').parent().removeClass("has-error");
    }
	
	if($('#tick').val() < 0){
        $('#tick').parent().addClass("has-error");
    }else{
        $('#tick').parent().removeClass("has-error");
    }
	
	
	
	
	
	if($('#year2').val() < 0){
        $('#year2').parent().addClass("has-error");
    }else{
        $('#year2').parent().removeClass("has-error");
    }
	
	if($('#day2').val() < 0){
        $('#day2').parent().addClass("has-error");
    }else{
        $('#day2').parent().removeClass("has-error");
    }
	
	if($('#hour2').val() < 0){
        $('#hour2').parent().addClass("has-error");
    }else{
        $('#hour2').parent().removeClass("has-error");
    }
	
	if($('#minute2').val() < 0){
        $('#minute2').parent().addClass("has-error");
    }else{
        $('#minute2').parent().removeClass("has-error");
    }
	
	if($('#second2').val() < 0){
        $('#second2').parent().addClass("has-error");
    }else{
        $('#second2').parent().removeClass("has-error");
    }
	
	if($('#tick3').val() < 0){
        $('#tick3').parent().addClass("has-error");
    }else{
        $('#tick3').parent().removeClass("has-error");
    }	
	
	if($('#tick2').val() == '' || $('#tick2').val() < 0 || isNaN ($('#tick2').val())){
        $('#tick2').parent().addClass("has-error");
    }else{
        $('#tick2').parent().removeClass("has-error");
    }
}


function calc() {
	var Years = $('#year').val();
	var Days = $('#day').val();
	var Hours = $('#hour').val();
	var Minutes = $('#minute').val();
	var Seconds = $('#second').val();
	
	var total = Years * 630720000 + Days * 1728000 + Hours * 72000 + Minutes * 1200 + Seconds * 20 + 19
	
		
	$('#tick').val(total);
	
	
	
	
	
	var Ticks2 = $('#tick2').val();
	
	var totalyear = Math.trunc(Ticks2 / 630720000)
	var Ticks2 = Ticks2 % 630720000
	
	var totalday = Math.trunc(Ticks2 / 1728000)
	var Ticks2 = Ticks2 % 1728000
	
	var totalhour = Math.trunc(Ticks2 / 72000)
	var Ticks2 = Ticks2 % 72000
	
	var totalminute = Math.trunc(Ticks2 / 1200)
	var Ticks2 = Ticks2 % 1200
	
	var totalsecond = Math.trunc(Ticks2 / 20)
	var Ticks2 = Ticks2 % 20
	
	$('#year2').val(totalyear);
	$('#day2').val(totalday);	
	$('#hour2').val(totalhour);	
	$('#minute2').val(totalminute);	
	$('#second2').val(totalsecond);
	$('#tick3').val(Ticks2);
	
}