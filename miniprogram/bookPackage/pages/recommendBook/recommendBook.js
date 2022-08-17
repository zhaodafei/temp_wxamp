// bookPackage/pages/recommendBook/recommendBook.js
import PubSub from 'pubsub-js'
import dayjs from "dayjs";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    day: '', // 天
    month: '', // 月
    recommendList: [ // 推荐列表数据
      {
        name: '史记', album: {picUrl: '/static/img/icon_user.svg'},
        artists: [{name: '项籍者，下相人也，字羽。初起时，年二十四。其季父【季父：叔父。】项梁，' +
              '梁父即楚将项燕，为秦将王翦所戮者也。项氏世世为楚将，封于项，故姓项氏。项籍少时' +
              '，学书不成，去学剑，又不成。项梁怒之'}
        ]
      },
      {name:'论语',album:{picUrl:'/static/img/icon_user.svg'},artists:[{name:'学而不思则罔，思而不学则殆'}]},
      {name:'论语',album:{picUrl:'/static/img/icon_user.svg'},artists:[{name:'知之者不如好之者，好之者不如乐之者'}]},
      {name:'论语',album:{picUrl:'/static/img/icon_user.svg'},artists:[{name:'三人行，必有我师焉。择其善者而从之，其不善者而改之'}]},
      {name:'论语',album:{picUrl:'/static/img/icon_user.svg'},artists:[{name:'逝者如斯夫，不舍昼夜'}]},
      {name:'论语',album:{picUrl:'/static/img/icon_user.svg'},artists:[{name:'三军可夺帅也，匹夫不可夺志也'}]},
    ],
    index: 0, // 点击图书的下标
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.setData({
    //   day: new Date().getDate(),
    //   month: new Date().getMonth() + 1
    // })
    // dayjs().format('YYYY MM-DD HH:mm:ss')

    this.setData({
      day: dayjs().format('DD'),
      month:dayjs().format('MM')
    })

    // 订阅来自bookDetail页面发布的消息
    PubSub.subscribe('switchType',(msg,type)=>{
      console.log("拿到订阅数据22___",type);
      // 将bookId回传给bookDetail页面
      PubSub.publish('bookId', 123)
    })
  },

  toBookDetail(event) {
    let {book, index} = event.currentTarget.dataset;
    this.setData({
      index
    })
    // 路由跳转传参： query参数
    wx.navigateTo({
      // 不能直接将song对象作为参数传递，长度过长，会被自动截取掉
      // url: '/pages/songDetail/songDetail?songPackage=' + JSON.stringify(songPackage)
      url: '/bookPackage/pages/bookDetail/bookDetail?bookId=' + book.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
