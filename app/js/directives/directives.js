'use strict';

homeStylingApp.directive("picsCarousel", [function() {
   return {
        restrict: "A",
        scope: {
            options: "=",
            pics: "="
        },
        templateUrl : 'partials/secondary/picsCarousel.html',
        link:   function ($scope) {
                    var defaultSettings = {
                        picsToShow: 5,
                        shouldShowBigPic: false
                    };

                    $scope.settings = angular.merge({}, defaultSettings, $scope.options);

                    $scope.$watch('pics', function (newVal){
                        if (newVal){
                            $scope.init();
                        }
                    });

                    window.addEventListener("keyup", $scope.handleKeyUp);
                },
        controller: ['$scope', function ($scope) {
            $scope.shownPics = [];
            $scope.smallestIndex = 0;
            $scope.largestIndex = 0;
            $scope.init = function(){
                $scope.shownPics = []; 
                for (var i = 0; i < $scope.settings.picsToShow && i < $scope.pics.length ; i++) {
                    console.log("shownPics: ", $scope.shownPics);
                    $scope.shownPics.push($scope.pics[i]);
                }
                $scope.activePic = $scope.shownPics[0];
                $scope.largestIndex = i -1;
                $scope.smallestIndex = 0;
            };

            $scope.handleKeyUp = function(e){
                $scope.$apply(function() {
                    if (e.keyCode === 37) {
                        $scope.scrollLeft();
                    } else if (e.keyCode === 39) {
                        $scope.scrollRight();
                    }
                });
            };

            $scope.scrollRight = function(){
                if ($scope.smallestIndex === 0){
                    return;
                }
                $scope.smallestIndex--;
                $scope.largestIndex--;
                $scope.shownPics.pop();
                $scope.shownPics.unshift($scope.pics[$scope.smallestIndex]);
            };

            $scope.scrollLeft = function(){
                if ($scope.largestIndex === $scope.pics.length -1){
                    return;
                }
                $scope.smallestIndex++;
                $scope.largestIndex++;
                $scope.shownPics.shift();
                $scope.shownPics.push($scope.pics[$scope.largestIndex]);
            };

            $scope.setActivePic = function(pic){
                $scope.activePic = pic;
            };

            $scope.getPicFromLeft = function(pic){
                console.log(pic);
            };

            $scope.$on("$destroy", function() {
                window.removeEventListener("keyup", $scope.handleKeyUp);
            });
        }]

    };
}])
.directive("bigPicWithText", [function() {
    return {
        restrict: "A",
        scope: {
            picObj: "=",
        },
        templateUrl : 'partials/secondary/bigPicWithText.html',
        link:   function ($scope, elem) {
            $scope.$watch('picObj', function(newVal){
                if (newVal){
                    // console.log($scope.picObj);
                }
            });
            $scope.handleKeyUp = function(){
                // if (e.keyCode === 37) {
                    $scope.$parent.setActivePic({});
                // } else if (e.keyCode === 39) {
                //     $scope.scrollRight();
                // }
            };
            elem.keyup($scope.handleKeyUp);

            $scope.$on("$destroy", function(){
                elem.removeEventListener("keyup",$scope.handleKeyUp);
            });

            $scope.test = function(){
                console.log("mouseUp!!");
            };
        }
    };
}])
.directive("picSwitcher", [function(){
    return {
        restrict: "A",
        scope: {
            pics: "=",
            fadeTime: "=",
            timeForPic:"="
        },
        template: '<img ng-src="{{pics[index].url}}" ng-animate-swap="index" class="swap-animation"/>',
        controller: ['$scope', '$interval', function ($scope, $interval) {
            $scope.index = 0;
            $interval(function() {
                $scope.index = $scope.index >= $scope.pics.length - 1 ? 0 : $scope.index + 1;
            }, $scope.timeForPic);

        }]
    };
}])
.directive("showMore", [function(){
    return {
        restrict: 'A',
        scope: {
            text: "="
        },
        replace: true,
        template: '<div class=""> \
                     <p>{{textToShow}}<a href="" ng-click="toggleText($event)">המשך חפירה...</a></p>\
                   </div> ',
        link: function($scope){
            
            $scope.$watch("text" , function(n){
                if (n !== undefined){
                    $scope.cuttedText = $scope.text.substring(0,50) + "...";
                    $scope.textToShow = $scope.cuttedText;
                }
            });

            $scope.toggleText = function(event){
                if (event.target.innerHTML === "המשך חפירה..."){
                    event.target.innerHTML = "פחות חפירה";
                    $scope.textToShow = $scope.text;
                    // angular.element(angular.element(angular.element(event.target).parent()[0]).parent()[0]).addClass("showMore");
                    // angular.element(angular.element(angular.element(event.target).parent()[0]).parent()[0]).removeClass("showLess");                

                }
                else {
                    event.target.innerHTML = "המשך חפירה...";  
                    $scope.textToShow = $scope.cuttedText;                  
                    // angular.element(angular.element(angular.element(event.target).parent()[0]).parent()[0]).removeClass("showMore");                
                    // angular.element(angular.element(angular.element(event.target).parent()[0]).parent()[0]).addClass("showLess");
                    // $timeout(function() {
                    //     $scope.textToShow = $scope.cuttedText;
                    // }, 1000);
                    

                    // $timeout(removeText,3);
                    
                }  
            };
        }
    };
}])
.directive("thumbnailPicture", function(){
    return {
        restrict: 'A',
        scope: {
            picInfo: "="
        },
        replace: true,
        template: '<div class="thumbnailWrapper"> \
                    <img class="img-responsive flex-item" ng-src="{{picInfo.thumbUrl}}" width="100" /> \
                    <div> \
                      <p>{{picInfo.headline}}</p>     \
                    </div> \
                   </div> '
    };
})
.directive("carousel", function() {
	return {
		templateUrl : 'partials/secondary/carousel.html'
	};
})
.directive("picAndText", function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/secondary/picAndText.html', //the {{title}} and {{body}} refers to attributes on the directive's $scope
		replace: true,
		scope: {image:'=image'},
		link: function($scope, $element, attrs) {
			$scope.image = attrs.image; //stick the keys in the link function
			console.log(attrs);

	  	}
  	};
})
.directive('fadeIn', ["$timeout" ,function($timeout){
    return {
        restrict: 'A',
        scope: {},
        link: function($scope, $element){
            $element.on('load', function() {
            	$element.addClass("fadeIn");
                $timeout(function() {
                    $element.removeClass("fadeIn");
                }, 500);
            });
        }
    };
}])
.directive('resizedParagraph',[ function(){
	return {
		restrict: 'A',
		scope: {
			pic: '=pic'
		},
		link: function($scope, $element){
			// $element.css("font-size", "200px");
			if ($element.height() > $element.parent().parent().children(".imgWrapper").children("img").height()){
				$element.css("font-size",$element.css("font-size") - 5 + 'px');
			}
			console.log($scope.pic);
		}
	};
}])
.directive("toggleSlide", function() {
                // I allow an instance of the directive to be hooked
                // into the user-interaction model outside of the
                // AngularJS context.
                // var scope = {
                //     expression: "=switch"
                // };
                function link( $scope, element, attributes ) {
                    // I am the TRUTHY expression to watch.
                    var expression = attributes.switch;                   
                    var duration = "fast";

                    // I check to see the default display of the
                    // element based on the link-time value of the
                    // model we are watching.
                    if ( ! $scope.$eval( expression ) ) {
                        element.hide();
                        // element.css({"max-height": "0px", overflow: "hidden", transition: "max-height 1s"});
                    }

                    // I watch the expression in $scope context to
                    // see when it changes - and adjust the visibility
                    // of the element accordingly.
                    $scope.$watch(
                        expression,
                        function( newValue, oldValue ) {
                            // Ignore first-run values since we've
                            // already defaulted the element state.
                            if ( newValue === oldValue ) {
                                return;
                            }
                            // Show element.
                            if ( newValue ) {
                                element
                                    .stop( true, true )
                                    .slideDown( duration )
                                    // .css({"max-height": "300px"})
                                ;
                            // Hide element.
                            } else {
                                element
                                    .stop( true, true )
                                    .slideUp( duration )
                                    // .css({"max-height": "0px"})
                                ;
                            }
                        }
                    );
                }
                // Return the directive configuration.
                return({
                    // scope: scope,
                    link: link,
                    restrict: "A"
                });
            }
        );

/*

// Create an application module for our demo.
        var Demo = angular.module( "Demo", [] );
        // -------------------------------------------------- //
        // -------------------------------------------------- //
        // Define our root-level controller for the application.
        Demo.controller(
            "AppController",
            function( $scope, $route, $routeParams ){
                // I toggle the value of isVisible.
                $scope.toggle = function() {
                    $scope.isVisible = ! $scope.isVisible;
                };
                // Default the blocks to be visible.
                $scope.isVisible = true;
            }
        );
        // -------------------------------------------------- //
        // -------------------------------------------------- //
        // I hide and show elements based on the given model value.
        // However, rather than using "display" style, I use jQuery's
        // slideDown() / slideUp().
        Demo.directive(
            "bnSlideShow",
            function() {
                // I allow an instance of the directive to be hooked
                // into the user-interaction model outside of the
                // AngularJS context.
                function link( $scope, element, attributes ) {
                    // I am the TRUTHY expression to watch.
                    var expression = attributes.bnSlideShow;
                    // I am the optional slide duration.
                    var duration = ( attributes.slideShowDuration || "fast" );
                    // I check to see the default display of the
                    // element based on the link-time value of the
                    // model we are watching.
                    if ( ! $scope.$eval( expression ) ) {
                        element.hide();
                    }
                    // I watch the expression in $scope context to
                    // see when it changes - and adjust the visibility
                    // of the element accordingly.
                    $scope.$watch(
                        expression,
                        function( newValue, oldValue ) {
                            // Ignore first-run values since we've
                            // already defaulted the element state.
                            if ( newValue === oldValue ) {
                                return;
                            }
                            // Show element.
                            if ( newValue ) {
                                element
                                    .stop( true, true )
                                    .slideDown( duration )
                                ;
                            // Hide element.
                            } else {
                                element
                                    .stop( true, true )
                                    .slideUp( duration )
                                ;
                            }
                        }
                    );
                }
                // Return the directive configuration.
                return({
                    link: link,
                    restrict: "A"
                });
            }
        );
*/
	
	/*
app.directive('sibs', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.parent().children().removeClass('clicked');
                element.addClass('clicked');
            })
        },
    }
});
	*/
