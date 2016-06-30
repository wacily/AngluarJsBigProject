app.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider){
		var index = {
				templateUrl:'',
				controller:''
			},
			login = {
				templateUrl:'',
				controller:''
			},
			register = {
				templateUrl:'',
				controller:''
			}

		$routeProvider.
			when('/',index).
			when('/index/',index).
			when('/login/',login).
			when('/register/',register).
			otherwise({
				redirectTo:'/'
			});

		$locationProvider.html5Model(true).hashProfix('!');
	}
]);