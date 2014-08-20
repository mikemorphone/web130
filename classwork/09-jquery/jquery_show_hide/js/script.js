$(document).ready(function(){
	$("#push-me").click(doStuff);
	$("#show-btn").click(showFlowers);
	$("#hide-btn").click(hideFlowers);
});

function doStuff()
{
    //put "hello in #place-text"
  //var myH2 = $("h2").html();
  $("#place-text").html('hello');
}

function showFlowers()
{
    //show #flowers
  $('#flowers').show();
}

function hideFlowers()
{
    //hide #flowers
  $('#flowers').hide();
}






