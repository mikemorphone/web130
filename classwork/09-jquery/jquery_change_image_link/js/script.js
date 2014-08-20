$(document).ready(function(){
	$("#btn-winter").click(changeToWinter);
	$("#btn-summer").click(changeToSummer);
});

function changeToWinter()
{
	//change headline and instructions
  $("#headline").html("Winter");
  $("#instructions").html('You should wear a hat');
	//change class of instructions
  $("body").addClass("winter").removeClass("summer");
	//change image src
  $("#seasonal-img").attr("src", "images/snowman.jpg");

}

function changeToSummer()
{
	//change headline and instructions
  $("#headline").html("Summer");
  $("#instructions").html("You should wear sunscreen mofo");
	//change class of instructions
  $("body").addClass("summer").removeClass("winter");
	//change image src
  $("#seasonal-img").attr("src", "images/summer-barby.jpg");

}













