// script for setting z-index of blocks when clicked to avoid high z-index values
function z_index_set() {
    $(document).ready(function () {
        $(".block").on("mouseup", function(event) {
            // find the minimum z-index
            var min_z_index = 100000000000;
            $(".block").each(function() {
                var z_index = parseInt($(this).css("z-index"), 10);
                if (z_index < min_z_index) {
                    min_z_index = z_index;
                }
            });

            //.log("min_z_index: " + min_z_index);

            // set the z-index of the clicked block minus the minimum z-index
            if (min_z_index > 0) {
                $(".block").each(function() {
                    $(this).css({
                        "z-index": parseInt($(this).css("z-index"), 10) - min_z_index
                    });
                });
            }
        });
    });
};