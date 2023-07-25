$(document).ready(function() {
    $(".expand").hover(
        function() {
            $(this).find(".item-content").addClass("active");
        },
        function() {
            $(this).find(".item-content").removeClass("active");
        }
    );
});