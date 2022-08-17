// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {id: 1, name: '历史文学'},
      {id: 2, name: '社会科学'},
      {id: 3, name: '专业书'},
      {id: 4, name: '前端三剑客'},
      {id: 5, name: '艺术'},
      {id: 6, name: '哲学'},
      {id: 7, name: '科技'},
      {id: 8, name: '电子书'},
    ],
    videoList: [
      {
        data: {
          vid: 101,
          title: "汉书",
          coverUrl: "/static/img/fei01.jpg",
          praisedCount: 10,
          commentCount: 20,
          urlInfo: {
            // MP4 测试站点: https://www.tukuppt.com
            url: "", // 视频地址(需要在线视频才可以播放)
            // url: "https://img.tukuppt.com/video_show/15653652/01/00/67/6117b79d71fa8.mp4", // 视频地址
          },
          creator:{
            nickname:'作者:飞',
            avatarUrl:"/static/img/fei_32_32.png"
          }
        }
      },
      {
        data: {
          vid: 102,
          title: "战国策",
          coverUrl: "/static/img/fei01.jpg",
          urlInfo: {
            url: "", // 视频地址
          },
          creator:{
            nickname:'作者:飞',
            avatarUrl:"/static/img/octocat.png"
          }
        }
      }
    ],
    navId: '1',
    pid: '',
    videoId: 101,
    isTriggered: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  toSearchPage() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  changeNav(event) {
    let navId = event.currentTarget.id;
    this.setData({
      navId: navId>>>0, // tip: 字符串转为数字
      // videoList: []
    })
    wx.showLoading({title: '正在加载'})
    setTimeout(()=>{ // 调用接口,更新列表
      wx.hideLoading();
      // this.setData({
      //   videoList:[]
      // })
    },3000)

  },

  /**
   * 播放Video
   * 关闭上一个正在播放的video
   */
  playVideo(event) {
    let pid = event.currentTarget.id;
    pid !== this.data.pid && this.videoContext && this.videoContext.stop();
    this.videoContext = wx.createVideoContext(pid, this)
    this.videoContext.play();
    this.setData({
      pid
    })
  },

  play(event) {
    let videoId = event.currentTarget.id;
    this.setData({
      videoId
    })
  },

  // 记录视频播放进度回调,为以后重新跳转到指定播放位置
  handleTimeUpdate(event) {
    console.log(event);
  },

  // 下拉刷新,调用接口更新列表
  handlerRefresh() {
    this.setData({
      isTriggered: true
    });

    setTimeout(()=>{ // 调用接口,更新列表
      let newVideo = this.data.videoList;
      let fei =[
        {
          data: {
            vid: 201,
            title: "汉书_新",
            coverUrl: "/static/img/fei01.jpg",
            praisedCount: 10,
            commentCount: 20,
            urlInfo: {
              url: "", // 视频地址(需要在线视频才可以播放)
            },
            creator:{
              nickname:'作者:飞',
              avatarUrl:"/static/img/fei_32_32.png"
            }
          }
        },
        {
          data: {
            vid: 202,
            title: "战国策_新",
            coverUrl: "/static/img/fei01.jpg",
            urlInfo: {
              url: "", // 视频地址
            },
            creator:{
              nickname:'作者:飞',
              avatarUrl:"/static/img/octocat.png"
            }
          }
        }
      ]
      newVideo.push(...fei)
      this.setData({
        videoList: newVideo
      })

      this.setData({
        isTriggered: false
      });
    },1000)
  },

  // 滑动到底部,更新数据
  handlerScrollLower() {
    setTimeout(()=>{ // 调用接口,更新列表
      let newVideo = this.data.videoList;
      let fei =[
        {
          data: {
            vid: 301,
            title: "汉书_底部",
            coverUrl: "/static/img/fei01.jpg",
            praisedCount: 10,
            commentCount: 20,
            urlInfo: {
              url: "", // 视频地址(需要在线视频才可以播放)
            },
            creator:{
              nickname:'作者:飞',
              avatarUrl:"/static/img/fei_32_32.png"
            }
          }
        },
        {
          data: {
            vid: 302,
            title: "战国策_底部",
            coverUrl: "/static/img/fei01.jpg",
            urlInfo: {
              url: "", // 视频地址
            },
            creator:{
              nickname:'作者:飞',
              avatarUrl:"/static/img/octocat.png"
            }
          }
        }
      ]
      newVideo.push(...fei)
      this.setData({
        videoList: newVideo
      })

    },1000)
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
  onShareAppMessage({from}) {
    if (from === 'button') {
      return {
        title:"按钮_分享给好友:飞xx1",
        // page: "/pages/book/book",
        // imageUrl:'/static/img/fei01.jpg'
      };
    }else{
      return {
        title:"页面_分享给好友:飞xx2",
        // page: "/pages/book/book",
        // imageUrl:'/static/img/fei01.jpg'
      };
    }

  }
})
