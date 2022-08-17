// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '', // 手机号
    password: '' // 用户密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.removeStorageSync('userInfo')
  },

  // 表单项内容发生改变的回调,收集数据
  handleInput(event) {
    // let type = event.currentTarget.id;// 方法一: id传值 取值： phone || password
    let type = event.currentTarget.dataset.type; // 方法二: data-key=value
    // console.log(event);  HTML中定义一个  data-key,这里就收集到一个
    this.setData({
      [type]: event.detail.value
    })
  },

  async login() {
    let {phone, password} = this.data;
    console.log(phone, password);
    if (!phone || !password) {
      wx.showToast({
        title:'手机号或密码不能为空',
        icon:'none'
      })
      return
    }

    let phoneReg = /^\d{11}$/;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none',
      })
      return
    }


    if (String(password) === '123') { // 调用接口
      wx.showToast({title: '登录成功', icon: 'success'})
      wx.setStorageSync('userInfo', JSON.stringify({
        userId: 10001,
        nickname: '昵称fei',
        avatarUrl:'/static/img/user1.jpg'
      }))
      wx.setStorage({ // tip:存储登录身份,以后改到网络请求接
        key: 'cookies',
        data:'123456fei789abc'
      })
      // wx.getStorageSync('cookies')
      wx.reLaunch({url: '/pages/personal/personal'})
    } else {
      wx.showToast({title: '登录失败', icon: "none"})
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
