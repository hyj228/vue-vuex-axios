<template>
    <div id="root">
        <div id="bg" :style="bgStyle">
            <div id="bottom">
                <span>{{room.nickname}}</span>
                <span>{{room.online|wan}}</span>
            </div>
        </div>
        <p>{{room.room_name}}</p>
    </div>
</template>

<script>
export default {
    props:["room"],
    computed:{
        bgStyle:function(){
            return {
                "background-image":`url(${this.room.room_src})`
            }
        }
    }
}
</script>

<style scoped>
    #root{
        float: left;
        width: 44rem;
        /* border: solid 1px red; */
        margin-left: 4rem;
        margin-top: 4rem;
    }

    #bg{
        height: 25rem;
        background-size: 100%;
        border-radius: 8px;
        position: relative;
    }

    p{
        margin: 0;
        font-size: 3rem;
        padding: 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #bottom{
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
    }

    #bottom span{
        color: white;
        font-size: 3rem;
        padding: 1vw 2rem;
        
    }
</style>