var Contract = function(){
  this.no = "default no";
  this.cur = "default cur";
  this.mount = "default mount";
  this.rate = "default rate";
};

var Data = function(){
  this.name = "default name";
  this.cur = "default cur";
  this.mount = "default mount";
  this.contracts = [new Contract()];
};

var module = angular.module('hinagataApp', []);
module.service('datas', ['$rootScope', function ($scope) {
  var datas = [new Data()];
  
  $scope.$watch(function () {
    return datas;
  }, function (value) {
    alert(JSON.stringify(value));
    $scope.$broadcast('change:datas', value);
  }, true);
  
  this.datas = datas;
}]);

module.controller('HinagataController', ['$scope', 'datas', function ($scope, datas) {
  angular.extend($scope, datas.datas[0]);
}]);