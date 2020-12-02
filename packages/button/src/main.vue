<template>
  <div class="button_div">
    <el-button type="primary" :loading="loadingbutton" @click="handleClick"
      ><slot></slot
    ></el-button>
  </div>
</template>

<script>
export default {
  name: "ShrButton",
  props: {
    time: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      loadingbutton: false,
    };
  },
  methods: {
    handleClick() {
      if (this.loadingbutton) return;

      this.loadingbutton = true;
      setTimeout(() => {
        this.loadingbutton = false;
      }, this.time);

      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button_div {
  display: inline;
}
</style>
