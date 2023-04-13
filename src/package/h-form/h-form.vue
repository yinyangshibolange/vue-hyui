<template>
 <div class="h-form">
  <slot></slot>
 </div>
</template>

<script>
export default {
 name: "h-form",
 props: {
  model: {
   type: Object,
  },
  rules: {
   type: Object,
  }
 },
 methods: {
  validate() {
   // 获取h-form下所有具有prop属性的子节点，
   // 找到prop属性是否在rules里存在
   // 存在的话判断model[prop]是否符合rule规则
   // 全部符合的话返回true
   // 如果有不符合返回false，并且在响应的node下设置errormsg

  }
 }
}
</script>