<?php
function normalize($str){
	if(strlen($str) < 2){
		return "0".$str;
	}
	return $str;
}

$filename = "pixels.txt";

$r = normalize(dechex($_POST["red"]));
$b = normalize(dechex($_POST["blue"]));
$g = normalize(dechex($_POST["green"]));
$replace = $r.$g.$b;
$x = $_POST["x"];
$y = $_POST["y"];

echo $x." ".$y." ";


if($r == null or $g == null or $b == null or $x == null or $y == null){
	echo "huge failure"; 
	exit(12);
}
$index = ($y * 80) + $x;

$file = fopen($filename, "r") or die("massive failure");

$filestr = fread($file, filesize($filename));

fclose($file);

$arr = explode(" ", $filestr, strlen($filestr));

$arr[$index] = $replace;

echo $arr[$index]." ".$index ;

$filestr = "";
for($i = 0; $i < count($arr); $i++){
	$filestr = $filestr.$arr[$i]." ";
}

$file = fopen($filename, "w") or die("massive failure");

fwrite($file, $filestr, strlen($filestr));

fclose($file);

header("Location: /");

?>