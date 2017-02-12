/**
 * Created by Vicky on 2017/2/12.
 */
//创建通过jsonp发送请求的服务
(function (window,angular) {

    //创建服务模块
    var app=angular.module("httpApp",[]);

    //创建服务
    app.service("httpService",function () {
        this.getJsonp=function (url,param,fn) {
            /**
             * 1.拼接参数，(回调函数要拼接成随机数)
             * 2.动态生成script标签，让src指向拼接的url
             * 3.获得jsonp的格式
             * 4.将script插入到页面中
             * 5.等获取到数据之后，将script删除，不留痕迹
             */
            var strUrl=url+"?";

            //遍历参数
            for(var key in param){
                strUrl+=key+"="+param[key]+"&";
            }

            //回调函数随机数
            var callback="callback_"+Math.random().toString().substr(2);

            strUrl+="callback="+callback;
            //动态生成script
            var script=document.createElement("script");
            script.src=strUrl;

            //拿到jsonp格式,只有全局下的函数能够拿到数据，并且调用这个方法，将取得到的数据传给fn
            window[callback]=function (data) {
                fn(data);

                //拿到数据，并且执行完之后，在删除script标签
                document.head.removeChild(script);
            }

            //插入页面中
            document.head.appendChild(script);
        }
    });

})(window,angular);