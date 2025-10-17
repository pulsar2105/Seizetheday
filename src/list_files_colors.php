<?php
// we are going to pick the colors of the images and return them as a json
// open txt file
if ($_SERVER["REQUEST_METHOD"] === "POST" or true) {
    $directory = "../images"; // path to search
    $files = array();

    // list all files in the directory except ".txt" files
    if (is_dir($directory)) {
        if ($dirHandle = opendir($directory)) {
            while (($file = readdir($dirHandle)) !== false) {
                if ($file != "." && $file != ".." && !preg_match('/\.txt$/', $file)) {
                    $files[] = $file;
                }
            }
            closedir($dirHandle);
        }
    }

    // open txt titled files with "hsv_<filename>.txt"
    $colors = array();
    foreach ($files as $file) {
        $filename = "../images/hsv_" . $file . ".txt";
        if (file_exists($filename)) {
            $colors[$file] = file_get_contents($filename);
        }
    }

    header("Content-Type: application/json");
    echo json_encode($colors);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
