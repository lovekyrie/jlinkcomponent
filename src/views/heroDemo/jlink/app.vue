<template>
  <div id="app">
    <el-button @click="showDialog1">dialog demo1</el-button>
    <el-button>dialog demo2</el-button>
    <jlink-dialog :visible="visible1" :showOperate="showOperate" :info="info">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="配件编号">
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="配件名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <div>
          <span>规格：</span>
          <input type="span">
        </div>
        <div>
          <span>型号：</span>
          <input type="span">
        </div>
        <div>
          <span>品牌：</span>
          <input type="span">
        </div>
        <div>
          <span>数量：</span>
          <input type="span">
        </div>
      </el-form>
    </jlink-dialog>
  </div>
</template>

<script>
import Lib from "assets/js/Lib";
import JlinkDialog from "@/components/JlinkDialog.vue";
export default {
  data() {
    return {
      visible1: false,
      showOperate: true,
      title1: "添加配件",
      info: {},
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    showDialog1() {
      this.visible1 = true;
    }
  },
  components: {
    JlinkDialog
  }
};
</script>

<style>
</style>
