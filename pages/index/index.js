const bannerList = require('../../utils/banner.js');
Page({
  onLoad(){
    this.setData({ bannerList: bannerList})
  },
  data: {
    current: 0,
  },
  changeFun(e){
    this.setData({ current: e.detail.current})
  }
})