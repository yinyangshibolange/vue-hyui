<template>
 <input class="h-input" :class="[size]" v-model="inputVal" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
 name: "h-input",
 props: {
  value: {
   type: [String, Number,],
  },
  type: {
   type: String,
   default: 'text'
  },
  placeholder: {
   type: String,
   default: '请输入内容'
  },
  size: String,
 },
 computed: {
  inputVal: {
   get () {
    return this.value
   },
   set (val) {
    this.$emit("input", val)
   }
  }
 },
 data () {
  return {
  }
 },
}
</script>

<style lang="scss" scoped>
.h-input {
 font-size: var(--h-fontsize-middle);
 padding: var(--h-padding);
    outline-color: var(--h-e2-color);

 &:focus {
    outline-color: var(--h-primary-color);
/* To change the border color of the input when it is focused, 
   change the value of the outline-color property to the desired theme color */
// border: 2px solid var(--h-primary-color);
 }

 &.small {
  font-size: var(--h-fontsize-small);
 }

 &.middle {
  font-size: var(--h-fontsize-middle);
 }

 &.large {
  font-size: var(--h-fontsize-large);
 }
}
</style>