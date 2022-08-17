// bookPackage/pages/bookDetail/bookDetail.js
import PubSub from 'pubsub-js'
import dayjs from "dayjs";

let appInstance = getApp(); // 引入全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 音乐是否播放
    book: { // 图书详情对象
      ar: [{name: '点击中心,播放进度条'}],
      al: {picUrl: '/static/img/fei01.jpg'},
    },
    bookId: '', // 图书id
    bookLink: '', // 图书的链接
    currentTimeS: 1660669200000, // 初始时间秒数 差为 30000
    currentTime: '00:00',  // 实时时间 1660669200000  --- 2022-08-17 01:00:00
    // durationTimeS: 1660669650000,
    durationTime: '07:30', // 总时长  1660669650000  --- 2022-08-17 01:07:30
    currentWidth: 0, // 实时进度条的宽度,最大宽度450
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: "论语-我是页面动态标题"
    })
    console.log(appInstance.globalData.msg);
    PubSub.subscribe('bookId',(msg,bookId)=>{
      console.log("拿到订阅数据11___",bookId);
      // 取消订阅
      PubSub.unsubscribe('bookId');
    })
    // 发布消息数据给recommendSong页面
    let type = 'foo'
    PubSub.publish('switchType', type)

    // 时间处理
    // dayjs(1660669200000).format('YYYY-MM-DD hh:mm:ss');
    // this.stepTime();
  },

  // 播放,进度条
  stepTime() {
    if (this.data.currentWidth < 450) {
      let currentTimeS = this.data.currentTimeS + 30000;
      let currentTime = dayjs(currentTimeS).format('mm:ss');
      this.setData({
        currentTime,
        currentTimeS
      })

      let currentWidth = this.data.currentWidth + 30;
      this.setData({
        currentWidth
      })

      let that = this;
      setTimeout(that.stepTime, 500); // 执行回调
    } else {
      this.setData({
        isPlay: false
      })
    }

  },

  handleSwitch(event) {
    console.log(event.currentTarget.id);
  },

  handleMusicPlay() {
    let isPlay = !this.data.isPlay;
    this.setData({isPlay})
    // console.log(isPlay);
    if (isPlay) { // 初始化
      this.setData({
        currentTimeS: 1660669200000, // 初始时间秒数 差为 30000
        currentTime: '00:00',  // 实时时间 1660669200000  --- 2022-08-17 01:00:00
        // durationTimeS: 1660669650000,
        durationTime: '07:30', // 总时长  1660669650000  --- 2022-08-17 01:07:30
        currentWidth: 0, // 实时进
      })

      this.stepTime();
    }
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
