import Vue from 'vue'
import axios from 'axios'

// 自定义的一个axios对象:根据项目进行修改
const service = axios.create({
	baseURL: 'http://192.168.31.113:3000', // url = base url + request url
	//withCredentials: true, // send cookies when cross-domain requests 注意：withCredentials和后端配置的cross跨域不可同时使用
	timeout: 6000, // request timeout
	crossDomain: true
})

// axios请求拦截器
service.interceptors.request.use(
    function(config){
		console.log()
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
); 
// axios 响应拦截器
service.interceptors.response.use(
   function(res){
	  return res;
   },
   function(error){
	   return Promise.reject(error)
   }

)

// 重点：在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
axios.defaults.adapter = function(config) { //自己定义个适配器，用来适配uniapp的语法
    return new Promise((resolve, reject) => {
        console.log(config)
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                console.log("执行完成：",response)
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })
}

export default service
