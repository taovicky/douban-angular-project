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
            /**
             * 1.如果此时不加上movie变成movie/:type/:page的话，那就代表type是可以变化的，所以也会匹配到下面的/subject/:id去，所以添加一个不可变的一层去完全区分开
             */
            .when("/mv/:type/:page?",{
                templateUrl:"js/module/in_theaters/template.html",
                controller:"theatersCtrl"
            })
            .when("/subject/:id",{
                templateUrl:"js/module/subject/subTemplate.html",
                controller:"subjectCtrl"
            })
            .otherwise({
                redirectTo:"/mv/in_theaters"
            })

    }]);

})(window,angular);