function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$(function() {
    $.ajax({
        dataType: "json",
        url: "images/hsv_images.json",
        method: 'POST',
        success: function(data) {
            for (var key in data) {
                if (key.indexOf(" ") >= 0) {
                    console.error("File name contains a space:", key);
                    continue;
                } else {
                    $("#images" ).append("<img class='block' id='" + getRandomInt(1000000) + "' src='images/" + key + "'/>");
                };
            }

            update();
        },
        error: function(err) {
            console.error('Error fetching files:', err);
        }
    });
});

function update() {
    sort_color_images();
    move_blocks();
    move_page();
    z_index_set();
}