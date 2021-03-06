$(document).ready(function() {

	// Index for keeping track of total questions
	var index = 0;
	var correct = 0;
	var incorrect = 0;

	// Variable Array for holding answered questions

	var currentQuestion = [];
	var currentCorrectAnswer = [];

	// Question Arrays to be Displayed


	var questions = [{

			question: "Random Question 1",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "A"
		},{
			question: "Random Question 2",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "A"
		},{
			question: "Random Question 3",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "A"
		},{
			question: "Random Question 4",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "A"
		},{
			question: "Random Question 5",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "A"

	}];

	// Countdown Timer

	var countdownTimer = {
		time: 30,

		reset: function () {
			this.time = 30;
			$(".timer").html(this.time + " seconds remaining");
		},

		start: function() {
			counter = setInterval(countdownTimer.count, 1000);
		},

		stop: function() {
			clearInterval(counter);
		},

		count: function(){
			countdownTimer.time--;
			if (countdownTimer.time >= 0) {
				$(".timer").html(countdownTimer.time + " seconds remaining");
			}
			else {
				alert("Times up!")
				countdownTimer.reset();
			}

		}
	}

	// Next Question

	var nextQuestion = function(){
		countdownTimer.reset();
		var nextQ = questions[Math.floor(Math.random()* questions.length)];
		$(".question").text(nextQ.question);
		$("#buttonA").text(nextQ.choices[0]).show();
		$("#buttonB").text(nextQ.choices[1]).show();
		$("#buttonC").text(nextQ.choices[2]).show();
		$("#buttonD").text(nextQ.choices[3]).show();
		questions.pop(currentQuestion);
		console.log(questions);


	};
	
	// Loads First Question Function, pushes into a specific array, and removes from parent array.
	function loadQuestion(index) {
		$("#startButton").on("click", function(){
			var randQ = questions[Math.floor(Math.random()* questions.length)];
			$(".question").text(randQ.question);
			$("#buttonA").text(randQ.choices[0]).show();
			$("#buttonB").text(randQ.choices[1]).show();
			$("#buttonC").text(randQ.choices[2]).show();
			$("#buttonD").text(randQ.choices[3]).show();
			countdownTimer.start();
			currentQuestion.push(randQ.question);
			currentCorrectAnswer.push(randQ.correctAnswer);
			questions.pop(currentQuestion);
			console.log(questions);
	});
};


	// Setup function
	function setup(){
		index = 0;
		$(".question").html("<button id='startButton'>Start</button>");
		$("#buttonA").hide();
		$("#buttonB").hide();
		$("#buttonC").hide();
		$("#buttonD").hide();
		function start(){
			$("#startButton").on("click", function(){
				$(this).hide();
			})
		};
		loadQuestion();

	};

	// Correct Function 

	function answerCorrect(){
		correct++;
		alert("Correct!");
		nextQuestion();
	}
	// Incorrect Function
	function answerIncorrect(){
		incorrect++;
		alert("Incorrect!");
		nextQuestion();
	}

	// Click Function
		$(".answerChoice").on("click", function(){
			if(this.id === "buttonA"){
				var answerChosen = "A";
				console.log(answerChosen);
			} else if(this.id === "buttonB"){
					answerChosen = "B";
					console.log(answerChosen);
			} else if(this.id === "buttonC"){
					answerChosen = "C";
					console.log(answerChosen);
			} else if(this.id === "buttonD"){
					answerChosen = "D";
					console.log(answerChosen);
			}
				function checkAnswer(){
					if ((answerChosen === currentCorrectAnswer[0])){
						answerCorrect();
					}else{
						answerIncorrect();
					}
				}


				// if ((answerChosen === "A") && answerChosen === randQ.correctAnswer){
				// 	alert("Correct!");
				// } else if (answerChosen === "A"){
				// 	alert("Wrong!")
				// }
				// if ((answerChosen === "B") && answerChosen === randQ.correctAnswer){
				// 	alert("Correct!");
				// } else if (answerChosen === "B"){
				// 	alert("Wrong!");
				// }
				// if ((answerChosen === "C") && answerChosen === randQ.correctAnswer){
				// 	alert("Correct!");
				// } else if (answerChosen === "C"){
				// 	alert("Wrong!")
				// }
				// if ((answerChosen === "D") && answerChosen === randQ.correctAnswer){
				// 	alert("Correct!");
				// } else if(answerChosen === "D"){
				// 	alert("Wrong!");
				// }
checkAnswer();

	});



setup();




});


















