var app =angular.module('app', []);
app.controller('emailController', function($scope, $http) {
	//$scope.email="suriiii"
	//alert($scope.email);
$scope.names='';
$scope.call=function(email){

$http({
    method: 'POST',
    url: 'https://app.emaillistverify.com/api/verifEmail?secret=rEGTkYBCV9ca5LsoqO82l&email='+email,
}).then(function(response) {
console.log(response)
     //alert(response);
	 $scope.names = response;
});

}
 
$http.get('https://app.emaillistverify.com/api/verifEmail?secret=rEGTkYBCV9ca5LsoqO82l&email='+email).success( function(response) {
                $scope.names = response;
            });
			
			});