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

/**
* Getting test data
**/
function get_test_data($test_id){
	if( !$test_id ) return;
	global $db;
	$query = "SELECT q.question_text, q.parent_test, a.id, a.answer_text, a.parent_question
		FROM questions q
		LEFT JOIN answers a
			ON q.id = a.parent_question
				WHERE q.parent_test = $test_id";
	$res = mysqli_query($db, $query);
	$data = null;
	while($row = mysqli_fetch_assoc($res)){
		if( !$row['parent_question'] ) return false;
		$data[$row['parent_question']][0] = $row['question_text'];
		$data[$row['parent_question']][$row['id']] = $row['answer_text'];
	}
	return $data;
}