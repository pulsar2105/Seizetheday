function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$(document).ready(function() {
    $.ajax({
        url: "script/list_files.php",
        method: 'POST',
        success: function(data) {
            var fileList = $('#file-list');
            fileList.empty();
            data.forEach(function(file) {
                //console.log(file);
                $("#images" ).append("<img class='block' id='" + getRandomInt(1000000) + "' src='images/" + file + "'/>");
            });

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