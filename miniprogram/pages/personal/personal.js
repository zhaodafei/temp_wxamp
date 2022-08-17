// pages/personal/personal.js

let startY = 0; // 手指起始的坐标
let moveY = 0; // 手指移动的坐标
let moveDistance = 0; // 手指移动的距离

Page({

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: {
      nickname: "",
      avatarUrl:''
    },
    coverTransform: 'translateY(0)',
    coveTransition: '',
    recentReadList: [ // 最近看书记录
      {id: 1, book:{id:'11',name: '论语', picUrl: '/static/img/fei01.jpg'}}
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 读取用户的基本信息
    let userInfo = wx.getStorageSync('userInfo');
    if(userInfo){ // 用户登录
      // 更新userInfo的状态
      this.setData({
        userInfo: JSON.parse(userInfo)
      })

      // 获取用户播放记录
      this.getUserRecentReadList(this.data.userInfo.userId)
    }
    console.log("???????",userInfo);
  },

  getUserRecentReadList(userId) {
    console.log(userId + "用户最近阅读书为_论语,史记");
  },

  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  handleTouchStart(event){
    this.setData({
      coveTransition: ''
    })
    // 获取手指起始坐标
    startY = event.touches[0].clientY;
  },

  handleTouchMove(event){
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;

    if(moveDistance <= 0){
      return;
    }
    if(moveDistance >= 80){
      moveDistance = 80;
    }
    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    })
  },

  handleTouchEnd(){
    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coveTransition: 'transform 1s linear'
    })
  },

  toBookDetail() {

  },

})
