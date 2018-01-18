function resize_side() {
	var mainPart = document.getElementsByClassName('main'); 
	var sidebar = document.getElementsByClassName('sidebar'); 
	var windowWidth = document.documentElement.clientWidth;
	if(windowWidth > 992) {
	sidebar[0].style.height = mainPart[0].offsetHeight + "px";
	};
};
resize_side();

document.getElementsByClassName('main').onresize=function(){alert("hi");};

$(".add").click(function() {
	$(".add_block").slideToggle(500);
});

var id;
$(".picture").click(function() {
	$(".change_image").slideToggle(500);
	$(".fade_dark").slideToggle(500);
	id = $(this).attr("data-value");
}); 

$(".fade_dark").click(function() {
	$(".change_image").slideUp(500);
	$(".new_restoran").slideUp(500);
	$(".edit_menu").slideUp(500);
	$(".fade_dark").slideToggle(500);
	$('form').trigger( 'reset' );
});

$(".fade_edit_menu").click(function() {
	 $('.edit_menu').slideToggle(500);
	 $(".fade_dark").slideToggle(500);
	 $('[name = dish_name_fade]').val($("td:eq(0)", this).attr("data-dish-name"));
	 $('[name = dish_price_fade]').val($("td:eq(1)", this).attr("data-dish-price"));
	 $('[name = dish_ratio_our_fade]').val($("td:eq(2)", this).attr("data-dish-rating_visitors"));
	 $('[name = dish_ratio_visitors_fade]').val($("td:eq(3)", this).attr("data-dish-rating_our"));
	 $('[name = dish_cal_fade]').val($("td:eq(4)", this).attr("data-dish-calories"));
	 $('[name = dish_satiety_fade]').val($("td:eq(5)", this).attr("data-dish-satiety"));
	 $('[name = dish_benefit_fade]').val($("td:eq(6)", this).attr("data-dish-benefit"));
	 $('[name = dish_type_fade]').val($("td:eq(7)", this).attr("data-dish-type"));
	 $('[name = dish_id_fade]').val($("#data-dish-id", this).attr("data-dish-id"));
});

$(".picture").click(function() {
	 $('#id_change').val(id);
});

$(".add_restoran img").click(function() {
	$(".new_restoran").slideToggle(500);
	$(".fade_dark").slideToggle(500);
}); 


/* $(".image_button").click(function() {
	var name = $('[name="restoran_name"]').val();
	var url = $('[name="restoran_url"]').val();
	var new_image = $('[name="userfile"]').val();
	 $.ajax({
	   type: "POST",
	   url: "of-admin/of-ajax.php",
	   data: ({id : id, name:name, url: url, image : new_image}),
	   success: function(msg){
	     alert( "Data Saved: " + msg );
	   }
	 });
}); */