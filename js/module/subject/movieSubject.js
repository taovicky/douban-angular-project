/**
 * Created by Vicky on 2017/2/12.
 */
(function (window,angular) {
    //创建控制电影详情页模块，控制电影详情页
    var app=angular.module("mainApp.subject",["httpApp"]);

    app.controller("subjectCtrl",["$scope","$routeParams","httpService",function ($scope,$routeParams,httpService) {

        //初始化
        $scope.subject={};

        var id=$routeParams.id;

        var url = "https://api.douban.com/v2/movie/subject/"+id;
        var param = {
            apikey: "00fa6c0654689a0202ef4412fd39ce06",
        }

        httpService.getJsonp(url,param,function (data) {

            //getjsonp是异步操作的，所以要告诉angular更新数据
            //console.log(data);
            $scope.subject=data;

            $scope.$apply();
        })

        //测试
        //$scope.test="subjectCtrl";

    }]);

})(window,angular);