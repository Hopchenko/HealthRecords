import checkInputStyle from './../../shared/checkInputStyle';

export default function registrationController() {
	this.user = {};
	let that = this;

	this.register = function () {
		console.log(that.user);
	};

	this.checkInputStyle = checkInputStyle;
}