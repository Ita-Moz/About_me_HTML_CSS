$(document).ready(function () {
    function toggle_visibility(el){
        var menu = document.getElementsByClassName("container");
        for (i = 0; i < menu.length; i++) {
            menu[i].style.display = "none";
        }
        document.getElementById(el).style.display = "block";
    }
    $(".menu-link").on("click", function () {
        var atribute = $(this).attr("title");
        toggle_visibility(atribute);
    });
});
