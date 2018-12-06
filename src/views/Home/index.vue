<template>
  <div>
    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item v-for="(item, key) in swipers" :key="key">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
    111111
  </div>
</template>

<script>
 export default {
   data () {
     return {
       swipers: [
         {src: require('@/assets/imgs/1.jpg')},
         {src: require('@/assets/imgs/2.jpg')},
         {src: require('@/assets/imgs/3.jpg')},
         {src: require('@/assets/imgs/4.jpg')},
       ]
     }
   },
   components: {

   },
   methods: {
      handleChange(index) {
      }
    }
 }
</script>

<style lang='scss' scoped>
.swiper{
  width: 100%;
  height: 3.6rem;
  img{
    width: 100%;
    height: 3.6rem;
  }
}
 
</style>
