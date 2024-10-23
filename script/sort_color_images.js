function sort_color_images() {
    $(document).ready(function () {
        // get the list of files and their average color
        $.ajax({
            url: "script/list_files_colors.php",
            method: "POST",
            success: function (data) {
                //console.log(data);
                // calculate position with the average color
                for (var key in data) {
                    //console.log(key);
                    //console.log(data[key]);

                    // modify the image position
                    // if there is a space in the file name, it will not work
                    if (key.indexOf(" ") >= 0) {
                        console.error("File name contains a space:", key);
                        continue;
                    } else {
                        var img = $("#images img[src='images/" + key + "']");
                        //console.log(parseFloat(data[key].split(" ")[0]))

                        h = parseFloat(data[key].split(" ")[0])
                        //s = parseFloat(data[key].split(" ")[1])
                        v = parseFloat(data[key].split(" ")[2]) * 5

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