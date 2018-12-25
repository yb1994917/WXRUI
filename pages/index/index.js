const bannerList = require('../../utils/banner.js');
Page({
  onLoad(){
    this.setData({ bannerList: bannerList})
  },
  data: {
    current: 0,
    current_text: 0,
    navList: ['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7', '选项8', '选项9']
  },
  changeFun(e){
    this.setData({ current: e.detail.current})
  },
  getIndex(e){
    this.setData({ current_text: e.detail.index})
  }
})