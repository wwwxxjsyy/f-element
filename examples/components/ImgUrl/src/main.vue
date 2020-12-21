<!--  -->
<template>
  <div class="ImgUrl_div">
    <ul>
      <li v-for="(item, index) in tableData" :key="index">
        <a :href="item.hoverURL">
          <img
            :src="item.middleURL"
            :alt="item.fromPageTitle"
            :title="item.fromPageTitle"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ImgUrl",

  components: {},

  props: [],

  updated() {},

  data() {
    return {
      tableData: [],
    };
  },

  watch: {},

  computed: {},

  methods: {},

  created() {
    this.$axios
      .get("http://192.168.0.103:8000/spider4", {
        params: {
          page: Math.random() * 100,
        },
      })
      .then((result) => {
        this.tableData = result.data;
      })
      .catch((err) => {
        console.log(err, "err");
      });
  },

  mounted() {},
};
</script>
<style lang="scss" scoped>
.ImgUrl_div {
  display: flex;

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
</style>
