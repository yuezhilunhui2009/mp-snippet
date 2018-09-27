export function genLifeCircleFunction (pageName, logColor) {
  return {
      onLoad (query) {
          console.log(`==${pageName}== [生命周期] Page.onLoad(${JSON.stringify(query, null, 4)})`, `page:`, this)
        },
        onShow () {
          console.log(`==${pageName}== [生命周期] Page.onShow()`, `page:`, this)
        },
        onReady () {
          console.log(`==${pageName}== [生命周期] Page.onReady()`, `page:`, this)
        },
        onHide () {
          console.log(`==${pageName}== [生命周期] Page.onHide()`, `page:`, this)
        },
        onUnload () {
          console.log(`==${pageName}== [生命周期] Page.onUnload()`, `page:`, this)
        },
        onPullDownRefresh () {
          console.log(`==${pageName}== [事件] Page.onPullDownRefresh()`, `page:`, this)
        },
        onReachBottom () {
          console.log(`==${pageName}== [事件] Page.onReachBottom()`, `page:`, this)
        },
        onPageScroll (e) {
          console.log(`==${pageName}== [事件] Page.onPageScroll(${JSON.stringify(e, null, 4)})`, `page:`, this)
        },
        onShareAppMessage (e) {
          console.log(`==${pageName}== [事件] Page.onShareAppMessage(${JSON.stringify(e, null, 4)})`, `page:`, this)
          return {
            title: '小程序 register-page demo',
            path: '/index/index'
            // imageUrl: (默认值：使用默认截图)
          }
        },
        onTabItemTap (e) {
          console.log(`==${pageName}== [事件] Page.onTabItemTap(${JSON.stringify(e, null, 4)})`, `page:`, this)
        }
  }
}