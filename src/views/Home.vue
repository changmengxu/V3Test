<template>
  <div class="home">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    p1: String
  },
  setup(props) {
    console.log(props.p1)
  }
}
</script>
