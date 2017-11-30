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

	




	function start() {
		$("#startButton").on("click", function(){
			$(this).hide();
			var randQ = questions[Math.floor(Math.random()* questions.length)];
			$(".question").text(randQ);
			console.log(randQ);
	});
};

setup();

start();

});



















