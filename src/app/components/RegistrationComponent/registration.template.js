const registrationTemplate =
	`<div class="row justify-content-center">
		<div class="col col-lg-4 col-md-4 col-sm-8 col-xs-10 registration-form ">
			<form  name="registrationForm" ng-submit="$ctrl.register()" novalidate>
				<h1 class="header text-center">Регистрация</h1>
				<hr>
				<div class="form-group" required ng-class="$ctrl.checkInputStyle(registrationForm.name)">
					<input class="form-control" name="name" type="text" placeholder="Имя" ng-model="$ctrl.user.name" minlength="2"/>
					<!--<small ng-show="!registrationForm.name.$valid.required">You must enter your name</small>-->
				</div>
				<div class="form-group" required ng-class="$ctrl.checkInputStyle(registrationForm.email)">
					<input class="form-control" name="email" type="email" placeholder="Электронная почта" ng-model="$ctrl.user.email"/>
					<!--<small ng-show="registrationForm.email.$pristine">Enter your email</strong></small>-->
					<!--<small ng-show="registrationForm.email.$invalid && !loginForm.email.$pristine">Email must be like <strong>example@gmail.com</strong></small>-->
				</div>
				<div class="form-group" required ng-class="$ctrl.checkInputStyle(registrationForm.password1)">
					<input class="form-control" name="password1" type="password" placeholder="Пароль" ng-model="$ctrl.user.password1" ng-minlength="8"/>
					<!--<small ng-show="registrationForm.password1.$error.required">You must enter the password</small>-->
				</div>
				<div class="form-group" required ng-class="$ctrl.checkInputStyle(registrationForm.password2)">
					<input class="form-control" name="password2" type="password" placeholder="Повторите пароль" ng-model="$ctrl.user.password2" ng-minlength="8"/>
					<!--<small ng-show="registrationForm.password2.$error.required">Please, repeat password</small>-->
				</div>
				<button class="btn btn-primary btn-block" type="submit" ng-disabled="registrationForm.$valid">Регистрация</button>
				<hr/>
				<div class="text-center" >
					<p>Уже зарегистрированы?<a ui-sref="authorization"> Войдите</a></p>
				</div>
			</form>
		</div>
	</div>`;

export default registrationTemplate;