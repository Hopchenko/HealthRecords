import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import '../sass/styles.scss';

let app = angular.module('app', []);

app.controller('ParentController');

// app.filter('abbr', function () {
// 	return function (input) {
// 		if (input) {
// 			let words = input.split(' ');
//
// 			function abbreviate(arr) {
// 				let abbreviation = '';
// 				for (let w of arr) {
// 					abbreviation += w[0].toUpperCase();
// 				}
// 				return abbreviation;
// 			}
//
// 			return abbreviate(words);
// 		}
// 	}
// });




