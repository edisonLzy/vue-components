import CountTo from './count-to';

const components = [
  CountTo,
];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  CountTo,
};
