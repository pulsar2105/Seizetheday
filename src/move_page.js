function move_page() {
    $(document).ready(function () {
        //console.log("move_page");
        $("#images").draggable();
    });

    // reset the position of the dragged zone and add a offset to the blocks inside
    $("#images").on("mouseup", function(event) {
        //console.log("mouseup");
        // get the position of the dragged zone
        var top = parseInt($(this).css("top"), 10);
        var left = parseInt($(this).css("left"), 10);

        // add the offset to the blocks
        $(".block").each(function() {
            $(this).css({
                "top": parseInt($(this).css("top"), 10) + top,
                "left": parseInt($(this).css("left"), 10) + left
            });
        });

        // reset the position of the dragged zone
        $(this).css({
            "top": 0,
            "left": 0
        });
    });
}