<template>
  <span ref='countup' style="{color:red}"></span>
</template>

<script>
const  {CountUp}  = require('countup.js');
export default {
  name: 'countup-demo',
  data () {
    return {
      numAnim:null
    }
  },
  mounted(){
    this.initCountUp()
  },
  methods:{
    initCountUp(){
      this.numAnim = new CountUp(this.$refs.countup,0, 2017)
      this.numAnim.start();
    }
  }
}
</script>