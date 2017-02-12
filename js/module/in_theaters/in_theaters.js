/**
 * Created by Vicky on 2017/2/12.
 */
(function (window, angular) {
    //创建正在热映的模块
    var app = angular.module("mainApp.in_theaters", ["httpApp"]);

    //创建控制器
    app.controller("theatersCtrl", ["$scope", "httpService", function ($scope, httpService) {
        //初始化
        //电影项目
        $scope.subjects=[];

        //标题
        $scope.title="正在加载中";

        //电影总数
        $scope.total=0;




        //通过httpservice服务请求api，拿到数据
        var url = "https://api.douban.com/v2/movie/in_theaters";
        var param = {apikey: "00fa6c0654689a0202ef4412fd39ce06"}
        httpService.getJsonp(url, param, function (data) {
            //拿到数据，接下来渲染到模板中,管理模板
            console.log(data);

            /*---------像模板暴露变量---------*/
            $scope.subjects = data.subjects;

            $scope.title=data.title;

            $scope.total=data.total;


            //告诉angular，更新数据
            $scope.$apply();
        })

    }]);

})(window, angular);