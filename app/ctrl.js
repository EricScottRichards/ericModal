angular.module('directive')
.controller('homeCtrl', function($scope, $modal){
  $scope.info = "Here it is~";
  $scope.ghost = function(x, y){
    console.log(x, y);
  };

  $scope.plant = "Peas n' Queues";

  $scope.openModal = function(){
    var modal = $modal.open({
      templateUrl: 'app/modal.html',
      controller: 'modal',
      size: 'lg',
      resolve: {
        plant: function(){
          return $scope.plant;
        }
      }
    });

    modal.result.then(function(data){
      console.log('success', data);
    });
  }
});
