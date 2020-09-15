import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css';//样式文件
import CountTo from "../../src/components/count-to/src/index.vue";
export default ({
  Vue
}) => {
    Vue.directive('highlight',function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
          hljs.highlightBlock(block)
        })
    })
    Vue.component(CountTo.name,CountTo)
}