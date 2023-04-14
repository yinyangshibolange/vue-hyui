<template>
  <div id="app">
    <h-router :list="routerList" />

   <div class="swiper-demo">
    <h-swiper>
      <h-swiper-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.src" :alt="item.src" class="swiper-demo-img">
      </h-swiper-item>
    </h-swiper>
   </div>
   <div class="notice-demo">
    <h-notice text="我我我我哦我偶发萨法说法办卡是否把开始发奥卡福v阿卡萨芬擦v夫卡奥卡福v啊我库房擦我的困扰发爱看v阿飞vask按时上课案说法把控SUV阿坝师范卡"></h-notice>
   </div>

   <div>
    <h-breadcrumb>
      <h-breadcrumb-item></h-breadcrumb-item>
    </h-breadcrumb>
   </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      swiperList: [{src: require('@/assets/swiper/2.png')},{src: require('@/assets/swiper/3.png')}],
      routerList: [{
        name: "表单",
        children: [{
          name: '表单',
          index: "/views/modules/form"
        }, {
          name: '输入框',
          index: "/views/modules/input"
        },]
      }, {
        name: '面包屑',
        index: "/views/modules/breadcrumb"
      }, {
        name: '按钮',
        index: "/views/modules/button"
      }, {
        name: '弹出框',
        index: "/views/modules/dialog"
      }, {
        name: '瀑布列表',
        index: "/views/modules/fall"
      }, {
        name: '文件管理器',
        index: "/views/modules/filemanager"
      }, {
        name: '加载',
        index: "/views/modules/loading"
      }, {
        name: '右键菜单',
        index: "/views/modules/menu"
      }, {
        name: '滚动提示',
        index: "/views/modules/notice"
      }, {
        name: '分页',
        index: "/views/modules/pagination"
      }, {
        name: '路由菜单',
        index: "/views/modules/router"
      }, {
        name: '搜索框',
        index: "/views/modules/search"
      }, {
        name: '选择器',
        index: "/views/modules/select"
      }, {
        name: '跑马灯',
        index: "/views/modules/swiper"
      },]
    }
  }
}
</script>

<style lang="scss">
html,body, #app {
  padding: 0;
  margin: 0;
}

.swiper-demo {
  width: 500px;
  &-img {
    width: 100%;
    height: 100%;
object-fit: cover;
  }
}

.notice-demo {
  width: 500px;
}
</style>
