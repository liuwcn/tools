<template>
    <div id="app">
        <my-header></my-header>
        <router-view class="view"></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
  import myHeader from './views/components/header.vue'
  import myFooter from './views/components/footer.vue'

  export default {
    name: 'app',
    components: {myHeader, myFooter}
  }
</script>

<style lang="scss">
    #app {

    }

</style>
