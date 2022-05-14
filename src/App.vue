<template>
  <div id="app">
    <div class="nav">
      <router-link class="navItem" to="/todoList">todoList</router-link>
      <router-link class="navItem" to="/vmodel">模板中的变化</router-link>
      <router-link class="navItem" to="/comp">组件中的变化</router-link>
      <router-link class="navItem" to="/callback">组件传递函数</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TodoList from "./views/TodoList/index.vue";

export default {
  components:{
    TodoList
  },
  setup(){
  
  }
}
</script>
<style scoped>
#app{
  width: 100%;
  height: 100%;
  display: flex;
}
.nav{
  width: 250px;
  flex-shrink: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: cornsilk;
}
.navItem{
  display: block;
  width: 250px;
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  background-color: brown;
  color: #000;
  font-size: 24px;
}
.router-link-active{
  background-color: blueviolet;
}
.main{
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>

