<!--  -->
<template>
  <div class="HappyMoment_div">
    <div class="HappyMoment_div_box">
      <div class="box box1">
        <img src="/img/loading.png" alt="" />
      </div>
      <div class="box box2">
        <img src="/img/loading.png" alt="" />
      </div>
      <div class="box box3">
        <img src="/img/loading.png" alt="" />
      </div>
      <div class="box box4">
        <img src="/img/loading.png" alt="" />
      </div>
      <div class="box box5">
        <img src="/img/loading.png" alt="" />
      </div>
      <div class="box box6">
        <img src="/img/loading.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HappyMoment",

  components: {},

  props: {},

  data() {
    return {};
  },

  watch: {},

  computed: {},

  methods: {},

  created() {},

  mounted() {},
};
</script>
<style lang="scss" scoped>
.HappyMoment_div {
  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle closest-corner,
    rgb(248, 248, 248) 0,
    rgb(60, 230, 230) 100%
  );
  position: relative;

  .HappyMoment_div_box {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
    transform-style: preserve-3d;
    // animation: rotationMainContainer 5s linear infinite;
    // transition: all 5s;
    animation: myanimation 8s infinite linear;

    .box {
      width: 300px;
      height: 300px;
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);

      img {
        width: 100%;
        height: 100%;
        border: 0;
      }
    }

    .box1 {
      transform: translateZ(-150px);
    }

    .box2 {
      transform: translateZ(150px);
    }

    .box3 {
      transform: rotateX(90deg) translateZ(150px);
    }

    .box4 {
      transform: rotateX(90deg) translateZ(-150px);
    }

    .box5 {
      transform: rotateY(90deg) translateZ(150px);
    }

    .box6 {
      transform: rotateY(90deg) translateZ(-150px);
    }
  }

  @keyframes rotationMainContainer {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      /* 元素围绕其X Y Z轴旋转的度数*/
    }

    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes myanimation {
    // transform: rotateX(13deg) rotateY(31deg);
    0% {
      transform: scale(0.6) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      -webkit-transform: scale(0.6) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    25% {
      transform: scale(0.7) rotateX(90deg) rotateY(90deg) rotateZ(90deg);
      -webkit-transform: scale(0.7) rotateX(90deg) rotateY(90deg) rotateZ(90deg);
    }

    50% {
      transform: scale(0.8) rotateX(180deg) rotateY(180deg) rotateZ(180deg);
      -webkit-transform: scale(0.8) rotateX(180deg) rotateY(180deg)
        rotateZ(180deg);
    }

    75% {
      transform: scale(0.9) rotateX(270deg) rotateY(270deg) rotateZ(270deg);
      -webkit-transform: scale(0.9) rotateX(270deg) rotateY(270deg)
        rotateZ(270deg);
    }

    100% {
      transform: scale(1) rotateX(359deg) rotateY(359deg) rotateZ(359deg);
      -webkit-transform: scale(1) rotateX(359deg) rotateY(359deg)
        rotateZ(359deg);
    }
  }
  // font-size: 100px;
  // -webkit-text-fill-color: transparent;
  // -webkit-text-stroke: 1px #000;
  // background: linear-gradient(45deg,#feac5e,#c779d0,#4bc0c8);
  // background: url("/img/back.jpg") no-repeat;
  // background-size: 100%;
}
</style>
