import authorizationTemplate from './authorization.template';
import authorizationController from './authorization.controller';

const authorizationComponent = {
	template: authorizationTemplate,
	controller: authorizationController,
	bindings:{
		user:'='
	}
};

export default authorizationComponent