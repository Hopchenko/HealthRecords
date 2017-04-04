import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/sass/styles.scss';
import '../../node_modules/hover.css/scss/hover.scss';

import angular from 'angular';
import 'angular-ui-router';
import './app.routes';

let healthRecords = angular.module('healthRecords', ['ui.router']);

export default healthRecords;