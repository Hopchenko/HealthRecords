import registrationComponent from './registration.component';

export const registrationModule = angular
	.module('healthRecords.registration', [])
	.component('registration', registrationComponent);