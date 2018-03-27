$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = {
		questions: ['What year did America get its Independence from Great Britian?',
								'Who was the First President of the United States?',
								'How many states are there in the United States of America?'
								'Which American state was the first to enter the union , on the 7th of Dec 1787?',
								'If the President and Vice President of USA die at the same time who becomes the President?',
								'"Albany" is the Capital of which State?',
								'Who had the longest tenure as President of United States?',
								'Which city is known as the "Big Apple"?,
								'Which State of the United States was once part of Mexico?'
								'Who is the Third President of the United States?'],
		q1: ['A. 1676',
				 'B. 1876',
				 'C. 1776',
				 'D. 1976'],
		q2: ['A. Abrahman Lincoln',
				 'B. George Washington',
				 'C. John Adams',
				 'D. Thomas Jefferson'],
		q3: ['A. 52',
				 'B. 50',
				 'C. 51',
				 'D. 48'],
		q4: ['A. Delaware',
				 'B. Pennsylvania',
				 'C. New York',
				 'D. Massachussets'],
		q5: ['A. Attorney General',
				 'B. Speaker of the House of Representative',
				 'C. Sercetary of State',
				 'D. Defence Secertary'],
		q6: [['A. New York',
				 'B. Maryland',
				 'C. Texas',
				 'D. California'],
		q7: ['A. John F. Kennedy',
				 'B. George Washington',
				 'C. Franklin D. Roosevelt',
				 'D. James Carter'],
		q8: ['A. Los Angeles',
				 'B. New York',
				 'C. Houston',
				 'D. None of the above'],
		q9: ['A. Maryland',
				 'B. New York',
				 'C. New Mexico',
				 'D. Texas'],
		q10: ['A. John Adams',
				  'B. Thomas Jefferson',
				  'C. George Washington',
				  'D. Abraham Lincoln'],	 						
	}
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What year did America get its Independence from Great Britian?' ,
	possibleAnswers : ['A. 1676',
				 'B. 1876',
				 'C. 1776',
				 'D. 1976'],
	flags : [false, false, true, false],
	answer : 'C. 1776'
};

var q2 = {
	question: 'Who was the First President of the United States?',
	possibleAnswers: ['A. Abrahman Lincoln',
				 'B. George Washington',
				 'C. John Adams',
				 'D. Thomas Jefferson'],
	flags : [false, true, false, false],
	answer : 'B. George Washington'
};

var q3 = {
	question : 'How many states are there in the United States of America?',
	possibleAnswers : ['A. 52',
				 'B. 50',
				 'C. 51',
				 'D. 48'],
	flags : [false, true, false, false],
	answer : 'B. 50'
};

var q4 = {
	question : 'Which American state was the first to enter the union , on the 7th of Dec 1787?',
	possibleAnswers : ['A. Delaware',
				 'B. Pennsylvania',
				 'C. New York',
				 'D. Massachussets'],
	flags : [true, false, false, false],
	answer : 'A. Delaware'
};

var q5 = {
	question : 'If the President and Vice President of USA die at the same time who becomes the President?',
	possibleAnswers : ['A. Attorney General',
				 'B. Speaker of the House of Representative',
				 'C. Sercetary of State',
				 'D. Defence Secertary'],
	flags : [false, true, false, false],
	answer : 'B. Speaker of the House of Representative'
};

var q6 = {
	question : '"Albany" is the Capital of which State?',
	possibleAnswers : ['A. New York',
				 'B. Maryland',
				 'C. Texas',
				 'D. California'],
	flags : [true, false, false, false],
	answer : 'A. New York'
};

var q7 = {
	question : 'Who had the longest tenure as President of United States?',
	possibleAnswers : ['A. John F. Kennedy',
				 'B. George Washington',
				 'C. Franklin D. Roosevelt',
				 'D. James Carter'],
	flags : [false, false, true, false],
	answer : 'C. Franklin D. Roosevelt'
};

var q8 = {
	question : 'Which city is known as the "Big Apple"?',
	possibleAnswers : ['A. Los Angeles',
				 'B. New York',
				 'C. Houston',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. New York'
};

var q9 = {
	question : 'Which State of the United States was once part of Mexico?',
	possibleAnswers : ['A. Maryland',
				 'B. New York',
				 'C. New Mexico',
				 'D. Texas'],
	flags : [false, false, false, true],
	answer : 'D. Texas'
};

var q10 = {
	question : 'Who is the Third President of the United States?',
	possibleAnswers : ['A. John Adams',
				  'B. Thomas Jefferson',
				  'C. George Washington',
				  'D. Abraham Lincoln'],
	flags : [false, true, false, false],
	answer : 'B. Thomas Jefferson'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});