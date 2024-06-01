function move_blocks() {
    $(document).ready(function () {
        var clickMousePos = {
            x: -1,
            y: -1
        };
        var currentMousePos = {
            x: -1,
            y: -1
        };
        var infoElement = {
            id: 0,
            top: -1,
            left: -1,
            zindex: 0
        };
        var infoMouse = {
            click: false
        };

        // verify if we click down and store some data
        $(".block").on("mousedown", function(event) {
            infoMouse.click = true;

            clickMousePos.x = event.pageX;
            clickMousePos.y = event.pageY;

            infoElement.id = event.target;
            infoElement.top = $(this).css("top");
            infoElement.top = parseInt(infoElement.top.substring(0, infoElement.top.length - 2), 10);

            infoElement.left = $(this).css("left");
            infoElement.left = parseInt(infoElement.left.substring(0, infoElement.left.length - 2), 10);

            $(this).css({
                "z-index": parseInt($(this).css("z-index"), 10) + 1
            });
        });

        $(document).on("mouseup", function(event) {
            infoMouse.click = false;
        });

        $(document).on("mousemove", function(event) {
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;

            if (infoMouse.click == true) {
                //console.log(infoElement.top + (currentMousePos.y - clickMousePos.y));
                $(infoElement.id).css({
                    "top": (infoElement.top + (currentMousePos.y - clickMousePos.y)).toString() + "px",
                    "left": (infoElement.left + (currentMousePos.x - clickMousePos.x)).toString() + "px"
                });
            };
        });

        // avoid drag and drop
        $(".block").on("dragstart", function(event) { event.preventDefault(); });
    });
}