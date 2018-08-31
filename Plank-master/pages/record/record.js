// pages/video/video.js
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: new Date().getFullYear(),      // 年份
    month: new Date().getMonth() + 1,    // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()],  // 月份字符串
    day_style:[],
    countTimes:"01:00:12",
    countDays:"12"
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var days_count = new Date(this.data.year, this.data.month, 0).getDate();
    let day_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == 12 ||i==16) {
        day_style.push({
          month: 'current', day: i, color: 'white', background: '#f7bd10'
        });
      }else if (i == 30) {
       day_style.push({
         month: 'current', day: i, color: 'white', background: '#f75151'
        });
      } else {
       day_style.push({
          month: 'current', day: i, color: '#555'
        });
      }
    }
    this.setData({
     day_style
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})