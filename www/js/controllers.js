angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ScheduleCtrl', function($scope) {})
.controller('ClassesCtrl', function($scope, $state, $ionicModal) {
  $scope.keyword = "cool";
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
.controller('ResultsCtrl', function($scope, $state, $ionicPopup, $controller, $window, Results, Enrollment) {
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

  $scope.addClass = function(item){
    $scope.addClassConfirmation = '';
    if($window.sessionStorage.getItem('token')){
      var confirmPopup = $ionicPopup.confirm({
        title: item.name,
        template: "Do you want to add this course to your enrollment cart?",
        okText: 'Yes', // String (default: 'OK'). The text of the OK button.
        okType: 'button-assertive' // String (default: 'button-positive'). The type of the OK button.
      });
      
      confirmPopup.then(function(res) {
        if (res) {
            Enrollment.add(item);
            $scope.addClassConfirmation = "You have successfully added " + item.name + " to you enrollment cart.";
            console.log('You clicked on "Yes" button');
        } else {
            console.log('You clicked on "Cancel" button');
        }
      });
    } else { 
      var alertPopup = $ionicPopup.alert({
        title: 'Login requirement!',
        template: 'Please Login First.'
      });

      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    }
  };

})

.controller('BillsCtrl', function($scope) {})

.controller('FinancesCtrl', function($scope) {})

.controller('EnrollmentCtrl', function($scope, $ionicPopup, Enrollment) {
  $scope.items = Enrollment.all();

  $scope.remove = function(index, item){
    var confirmPopup = $ionicPopup.confirm({
      title: item.name,
      template: "Are you sure to drop this course?",
      okText: 'Yes', // String (default: 'OK'). The text of the OK button.
      okType: 'button-assertive' // String (default: 'button-positive'). The type of the OK button.
    });
    
    confirmPopup.then(function(res) {
      if (res) {
          $scope.items.splice(index, 1);
         console.log('You clicked on "Yes" button');
      } else {
         console.log('You clicked on "Cancel" button');
      }
    });
    //Enrollment.remove(item);
    
    //$scope.items.splice($scope.items.indexOf(item), 1);
  }
})

// controller for login
.controller('LoginCtrl', function($scope, $window, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.loginError = '';
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  }; 


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    
    if ($scope.loginData.username == "jsmith01" && $scope.loginData.password == "123"){
      $scope.username = JSON.stringify($scope.loginData.username);
      $window.sessionStorage.setItem('token', $scope.username);
      $scope.closeLogin();
    } else {
      $scope.loginError = " * username or password incorrect! Please Try again";
      return false;
    }
  }

})


.controller('ProfileCtrl', function($scope, $window, $ionicModal, $timeout, Profile) {

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/profile.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  var profile_info = Profile.getInfo();
  $scope.ProfileData = {
    home_address: profile_info.home_address,
    local_address: profile_info.local_address,
    compus_email: profile_info.compus_email,
    other_email: profile_info.other_email,
    mobile_phone: profile_info.mobile_phone,
    home_phone: profile_info.home_phone
  }; 
  /*$scope.homeAddress = profile_info.home_address;
  $scope.localAddress = profile_info.local_address;
  $scope.campusEmail = profile_info.compus_email;
  $scope.otherEmail = profile_info.other_email;
  $scope.mobilePhone = profile_info.mobile_phone;
  $scope.homePhone = profile_info.home_phone;*/
  // Triggered in the login modal to close it
  $scope.closeUpdate = function() {
    console.log("close update profile");
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.update = function() {
    $scope.modal.show();
  }; 


  // Perform the login action when the user submits the login form
  $scope.doUpdate = function() {
    var update_info = {
      home_address: $scope.ProfileData.home_address,
      local_address: $scope.ProfileData.local_address,
      compus_email: $scope.ProfileData.compus_email,
      other_email: $scope.ProfileData.other_email,
      mobile_phone: $scope.ProfileData.mobile_phone,
      home_phone: $scope.ProfileData.home_phone
    }
    Profile.updateInfo(update_info);
    $scope.modal.hide();
  }

})


.controller('HeaderCtrl', function($scope, $window, $sce, $http) {
  $scope.welcome = "";
  $scope.isLoggedIn = function() {
    // use local sessionStorage in Angularjs to set the token for user login
    if($window.sessionStorage.getItem('token')){
      $scope.welcome = "Hi: " + JSON.parse($window.sessionStorage.getItem('token'));
      return true;
    }else{
      return false;
    }
  };
// logout and remove the session token
  $scope.logout = function(){
    $window.sessionStorage.removeItem('token');
  };

})

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
