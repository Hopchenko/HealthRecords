angular.module('healthRecords.routes', ['ui.router'])

	.config(($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise('/registration');

		$stateProvider
			.state('registration', {
				url: '/registration',
				component: 'registration'
			})
	});