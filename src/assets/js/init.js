import {
  msg,
  confirm,
  dialog,
  loading,
  tool,
  callPop,
  KeyBoard,
} from 'hero'

export default {
  install(Vue) {
    Vue.use(msg)
    Vue.use(confirm)
    Vue.use(dialog)
    Vue.use(loading)
    Vue.use(tool)
    Vue.use(callPop)
    Vue.use(KeyBoard)
  }
}