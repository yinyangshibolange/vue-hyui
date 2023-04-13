<template>
 <input class="h-input" :class="[size]" v-model="inputVal" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
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