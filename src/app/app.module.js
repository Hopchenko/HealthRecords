import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/sass/styles.scss';
import '../../node_modules/hover.css/scss/hover.scss';


import angular from 'angular';
import uiRouter from 'angular-ui-router';

//Components
import './components/RegistrationComponent/registration.module';
import './components/AuthorizationComponent/authorization.module';

let app = angular.module('healthRecords', [
	'ui.router',
	'healthRecords.routes',

	//Components
	'healthRecords.registration',
	'healthRecords.authorization',
]);

