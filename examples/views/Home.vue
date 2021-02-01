<template>
  <div class="home">
    <el-input v-model="text" @input="handleinput"></el-input>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      text: "",
      test: "",
    };
  },
  watch: {},
  components: {},
  methods: {
    handleinput() {
      let arr = this.text.split("");
      let narr = [];
      
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ".") {
          narr.splice(narr.indexOf(arr[i - 1]), 1);
          let str = arr[i - 1] + arr[i] + arr[i + 1] ? arr[i + 1] : "";
          narr.push(str);
          i++;
        } else {
          narr.push(arr[i]);
        }
      }

      // this.text = narr.join("|");

      console.log(narr.join("|"));
      // if (
      //   this.text.substring(this.text.length - 1) !== "|" &&
      //   this.text.indexOf(".") == -1
      // ) {
      //   this.text = this.text + "|";
      // }
      // console.log(this.text, "this.text");
    },
  },
};
</script>
