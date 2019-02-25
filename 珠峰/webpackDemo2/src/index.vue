<style>
</style>

<template>
  <div id="index">
    ddddd
    <router-view/>
  </div>
</template>

<script>
  // import Global from './libs/global.js'

  export default {
    data () {
      return {
        test: 'dd'
      }
    },
    created () {
      console.log('index.vue~~~~~~~~~~~')
    }
  }
</script>
