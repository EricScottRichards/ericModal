angular.module('directive')
.directive('dirPractice', function(){
  return {
    scope: {
      one: '@',
      two: '=',
      three: '&'
    },
    templateUrl: 'app/directive.html',
    link: function(scope, elem, attrs){
      var x = "I want this instead";
      scope.three({pancake: x, waffle: 'Anything'});
    },
    controller: function($scope){

    }
  }
});
