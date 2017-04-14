export default function checkInputStyle(formStatus) {
	if(formStatus.$pristine){
		return '';
	} else if (formStatus.$invalid){
		return 'has-danger';
	} else if (formStatus.$valid){
		return 'has-success';
	}
}