<template>
 <div class="h-search" :class="size">
   <i class="el-icon-search"></i>
   <input type="text" :placeholder="placeholder">
 </div>
</template>

<script>
export default {
 name: "h-search",
 props: {
   placeholder: String,
   size: {
     type: String,
     default: 'default'
   }
 }
}
</script>

<style scoped lang="scss">
.h-search {

 //height: 50px;
 display: flex;
 align-items: center;
 padding: 10px 16px;
 background: #ffffff;

 & > i {
   font-size: 16px;
 }
 & > input {
   flex: 1;
   margin-left: 12px;
   border: none;
   outline: none;
   background: transparent;
 }
}
</style>
