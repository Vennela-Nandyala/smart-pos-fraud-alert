angular.module('posApp').controller('MainCtrl', function($scope, $http) {
  $scope.transaction = {};
  $scope.transactions = [];

  $scope.getTransactions = function() {
    $http.get('http://localhost:5000/api/transactions').then(function(res) {
      $scope.transactions = res.data;
    });
  };

  $scope.addTransaction = function() {
    $http.post('http://localhost:5000/api/transactions', $scope.transaction).then(function(res) {
      $scope.transaction = {};
      $scope.getTransactions();
    });
  };

  $scope.getTransactions();
});
