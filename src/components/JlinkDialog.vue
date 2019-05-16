<template>
  <div class="jlink-dialog" v-show="visible">
    <div class="jlink-dialog-mask"></div>
    <div class="jlink-dialog-detail">
      <div class="jlink-dialog-title">{{title}}</div>
      <div class="jlink-dialog-content" v-if="showOperate">
        <slot></slot>
      </div>
      <!--   <div class="jlink-dialog-content-two" v-else>
        <div>
          <span>配件编号：</span>
          <span>PJ0095653182</span>
        </div>
        <div>
          <span>配件名称：</span>
          <span>零件</span>
        </div>
        <div>
          <span>规格：</span>
          <span>XH9039898323</span>
        </div>
        <div>
          <span>型号：</span>
          <span>XH</span>
        </div>
        <div>
          <span>品牌：</span>
          <span>品牌1</span>
        </div>
        <div>
          <span>数量：</span>
          <span>2</span>
        </div>
      </div>-->
      <div class="jlink-dialog-operate" v-if="showOperate">
        <button>添加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    showOperate: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    bindPickerChange(e) {
      console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.index = e.mp.detail.value;
    },
    toCloseDialog() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="less" scoped>
.jlink-dialog-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.jlink-dialog-detail {
  position: fixed;
  z-index: 5000;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 10rpx;

  .jlink-dialog-title {
    position: relative;
    padding: 40rpx 0;
    font-size: 16px;
    text-align: center;
    > i-icon {
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }
  .jlink-dialog-content {
    div {
      display: flex;
      display: -webkit-flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 20rpx 50rpx;
      position: relative;
      > span {
        padding: 0 10rpx;
        width: 36%;
        text-align: left;
      }
      > input {
        flex: 1;
        padding-left: 5%;
        border-bottom: 1rpx solid #c8c8c8;
      }
      picker {
        flex: 1;
        div {
          padding-left: 5%;
        }
      }
      i-icon {
        position: absolute;
        top: -3;
        right: 50rpx;
      }
    }
  }
  .jlink-dialog-content-two {
    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 0rpx 50rpx 40rpx;
      > span {
        &:nth-of-type(1) {
          flex: 1 0 30%;
          text-align: right;
        }
        &:nth-last-of-type(1) {
          flex: 1 0 60%;
        }
      }
    }
  }
  .jlink-dialog-operate {
    padding: 20rpx 50rpx 40rpx;
    button {
      padding: 20rpx 0;
      background-color: #2a8af2;
      border-radius: 10rpx;
      color: #fff;
    }
  }
}
</style>
