const list = require('../../utils/homeList.js');
Page({
  onLoad(){
    this.setData({ homeList: list})
  },
  data: {
    current: 0,
    current_text: 0,
    navList: ['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7', '选项8', '选项9'],
    html: '<view>这是一个view组件</view>',
    nodes: `<div style="color:red;">Hello&nbsp;World!</div>`
  },
  changeFun(e){
    this.setData({ current: e.detail.current})
  },
  getIndex(e){
    this.setData({ current_text: e.detail.index})
  },
  tap(e){
    console.log(e)
  }
})