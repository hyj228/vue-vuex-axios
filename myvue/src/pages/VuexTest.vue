<template>
    <div>
        <p>
            <router-link to="/second">进入第二页面组件</router-link>
        </p>

        <p>{{num}}</p>
        <p>{{myname}}</p>
        <p>{{msg}}</p>
        <p>{{isAdult}}</p>

        <!-- <p>{{remoteData}}</p> -->

        <input :value="num" @input="numChange">

        <button @click="btnClick">增加</button>
    </div>
</template>

<script>
// mapState函数需要单独导入才能使用
import {mapState,mapGetters,mapMutations,mapActions} from "vuex";

export default {
    mounted:function(){
        // 在根组件中注册了仓库对象时，在任何组件中都可以通过this.$store访问数据仓库

        //在组件中可以通过$store对象直接获取仓库中的数据，也可以直接修改仓库中的数据，但是vuex不推荐这样操作，vuex推荐组件只能以特定的方式从仓库中获取数据，以特定的方式修改组件中的数据。
        //console.log(this.$store.state.num);


        //使用dispatch提交一个action，
        // this.$store.dispatch("queryCateList");

        this.queryCateList();
    },
    methods:{
        //可以通过mapActions将store中的action直接映射到组件的methods中。
        ...mapActions(["queryCateList"]),
        btnClick(){
            // 组件中不要直接修改仓库中的数据
            // this.$store.state.num++;

            //组件中通过仓库提交mutation的形式修改仓库中的数据，由于mutation是仓库中预先设置好的，所以数据的修改总是以可预测的形式进行的。
            // this.$store.commit("numIncrease");

            //提交mutation时，可以附带一个参数，这个参数会传递给mutation的修改函数。
            this.$store.commit("setNum",100);
        },
        numChange(e){
            this.$store.commit("setNum",e.target.value);
        }
    },
    // 组件中需要使用仓库store中的数据时，vuex推荐的方法是在组件中添加一个同名的computed，在实现函数中返回仓库中的数据。
    // computed:{
    //     num:function(){
    //         return this.$store.state.num;
    //     },
    //     myname:function(){
    //         return this.$store.state.myname;
    //     }
    // }

    //当组件中需要使用store的多个数据时，为每一个数据写computed很麻烦，可以使用mapState函数一次性映射多个数据。
    //mapState函数会返回配置好的computed对象。
    // computed:mapState(["num","myname"]),


    //使用mapState生成computed对象时，就无法添加组件自身的computed，可以通过Object.assign合并对象或者ES7的对象展开运算符解决。
    // computed:Object.assign(mapState(["num","myname"]),{
    //     msg:function(){
    //         return "组件自身的computed";
    //     }
    // }),
    computed:{
        ...mapState(["num","myname","remoteData"]),
        msg:function(){
            return "组件自身的computed";
        },
        //mapGetters可以一次映射多个仓库中的getters
        ...mapGetters(["isAdult"])

    },
    

    



}
</script>

<style scoped>

</style>