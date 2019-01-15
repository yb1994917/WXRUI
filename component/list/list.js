// component/list/list.js
const warn = (msg, getValue) => {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
};

Component({
  externalClasses: ['rui-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    list: {
      type: Array,
      value: []
    },
    iconUrl: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    value: {
      type: String,
      value: ''
    },
    isRight: {
      type: Boolean,
      value: false
    }
  },

  data: {

  },
  methods: {
    nextPage(){
      const { url } = this.data;
      if(!url || url === '') return;

      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
        warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
        return;
      }
      wx[this.data.linkType].call(wx, { url });
    }
  }
})
