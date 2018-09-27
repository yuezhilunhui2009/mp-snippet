const app = getApp()

Page({
  data: {

  },
  onLoad: function () {},

  onPullDownRefresh () {
    console.log('onPullDownRefresh')
  },

  onReachBottom () {
    console.log('onReachBottom')
  }
})
