'use strict';

homeStylingApp.filter('convertDotsAndCommasToBR', function(){
	return function (input) {
		
		if (! input) {return;}

		var splittedInput = input.split(/[.,:!]/);
		var output = "";
		var i;
		for (i=0 ; i<splittedInput.length ; i ++){
			output += splittedInput[i] + '.<br />';
		}
		
		// splittedInput = output.split(/[,]/);
		// output = "";
		// for (i=0 ; i<splittedInput.length ; i ++){
		// 	output += splittedInput[i] + ',<br />';
		// }

		// splittedInput = output.split(/[:]/);
		// output = "";
		// for (i=0 ; i<splittedInput.length ; i ++){
		// 	output += splittedInput[i] + ':<br />';
		// }

		return output;
	};
});