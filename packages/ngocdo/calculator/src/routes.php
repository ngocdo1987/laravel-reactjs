<?php

Route::get('ngocdo-calculator', function(){
	echo 'Hello from the Ngoc Do zzz calculator package!';
});

Route::get('ngocdo-add/{a}/{b}', 'Ngocdo\Calculator\CalculatorController@add');
Route::get('ngocdo-subtract/{a}/{b}', 'Ngocdo\Calculator\CalculatorController@subtract');