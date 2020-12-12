<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-button",
  data() {
    return {};
  }
};
</script>

<style scoped>
.btn {
  outline: 0;
  border: none;
  height: 32px;
  padding: 0 16px;
  font-size: 14px;
  background-color: #1890ff;
  color: #fff;
}
</style>
