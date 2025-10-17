function move_blocks() {
    $(document).ready(function () {
        $(".block").draggable();

        $(".block").on("mousedown", function(event) {
            $(this).css({
                "z-index": parseInt($(this).css("z-index"), 10) + 1
            });
        });
    });
};