'use strict';

function TypesCtrl(NewDevice, AccessToken, Type, $scope, $rootScope, $http, $location) {

  $scope.getPopular = function() {
    $rootScope.typesMenu = 'populars'
    if ($rootScope.populars) {
      $scope.types = $rootScope.populars;
    } else {
      $rootScope.populars = $scope.types = popularTypes;
    }
  };

  $scope.getYours = function() {
    $rootScope.typesMenu = 'yours'
    if ($rootScope.yours) {
      $scope.types = $rootScope.yours;
    } else {
      $rootScope.yours = $scope.types = Type.query({ per: 250 });
    }
  };

  $scope.getAll = function() {
    $rootScope.typesMenu = 'all'
  };

  $scope.select = function(type) {
    NewDevice.set({ type: { id: type.id, name: type.name }});
    $location.path('/new');
  };

  $scope.load = function(id) {
    $scope.type = Type.get({ id: id }, function() {
      $scope.select($scope.type);
      $location.path('/new');
    });
  };

  $scope.back = function() {
    $location.path('/new');
  };

  $scope.authorized = (!!AccessToken.get().access_token);
  if (!$rootScope.typesMenu) $rootScope.typesMenu = 'populars';

  if ($scope.authorized) {
    $rootScope.active = 'new';
    if ($rootScope.typesMenu == 'populars') $scope.getPopular();
    if ($rootScope.typesMenu == 'yours') $scope.getYours();
  };
};

TypesCtrl.$inject = ['NewDevice', 'AccessToken', 'Type', '$scope', '$rootScope', '$http', '$location'];
