<template>
  <div class="modal" ref="modal" v-if="visible" @click.self="handleClickMask">
    <div class="modal-wrapper">
      <div class="title">{{ title }}</div>
      <button class="btn btn-ok" @click="handleOk">{{ okText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      visible: false,
      title: "", // 标题
      okText: "确定", // 确认按钮文字
      maskClosable: false // 点击蒙层是否关闭
    };
  },
  watch: {
    // 禁止/回复页面滚动
    visible(value) {
      if (value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "initial";
        // 销毁modal
        const modal = this.$refs.modal;
        modal.parentNode.removeChild(modal);
      }
    }
  },
  mounted() {
    this.visible = true;
  },
  methods: {
    handleOk(e) {
      this.visible = false;
      // 回调函数
      this.$emit("ok", e);
    },
    handleClickMask() {
      if (this.maskClosable) {
        this.handleOk();
      }
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-wrapper {
  width: 300px;
  box-sizing: border-box;
  padding: 32px;
  border-radius: 4px;
  background-color: #fff;
}
.title {
  margin: 0;
  padding: 0;
  line-height: 1.5em;
  font-size: 16px;
  text-align: center;
}
.btn {
  outline: 0;
  border: none;
  display: block;
  height: 32px;
  width: 200px;
  margin: 24px auto 0;
  font-size: 14px;
  background-color: #1890ff;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.07);
  border-radius: 32px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}
.btn:hover,
.btn:active {
  background-color: #40a9ff;
}
</style>
