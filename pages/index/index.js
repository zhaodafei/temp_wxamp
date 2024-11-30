// index.js
// const app = getApp()

Page({
  data: {
    feiTime:"2022年8月8日23:46:11",
    nowDate: '2022-12-31 23:59:59', //结束时间
    countdown: '', //倒计时
    days: '00', //天
    hours: '00', //时
    minutes: '00', //分
    seconds: '00', //秒

    // 轮播图
    sBackground: ['demo-text-3', 'demo-text-1', 'demo-text-2',],
    sBackground2: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  countTime() {
    let days,hours, minutes, seconds;
    let nowDate = this.data.nowDate;
    console.log(nowDate)
    let that = this;
    let now = new Date().getTime();
    let end = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1
    // console.log("开始时间：" + now, "截止时间:" + end);
    let leftTime = end - now; //时间差
    if (leftTime >= 0) {
      days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      minutes = Math.floor(leftTime / 1000 / 60 % 60);
      seconds = Math.floor(leftTime / 1000 % 60);
      seconds = seconds < 10 ? "0" + seconds : seconds
      minutes = minutes < 10 ? "0" + minutes : minutes
      hours = hours < 10 ? "0" + hours : hours
      that.setData({
        countdown: days+":"+hours + "：" + minutes + "：" + seconds,
        days,
        hours,
        minutes,
        seconds
      })
      setTimeout(that.countTime, 1000);
    } else {
      that.setData({
        countdown: '已截止'
      })
    }
  },
  onLoad: function (options) {
    this.countTime();
  },
});
