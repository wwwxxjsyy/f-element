<template>
  <div class="button_div">
    <el-button type="primary" :loading="loadingbutton" @click="handleClick"
      ><slot></slot
    ></el-button>
  </div>
</template>

<script>
import msg from "@src/mixins";

export default {
  name: "ShrButton",
  mixins: [msg.msg],
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
    async handleClick() {
      if (this.loadingbutton) return;

      this.loadingbutton = true;
      setTimeout(() => {
        this.loadingbutton = false;
      }, this.time);

      this.$emit("click");
    },
  },
  created() {
    this.handlemsgplus();
  },
  destroyed() {
    this.loadingbutton = false;
  },
};
</script>

<style lang="scss" scoped>
.button_div {
  display: inline;
}
</style>
