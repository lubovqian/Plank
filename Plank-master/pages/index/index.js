//index.js
//获取应用实例
Page({
  data: {
    isStart:false,
    times: "00:00:00",
    showBtn:true,
    showVideo:false,
    showTitle:false,
    showTime:true,
    moveTime:true,
    num: 0,
    flag:0,
    time: null,
    h: 0,
    m: 0,
    s: 0
  },
  onLoad: function () {

  },
  changeBg: function () {
    var that = this
    var h = this.data.h
    var m = this.data.m
    var s = this.data.s
    this.data.num++;
    var num = this.data.num
    var result = num / 2;
    if (num % 2 == 0) {
      this.setData({
        isStart: false,
      })
      clearInterval(this.data.time)
    } else {
      this.setData({
        isStart:true,
        times:"00:00:00"
      })
      function timer() {
        s++;
        var ss = s < 10 ? ("0" + s) : s;
        var mm = m < 10 ? ("0" + m) : m;
        var hh = h < 10 ? ("0" + h) : h;
        if (s >= 60) {
          s = 0;
          m++;
        } else if (m >= 60) {
          m = 0;
          h++;
        }
        that.setData({
          times: hh + ":" + mm + ":" + ss
        })
        console.log(hh + ":" + mm + ":" + ss)
      }
      this.data.time = setInterval(timer, 1000)
      console.log(num)
      console.log(result)
    }
  },
btnRecordClick:function(){
   wx.navigateTo({
     url: '/pages/record/record',
   })
},
  btnVideoClick:function(){
    var that=this;
    var flag = that.data.flag;
    var result = flag/ 2;
    if (flag% 2 == 0) {
      that.setData({
        showVideo: true,
        showTitle: true,
        showTime: false,
        moveTime: false
      })
    } else {
    that.setData({
      showVideo:false,
      showTitle:false,
      showTime: true,
      moveTime: true
    })
  }
    console.log(flag)
    console.log(result)
  }
})