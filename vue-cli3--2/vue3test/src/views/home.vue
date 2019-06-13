<template>
  <div id="home-page">
    <div class="test">home</div>
    <img class="testImg" src="http://192.168.1.103:8489/s/group00/M00/00/19/ooYBAFz4vTGAPpyUAAw95Q5AXdE051.png?st=VRzfcZaZeJ_mqCba6Cz44g&e=1562399056" alt="">
    <img class="testImg2" alt=""><!--  src="../assets/dark.png" -->
    <div class="test-border"></div>
    <van-button type="danger" class="test-btn ignore">按钮</van-button>
    <van-button plain hairline type="danger">细边框按钮</van-button>
    <van-button
      loading
      type="danger"
      loading-type="spinner"
      loading-text="加载中..."
    />
    <van-icon name="close" />
    <van-popup v-model="show">内容</van-popup>
    <van-popup v-model="show" position="top" :overlay="false">
      内容
    </van-popup>
    <div class="example"></div>
  </div>
</template>

<script>

export default {
  name: 'home-page',
  data() {
    return {
      show: false
    }
  },
  created() {
    this.$axios({
      url: 'api/trending_search'
    }).then(data => {
      console.log(data)
    }).catch(() => {
      console.log('出错了')
    })
  }
}
</script>

<style lang="scss">
  @import '@/scss/views/home.scss';
</style>