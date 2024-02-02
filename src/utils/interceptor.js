//在官方的axios的基础上封装一个添加拦截器的axios
import axios from 'axios'
import defaultAvator from '../assets/avator.png'
//配置默认的路由地址头
axios.defaults.baseURL = 'https://api.helotus.cn'

const getTokenFn = function () {
  axios.post('/api/account/loginapi', {
    UserName:"appid-22005-001",
    Password:"7D424A702D2C1B47C21DFFC8B7068B62"
  }).then(({data}) => {
    sessionStorage.setItem('token', data.data.accesstoken)
    sessionStorage.setItem('nickName', data.data.nickName)
    sessionStorage.setItem('avator', data.data.avator || defaultAvator)
  }).catch(e => {
    console.error(e)
  })
}

getTokenFn()

//全局添加拦截器的作用是可以在每个api前面加上headers的token验证
axios.interceptors.request.use(config => {
  // 判断token是否存在和是否需要token验证的路由
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = "Bearer  " + sessionStorage.getItem('token');
  }
  return config;
})

axios.interceptors.response.use(function(response){
  // 这里指响应成功之后的处理，一般什么都不做
  return response;
},function(error){
  // 这里是对响应错误的处理，一般用来弹出toastr提示用户错误原因。
  console.log(error.response);
  if (error.response.data.code == 401) {
    getTokenFn()
    console.log(error.response.data.msg)
    setTimeout(() => {
      location.reload()
    }, 1000)
  }
  return Promise.reject(error.response);
});



export default axios