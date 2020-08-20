$("#gnb").on("mouseenter",function(){
    $("#header").addClass("hover");
});
$("#gnb").on("mouseleave",function(){
    $("#header").removeClass("hover");
});
$("#header .language").on("click",function(){
    $(this).toggleClass("click");
    $("#header .language ul").fadeToggle(300);
});

$("#header .language ul li").on("mouseenter",function(){
    $(this).addClass("selected");
});
$("#header .language ul li").on("mouseleave",function(){
    $(this).removeClass("selected");
});