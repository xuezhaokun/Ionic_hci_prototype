angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ScheduleCtrl', function($scope) {})
.controller('ClassesCtrl', function($scope, $state, $ionicModal) {
  $scope.doSearch = function() {
    /*$ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });*/
    //$state.transitionTo("results");
    $state.go('tab.results');
    /*$ionicModal.fromTemplateUrl('templates/results.html', {
      scope: $scope
    })*/
  }
  
})
.controller('ResultsCtrl', function($scope, $state, $ionicPopup, Results) {
  $scope.results = Results.all();
  $scope.back = function(){
    $state.go('tab.classes');
  };
     // An alert dialog
  $scope.showDetails = function(resultId) {
    var result = Results.get(resultId);
    var alertPopup = $ionicPopup.alert({
      title: result.name,
      template: result.lastText
    });
  };
})
.controller('BillsCtrl', function($scope) {})
.controller('FinancesCtrl', function($scope) {})
.controller('EnrollmentCtrl', function($scope) {})







.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
