<template>
  <div class="msg-test" v-show="show">{{msg}}</div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>
