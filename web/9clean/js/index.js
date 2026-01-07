// JavaScript Document
// create the back to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//單一選單 .qaz (item)
//one 屬性服務說明description
//two 屬性清潔日期date
//three 屬性清潔時間time
//four  屬性表單填寫 form


//多數選單 洗衣機/冷氣機
//zero 屬性類型 type
//one 屬性服務說明description
//two 屬性清潔日期date
//three 屬性清潔時間time
//four  屬性表單填寫 form

// 清單列表(展開藏起的):
//1. 居家清潔  item-clean / description-clean  / date-claen / time-clean

// *要點選的 open /類別/ 項目 ex opencleandate


//Clean
$(document).ready(function(){ 
  $(".item-clean").click(function(){
    $(".description-clean ,  .description-ar, .type-wm, .type-ac, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form").hide();
    $(".description-clean").show();
  });
  
  $(".opencleandate").click(function(){  // *要點選的
    $(".date-clean").show();
  });
  $(".opencleantime").click(function(){  // *要點選的
    $(".time-clean").show();
  });
  $(".openform").click(function(){   // *要點選的
    $(".form").show(); 
  });
    $(".notetoform").click(function(){   // *要點選的
	$(".calendar , .data-markcolor , .time-clean").hide();
    $(".form").show(); 
  });
  $(".openthedate").click(function(){
	    $(".form").hide();
	   $(".calendar , .data-markcolor").show();  });
	 
});

//裝修後清潔
$(document).ready(function(){ 
  $(".item-ar").click(function(){
    $(".description-clean , .type-wm, .type-ac,   .description-dm,  .description-sc , .description-wp , .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form").hide();
    $(".description-ar").show();
  });
  
});


//除塵
$(document).ready(function(){ 
  $(".item-dm").click(function(){
    $(".description-clean ,.description-ar , .type-wm, .type-ac, .description-sc , .description-wp , .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form").hide();
    $(".description-dm").show();
  });
  
});

//石材
$(document).ready(function(){ 
  $(".item-sc").click(function(){
    $(".description-clean ,.description-ar , .type-wm, .type-ac, .description-dm , .description-wp , .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form").hide();
    $(".description-sc").show();
  });
  
});

//水管
$(document).ready(function(){ 
  $(".item-wp").click(function(){
    $(".description-clean ,.description-ar , .type-wm, .type-ac,.description-dm , .description-sc, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form").hide();
    $(".description-wp").show();
  });
  
});


//窗簾
$(document).ready(function(){ 
  $(".item-dmc").click(function(){
    $(".description-clean ,.description-ar , .type-wm, .type-ac, .description-dm , .description-sc, .description-wp, .description-hc , .description-oc , .date-clean , .time-clean , .form").hide();
    $(".description-dmc").show();
  });
  
});


//抽油煙機
$(document).ready(function(){ 
  $(".item-hc").click(function(){
    $(".description-clean ,.description-ar , .type-wm, .type-ac, .description-dm , .description-sc, 	.description-wp, .description-dmc , .description-oc, .date-clean , .time-clean , .form").hide();
    $(".description-hc").show();
  });
  
});

//其他
$(document).ready(function(){ 
  $(".item-oc").click(function(){
    $(".description-clean ,.description-ar , .type-wm, .type-ac, .description-dm , .description-sc, 	.description-wp, .description-dmc , .description-hc, .date-clean , .time-clean , .form").hide();
    $(".description-oc").show();
  });
  
  
});


// 洗衣機
$(document).ready(function(){ 
  $(".item-wm").click(function(){
    $(".description-clean ,  .description-ar, .type-ac, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form ,.uprightwmtype , .rollerwmtype , .otherwmtype").hide();
    $(".type-wm").show();
  });
  
  $(".openUWT").click(function(){  // *要點選的
   $(".description-clean ,  .description-ar, .type-ac, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .rollerwmtype , .otherwmtype").hide();
    $(".uprightwmtype").show();
  });
  $(".openRWT").click(function(){  // *要點選的
     $(".description-clean ,  .description-ar, .description-ac, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .otherwmtype , .uprightwmtype").hide();
    $(".rollerwmtype").show();
  });
  $(".openOWT").click(function(){   // *要點選的
     $(".description-clean ,  .description-ar, .type-ac, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .rollerwmtype , .uprightwmtype").hide();
    $(".otherwmtype").show(); 
  });
   
	 
});

//冷氣air-conditioner
$(document).ready(function(){ 
  $(".item-ac").click(function(){
    $(".description-clean ,  .description-ar, .type-wm ,.description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .uprightwmtype , .rollerwmtype , .otherwmtype ,.singlesplittype , .windowtype , .hiddentype , .watercooledtype , .ceilingcassettetype , .otherairtype").hide();
    $(".type-ac").show();
  });
  
  $(".openSSA").click(function(){  // *要點選的
   $(".description-clean ,  .description-ar, .type-wm, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .rollerwmtype , .otherwmtype , .windowtype , .hiddentype , .watercooledtype , .ceilingcassettetype , .otherairtype").hide();
    $(".singlesplittype").show();
  });
  $(".openWA").click(function(){  // *要點選的
     $(".description-clean ,  .description-ar, .type-wm, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .otherwmtype , .uprightwmtype ,.singlesplittype , .hiddentype , .watercooledtype , .ceilingcassettetype , .otherairtype").hide();
    $(".windowtype").show();
  });
  $(".openHA").click(function(){   // *要點選的
     $(".description-clean ,  .description-ar, .type-wm, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .rollerwmtype , .uprightwmtype, .singlesplittype , .windowtype , .watercooledtype, .ceilingcassettetype, .otherairtype").hide();
    $(".hiddentype").show(); 
  });
  
    $(".openWCA").click(function(){   // *要點選的
     $(".description-clean ,  .description-ar, .type-wm, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .rollerwmtype , .uprightwmtype , .singlesplittype , .windowtype , .hiddentype , .ceilingcassettetype , .otherairtype").hide();
    $(".watercooledtype").show(); 
  });
  
    $(".openCCA").click(function(){   // *要點選的
     $(".description-clean ,  .description-ar, .type-wm, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .rollerwmtype , .uprightwmtype .singlesplittype , .windowtype , .hiddentype , .watercooledtype , .otherairtype").hide();
    $(".ceilingcassettetype").show(); 
  });
  
    $(".openQA").click(function(){   // *要點選的
     $(".description-clean ,  .description-ar, .type-wm, .description-sc ,  .description-dm, .description-wp, .description-dmc , .description-hc , .description-oc , .date-clean , .time-clean , .form , .rollerwmtype , .uprightwmtype .singlesplittype , .windowtype , .hiddentype , .watercooledtype , .ceilingcassettetype").hide();
    $(".otherairtype").show(); 
  });
   
	 
});


//除螨清潔







//

  $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
      $('.menu').addClass("vhide");
  });
