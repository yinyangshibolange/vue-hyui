<template>
  <li class="h-select-item" @click="chooseItem">
   <div v-if="label">
    {{ label }}
   </div>
  <div v-else><slot></slot></div>
  </li>
</template>

<script>
export default {
 name: "h-select-item",
 props: {
  label: String,
  value: [String, Number, Boolean],
 },
 methods: {
  chooseItem() {
   if(this.$parent && this.$parent.$options && this.$parent.$options._componentTag === "h-select") {
    this.$parent.setValue(this.value)
   }
  }
 }
}
</script>