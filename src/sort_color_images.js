function sort_color_images() {
    $(function() {
        // get the list of files and their average color
        $.ajax({
            dataType: "json",
            url: "images/hsv_images.json",
            method: "POST",
            success: function (data) {
                // console.log(data);
                // calculate position with the average color
                for (var key in data) {
                    // modify the image position
                    // if there is a space in the file name, it will not work
                    if (key.indexOf(" ") >= 0) {
                        console.error("File name contains a space:", key);
                        continue;
                    } else {
                        var img = $("#images img[src='images/" + key + "']");

                        h = parseFloat(data[key]["hue"])
                        //s = parseFloat(data[key]["saturation"])
                        v = parseFloat(data[key]["value"]) * 4

                        img.css({
                            "left": v * Math.cos(h * Math.PI * 2) + window.innerWidth / 2,
                            "top": v * Math.sin(h * Math.PI * 2) + window.innerHeight / 2,
                        });
                    };
                }
            },
            error: function (err) {
                console.error("Error fetching colors:", err);
            }
        });
    });
};