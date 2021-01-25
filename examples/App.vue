<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <router-view />
    </div>
    <!-- <router-view /> -->
    <!-- <Shr-Button>Button</Shr-Button> -->
    <!-- <ShrCanvas
      @custom="handleCallback"
      :imgSrc="
        ''
      "
    ></ShrCanvas> -->

    <!-- <ShrdrAwing
      url=""
    ></ShrdrAwing> -->

    <!-- <div v-html="datatext"></div> -->
    <!-- <ImgUrl></ImgUrl> -->
    <!-- <WaterfallFlow></WaterfallFlow> -->
    <HappyMoment></HappyMoment>
  </div>
</template>

<script>
// import axios from 'axios'
import url from "@/assets/img/logo.png";

export default {
  name: "app",
  data() {
    return {
      datatext: "",
      url: url,
    };
  },
  components: {},
  created() {
    // axios
    //   .get(
    //     '/s?ie=utf-8&mod=1&isbd=1&isid=2992AB4CE4050281&ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E8%A2%8B%E9%BC%A0&fenlei=256&rsv_pq=9cc84aa80020b214&rsv_t=29d65VM0Lx0GqtqFHK74pqUvRI2eOtdtV4JJ1rBDdtuzW7M%2FFa1Gd2y7R2w&rqlang=cn&rsv_enter=1&rsv_dl=ts_9&rsv_sug3=4&rsv_sug1=4&rsv_sug7=101&rsv_sug2=1&rsv_btype=i&prefixsug=dai&rsp=9&inputT=578428&rsv_sug4=578429&rsv_sid=1421_33222_33061_31660_33099_33101_32937_33211_33198_33237&_ss=1&clist=&hsug=&f4s=1&csor=2&_cr1=35995'
    //   )
    //   .then(res => {
    //     console.log(res)
    //     // this.datatext = res.data;
    //   })
    // this.handler()
    console.log("console.log");
  },
  methods: {
    // handleCallback({ type, data }) {
    //   console.log(data);
    // },
    handler() {
      const promise1 = () => Promise.resolve(3);
      const promise2 = () =>
        new Promise((resolve) => {
          setTimeout(resolve, 100, "foo");
        });
      const promise3 = () => Promise.resolve(4);

      const tasksdata = [promise1, promise2, promise3];
      const maxdata = 1;

      function startLimitPool(tasks, max, callback) {
        console.time();
        const result = [];
        Promise.all(
          Array.from({ length: max }).map(() => {
            return new Promise((resolve) => {
              function runTask() {
                if (tasks.length <= 0) {
                  resolve();
                  return;
                }
                const task = tasks.shift();
                task().then((res) => {
                  result.push(res);
                  runTask();
                });
              }
              runTask();
            });
          })
        ).then(() => callback(result));
        console.timeEnd();
      }

      startLimitPool(tasksdata, maxdata, (res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.img_class {
  width: 50%;
}
</style>
