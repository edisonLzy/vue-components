<template>
  <div id="app">
    <count-to :endVal="80"></count-to>
  </div>
</template>

<script>
import Count from './components/count-to/src/index.vue';

export default {
  name: 'App',
  components: {
    Count,
  },
};
</script>

<style lang="scss">
#app {

}
</style>
