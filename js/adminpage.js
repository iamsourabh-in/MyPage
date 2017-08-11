var app = angular.module('x', ["firebase"]);
app.controller('admindata', function ($scope, $firebaseObject) {

    $scope.authorized = false;
    $scope.error = '';
    $scope.pass = '';
    $scope.Data = [];

    $scope.authenticate = function () {
        if ($scope.pass == '$#')
            $scope.authorized = true;
        else
            $scope.error = 'Invalid';
    }





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
            $scope.Data.push(value);
        });
        console.log($scope.Data);

    });

});