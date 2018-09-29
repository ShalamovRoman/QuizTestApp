<?php

define("HOST", "localhost");
define("USER", "root");
define("PASS", "");
define("DB", "quizdatabase");

$db = @mysqli_connect(HOST, USER, PASS, DB) or die('No connection to the database');
mysqli_set_charset($db, 'utf8') or die('Connection encoding not set');
