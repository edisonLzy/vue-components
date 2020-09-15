<template>
  <span ref='countup' class="word"></span>
</template>

<script>
import { CountUp } from 'countup.js';

export default {
  name: 'count-to',
  props: {
    endVal: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      numAnim: null,
    };
  },
  computed: {
    options() {
      return this.$attrs;
    },
  },
  mounted() {
    this.initCountUp();
  },
  methods: {
    initCountUp() {
      this.numAnim = new CountUp(this.$refs.countup, this.endVal, this.options);
      this.numAnim.start();
    },
  },
};
</script>
<style lang="scss" scoped>
.word{
  color: gold;
}
</style>
