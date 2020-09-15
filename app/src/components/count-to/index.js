import Com from './src/index.vue';

Com.install = function (Vue) {
  Vue.component(Com.name, Com);
};
export default Com;
