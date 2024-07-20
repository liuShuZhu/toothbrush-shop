import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
const baseURL = import.meta.env.VITE_APP_URL;
const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});
const cancelToken = axios.CancelToken;
const source = cancelToken.source();

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    //默认请求头设置
    config.headers = {
      ...config.headers,
    };
    //判断网络
    if (!window.navigator.onLine) {
      // app.state.netError = true;
      return;
    }
    config.cancelToken = source.token;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (response.status === 200) {
      if (response.data.code != 200) {
        //统一处理业务错误逻辑
      }
      return Promise.resolve(response.data);
    } else {
      Promise.reject(response.data);
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export function get(_cmd, _param = {}) {
  return instance({
    url: _cmd,
    method: "get",
    params: _param,
  });
}
export function post(_cmd, _param = {}) {
  return instance({
    url: _cmd,
    method: "post",
    data: _param,
    transformRequest: [
      function (data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      },
    ],
  });
}
export function postJson(url, data) {
  return instance({
    url,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}
export function put(url, data) {
  return instance({
    url,
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}
const resHandle = (res) => {
  //处理特殊情况code
  console.log("在这里处理异常情况", res);
};


