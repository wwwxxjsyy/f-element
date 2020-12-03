<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view /> -->
    <Shr-Button>Button</Shr-Button>
    <!-- <ShrCanvas
      :imgSrc="
        'https://topstage.otechsolution.com:8010/other/2019/2/4/0103d38d-0ebf-437e-a7e5-6a10f5f2c4a5.jpg'
      "
    ></ShrCanvas> -->

    <Dr-awing></Dr-awing>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  created() {},
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
