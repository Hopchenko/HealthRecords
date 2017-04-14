import registrationTemplate from './registration.template';
import registrationController from './registration.controller';

const registrationComponent = {
	template: registrationTemplate,
	controller: registrationController,
	bindings:{
		user:'='
	}
};

export default registrationComponent;