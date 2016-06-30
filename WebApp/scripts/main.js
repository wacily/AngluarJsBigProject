require.config({
    baseUrl:"scripts",
    paths:{
        "angular":"libs/angular1.4.12/angular",
        "angular-messages":"libs/angular1.4.12/angular-messages.min",
        "angular-cookies":"libs/angular1.4.12/angular-cookies.min",
        "angular-route":"libs/angular1.4.12/angular-route.min",
        "angular-zh-cn":"libs/angular1.4.12/angular-locale_zh-cn",
        "jquery":"libs/jquery1.11.3/jquery-1.11.3.min",
        "bootstrap":"libs/bootstrap-3.3.5/js/bootstrap.min",

        "app":"app",
        "app-route":"route"
    },
    shim:{
    	'angular':{
    		exports:'angular'
    	}
    },
    urlArgs: "version=" +  (new Date()).getTime()
});

require(['angular','app'],function(){
	angular.bootstrap(document,['app']);
});