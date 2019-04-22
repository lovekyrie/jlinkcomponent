<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "editor",
  data() {
    return {
      editorContent: ""
    };
  },
  methods: {},
  watch: {
    editorContent() {
      this.$emit("trigerSubmit", this.editorContent);
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    let self = this;
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.uploadImgShowBase64 = true;
    //自定义上传图片保存的地址
    // editor.customConfig.uploadImgServer = "/general/file/upload"; //上传图片到服务器
    editor.customConfig.uploadFileName = "myFileName";
    editor.customConfig.uploadImgMaxSize = 16 * 1024 * 1024; //设置图片大小为20M
    editor.customConfig.uploadImgTimeout = 1000000; //图片上传超时限制10s
    editor.customConfig.customUploadImg = function(files, insert) {
      // files 是 input 中选中的文件列表
      const formData = new FormData();
      // 上传代码返回结果之后，将图片插入到编辑器中
      const postFiles = Array.from(files);
      postFiles.forEach(item => {
        formData.append("file", item, item.name);
      });

      self.until.postImg("/general/file/upload", formData).then(
        res => {
          console.log("上传成功");
          // insert 是获取图片 url 后，插入到编辑器的方法
          insert(res.data);
        },
        err => {}
      );
    };
    editor.create();
  }
};
</script>

<style scoped>
</style>
