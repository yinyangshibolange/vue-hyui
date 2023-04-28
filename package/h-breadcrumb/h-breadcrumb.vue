<template>
 <div class="h-breadcrumb h-btn">
  <div class="h-breadcrumb-ct">
   <div v-for="(item, index) in list" :key="index" class="h-breadcrumb-item">
    <a @click="clickHandle(index)">{{ item[nameKey] }}</a>

    <span v-if="index < list.length - 1">{{ separator }}</span>
   </div>
  </div>

  <div v-if="list.length > 1" class="backbtn" @click="crumb_back">
   返回
  </div>
 </div>
</template>

<script>
export default {
 props: {
  separator: {
   type: String,
   default: "/"
  },
  list: {
   type: Array,
   default: () => []
  },
  nameKey: {
    type: String,
    default: "name"
  }
 },
 methods: {
  clickHandle (index) {
   if (index < this.list.length - 1) {
    this.$emit("bread-click", index)
   }
  },
  crumb_back () {
   this.$emit("bread-back")
  }
 }
}
</script>
<style scoped lang="scss">
.h-breadcrumb {
 background: var(--h-primary-color);
 color: #fff;
 display: inline-flex;

 .h-breadcrumb-ct {
  display: flex;
 }

 .h-breadcrumb-item {
  &>a {
    display: inline-block;
    max-width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   &:not(:last-child) {
    cursor: pointer;
    text-decoration: underline;
    // &::after {
    //  content: "/";
    // }
   }
  }

  &>span {
    display: inline-block;
    max-width: 70px;
    margin: 0 7px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

 }


 .backbtn {
  margin-left: 12px;
  cursor: pointer;
  text-decoration: underline;
 }
}
</style>