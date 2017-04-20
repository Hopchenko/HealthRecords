export default function checkAndSetInputStyle(formStatus) {
	if( formStatus.$invalid && !formStatus.$pristine){
		return 'has-danger';
	} else if(formStatus.$valid && !formStatus.$error.required){
		return 'has-success';
	}
}