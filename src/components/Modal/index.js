import Modal from "./Modal";

function setData(instance, options) {
  if (options) {
    const { title, okText, maskClosable } = options;
    if (options.title) {
      instance.title = title;
    }
    if (options.okText) {
      instance.okText = okText;
    }
    if (options.maskClosable) {
      instance.maskClosable = maskClosable;
    }
  }
}

const modal = {
  install(Vue) {
    Vue.component(Modal.name, Modal);

    Vue.prototype.$modal = options => {
      // TODO 渲染函数
      const ModalInstance = Vue.extend(Modal);
      let instance = new ModalInstance();
      setData(instance, options);
      const modalDom = instance.$mount().$el;
      document.body.appendChild(modalDom);
    };
  }
};

export default modal;
