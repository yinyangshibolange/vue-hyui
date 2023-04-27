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

<style scoped lang="scss">
.h-form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
}

</style>