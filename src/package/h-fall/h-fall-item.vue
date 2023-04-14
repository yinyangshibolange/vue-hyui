<template>
 <div class="h-fall-item">
  <!-- <img class="firstPic" :src="item.firstPic" :data-index="index" @load="imageLoad" />
  <p class="name">{{ item.name }}</p>
  <div class="dis_flex">
   <p class="price">
    <img src="" />{{ item.chengyiPrice }}
    <text class="buy_count c-999">{{ item.sales }}人付款</text>
   </p>
   <p class="underlinePrice" v-if="item.marketPrice">
    <img src="" />{{ item.marketPrice }}
   </p>
   <img class="buy" src="/src/assets/images/Vector_add.png">
  </div> -->
  <slot></slot>
 </div>
</template>

<script>
export default {
 data () {
  return {

  }
 }
}
</script>