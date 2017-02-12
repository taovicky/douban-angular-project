/**
 * Created by Vicky on 2017/2/12.
 */
(function (window,angular) {
    /*-------------------单页面程序开发------------------------*/
    //创建主模块
    var app=angular.module("mainApp",["ngRoute","mainApp.in_theaters","mainApp.subject"]);


    //配置路由
    app.config(["$routeProvider","$locationProvider",function ($routeProvider,$locationProvider) {
        //利用location Provider来配置匹配！号
        $locationProvider.hashPrefix("");

        //配置路由表
        $routeProvider
            //配置正在热映的路由表
            .when("/in_theaters/:page?",{
                templateUrl:"js/module/in_theaters/template.html",
                controller:"theatersCtrl"
            })
            .when("/subject/:id",{
                templateUrl:"js/module/subject/subTemplate.html",
                controller:"subjectCtrl"
            })
            .otherwise({
                redirectTo:"/in_theaters"
            })

    }]);

})(window,angular);