<template>
  <div class="waterFall-box">
    <div class="content-div">
      <div class="input-dev">
        <el-input
          v-model="word"
          placeholder="请输入搜索条件"
          @keydown.native="handlekeydow($event)"
        ></el-input>
      </div>
      <shr-button type="primary" @click="handlesearchbtn" :time="1000"
        >开始搜索</shr-button
      >
    </div>

    <div class="img-box-content" ref="box">
      <div
        class="img-box"
        v-for="(item, index) in images"
        :key="index"
        ref="img"
      >
        <img
          :src="item.middleURL"
          :key="item.middleURL"
          :alt="item.fromPageTitle"
          :title="item.fromPageTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getImgData } from "@/api/imgurl";

export default {
  name: "ImgUrl",
  data() {
    return {
      images: [], //存储图片资源
      imgWidth: 210, //图片的宽度
      heightArray: [], //存储高度数组，用于判断最小高度的图片位置
      isLoad: true, //是否继续加载图片
      surplusW: 0, //是否存在剩余宽度
      offsetP: 0,
      count: 0,
      pn: 1,
      word: "",
      gsm: 87,
      start: 0,
      searchstr: "",
    };
  },
  methods: {
    handlesearchbtn() {
      this.searchstr = this.word;
      this.images = [];
      this.heightArray = [];
      document.documentElement.scrollTop = 0;
      this.start = 0;
      this.getIng(this.start);
    },
    handlekeydow(e) {
      const keyCode = e.keyCode || e.which || e.charCode;
      if (keyCode === 13) {
        // if (this.start !== 0) {
        //   location.reload();
        // }
        this.searchstr = this.word;
        this.images = [];
        this.heightArray = [];
        document.documentElement.scrollTop = 0;
        this.start = 0;
        this.getIng(this.start);
      }
    },
    /**
     * 预加载图片资源
     * */
    loadImgHeight(sum) {
      let start = sum | 0;
      let count = 0; //计数变量 判断是否预加载图片是否完成
      this.images.forEach((item) => {
        //使用image类预加载图片
        let image = new Image();
        image.src = item.middleURL;
        image.onload = image.onerror = () => {
          count++;
          if (count == this.images.length) {
            this.$nextTick(() => {
              if (!sum) {
                this.init();
              }
              this.positionImg(start);
            });
          }
        };
      });
    },
    /**
     * @remarks 初始化
     * 初始化容器的宽度，计算出容器可容纳多少固定宽度图片的列，
     * 如果可排列固定宽度的图片宽度无法沾满容器的宽度，需要计算出空余的宽度，固定首图片的left
     * */
    init() {
      //得到页面的宽度
      const pageWidth_padding = this.$refs.box.clientWidth;
      //页面的padding像素
      this.offsetP = this.$refs.box.style.paddingLeft.replace(/[^0-9]/gi, "");
      //获得页面的真实宽度（除去padding、margin、border...）
      const pageWidth = pageWidth_padding - this.offsetP * 2;
      //计算出当前页面可展示多少列图片
      const column = Math.floor(pageWidth / this.imgWidth);
      //偏移像素值
      this.surplusW = pageWidth - column * this.imgWidth;
      //初始化存储高度数组
      for (let i = 0; i < column; i++) {
        this.heightArray.push(0);
      }
    },
    /**
     * @remark 定位图片
     * @param:
     *  start: 循环开始位置，开始为0，如果滚动条滑到底部，则start为容器存在图片资源的数量即this.images.length
     *  ----------宽高都计算img的父容器的宽高
     * */
    positionImg(start) {
      // console.log(start, "start");
      //获得img标签的父容器的DOM
      let parentDom = this.$refs.img;
      // console.log(parentDom, "parentDom");

      for (let i = start; i < this.images.length; i++) {
        //获得最小高度
        const minHeight = Math.min(...this.heightArray);
        //获得最小高度索引
        const index = this.heightArray.indexOf(minHeight);
        //获得当前图片的高度
        const currHeight = parentDom[i].clientHeight;
        // console.log(parentDom[i], "parentDom[i]");
        // console.log(parentDom[i].clientHeight, "parentDom[i]");
        //定位
        parentDom[i].style.transform = "50px";
        parentDom[i].style.position = "absolute";
        parentDom[i].style.top = minHeight + "px";
        parentDom[i].style.left =
          // this.imgWidth * index + Math.floor(this.surplusW / 2) + "px";
          parentDom[i].style.left =
            this.imgWidth * index +
            +(Math.floor(this.surplusW / 2) + 30) +
            "px";
        this.heightArray[index] += currHeight;
      }
      //对父容器赋值当前heightArray数组的最大高度
      this.$refs.box.style.height = Math.max(...this.heightArray) + 50 + "px";
    },
    getIng(sum) {
      const data = {
        pn: this.pn,
        word: this.searchstr,
        gsm: this.gsm,
      };

      getImgData(data)
        .then((result) => {
          // console.log(result);
          if (result.status == 200) {
            let arr = [...this.images, ...result.data];
            this.images = arr;
            this.gsm = result.gsm;
            this.pn += 10;
            this.disabled = true;
            this.start = this.images.length;

            this.loadImgHeight(sum);
          }
        })
        .catch((err) => {
          console.log(err, "err");
        });
    },
  },
  mounted() {
    const _this = this;
    //监听滚动条滚动，实现懒加载图片
    window.addEventListener("scroll", function() {
      //得到可滚动距离
      const scrollDistance =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      //滚动到顶部的距离
      const scroll = document.documentElement.scrollTop;

      if (Math.ceil(scroll) == scrollDistance) {
        _this.count += 1;

        // if (_this.count == 4) {
        //   _this.isLoad = false;
        // }

        if (_this.isLoad) {
          _this.getIng(_this.start);
          // const data = {
          //   pn: _this.pn,
          //   word: _this.word,
          //   gsm: _this.gsm,
          // };

          // getImgData(data).then((res) => {
          //   _this.start = _this.images.length;
          //   _this.gsm = res.gsm;
          //   _this.pn += 30;

          //   for (let item of res.data) {
          //     _this.images.push(item);
          //   }
          //   //滑到底部继续加载图片，this.$nextTick()异步加载，待资源虚拟DOM加载完毕
          //   _this.$nextTick(() => {
          //     _this.loadImgHeight(_this.start);
          //   });
          // });
        }
      }
    });
  },
  created() {},
};
</script>

<style scoped lang="scss">
.waterFall-box {
  padding-top: 80px;

  .content-div {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: gold;
    z-index: 1;
    justify-content: center;
    padding: 20px 0;

    .input-dev {
      width: 400px;
      margin-right: 30px;
    }
  }

  .img-box-content {
    position: relative;
    text-align: center;
    height: 300px;
    // overflow-y: hidden;

    .img-box {
      width: 210px;
      display: block;
      float: left;

      img {
        width: 100%;
        animation: imgBox 0.5s ease-in-out;

        &:hover {
          transform: translateY(-3px);
          transition: transform 0.5s ease-in-out;
          box-shadow: 0 20px 20px 2px #737373;
        }

        @keyframes imgBox {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
}
</style>
