'use strict';

homeStylingApp.filter('convertStringLineBreaksToBR', function(){
	return function (input) {
		// var output	= input.replace(/(?:\r\n|\r|\n)/g, '<br />');
		// return output;
		if (!input) {return;}
		var splittedInput = input.split('\n');
		var output = "";
		var i;
		for (i=0 ; i<splittedInput.length ; i ++){
			output += splittedInput[i] + '<br />';
		}

		return output;
	};
});