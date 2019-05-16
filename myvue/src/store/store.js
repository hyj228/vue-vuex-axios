import Vue from "vue";

import Vuex from "vuex";

import axios from "axios";

//在单文件组件项目中使用vuex必须先注册插件。
Vue.use(Vuex);

//创建数据仓库store对象
//参数是store的配置对象
var store = new Vuex.Store({
    // state表示仓库中的数据(状态)。
    state:{
        num:10,
        myname:"孙化育",
        age:20,
        time:"2018年5月8日",
        remoteData:[]
    },
    // getters表示仓库的数据获取方法，相当于仓库的计算属性。
    getters:{
        // getters中的计算函数，参数就是store的state属性
        isAdult:function(state){
            return state.age>=18;
        }
    },
    //mutations表示仓库数据的修改方法，任何组件中必须通过提交mutations的方式进行数据修改。
    //mutations中的函数对于state的修改必须是同步的。
    mutations:{
        // mutations中的函数第一个参数是state，
        numIncrease(state){
            state.num++;
        },
        //mutations中的函数第二个参数是提交mutation时所传递的参数。
        setNum(state,v){
            state.num = v;
        },
        setRemoteData(state,v){
            state.remoteData = v;
        }
    },

    //对于仓库中数据的异步修改，必须使用actions
    actions:{
        queryCateList(ctx){
            axios.get("/douyu/api/RoomApi/game")
            .then(res=>{
                //actions中的函数的第一个参数是store对象而不是state，因为actions中的函数不能直接修改state中的数据，而是要通过提交mutation修改。
                ctx.commit("setRemoteData",res.data.data);
            });
        }
    }
})

export default store;