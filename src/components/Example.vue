<template>
  <div class="example">
    <button @click="showModal">modal</button>
  </div>
</template>

<script>
import Vue from "vue";
import Modal from "../components/Modal";
Vue.use(Modal);

export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  },
  methods: {
    showModal() {
      this.$modal({
        title: "test"
      });
    }
  }
};
</script>

<style>
body {
  width: 100vw;
  height: 200vh;
  background-color: #aaa;
}
</style>
