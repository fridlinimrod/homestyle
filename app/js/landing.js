'use strict';

$(function (){
    
    var getNextPic = function(pics){
		var index = 0;
		for(var i = 0, len = pics.length; i < len; i++) {
		    if ($(pics[i]).hasClass("active")) {
		        index = i;
		        break;
		    }
		}

		if (index === pics.length-1){
			return pics[0];
		}

		return pics[index + 1];
	};

    function switchPic() {
       setTimeout(switchPic,5000);
       var pics = $(".picsContainer img");
		var activePic = $(".picsContainer img.active");
		var nextPic = getNextPic(pics); 
		activePic.fadeOut(1500, function(){
			activePic.toggleClass("active");
			$(nextPic).toggleClass("active");
			$(nextPic).fadeIn(1500);
		});
    }

	var cssFileNum = 1;
	setTimeout(switchPic(),2000);


    $('#styleChangerButton').click(function (){
    	if (cssFileNum === 6){
    		$('link[href="css/app' + cssFileNum + '.css"]').attr('href','css/app1.css');
    		cssFileNum++;	
    	}
    	/* jshint ignore:start */
    	else{
   			$('link[href="css/app' + cssFileNum + '.css"]').attr('href','css/app' + ++cssFileNum +'.css');
   		}
   		/* jshint ignore:end */
   		if (cssFileNum > 6){
   			cssFileNum=1;
   		}
   		$("#styleNum").html(cssFileNum);
	});
});



