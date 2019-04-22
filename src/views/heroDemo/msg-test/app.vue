<template>
  <div class="msg">
    <msg-test :msg="textMsg" :show="showMsg"></msg-test>
  </div>
</template>

<script>
import MsgTest from "components/MsgTest.vue";
export default {
  data() {
    return {
      textMsg: "1212",
      showMsg: true
    };
  },
  components: {
    MsgTest
  }
};
</script>

<style>
</style>
