// 引入公共方法和接口文件
const urlList = require("./utils/config.js");
const globalMethod = require("./utils/util.js");
const { WeToast } = require('./src/wetoast/wetoast.js');
App({
  WeToast,
  onLaunch(){
    this.getOpenId();
    let sessionId = wx.getStorageSync('sessionId');
    if (!sessionId) { this.getOpenId();}
  },
  getOpenId(){
    wx.login({
      success: res => {
        globalMethod.REQUESTPOST({
          url: urlList.c2opidUrl,
          data: { code: res.code },
          success: res => { 
            console.log(res) 
            wx.setStorageSync('sessionId', res.data.data.sessionId);
          }
        })
      }
    })
  }
})