Component({
  externalClasses: ['rui-class'],

  options: {
    multipleSlots: true 
  },
  data: {
  },
  properties: {
    swiperList: {
      type: Array,
      value: []
    },
    interval: {
      type: Number,
      value: 5000
    },
    duration: {
      type: Number,
      value: 500
    },
    displayMultipleItems: {
      type: Number,
      value: 1
    },
    current: {
      type: Number,
      value: 0
    },
    type: {
      type: String,
      value: 'image'
    },
    currentItemId: {
      type: String,
      value: ''
    },
    indicatorColor: {
      type: String,
      value: ''
    },
    swiperwidth: {
      type: String,
      value: ''
    },
    swiperheight: {
      type: String,
      value: ''
    },
    imgwidth: {
      type: String,
      value: ''
    },
    imgheight: {
      type: String,
      value: ''
    },
    indicatorActiveColor: {
      type: String,
      value: ''
    },
    previousMargin: {
      type: String,
      value: '0px'
    },
    nextMargin: {
      type: String,
      value: '0px'
    },
    autoplay: {
      type: Boolean,
      value: false
    },
    circular: {
      type: Boolean,
      value: false
    },
    vertical: {
      type: Boolean,
      value: false
    },
    indicatorDots: {
      type: Boolean,
      value: false
    },
    isOpacity: {
      type: Boolean,
      value: false
    },
    isScale: {
      type: Boolean,
      value: false
    },
    skipHiddenItemLayout: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    changeSwiper(e){
      this.triggerEvent('swiperchange', { current: e.detail.current}, {});
    },
    finishSwiper(e){
      this.triggerEvent('swiperfinish', { current: e.detail.current }, {});
    },
    tapSwiper(e){
      this.triggerEvent('swipertap', { index: e.currentTarget.dataset.index }, {});
    }
  }
});
