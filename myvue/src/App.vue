<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
  }

  .clearfix:after{
    display: block;
    clear: both;
    content: "";
  }

  .page-root{
    height: 100vh;
    overflow-y: scroll;
  }

</style>
