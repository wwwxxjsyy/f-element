<!--  -->
<template>
  <div class="ImgUrl_div">
    <div class="operation_div">
      <div class="operation_div_input">
        <el-input v-model="word"></el-input>
      </div>
      <Shr-Button @click="getData">开始搜索图片</Shr-Button>
    </div>

    <div class="box">
      <div class="item" v-for="(item, index) in tableData" :key="index">
        <img
          :src="item.middleURL"
          :alt="item.fromPageTitle"
          :title="item.fromPageTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getImgData } from '@/api/imgurl'

export default {
  name: 'ImgUrl',

  components: {},

  props: [],

  updated () {},

  data () {
    return {
      tableData: [],
      word: '',
      gsm: 78,
      pn: 100
    }
  },

  watch: {},

  computed: {},

  methods: {
    waterFall () {
      // 1 确定图片的宽度 - 滚动条宽度
      var pageWidth = this.getClient().width - 8
      var columns = 3 //3列
      var itemWidth = parseInt(pageWidth / columns) //得到item的宽度
      $('.item').width(itemWidth) //设置到item的宽度
      var arr = []
      $('.box .item').each(function (i) {
        var height = $(this)
          .find('img')
          .height()
        if (i < columns) {
          // 2 第一行按序布局
          $(this).css({
            top: 0,
            left: itemWidth * i + 20 * i
          })
          //将行高push到数组
          arr.push(height)
        } else {
          // 其他行
          // 3 找到数组中最小高度  和 它的索引
          var minHeight = arr[0]
          var index = 0
          for (var j = 0; j < arr.length; j++) {
            if (minHeight > arr[j]) {
              minHeight = arr[j]
              index = j
            }
          }
          // 4 设置下一行的第一个盒子位置
          // top值就是最小列的高度
          $(this).css({
            top: arr[index] + 30, //设置30的距离
            left: $('.box .item')
              .eq(index)
              .css('left')
          })

          // 5 修改最小列的高度
          // 最小列的高度 = 当前自己的高度 + 拼接过来的高度
          arr[index] = arr[index] + height + 30 //设置30的距离
        }
      })
    },
    //clientWidth 处理兼容性
    getClient () {
      return {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
      }
    },

    getScroll (event) {
      var scrollTop = 0
      console.log(event, 'event')
    },

    getData () {
      const data = {
        pn: this.pn,
        word: this.word,
        gsm: this.gsm
      }

      getImgData(data)
        .then(result => {
          console.log(result)
          if (result.status == 200) {
            this.tableData = result.data
            this.gsm = result.gsm
            this.pn += 30
          }
        })
        .catch(err => {
          console.log(err, 'err')
          this.tableData = []
        })
    }
  },

  created () {},

  mounted () {
    this.waterFall()
  }
}
</script>
<style lang="scss" scoped>
.ImgUrl_div {
  .operation_div {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    height: 40px;

    .operation_div_input {
      width: 200px;
      margin-right: 20px;
    }
  }

  .ImgUrl_div_ul {
    display: flex;
    // overflow: scroll;
    margin-top: 40px;
    overflow: scroll;
    height: 100%;

    ul {
      display: flex;
      list-style: none;
      flex-wrap: wrap;

      img {
        max-width: 400px;
        max-height: 300px;
      }
    }
  }

  .box {
    width: 100%;
    position: relative;

    .item {
      position: absolute;

      .item img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
