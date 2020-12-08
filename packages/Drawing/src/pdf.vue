<template>
  <div>
    <div class="pdf_div">
      <pdf
        :src="src"
        :page="currentPage"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
        @loaded="loadPdfHandler"
      >
      </pdf>
    </div>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      layout="prev, pager, next, jumper"
      :total="pageCount"
      :page-size="1"
    >
    </el-pagination>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  props: ["src"],
  components: { pdf },
  data() {
    return {
      currentPage: 0,
      pageCount: 0
    };
  },
  created() {},
  methods: {
    handleSizeChange() {
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.$emit("CurrentChange", val);
      //   console.log(`当前页: ${val}`);
    },
    loadPdfHandler() {
      this.currentPage = 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
