<template>
  <div class="songtest_div">
    嘎嘎！
    <button @click="add">{{ num }}</button>
  </div>
</template>

<script>
export default {
  name: "SongTest", // 这个名字很重要，它就是未来的标签名<Song-test></Song-test>
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>

<style lang="scss" scoped>
.songtest_div {
  color: paleturquoise;
}
</style>
