<template>
    <div class="root" :class="itemClass">
        <router-link :to="'/roomlist/'+cate.cate_id">
            <img :src="cate.game_icon">
            <h4>{{cate.game_name}}</h4>
        </router-link>
    </div>
</template>

<script>
export default {
    props:["cate","index"],
    computed:{
        itemClass:function(){
            return {
                noleft:this.index%3==0,
                notop:this.index<3,
                noright:this.index%3==2
            }
        }
    }
}
</script>

<style scoped>
    .root{
        width: 33.33%;
        border: dashed 1px grey;
        box-sizing: border-box;
        text-align: center;
        
    }

    .noleft{
        border-left: none;
    }

    .notop{
        border-top: none;
    }

    .noright{
        border-right: none;
    }
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;

    }

    h4{
        font-size: 12px;
        margin: 0;
        color: black;
    }

    a{
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        box-sizing: border-box;
    }


</style>