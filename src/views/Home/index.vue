<template>
  <div>
    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item v-for="(item, key) in swipers" :key="key">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="nav">
      <router-link :to="`/detail/${item.id}`" v-for="(item, index) in navs" :key="index" tag="li">
        <i :class="item.icon"></i>
        <h2>{{item.name}}</h2>
      </router-link>
    </ul>
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
       ],
       navs: [
         {id: 1,icon: 'iconfont icon-sheji', name: '设计'},
         {id: 1,icon: 'iconfont icon-shuidianzhan', name: '水电改造'},
         {id: 1,icon: 'iconfont icon-dibandiaodinganzhuang', name: '吊顶'},
         {id: 1,icon: 'iconfont icon-cizhuan', name: '瓷砖'},
         {id: 1,icon: 'iconfont icon-youqi', name: '墙面'},
         {id: 1,icon: 'iconfont icon-chuguileianzhuang', name: '橱柜'},
         {id: 1,icon: 'iconfont icon-mendoor13', name: '木门'},
         {id: 1,icon: 'iconfont icon-diban-hui', name: '地板'},
         {id: 1,icon: 'iconfont icon-kaiguan', name: '开关/插座'},
         {id: 1,icon: 'iconfont icon-deng', name: '灯具'},
         {id: 1,icon: 'iconfont icon-weiyujijuanzhuang', name: '五金洁具'},
         {id: 1,icon: 'iconfont icon-chuangliananzhuang', name: '窗帘安装'},
         {id: 1,icon: 'iconfont icon-rengongbaojie', name: '保洁'},
         {id: 1,icon: 'iconfont icon-weiyujian', name: '卫浴'},
         {id: 1,icon: 'iconfont icon-yanjizaoju', name: '灶具'},
         {id: 1,icon: 'iconfont icon-chuguileianzhuang', name: '家具定制'}
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
.nav{
  display: flex;
  flex-wrap: wrap;
  >li{
    width: 25%; 
    >i {
      font-size: 0.8rem;
      text-align: center;
      display: block;
      margin: 0.3rem auto 0;
    }
    >h2{
      font-size: 0.24rem;
      text-align: center;
      line-height: 0.64rem;
      margin-bottom: 0.1rem;
    }
  }
}
 
</style>
