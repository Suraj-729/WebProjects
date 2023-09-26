//console.log($("h1").css("font-size", "3rem"));
//$("h1").addClass("big-title margin");
//$("h1").text("bye");
//$("button").text("Don't Click me");
//$("button").html("<en>Hey</en>");
//$("a").attr("href","https://www.yahoo.com/");
//$("h1").click(function () { 
  //  $("h1").css("color","blue")
    
//});
/*for ( index = 0; index < 6; index++) {

    document.querySelectorAll("button")[index].addEventListener("click",function () {
        document.querySelector("h1").style.color="red";
      })
   
    
}*/
/*$("button").click(function () { 
    $("h1").css("color", "red");
    
});
$(document).keypress(function (e) { 
  $("h1").text(e.key);
});

//$("h1").on("mouseover",function () { 
  //$('h1').css("color", "purple");
//});*/

//$("button").on("click", function () { 
 // $("h1").hide();
//});

//$("button").on("click", function () { 
  //$("h1").toggle();
//});

$("button").on("click", function () { 
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
