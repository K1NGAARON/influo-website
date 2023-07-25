$(document).ready(function() {
    $(".expand").hover(
        function() {
            $(this).addClass('active');
            $(this).find(".item-content").addClass("active");
        },
        function() {
            $(this).removeClass('active');
            $(this).find(".item-content").removeClass("active");
        }
    );
});