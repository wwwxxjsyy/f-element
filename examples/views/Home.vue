<!-- Proxy监听 -->
<template>
  <div class=""></div>
</template>

<script>
export default {
  name: "",

  components: {},

  props: {},

  data() {
    return {};
  },

  watch: {},

  computed: {},

  methods: {
    handlePxroy() {
      let onWatch = (obj, setBind, getLogger) => {
        let handler = {
          get(target, property, receiver) {
            getLogger(target, property, receiver);
          },
          set(target, property, value, receiver) {
            setBind(value);
            return Reflect.set(target, property, value, receiver);
          },
        };
        return new Proxy(obj, handler);
      };

      let obj = { a: 2, arr: [1, 2, 3, 4] };
      let result = onWatch(
        obj,
        (val) => {
          console.log(val, "val");
        },
        (target, property) => {
          console.log(`Get '${property}' = ${target[property]}`);
        }
      );

      let num = 0;
      let time1 = setInterval(() => {
        num++;

        result.a = num;

        if (num == 10) {
          clearInterval(time1);
          time1 = null;
        }
      }, 1000);
      console.log("result.a:", result.a);
    },
    handlePxroy2() {
      let obj = {
        msg: {
          a: 10,
        },
        arr: [1, 2, 3],
        c: 2,
      };

      let onWatch = (obj, setBind, getLogger) => {
        let handler = {
          get(target, key) {
            getLogger && getLogger(target, key);
            //懒监听，去获取的时候才监听对象里面的对象，而不是直接递归循环监听
            if (typeof target[key] === "object" && target[key] !== null) {
              return new Proxy(target[key], handler);
            }
            return Reflect.get(target, key);
          },
          set(target, key, value) {
            // console.log("set", target, key, value);
            //排除数组修改length回调
            if (!(Array.isArray(target) && key === "length")) {
              setBind && setBind(value, target, key);
            }
            //数组新增会执行两次，一次是修改length，一次是添加值
            let oldValue = target[key];
            if (!oldValue) {
              //找不到老值，新增
            } else if (oldValue !== value) {
              //老值和新值不相等，修改
            }
            return Reflect.set(target, key, value);
          },
        };
        return new Proxy(obj, handler);
      };

      let proxy = onWatch(
        obj,
        (value) => {
          console.log(value, "value");
        },
        (target, key) => {
          console.log(target, "target");
          console.log(key, "key");
        }
      );

      // proxy.arr.push(456);
      // proxy.msg.a = 50;
      // proxy.msg.b = 60;
      // proxy.c = 70;
      let num = 0;
      let time = setInterval(() => {
        ++num;
        proxy.msg.a = num;
        if (num == 3) {
          clearInterval(time);
          time = null;
        }
      }, 1000);

      console.log(obj);
    },
    handlePxroy3() {
      function deepProxy(obj, cb) {
        if (typeof obj === "object") {
          for (let key in obj) {
            if (typeof obj[key] === "object") {
              obj[key] = deepProxy(obj[key], cb);
            }
          }
        }

        return new Proxy(obj, {
          /**
           * @param {Object, Array} target 设置值的对象
           * @param {String} key 属性
           * @param {any} value 值
           * @param {Object} receiver this
           */
          set: function(target, key, value, receiver) {
            if (typeof value === "object") {
              value = deepProxy(value, cb);
            }

            let cbType = target[key] == undefined ? "create" : "modify";

            //排除数组修改length回调
            if (!(Array.isArray(target) && key === "length")) {
              cb(cbType, { target, key, value });
            }
            return Reflect.set(target, key, value, receiver);
          },
          deleteProperty(target, key) {
            cb("delete", { target, key });
            return Reflect.deleteProperty(target, key);
          },
        });
      }

      // // 数组测试
      // let a = deepProxy([], (type, data) => {
      //   console.log(type, data);
      // });

      // a.push(1);
      // a.push({ a: 1 });

      // 对象测试
      let b = deepProxy({}, (type, data) => {
        console.log(type, data);
      });

      b.name = "大花猫花大";
      b.info = {
        age: 10,
        data: {
          data: {
            data: {
              text: 1,
            },
          },
        },
      };

      delete b.info.age;
    },
  },

  created() {
    this.handlePxroy3();
  },

  mounted() {},
};
</script>
<style lang="scss" scoped></style>
