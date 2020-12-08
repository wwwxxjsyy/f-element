<!--  -->
<template>
  <div class="Drawing_div_com">
    <el-button
      type="success"
      @click="handlebtn"
    >随机在PDF上画图</el-button>
    <div class="Drawing_div">
      <div
        class="pdf_div_class"
        ref="table"
      >
        <pdf
          @CurrentChange="hadnleCurrentChange"
          :src="url"
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
import { setTimeout } from 'timers';
import pdf from "./pdf";

export default {
  name: "ShrdrAwing",

  components: {
    pdf,
  },

  props: ['url'],

  updated() {
  },

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
    hadnleCurrentChange() {
      // console.log('当前是第', val, '页')
    },
    handlebtn() {
      const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }

      let leftTopX = randomNum(1, 482);
      let leftTopY = randomNum(1, 623);
      let customcxtW = 10;
      let customcxtH = 10;

      this.customcxt.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.customcxt.strokeStyle = "red"; //矩形框颜色
      // this.customcxt.fillStyle = "#000"; //canvas背景
      this.customcxt.lineWidth = "1"; //矩形框宽度
      this.customcxt.strokeRect(leftTopX, leftTopY, customcxtW, customcxtH); //绘制矩形

      // this.customcxt.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
  },

  created() { },

  mounted() {
    setTimeout(() => {
      let table = document.getElementsByClassName("pdf_div")[0];
      this.canvasWidth = table.offsetWidth;
      this.canvasHeight = table.offsetHeight;

      let customCanvas = this.$refs.canvascxt; // canvas显示层
      this.customcxt = customCanvas.getContext("2d");
    }, 1000);

  },
};
</script>
<style lang="scss" scoped>
.Drawing_div_com {
  margin-top: 10px;

  .Drawing_div {
    margin-top: 10px;
    display: flex;
    position: relative;

    // .pdf_div_class {
    //   width: 700px;
    //   height: 600px;
    // }

    .canvas_class {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
