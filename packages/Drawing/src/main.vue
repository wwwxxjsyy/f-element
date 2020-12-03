<!--  -->
<template>
  <div class="Drawing_div_com">
    <el-button type="success" @click="handlebtn">哈哈哈哈哈</el-button>
    <div class="Drawing_div">
      <div class="pdf_div_class" ref="table">
        <pdf
          :src="
            'http://otech-stage-ocr-ccp.oss-cn-hangzhou.aliyuncs.com/a4fca993-72fc-47e7-8209-42df918a93f2.pdf?OSSAccessKeyId=LTAI4G7PQX4etsapbM96xffN&Expires=1606992850&Signature=%2BYbd%2F6EXgvJPlnsjHZOR%2F0R%2BUOY%3D'
          "
        ></pdf>
      </div>

      <canvas
        ref="canvascxt"
        class="canvas_class"
        :width="canvasWidth"
        :height="canvasHeight"
      ></canvas>
    </div>
  </div>
</template>

<script>
import pdf from "./pdf";

export default {
  name: "DrAwing",

  components: {
    pdf,
  },

  props: {},

  data() {
    return {
      customcxt: "", //cxt
      canvasHeight: "",
      canvasWidth: "",
    };
  },

  watch: {},

  computed: {},

  methods: {
    handlebtn() {
      let table = document.getElementsByClassName("pdf_div")[0];
      this.canvasWidth = table.offsetWidth;
      this.canvasHeight = table.offsetHeight;

      // this.customcxt.fillStyle = "#000"; //canvas背景

      let arr = [
        // 左上X，左上Y，右上X，右上Y，右下X，右下Y，左下X，左下Y
        0.04302832244008715,
        0.38552188552188554,
        0.9852941176470589,
        0.38552188552188554,
        0.9852941176470589,
        0.3998316498316498,
        0.04302832244008715,
        0.3998316498316498,
      ];

      let leftTopX = 0.04302832244008715;
      let leftTopY = 0.38552188552188554;

      let customcxtW = 100;
      let customcxtH = 20;

      this.$nextTick(() => {
        let customCanvas = this.$refs.canvascxt; // canvas显示层
        this.customcxt = customCanvas.getContext("2d");
        this.customcxt.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.customcxt.strokeStyle = "red"; //矩形框颜色
        this.customcxt.lineWidth = "1"; //矩形框宽度

        this.customcxt.strokeRect(leftTopX, leftTopY, customcxtW, customcxtH); //绘制矩形
      });
      // this.customcxt.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
  },

  created() {},

  mounted() {},
};
</script>
<style lang="scss" scoped>
.Drawing_div_com {
  margin-top: 10px;

  .Drawing_div {
    margin-top: 10px;
    display: flex;
    position: relative;

    .canvas_class {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
