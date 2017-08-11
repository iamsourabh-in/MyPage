var app = angular.module('sr', ["firebase"]);
app.controller('mainConatct', function ($scope, $firebaseObject) {

    $scope.OnCtrlReady = function () {
        $scope.Name = "";
        $scope.Email = "";
        $scope.Phone = "";
        $scope.Message = "";
    }
    $scope.OnCtrlReady();
    // Code for REf 
    // var ref = firebase.database().ref();
    // // download the data into a local object
    // $scope.data = $firebaseObject(ref);
    // // putting a console.log here won't work, see below
    // console.log($scope.data);

    // Code for REal Time sync
    var ref = firebase.database().ref().child("srustagi");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    // syncObject.$bindTo($scope, "data");

    syncObject.$loaded().then(function () {
        console.log("loaded record:", syncObject);
        // $scope.data = syncObject.$value;
        //To iterate the key/value pairs of the object, use angular.forEach()
        angular.forEach(syncObject, function (value, key) {
            console.log(key, value);
        });

    });

    $scope.saveContactMe = function () {
        if ($scope.Name == "") {
            alert('Invalid Name');
            return false;
        }
        if ($scope.Email == undefined || $scope.Email == "" || $scope.Email.indexOf('@') == -1) {
            alert('Invalid Email');
            return false;
        }

        if ($scope.Phone == "") {
            alert('Invalid Phone');
            return false;
        }
        if ($scope.Message == "") {
            alert('Invalid Message');
            return false;
        }

        $scope.writeUserData($scope.Name, $scope.Email, $scope.Phone, $scope.Message)

    }

    $scope.writeUserData = function (name, email, Phone, Message) {
        var rootRef = firebase.database().ref();
        var storesRef = rootRef.child('srustagi');
        var newStoreRef = storesRef.push();
        newStoreRef.set({
            username: name,
            email: email,
            contact: Phone,
            message: Message
        });
        alert('Thanks, I will come back to You!!')
        $scope.OnCtrlReady();
    }
});