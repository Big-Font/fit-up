<template>
  <div class="header-view">
     <div class="header clearfix">
         <!-- 返回按钮 -->
         <i class="iconfont icon-guifandaohanglanfanhui fl" @click="goBack"></i>
         <!-- 标题 -->
         <h3 class="fl">
             <slot></slot>
         </h3>
         <!-- 分享按钮 -->
         <!-- <em class="fr" v-if="shareIcon" @click="$parent.handleAPPShare"></em> -->
     </div>
     <!-- 占位符 -->
     <div class="stance"></div>
  </div>
</template>

<script>

export default {
  name: 'vheader',
  props: {
      title: {
          type: String,
          default: ''
      },
      backType: {
          type: String,
          default: 'back'
      },
      shareIcon: {
          type: Boolean,
          defalut: false
      }
  },
  data() {
    return {
    }
  },
  methods: {
    goBack() {
        this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-view{
  width: 100%;
  position: relative;
  z-index: 10;
  .stance{
    height: 0.88rem;
  }
  .header{
    position: fixed;
    top:0;
    left: 0;
    line-height: 0.88rem;
    background: #fff;
    width: 100%;
      i{
        font-size: 0.3rem;
        margin-left: 0.3rem;    
      }
      h3{
          width: 77%;
          text-align: center;
          font-size: 0.36rem;
          color: #3a3a3a;
      }
      em{
          width: 0.4rem;
          height: 0.4rem;
          background-size: 100% 100%;
          margin: 0.2rem 0.4rem 0 0;
      }
  }
}
</style>
