// app.js
var imgs = $("header > img");
var max = imgs.length -1;
var sno = 0;
$("header").on("click",function(){
	$
	var isani=$(imgs[sno]).is(":animated");
	if(isani == true )return;
	$( imgs[sno] ).animate({"left":"1000px"},1000,function(){ $(this).css({"left":"-1000px"}); });
	sno++;
	if(sno>max){sno = 0;}
	$( imgs[sno] ).animate({"left":"0"},1000);
});

var timer = setInterval(function(){
	$("header").click();
},2000);

