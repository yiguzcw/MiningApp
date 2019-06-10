import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'
// import './lib/mui/css/style.css'

Vue.config.productionTip = false


//vuex
// import store from './store'


//0.1引入 并注册 vuex组件
import Vuex from "vuex"
Vue.use(Vuex)
//0.2创建store对象
var store=new Vuex.Store({
  //共享数据容器
  state:{
    uid:'',
    depo:'',

    mid:"",//矿机详情编号
    did:"",//矿机详情编号
    
    Login:true,//登录注册切换
    Reg:false,
    freez:0.00,
    
    // cartCount:sessionStorage.getItem("cartCount")||0
  },
  //操作共享数据方法
  mutations:{
    // increment(state){
    //   state.cartCount++;
    //   sessionStorage.setItem("cartCount",state.cartCount);
    // },
    newNum(state,sum){ //冻结资产
      state.freez=sum;
    },
    login(state,sum){ //登录显示
      state.Login=sum;
    },
    reg(state,sum){ //注册显示
      state.Reg=sum;
    },
    deposit(state,sum){
      state.depo=sum;
    },
    Mid(state,sum){ 
      state.mid=sum;
    },
    Did(state,sum){ 
      state.did=sum;
    }
  },
  //获取共享数据方法
  getters:{
    optCartCount:function(state){
      return state.cartCount;
    }
  }
})
//0.3将store绑定vue实例

//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/style.css'

//1:先引入Header组件
import {Header,Button} from "mint-ui"
//2：注册Header组件
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);

//解决axios的post请求问题 引入qs模块
import qs from "qs"
Vue.prototype.qs=qs;


//引入并注册轮播图组件
import {Swipe,SwipeItem} from "mint-ui"
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

import axios from "axios"
//在main.js配置跨域访问保存session选项值
axios.defaults.withCredentials=true;
//在mian.js将axios配置vue实例对象中
Vue.prototype.axios=axios;

//创建日期时间过滤器
Vue.filter("dataFilter",function(value){
  //1 依据原始日期格式创建日起对象
  var now=new Date(value);
  // //2 获取日期对象 年 月 日
  var y=now.getFullYear();
  var m=now.getMonth()+1;
  var d=now.getDate();
  // //2 获取日期对象 时 分 秒
  // var h=now.getHours();
  // var mi=now.getMinutes();
  // var s=now.getSeconds();
  // //4 月份与日期 如果当前月份小于10 前面拼接0 
  // // if(m<10 || d<10){m="0"+m;d="0"+d};
  // //m<10&&(m="0"+m);
  // //5 拼接字符串返回
  return y+"-"+m+"-"+d;
  // let a=value.substring(5,11)

  // return a

})

Vue.filter("timeFilter",function(value){
  var now=new Date(value);
  // //2 获取日期对象 年 月 日
  var m=now.getMonth()+1;
  var d=now.getDate();
  // //2 获取日期对象 时 分 秒
  var h=now.getHours();
  var mi=now.getMinutes();
  return m+"/"+d+" "+d+':'+mi;

})


//路由守卫
router.beforeEach((to, from, next) => {
  let LOGIN = sessionStorage.getItem('id');
  let RO=window.sessionStorage.getItem('data');
  // console.log(RO+'///'+1111)
  if (to.path === '/Log') {
    sessionStorage.removeItem('Log') 
  }
  
  if (!LOGIN && to.path!== '/Log') {
    next({ path:  '/Log' })
  } else {
     if (!RO && to.path== '/Uinfo') {
        next({ path:  '/Shuang' })
      } else if (!RO && to.path== '/Ulist'){
        next({ path:  '/Shuang' })
      } else if (!RO && to.path== '/Bulltext'){
        next({ path:  '/Shuang' })
      } else if (!RO && to.path== '/Wrong'){
        next({ path:  '/Shuang' })
      } else if (!RO && to.path== '/WrongInfo'){
        next({ path:  '/Shuang' })
      } else {
        next()
      } 
  }
})



new Vue({
  router,
  render: h => h(App),
  store //将store绑定Vue实例对象中
}).$mount('#app')
