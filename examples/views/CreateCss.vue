<!-- 动态生成css文件 -->
<template>
  <div class="createcss_class">
    <div class="caoz_class">
      <el-radio v-model="radio" label="1">头部颜色</el-radio>
      <el-radio v-model="radio" label="2">体部颜色</el-radio>
      <el-color-picker
        v-model="color1"
        @change="handleChange"
      ></el-color-picker>
      <el-button type="primary" @click="handleOk" size="small">确认</el-button>
    </div>
    <br />
    <hr />
    <div
      :style="{
        width: '100%',
        height: '30px',
        'text-align': 'center',
        'background-color': jsonData.headcolor,
      }"
    >
      头部颜色
    </div>
    <div
      :style="{
        width: '100%',
        height: '30px',
        'text-align': 'center',
        'background-color': jsonData.contentcolor,
      }"
    >
      体部颜色
    </div>
  </div>
</template>

<script>
import { setCreatecss, getCss } from "@/api/createcss";

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
        .catch((res) => {});
    },
    handleOk() {
      setCreatecss(this.jsonData)
        .then((res) => {
          if (res.code == 200) {
            this.jsonData = res.data;
          }
        })
        .catch(() => {});
    },
    handleChange(val) {
      if (this.radio == "1") {
        this.jsonData.headcolor = val;
      } else if (this.radio == "2") {
        this.jsonData.contentcolor = val;
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
    align-items: center;

    .el-button {
      margin-left: 10px;
    }
  }
}
</style>
