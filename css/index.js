$(function(){
	var flag = false ;
	var reg = /^\w{6,15}$/; 
	$('input[name=user]').keyup(function(){
		var val = $(this).val();
		if(reg.test(val)){
			$(this).next("span").html("success").css({"color":"green"});
			$(this).attr("check","true");
		}else{
			$(this).next("span").html("error").css({"color":"red"});
			$(this).attr("check","false");
		}
		// var that = $(this) ; 
		// if(flag){
		// 	$.ajax({
		// 		url:"",
		// 		data:{val:val},
		// 		success:function(){

		// 		}
		// 	})
		// }
	});
	$("input[name=mess]").keyup(function(){
		var val2 = $(this).val();
		if(reg.test(val2)){
			$(this).next("span").html("success").css({"color":"green"});
			$(this).attr("check","true");
		}else{
			$(this).next("span").html("error").css({"color":"red"});
			$(this).attr("check","false");
		}
		if($($("input")[1]).html() == $($("input")[2]).html()){
			$(this).next("span").html("success").css({"color":"green"});
			$(this).attr("check","true");
		}else{
			$(this).next("span").html("error").css({"color":"red"});
			$(this).attr("check","false"); 
		}
	})

	$("form").submit(function(){
		var flag = true ; 
		if($("input").attr("check")=="false" || $("input").attr("check")=="false" ){
			flag = false ;
		}else{
			flag = true ;
		}
		if(!flag){ alert(flag); return false;}
	});
	setInterval(function(){
		var data = new Date();
		var year = data.getFullYear();
		var month = Number(data.getMonth())+1;
		var day = data.getDate();
		var hours = data.getHours();
		var min = data.getMinutes();
		var sec = data.getSeconds();
		var arr = [month,day,hours,min,sec];
		$('h1').html(year+":"+month+":"+day+":"+hours+":"+min+":"+sec);
	},1000)
});