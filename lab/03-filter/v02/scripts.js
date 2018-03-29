$(function(){

 $("h1").on("click",function(){

  $("img").hide();
  $("."+$(this).attr("class")).show();


 });

});