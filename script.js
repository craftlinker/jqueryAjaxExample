
// Our jQuery code snippet does the following:
// $(document).ready(function () - This makes sure our document loads and is ready
// $("#driver").click(function (event) - Uses the id driver as a target for a click event
// $("#stage").load("info.html"); - Loads the targeted URL which is the file info.html 

$(document).ready(function(){
    $("#driver").click(function(event){
        $("#stage").load("info.html");
    });
});
