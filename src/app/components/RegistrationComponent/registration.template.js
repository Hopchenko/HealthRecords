const registrationTemplate =
	`<div class="row justify-content-center">
		<div class="col col-lg-4 col-md-4 col-sm-8 col-xs-10 registration-form ">
			<form  name="registrationForm" novalidate ng-submit="$ctrl.register()" >
				<h1 class="header text-center">Регистрация</h1>
				<hr>
				
				<div class="form-group" ng-class="$ctrl.checkAndSetInputStyle(registrationForm.email)">
					<input class="form-control" type="email" name="email" placeholder="Электронная почта" ng-model="$ctrl.user.email" required/>
					<small ng-show="registrationForm.email.$invalid && !registrationForm.email.$pristine">Email must be like <strong>example@gmail.com</strong></small>
				</div>
				
				<div class="form-group" ng-class="$ctrl.checkAndSetInputStyle(registrationForm.name)">
					<input class="form-control" type="text" name="name" placeholder="Имя" ng-model="$ctrl.user.name" required ng-minlength="2"/>
					<small ng-show="registrationForm.name.$invalid && registrationForm.name.$error.minlength">Your name too short</strong></small>
				</div>
				
				<div class="form-group" ng-class="$ctrl.checkAndSetInputStyle(registrationForm.password1)">
					<input class="form-control" type="password" name="password1" placeholder="Пароль" ng-model="$ctrl.user.password1" required ng-minlength="8"/>
					
				</div>
				
				<div class="form-group" ng-class="$ctrl.checkAndSetInputStyle(registrationForm.password2)">
					<input class="form-control" type="password" name="password2" placeholder="Повторите пароль" ng-model="$ctrl.user.password2" required ng-minlength="8"/>
				
					<small ng-show="">Email must be like <strong>example@gmail.com</strong></small>
				</div>
				
				<button class="btn btn-primary btn-block" type="submit" ng-disabled="!registrationForm.$valid">Регистрация</button>
				
				<hr/>
				<div class="text-center" >
					<p>Уже зарегистрированы?<a ui-sref="authorization"> Войдите</a></p>
				</div>
			</form>
		</div>
	</div>`;

export default registrationTemplate;