
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var secretnum;
	var count = 0	

  	var newgame = function() {
  		secretnum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  		$('#guessList').children().remove();
  		$('#feedback').html("Make Your Guess");
  		
  		count = 0
  		$('#count').html(count);
  		return secretnum;
  	};

  	newgame();
  	
	function check(){
		var guess = $('#userGuess').val();
		count++
		$('#count').html(count);
		$('#guessList').append('<li>' + guess + '</li>');
		var difference = Math.abs(guess-secretnum);
		$('#userGuess').val("");
		
		if (difference == 0) {
			$('#feedback').html("Correct!");
			
		}
		else if (difference < 10) {
			$('#feedback').html("Very Hot");
			
		}

		else if (difference < 20) {
			$('#feedback').html("Hot");
			
		}

		else if (difference < 30) {
			$('#feedback').html("Wam");
			
		}

		else if (difference < 50) {
			$('#feedback').html("Cold");
			
		}

		else if (difference >= 50) {
			$('#feedback').html("Ice Cold");
			
		}
		else {
			$('#feedback').html("Something Broke");
		};

		if (secretnum == guess){
			$('#feedback').append('<p>click new game to play again</p>');
		}
		else if (secretnum > guess){
			$('#feedback').append('<p>(guess higher)</p>');
		}
		else if (secretnum < guess){
			$('#feedback').append('<p>(guess lower)</p>');
		}
		else {
			$('#feedback').append("Something Broke");
		}
		
		
	};


	$("#guessButton").click(function(e) {
		e.preventDefault(e);
		if (($('#userGuess').val()) > 100 || ($('#userGuess').val()) < 0 || ($('#userGuess').val()) % 1 !=0 ){
			alert('Make sure you enter a whole number between 1 and 100');
			$('#userGuess').val("");
		}
		else{
		check()
		};
	});

	$(".new").click(function(e) {
		e.preventDefault(e);
		newgame();
	});

	


});


