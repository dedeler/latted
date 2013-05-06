$(function() {
    $( ".tabs > li > a" ).click(function(e){
        var target = $(this).data("tab");
        $("#user-tabs > div:visible").fadeOut({
            duration: 500,
            complete: function(){
                $("#user-tabs ." + target).fadeIn("slow");
            }
        });

    });
});