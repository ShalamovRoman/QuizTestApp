<?php 

ini_set("display_errors", 1);
error_reporting(-1);
require_once 'php/config.php';
require_once 'php/functions.php';

//List of tests
$tests = get_tests();

//print_arr($tests);

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>QuizTest</title>
</head>

<body>
	
<div class="wrap">
	
<?php if( $tests ): ?>
	<h3>Варианты тестов</h3>
	<?php foreach($tests as $test): ?>
		<p><a href="?test=<?=$test['id']?>"><?=$test['test_name']?></a></p>
	<?php endforeach; ?>

<?php else: // $tests ?>
	<h3>Нет тестов</h3>
<?php endif; // $tests ?>

</div> <!-- .wrap -->

</body>
</html>