<style lang="sass">
</style>

<template>
  <div id="other">
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
      console.log('other.vue~~~~~~~~~~~')
    }
  }
</script>
