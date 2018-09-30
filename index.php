<?php 

ini_set("display_errors", 1);
error_reporting(-1);
require_once 'php/config.php';
require_once 'php/functions.php';

//List of tests
$tests = get_tests();

//print_arr($tests);

//Test data
//if( isset($_GET['test']) ){
	$test_id = 1; //(int)$_GET['test']; //test id
	$test_data = get_test_data($test_id); //test data
	if( is_array($test_data) ){
		$count_questions = count($test_data); //count of questions
	}
//}

?>

<html>
  <head>
    <meta charset="utf-8">
    <title>QuizTestApp</title>
    <meta name="description" content="description">
    <meta name="author" content="Vasiliy">
    <link rel="stylesheet" href="css/template.css">
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <section class="main">
      <div class="container">
        <div class="main__content">
          <h3 class="main__title">Степень защищенности пользователя от социнженерных атак</h3>
          <div class="main__grid">
		  <?php if( $tests ): ?>
            <div class="main__cell">
              <div href="" class="main__button" data-modal="test1"><?=$tests[0]['test_name']?></div>
            </div>
            <div class="main__cell">
              <div href="" class="main__button" data-modal="test2"><?=$tests[1]['test_name']?></div>
            </div>
            <div class="main__cell">
              <div href="" class="main__button" data-modal="test3"><?=$tests[2]['test_name']?></div>
            </div>
          </div>
		  <?php else: // $tests ?>
			<h3>Нет тестов</h3>
		  <?php endif; // $tests ?>
          <div id="test1" class="modal">
            <div class="modal__inner">
              <div class="modal__close"></div>
              <div class="test">
                <div class="test__tab">
                  <div class="test__question">
                    <!-- <p class="test__description">Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Власти текстами маленькая выйти силуэт жаренные свое что рот путь, не, парадигматическая взгляд родного? Моей правилами которой однажды переулка диких.</p> -->					
					<div class="test_description">	
							<?php if( isset($test_data) ): ?>

								<?php if( is_array($test_data) ): ?>

									<p>Count of questions: <?=$count_questions?></p>
									<br>

									<div class="test-data">
										
									<?php foreach($test_data as $id_question => $item): // Gett question + answers ?>
										
										<div class="question" data-id="<?=$id_question?>" id="question-<?=$id_question?>">
											
											<?php foreach($item as $id_answer => $answer): // Array questions/answers?>
												
												<?php if( !$id_answer ): // Print question ?>
													<p class="q"><?=$answer?></p>
												<?php else: // Print answers ?>

									<p class="a">
										<input type="radio" id="answer-<?=$id_answer?>" name="question-<?=$id_question?>" value="<?=$id_answer?>">
										<label for="answer-<?=$id_answer?>"><?=$answer?></label>
									</p>

												<?php endif; // $id_answer ?>

											<?php endforeach; // $item ?>
												<br>
										</div> <!-- .question -->

									<?php endforeach; // $test_data ?>

									</div> <!-- .test-data -->

								<?php else: // is_array($test_data) ?>
									Test in development
								<?php endif; // is_array($test_data) ?>

							<?php endif; // isset($test_data) ?>
					</div>					
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="info" class="modal">
            <div class="modal__inner">
              <div class="modal__close"></div>
              <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Выйти точках деревни семантика заголовок заглавных переписывается рыбными вскоре, текстами что, образ залетают необходимыми дороге. Решила переписывается все, буквенных наш!</p>
              <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Выйти точках деревни семантика заголовок заглавных переписывается рыбными вскоре, текстами что, образ залетают необходимыми дороге. Решила переписывается все, буквенных наш!</p>
            </div>
          </div>
          <div class="main__info" data-modal="info">Инфо</div>
        </div>
      </div>
    </section>
  </body>
</html>