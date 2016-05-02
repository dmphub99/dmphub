

var app =angular.module('app', []);
app.controller('customersCtrl', function($scope, $http) {
	

$scope.call=function(email){

$http({
    method: 'POST',
    url: 'https://app.emaillistverify.com/api/verifEmail?secret=rEGTkYBCV9ca5LsoqO82l & email='+email, 
    data: { email: $scope.email}
}).then(function(response) {
     alert(response);
	 $scope.names = response;
});

}
 
$http.get('https://app.emaillistverify.com/api/verifEmail?secret=rEGTkYBCV9ca5LsoqO82l"&email=".$email"').success( function(response) {
                $scope.names = response;
            });
			
			});