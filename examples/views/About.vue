<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <ShrButton @click="handlclick">测试销毁期</ShrButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "123",
    };
  },
  methods: {
    handlclick() {
      this.$router.push("/createcss");
    },
  },
  beforeDestroy() {
    console.log(this, "beforeDestroy");
  },
  destroyed() {
    console.log(this, "destroyed");
  },
};
</script>
