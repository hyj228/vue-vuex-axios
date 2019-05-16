<template>
    <div class="page-root" @scroll="pageScroll">
        <nav>
            <button @click="backClick">后退</button>
        </nav>
        <main class="clearfix">
            <RoomListItem 
                v-for="r,i in roomList" 
                :key="i"
                :room="r"
            ></RoomListItem>
        </main>
        <p id="indicator">正在加载更多</p>
    </div>
</template>

<script>

import RoomListItem from "../components/RoomListItem.vue";

export default {
    components:{
        RoomListItem
    },
    methods:{
        backClick(){
            history.back();
        },
        pageScroll(e){
            //内容高度
            // console.log(e.target.scrollHeight);
            //元素本身高度
            // console.log(e.target.clientHeight);
            //滚动偏移量
            // console.log(e.target.scrollTop);

            if(e.target.scrollHeight-e.target.clientHeight<=e.target.scrollTop+40){
                this.sendRequest()
            }

        },
        sendRequest(){
            if(this.isLoading){
                return;
            }

            this.isLoading = true;

            this.http.get("/douyu/api/RoomApi/live/"+this.$route.params.cateid,{
                params:{
                    offset:this.roomList.length/this.itemOfPage,
                    limit:this.itemOfPage
                }
            })
            .then(res=>{
                // console.log(res.data);
                this.roomList = this.roomList.concat(res.data.data);
                this.isLoading = false;
            })
            .catch(err=>{
                this.isLoading = false;
            })
        }
    },
    data:function(){
        return {
            roomList:[],
            isLoading:false,
            itemOfPage:10
        }
    },
    mounted:function(){
        // console.log(this.$route.params.cateid);
    },
    //当组件被激活时调用。
    activated:function(){
        // console.log("组件被激活了");
        this.roomList = [];
        // 对于二级页面，进入时需要再次发送请求时，可以将请求写在activity中
        this.sendRequest();
    }
}
</script>

<style scoped>
    nav{
        height: 64px;
        background-color: aqua;
    }

    #indicator{
        background-color: #999999;
        margin: 0;
        text-align: center;
        font-size: 6rem;
        height: 60px;
        line-height: 60px;
    }
</style>