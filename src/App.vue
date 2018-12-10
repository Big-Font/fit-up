<template>
  <div id="app">
    <v-header>{{$route.meta.title}}</v-header>
    <router-view class="view" />
    <v-footer /> 
    <div class="seat"></div>
  </div>
</template>

<script>
import vFooter from '@/components/public/footer'
import vHeader from '@/components/public/header'

export default {
  data() {
    return{}
  },
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  z-index: 9;
  .view{
    min-height: calc(100vh - 0.98rem - 0.88rem);
  }
  .seat{
    width: 100%;
    height: 0.98rem;
  }
}
</style>
