// index.js
// const app = getApp()
const {envList} = require('../../envList.js');

Page({
  data: {
    bannerList: [ // 轮播图数据
      {pic: '/static/img/fei01.jpg'},
      {pic: '/static/img/fei01.jpg'},
      {pic: '/static/img/fei01.jpg'},
    ],
    recommendList: [ // 推荐图书
      {name:'论语',picUrl:"/static/img/fei01.jpg"},
      {name:'史记',picUrl:"/static/img/fei01.jpg"},
      {name:'左传',picUrl:"/static/img/fei01.jpg"},
      {name:'汉书',picUrl:"/static/img/fei01.jpg"},
      {name:'战国策',picUrl:"/static/img/fei01.jpg"},
    ],
    topList: [ // 排行榜
      {
        name: "史书1", tracks: [
          {id: 1, name: '论语', picUrl: "/static/img/fei01.jpg"},
          {id: 1, name: '论语', picUrl: "/static/img/fei01.jpg"},
          {id: 1, name: '论语', picUrl: "/static/img/fei01.jpg"},
        ]
      },
      {
        name: "史书2", tracks: [
          {id: 2, name: '史记', picUrl: "/static/img/fei01.jpg"},
          {id: 2, name: '史记', picUrl: "/static/img/fei01.jpg"},
          {id: 2, name: '史记', picUrl: "/static/img/fei01.jpg"},
        ]
      },
      {
        name: "史书3", tracks: [
          {id: 3, name: '左传', picUrl: "/static/img/fei01.jpg"},
          {id: 3, name: '左传', picUrl: "/static/img/fei01.jpg"},
          {id: 3, name: '左传', picUrl: "/static/img/fei01.jpg"},
        ]
      },
    ]
  },

  onLoad: function (options) {
    // 发送网络请求
    // this.setData({bannerList: []}) // 赋值
    // this.setData({recommendList: []}) // 赋值

    // // 自定义tabBar使用
    // if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    //   this.getTabBar().setData({
    //     selected: 0,
    //   })
    // }
  },

  toRecommendBook() {
    wx.navigateTo({
      url: '/bookPackage/pages/recommendBook/recommendBook'
    })
  },
  toOther() {
    wx.navigateTo({
      url: '/otherPackage/pages/other/other'
    })
  },

  toBookDetail(event) {
    wx.navigateTo({
      url: '/songPackage/pages/songDetail/songDetail?musicId=' + event.currentTarget.dataset.id
    })
  },

  toH5(event) {
    wx.navigateTo({
      url: '/pages/h5/index?musicId=123456'
    })
  },
  toH5Back(event) {
    wx.navigateTo({
        url: '/pages/h5Back/index'
    })
  },
});
