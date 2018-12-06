<template>
  <div class="m-footer">
    <router-link v-for="(item,index) in navs" :key="index" :to="item.path" tag="a" exact>
      <i :class="item.icon"></i>
      <p>{{item.nav}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {icon: 'iconfont icon-shouye', nav: '首页', path: '/'},
        {icon: 'iconfont icon-zixun', nav: '资讯', path: '/info'},
        {icon: 'iconfont icon-wode', nav: '我的', path: '/mine'},
      ]
    };
  },
};
</script>

<style lang='scss'>
.m-footer{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  height: 0.9rem;
  // padding-top: 0.8rem;
  z-index: 10;
  >a{
    flex: 3;
    text-align: center;
    >i{
      font-size: 0.4rem;
    }
    >p {
      margin: 0 auto;
    }
  }
  .router-link-active{
    >i {
      color: $blue;
    }
    >p{
      color: $blue;
    }
  }
}
</style>
