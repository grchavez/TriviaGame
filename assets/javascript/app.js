$(document).ready(function() {
	// Setup function
	function setup(){
		$(".question").html("<button id='startButton'>Start</button>");
		$("#buttonA").hide();
		$("#buttonB").hide();
		$("#buttonC").hide();
		$("#buttonD").hide();
	};
	// Display Fields

	var questions = [{

			question: "Random Question 1",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "The Right Answer"
		},{
			question: "Random Question 2",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "The Right Answer"
		},{
			question: "Random Question 3",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "The Right Answer"
		},{
			question: "Random Question 4",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "The Right Answer"
		},{
			question: "Random Question 5",
			choices:  ["The Right Answer", "The Wrong Answer", "The Super Wrong Answer", "Don't Even Click This"],
			correctAnswer: "The Right Answer"

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
			console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$(".timer").html(countdownTimer.time + " seconds remaining");
			}
			else {
				alert("Times up!")
				countdownTimer.reset();
			}

		}
	}



	// Start Function
	function start() {
		$("#startButton").on("click", function(){
			$(this).hide();
			var randQ = questions[Math.floor(Math.random()* questions.length)];
			$(".question").text(randQ.question);
			$("#buttonA").text(randQ.choices[0]).show();
			$("#buttonB").text(randQ.choices[1]).show();
			$("#buttonC").text(randQ.choices[2]).show();
			$("#buttonD").text(randQ.choices[3]).show();
			countdownTimer.start();

			


	});
};

setup();

start();

});



















