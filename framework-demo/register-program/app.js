App({
  onLaunch (params) {
    console.log(`==app.js== [生命周期] App.onLaunch(${JSON.stringify(params, null, 4)})`)
    this.customMethod()

    try {
      throw new Error('为 try...catch 而准备的异常')
    } catch (e) {
      console.log('==app.js== 通过 try...catch 捕获异常不会触发 App.onError')
    }

    // 如果异常没有被开发人员主动捕获，则会跳转到 onError 
    console.log('==app.js== 如果下方不打印 ABAB，则表示异常阻止了代码正常执行')
    throw new Error('为 App.onError 准备的异常')
    console.log('==app.js== ABAB')    
  },
  onShow (params) {
    console.log(`==app.js== [生命周期] App.onShow(${JSON.stringify(params, null, 4)})`)
    this.customMethod()
  },
  onHide (params) {
    console.log(`==app.js== [生命周期] App.onHide(${JSON.stringify(params, null, 4)})`)
    this.customMethod()
  },
  onError (errorStr) {
    console.log(`==app.js== [全局错误] App.onError("${errorStr}")`)
  },
  onPageNotFound (params) {
    console.log(`==app.js== [页面缺失] App.onPageNotFound(${JSON.stringify(params, null, 4)})`)
  },
  customMethod () {
    console.log('==app.js== App.customMethod')
  }
})