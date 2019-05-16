<template>
    <div>
        <button @click="backClick">返回</button>

        <h1>{{num}}</h1>
    </div>
</template>

<script>

import {mapState} from "vuex";

export default {
    methods:{
        backClick(){
            history.back();
        }
    },
    computed:{
        ...mapState(["num"])
    }
}
</script>

<style scoped>

</style>