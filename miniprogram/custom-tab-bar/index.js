// 使用步骤:
// 01) miniprogram/app.json 中tabBar的custom:true,就可以使用
// 02) 在三个文件中使用
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "主页cu",
        "iconPath": "/static/img/extra/tab-home.png",
        "selectedIconPath": "/static/img/extra/tab-home-current.png"
      },
      {
        "pagePath": "/pages/book/book",
        "text": "图书cu",
        "iconPath": "/static/img/extra/tab-my.png",
        "selectedIconPath": "/static/img/extra/tab-my-current.png"
      },
      {
        "pagePath": "/pages/personal/personal",
        "text": "我的cu",
        "iconPath": "/static/img/extra/tab-my.png",
        "selectedIconPath": "/static/img/extra/tab-my-current.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path

      // // warning: 这种写法logo切换不过来;并且需要点击2下
      // wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })

      // warning:这中方式可以实现但是不提倡,页面和tar会有闪烁或者延迟
      wx.switchTab({url,
        success: function (e) {
          var page = getCurrentPages().pop();
          page.onLoad();
        }
      })
    }
  }
})
