<template>
  <div id="msg">
    <button @click="toShowMsg">hero的msg演示</button>
    <button @click="toShowLoading">hero的loading演示</button>
    <button @click="toShowDialog">hero的dialog演示</button>
    <button @click="toShowConfirm">hero的confirm演示</button>
    <button @click="toShowTool">hero的tool演示</button>
    <button @click="toShowCallPop">hero的callPop演示</button>
    <button @click="toShowKeyBoard">hero的keyboard演示</button>
  </div>
</template>

<script>
import Msg from "hero/components/msg";
export default {
  data() {
    return {
      msgText: "引用组件的方式使用Msg",
      showMsg: true
    };
  },
  components: {
    Msg
  },
  methods: {
    toShowMsg() {
      this.$hero.msg.show({
        text: "这是利用vue-cli-mluti-page演示msg的例子",
        times: 1500
      });
    },
    toShowLoading() {
      this.$hero.loading.show({
        text: "这是利用vue-cli-mluti-page演示loading的例子"
      });
      setTimeout(() => {
        this.$hero.loading.hide();
      }, 1500);
    },
    toShowDialog() {
      this.$hero.dialog.show({
        text: "这是利用vue-cli-mluti-page演示dialog的例子",
        onConfirm: () => {}
      });
    },
    toShowConfirm() {
      this.$hero.confirm.show({
        msg: "这是利用vue-cli-mluti-page演示的confirm的例子"
      });
    },
    toShowTool() {
      this.$hero.tool.show({
        text: "这是利用vue-cli-mluti-page演示的tool的例子",
        times: 1500
      });
    },
    toShowCallPop() {
      this.$hero.callPop.show();
    },
    toShowKeyBoard() {
      this.$hero.KeyBoard.show({
        total: 123
      });
    }
  }
};
</script>

<style scoped lang="less">
#msg {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  button {
    // flex: 1;
    border: 1px solid blue;
    border-radius: 5px;
    width: 60%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background-color: blue;
    &:not(:nth-of-type(1)) {
      margin-top: 0.3rem;
    }
  }
}
</style>
