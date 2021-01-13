<!-- 动态生成css文件 -->
<template>
  <div class="createcss_class">
    <div class="caoz_class">
      <div class="color_class">
        <el-radio v-model="radio" label="1">头部颜色</el-radio>
        <el-radio v-model="radio" label="2">体部颜色</el-radio>
        <el-radio v-model="radio" label="3">底部颜色</el-radio>
        <el-color-picker
          v-model="color1"
          @change="handleChange"
        ></el-color-picker>
      </div>

      <div class="button_class">
        <el-button type="primary" @click="handleOk" size="small"
          >确认</el-button
        >
      </div>
    </div>
    <br />
    <div
      :style="{
        width: '100%',
        height: '30px',
        'text-align': 'center',
        'line-height': '30px',
        'background-color': jsonData.headcolor,
      }"
      class="head_class"
    >
      头部颜色
    </div>
    <div
      :style="{
        width: '100%',
        height: '30px',
        'text-align': 'center',
        'line-height': '30px',
        'background-color': jsonData.contentcolor,
      }"
    >
      体部颜色
    </div>
    <div
      :style="{
        width: '100%',
        height: '30px',
        'text-align': 'center',
        'line-height': '30px',
        'background-color': jsonData.footercolor,
      }"
    >
      底部颜色
    </div>
  </div>
</template>

<script>
import { setCss, getCss } from "@/api/createcss";

export default {
  name: "",

  components: {},

  props: {},

  data() {
    return {
      color1: "#409EFF",
      radio: "1",
      jsonData: {
        headcolor: "",
        contentcolor: "",
        footercolor: "",
      },
    };
  },

  watch: {},

  computed: {},

  methods: {
    getcssdata() {
      getCss()
        .then((res) => {
          if (res.code == 200) {
            this.jsonData = res.data;
          }
        })
        .catch(() => {});
    },
    handleOk() {
      setCss(this.jsonData)
        .then((res) => {
          if (res.code == 200) {
            this.jsonData = res.data;
            this.$notify({
              title: "成功",
              message: "已将选中颜色保存",
              type: "success",
            });
          }
        })
        .catch(() => {});
    },
    handleChange(val) {
      if (this.radio == "1") {
        this.jsonData.headcolor = val;
      } else if (this.radio == "2") {
        this.jsonData.contentcolor = val;
      } else if (this.radio == "3") {
        this.jsonData.footercolor = val;
      }
    },
  },

  created() {
    this.getcssdata();
  },

  mounted() {},
};
</script>
<style lang="scss" scoped>
.createcss_class {
  padding: 20px;

  .caoz_class {
    display: flex;
    justify-content: space-between;

    .el-button {
      margin-left: 10px;
    }

    .color_class,
    .button_class {
      display: flex;
      align-items: center;
    }
  }
}
</style>
