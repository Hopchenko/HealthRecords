const authorizationTemplate =
	`
	<div class="row justify-content-center">
		<div class="col col-lg-4 col-md-4 col-sm-8 col-xs-10 authorization-form">
			<form name="loginForm" novalidate ng-submit="$ctrl.login()">
				<h1 class="header text-center">Вход</h1>
				<hr>
				
				<div class="form-group" ng-class="$ctrl.checkInputStyle(loginForm.email)">
					<input class="form-control" type="email" name="email" placeholder="Электронная почта" ng-model="$ctrl.user.email" required ng-focus/>
					<small ng-show="loginForm.email.$pristine">Enter your email</strong></small>
					<small ng-show="loginForm.email.$invalid && !loginForm.email.$pristine">Email must be like <strong>example@gmail.com</strong></small>
				</div>
				
				<div class="form-group" ng-class="$ctrl.checkInputStyle(loginForm.password)">
					<input class="form-control" type="password" placeholder="Пароль" name="password" ng-model="$ctrl.user.password" required ng-minlength="8"/>
					<small ng-show="loginForm.password.$invalid">Password too short</small>
				</div>
				<button class="btn btn-primary btn-block" ng-disabled="!loginForm.$valid">Войти</button>
				
				<hr/>
				<div class="text-center">
					<p>Нет аккаунта?<a ui-sref="registration"> Зарегестрируйтесь</a></p>
				</div>
		</div>
	</div>
	`;

export default authorizationTemplate;