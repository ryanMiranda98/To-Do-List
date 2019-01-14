//toggle new task input
$(".fa-plus").on("click", function(){
	$(this).toggleClass("rotate");
	$("#addTask").fadeToggle(300);
});

//add new task
$("input[type='text']").on("keypress", function(e){
	if(e.which === 13){
		var textInput = $("input[type='text']").val(); 
		$("ul").append("<li><span id='delete'><i class='fas fa-trash-alt'></i></span>" + textInput + "</li>");
		$("input[type='text']").val("");
	}
});

var ulSize = $("li").length;
if($("li").length < 1){
	console.log("length = 0");
}

//when li is clicked to complete task
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete li when trash is clicked
$("ul").on("click", "#delete", function(e){
	//stops click om parents
	e.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});