<template>
<div class="h-form-item">
 <label for="">{{ label }}</label>
 <slot></slot>

 <div v-if="errmsg">{{ errmsg }}</div>
</div>
</template>

<script>
export default {
 name: "h-form-item",
 props: {
  prop: {
   type: String,
  },
  label: {
   type: String,
  },
 },
 data() {
  return {
   errmsg: ''
  }
 }
}
</script>


