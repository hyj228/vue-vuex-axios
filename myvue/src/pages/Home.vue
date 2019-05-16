<template>
  <div class="hello page-root">
    <CateListItem v-for="c,i in cateList" :cate=c :index=i :key="i"></CateListItem>
  </div>
</template>

<script>

// 如果在页面组件中直接导入axios使用，那么每个页面都需要导入一次，很麻烦，可以选择将axios配置为每个组件的属性中。
// import axios from "axios";

import CateListItem from "../components/CateListItem.vue";

export default {
  components:{
    CateListItem
  },
  data () {
    return {
      cateList:[]
    }
  },
  methods:{
    
  },
  mounted:function(){
    this.http.get("/douyu/api/RoomApi/game")
    .then(res=>{
      //ajax请求回的数据需要记录在data中。
      this.cateList = res.data.data;
    });

    console.log("home组件加载完毕");

  }
}
</script>


<style scoped>
  .hello{
    display: flex;
    flex-wrap: wrap;
  }

  
  
</style>
