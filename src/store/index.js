import Vuex from "vuex"


//0.2创建store对象
let store = new Vuex.Store({
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
export default store;