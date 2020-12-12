import MyButton from "./MyButton";

const plugin = {
  install(Vue) {
    Vue.component(MyButton.name, MyButton);
  }
};

export default plugin;
