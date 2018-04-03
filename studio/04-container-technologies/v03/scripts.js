$(function(){

 $("h2").on("click",function(){

  $("img").hide();
  $("."+$(this).attr("class")).show();


 });

});