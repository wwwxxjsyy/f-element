<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view /> -->
    <!-- <Shr-Button>Button</Shr-Button> -->
    <ShrCanvas 
    @custom="handleCallback"
    :imgSrc="
        'https://topstage.otechsolution.com:8010/other/2019/2/4/0103d38d-0ebf-437e-a7e5-6a10f5f2c4a5.jpg'
      "></ShrCanvas>

    <!-- <ShrdrAwing :url="'http://otech-stage-ocr-ccp.oss-cn-hangzhou.aliyuncs.com/a4fca993-72fc-47e7-8209-42df918a93f2.pdf?OSSAccessKeyId=LTAI4G7PQX4etsapbM96xffN&Expires=1607317127&Signature=qT0R%2FEKS%2BAY59RYSh3ppeUNC5Mw%3D'"></ShrdrAwing> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  created() { },
  methods:{
    handleCallback({type,data}){
      console.log(data)
    }
  }
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
