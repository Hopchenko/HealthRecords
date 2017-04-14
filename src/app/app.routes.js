

angular.module('healthRecords.routes', ['ui.router'])

	.config(($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise('/authorization');

		$stateProvider
			.state('registration', {
				url: '/registration',
				component: 'registration'
			})
			.state('authorization', {
				url: '/authorization',
				component:'authorization'
			})
	});