<template>
 <li class="h-router-item" ref="hRouterChildrenRef" :class="[{ active, childrenShow }]" @click="clickHandle">
  {{ name }}

  <div v-if="hasChildren" class="h-router-children">
   <ul class="h-router-children-ul">
    <li class="h-router-children-li" v-for="(item, index) in children" :key="index">{{ item.name }}</li>
   </ul>
  </div>
 </li>
</template>

<script>
import { addDocumentClickListener, removeDocumentClickListener } from "../../utils"
export default {
 props: {
  name: String,
  index: String,
  active: Boolean,
  children: Array,
 },
 computed: {
  hasChildren () {
   return Array.isArray(this.children) && this.children.length > 0
  }
 },
 data () {
  return {
   childrenShow: false,
   click_options: null,
  }
 },
 watch: {
  childrenShow (val) {
   this.click_options = {
    el: this.$refs.hRouterChildrenRef,
    callback: (val) => {
     if (!val) {
      this.childrenShow = false
     }
    }
   }
   if (val) {
    addDocumentClickListener(this.click_options)
   } else {
    removeDocumentClickListener(this.click_options)
   }
  }
 },
 destroyed () {
  if (this.childrenShow && this.click_options) {
   removeDocumentClickListener(this.click_options)
  }
 },
 methods: {
  clickHandle () {
   if (this.hasChildren) {
    this.childrenShow = !this.childrenShow
   } else {
    this.$emit("changeRouter", this.index)
   }
  }
 }
}
</script>

<style lang="scss" scoped>
.h-router-item {
 position: relative;
 padding: var(--h-padding);
cursor: pointer;
 // &:not(:first-child) {

 //  margin-left: var(--h-gutter-width);
 // }

 &:hover {
  background: var(--h-primary-color-hover);
  color: #fff;
 }

 &.active {
  background: var(--h-primary-color);
  color: #fff;
 }

 &.childrenShow {
  background: var(--h-primary-color-hover);
  color: #fff;

  .h-router-children {
   display: block;
  }
 }
}

.h-router-children {
 position: absolute;
 min-width: 100%;
 left: 0;
 top: 100%;
 border: 1px solid var(--h-primary-color);
 display: none;

 &-ul {
  list-style: none;
  padding: 0;
  margin: 0;
 }

 &-li {
  padding: var(--h-padding);
  white-space: nowrap;
 }
}
</style>