import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';

angular.module('healthApp', [])
	.controller('HealthController',
		['$scope', '$parse', function ($scope, $parse) {
			$scope.person = {
				name: 'John Doe'
			};
			$scope.$watch('expr', function (newVal, oldVal, scope) {
				if (newVal !== oldVal) {
					// Let's set up our parseFun with the expression
					var parseFun = $parse(newVal);
					// Get the value of the parsed expression, set it on the scope for output
					scope.parsedExpr = parseFun(scope);
				}
			});
		}]);




