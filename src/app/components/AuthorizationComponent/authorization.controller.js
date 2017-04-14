import checkInputStyle from './../../shared/checkInputStyle';

export default function authorizationController() {
	this.user = {};

	this.login = function () {
		let that = this;
		console.log(that.user.email);
		console.log(that.user.password);
	};
	this.checkInputStyle = checkInputStyle;
}
