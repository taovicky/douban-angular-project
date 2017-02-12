/**
 * Created by Vicky on 2017/2/12.
 */
(function (window, angular) {
    //创建正在热映的模块
    var app = angular.module("mainApp.in_theaters", ["httpApp"]);

    //创建控制器
    app.controller("theatersCtrl", ["$scope", "$routeParams","$route","httpService", function ($scope, $routeParams, $route, httpService) {
        //初始化
        //电影项目
        $scope.subjects=[];

        //标题
        $scope.title="正在加载中";

        //电影总数
        $scope.total=0;

        /*---实现分页功能--*/
        /**
         *1.传递参数start和count
         */
        //当前页面
        $scope.page=parseInt($routeParams.page || "1");

        //页面数量
        $scope.pageCount=5;

        //总页数
        $scope.pageMax=0;

        //从哪一条数据开始请求
        //$scope.pateCount*(page-1)



        //通过httpservice服务请求api，拿到数据
        var url = "https://api.douban.com/v2/movie/"+$routeParams.type;
        var param = {
            apikey: "00fa6c0654689a0202ef4412fd39ce06",
            start:($scope.page-1)*$scope.pageCount,
            count:$scope.pageCount
        }
        httpService.getJsonp(url, param, function (data) {
            //拿到数据，接下来渲染到模板中,管理模板
            console.log(data);

            /*---------像模板暴露变量---------*/
            $scope.subjects = data.subjects;

            $scope.title=data.title;

            $scope.total=data.total;

            //总数目/每一面显示的数据，在取天花板函数
            $scope.pageMax=Math.ceil(parseInt(data.total)/$scope.pageCount);

            //上一页
            $scope.prevPage=function () {
                if($scope.page>1){
                    $scope.page--;

                    //通过$route.updateParams更新url中改变的参数（锚点参数）
                    $route.updateParams({'page':$scope.page});
                }

            }

            //下一页
            $scope.nextPage=function () {
                if($scope.page<4){
                    $scope.page++;

                    //通过$route.updateParams更新url中改变的参数（锚点参数）
                    $route.updateParams({'page':$scope.page});
                }

            }


            //告诉angular，更新数据
            $scope.$apply();
        });

    }]);

})(window, angular);