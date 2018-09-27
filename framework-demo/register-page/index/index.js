const app = getApp()
console.log(`==index.js== getApp()`, app)

Page({
  data: {
    typeString: '字符串类型字段',
    typeNumber: 12345678,
    typeBoolean: true,
    typeObject: {
      k1: 'v1',
      k2: 'v2'
    },
    typeArray: [1, 2, 3],
    typeStringArray: ['1', '2', '3'],
    typeObjectArray: [
      { k1: 'v1' },
      { k2: 'v2' }
    ],
    // 无效字段
    typeFunction () {
      console.log('Page.data.typeFunction')
    }
  },
  onLoad (query) {
    console.log(`==index.js== [生命周期] Page.onLoad(${JSON.stringify(query, null, 4)})`, `page:`, this, `app:`, app)
  },
  onShow () {
    console.log(`==index.js== [生命周期] Page.onShow()`, `page:`, this, `app:`, app)
  },
  onReady () {
    console.log(`==index.js== [生命周期] Page.onReady()`, `page:`, this, `app:`, app)
  },
  onHide () {
    console.log(`==index.js== [生命周期] Page.onHide()`, `page:`, this, `app:`, app)
  },
  onUnload () {
    console.log(`==index.js== [生命周期] Page.onUnload()`, `page:`, this, `app:`, app)
  },
  onPullDownRefresh () {
    console.log(`==index.js== [事件] Page.onPullDownRefresh()`, `page:`, this, `app:`, app)
  },
  onReachBottom () {
    console.log(`==index.js== [事件] Page.onReachBottom()`, `page:`, this, `app:`, app)
  },
  onPageScroll (e) {
    console.log(`==index.js== [事件] Page.onPageScroll(${JSON.stringify(e, null, 4)})`, `page:`, this, `app:`, app)
  },
  onShareAppMessage (e) {
    console.log(`==index.js== [事件] Page.onShareAppMessage(${JSON.stringify(e, null, 4)})`, `page:`, this, `app:`, app)
    return {
      title: '小程序 register-page demo',
      path: '/index/index'
      // imageUrl: (默认值：使用默认截图)
    }
  },
  onTabItemTap (e) {
    console.log(`==index.js== [事件] Page.onTabItemTap(${JSON.stringify(e, null, 4)})`, `page:`, this, `app:`, app)
  },
})