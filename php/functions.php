<?php

/**
* Print array
**/
function print_arr($arr){
	echo '<pre>'  . print_r($arr, true) . '</pre>';
}

/**
* Getting a list of tests
**/
function get_tests(){
	global $db;
	$query = "SELECT * FROM tests";
	$res = mysqli_query($db, $query);
	if(!$res) return false;
	$data = array();
	while($row = mysqli_fetch_assoc($res)){
		$data[] = $row;
	}
	return $data;
}