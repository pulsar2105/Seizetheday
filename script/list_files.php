<?php
// we return the list of files in the images directory
if ($_SERVER["REQUEST_METHOD"] === "POST" or true) {
    $directory = "../images"; // path to search
    $files = array();

    if (is_dir($directory)) {
        if ($dirHandle = opendir($directory)) {
            while (($file = readdir($dirHandle)) !== false) {
                if ($file != "." && $file != "..") {
                    $files[] = $file;
                }
            }
            closedir($dirHandle);
        }
    }

    header("Content-Type: application/json");
    echo json_encode($files);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
