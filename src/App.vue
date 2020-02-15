<template>
    <div id="app">
        <!--                <my-header></my-header>-->
        <myMenu></myMenu>
        <el-divider></el-divider>
        <router-view class="view"></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
  import myHeader from './views/components/header.vue'
  import myFooter from './views/components/footer.vue'
  import myMenu from './views/components/menu.vue'

  export default {
    name: 'app',
    components: {myHeader, myFooter, myMenu}
  }
</script>

<style lang="scss">
    #app {

    }

</style>
