// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholderContent: '', // placeholder的内容
    hotList: [ // 热搜榜数据
      {searchWord: 'xx1', iconUrl: '/static/img/icon_bell.svg'},
      {searchWord: 'xx2', iconUrl: '/static/img/icon_bell.svg'},
      {searchWord: 'xx3', iconUrl: '/static/img/icon_bell.svg'},
      {searchWord: 'xx4', iconUrl: '/static/img/icon_bell.svg'},
      {searchWord: 'xx5', iconUrl: '/static/img/icon_bell.svg'},
    ],
    searchContent: '', // 用户输入的表单项数据
    searchList: [ // 关键字模糊匹配的数据
      // {id: 1, name: '论语'},
      // {id: 2, name: '史记'}
    ],
    historyList: [  // 搜索历史记录
      "xx1", "xx2", "xx3", "xx4", "xx5",
      "xx6", "xx7", "xx8", "xx9", "xx10",
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleInputChange(event) {
    console.log(event.detail.value);
    if (event.detail.value && event.detail.value.length > 1) {
      this.setData({
        searchContent:event.detail.value,
        searchList: [
          {id: 1, name: '论语1'},
          {id: 2, name: '史记2'},
          {id: 3, name: '史记3'},
          {id: 4, name: '史记4'},
          {id: 5, name: '史记5'},
          {id: 6, name: '史记6'},
          {id: 7, name: '史记7'},
          {id: 8, name: '史记8'},
          {id: 9, name: '史记9'},
          {id: 10, name: '史记10'},
        ]
      });
    }else{
      this.setData({
        searchList: []
      });
    }
  },
  clearSearchContent() {
    this.setData({
      searchContent: '',
      searchList: [],
    });
  },
  toSearch() {

  },
  deleteSearchHistory() {

  },
  toPlay() {

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
