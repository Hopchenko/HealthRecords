import checkAndSetInputStyle from './../../shared/checkAndSetInputStyle';

export default function authorizationController() {
	this.user = {};

	this.login = function () {
		let that = this;
		console.log(that.user.email);
		console.log(that.user.password);
	};

	this.checkAndSetInputStyle = checkAndSetInputStyle;
}