<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view /> -->
    <Shr-Button>Button</Shr-Button>
    <!-- <ShrCanvas
      @custom="handleCallback"
      :imgSrc="
        ''
      "
    ></ShrCanvas> -->

    <!-- <ShrdrAwing
      url="/2/2020/3258/2775/INVOICE%20(2).pdf"
    ></ShrdrAwing> -->

    <div v-html="datatext"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      datatext: "",
    };
  },
  components: {},
  created() {
    // axios
    //   .get(
    //     "/s?ie=utf-8&mod=1&isbd=1&isid=2992AB4CE4050281&ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E8%A2%8B%E9%BC%A0&fenlei=256&rsv_pq=9cc84aa80020b214&rsv_t=29d65VM0Lx0GqtqFHK74pqUvRI2eOtdtV4JJ1rBDdtuzW7M%2FFa1Gd2y7R2w&rqlang=cn&rsv_enter=1&rsv_dl=ts_9&rsv_sug3=4&rsv_sug1=4&rsv_sug7=101&rsv_sug2=1&rsv_btype=i&prefixsug=dai&rsp=9&inputT=578428&rsv_sug4=578429&rsv_sid=1421_33222_33061_31660_33099_33101_32937_33211_33198_33237&_ss=1&clist=&hsug=&f4s=1&csor=2&_cr1=35995"
    //   )
    //   .then((res) => {
    //     this.datatext = res.data;
    //   });
  },
  methods: {
    handleCallback({ type, data }) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
