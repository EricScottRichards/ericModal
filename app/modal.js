angular.module('directive').controller('modal', function($scope, plant, $modalInstance){
  console.log(plant);
  $scope.display = plant;

  $scope.okay = function(){
    $modalInstance.close("Plants n Stuff");
  };

  $scope.cancel = function(){
    $modalInstance.close("CANCELED");
  };
});
