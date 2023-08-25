/**
 * axios
 * https://github.com/axios/axios
 */
import axios from 'axios'

// 全局 axios 默认值
axios.defaults.timeout = 500000
axios.defaults.baseURL = 1//process.env.VUE_APP_API_BASE_URL
axios.defaults.headers = {
    'Content-Type': 'application/json;'
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.authorization = localStorage.getItem("token")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (!error.response) {
        //无法连接服务器
    }else if (error.response.status === 0) {
        //设备网络异常
    }else if (error.response.status === 401) {
        //登录失效
    } else if (error.response.status === 403) {
        //权限不足
    } else if (error.response.status === 404) {
        //资源不存在
    } else if (error.response.status === 500) {
        //服务器内部发生错误
    }
    return Promise.reject(error);
});


export default {
    get(url, params, errorCallBack = null) {
        return new Promise((resovle, reject) => {
            axios.get(url, {
                params: params
            }).then(res => {
                if (res.data.code != 0) {
                    //neo.closeLoading();
                    if (!errorCallBack) {
                        //neo.closeLoading();
                        //neo.warning(res.data.msg);
                    }
                    else
                        errorCallBack(res.data)
                } else {
                    resovle(res.data)
                }
            }).catch(error => {
                reject(error.data)
            })
        })
    },
    post(url, params, errorCallBack = null) {
        return new Promise((resovle, reject) => {
            axios.post(url, params).then(res => {
                if (res.data.code != 0) {
                    neo.closeLoading();
                    if (!errorCallBack) {
                        neo.closeLoading();
                        neo.warning(res.data.msg);
                    }
                    else
                        errorCallBack(res.data)
                } else {
                    resovle(res.data)
                }

            }).catch(error => {
                reject(error.data)
            })
        })
    },
    download(url, params, filename) {
        axios({
            method: 'post',
            url: url,
            data: params,
            responseType: 'blob'
        }).then(response => {

            const fileName = filename ? filename : response.headers['content-disposition'].match(
                /filename=(.*)/
            )[1].split(";")[0];

            if (!response) {
                return
            }
            let url = window.URL.createObjectURL(new Blob([response.data]))

            let link = window.document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', fileName)
            window.document.body.appendChild(link)
            link.click()
        }).catch((error) => {

        })
    }
}