<template>
<div class="h-form-item">
 <slot></slot>
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
  }
 },
 data() {
  return {
   errmsg: ''
  }
 }
}
</script>


