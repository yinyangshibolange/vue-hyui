<template>
 <div>

  <div class="list list-nowrap">
   <div v-for="(item0, index0) in split_products" :key="index0" class="list-column" :id="'listColumn_' + index0">
    <template v-if="index0 === 0">
     <div v-if="swiperData && swiperData.list && swiperData.list.length > 0" class="h-fall-item"
      style="background: transparent; overflow: hidden;" :style="{
       borderRadius: swiperData.round ? swiperData.round * 2 + 'rem' : 0,
       height: swiperData && swiperData.height ? (swiperData.height * 2 - 10 + 'rem') : 300 - 10 + 'rem',
      }">
      <h-swiper v-if="swiperData">
       <h-swiper-item></h-swiper-item>
      </h-swiper>
     </div>
    </template>
    <!-- <div class="h-fall-item" v-for="(item, index) in item0" :key="index" :id="'product_' + index">
     <img class="firstPic" :src="item.firstPic" :data-index="index" @load="imageLoad" />
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
     </div>
    </div> -->
   </div>


  </div>
 </div>
</template>

<script>
import {h} from "vue"
import hFallItem from './h-fall-item.vue'
export default {
 props: {
  list: {
   type: Object,
   default: () => ({})
  },
  columnLen: {
   type: Number,
   default: 1,
  }
 },
 data () {
  return {
   split_products: [],
   loadCount: 0,
   isLoading: false,
  }
 },
 watch: {
  list (val) {
   if (!val || val.length === 0) {
    this.initProducts()
   }
  },
 },
 mounted () {
  if (this.columnLen && this.columnLen > 1) {
   this.reset_split_list()
  }
 },
 methods: {
  reset_split_list () {
   this.loadCount = 0
   this.split_products = []
   for (const len in this.columnLen) {
    this.split_products.push([])
   }
   console.log(this.split_products)
  },
  startLoadImage () {
   if (this.productList.length === 0) return;
   this.isLoading = true;
   const listColumn_0_height = this.getDomHeight('listColumn_0');
   const listColumn_1_height = this.getDomHeight('listColumn_1');
   if (listColumn_0_height <= listColumn_1_height) {
    this.split_products[0].push(this.productList.shift());
   } else {
    this.split_products[1].push(this.productList.shift());
   }
  },
  getDomHeight (domId) {
   const dom = document.getElementById(domId);
   return dom.offsetHeight
  },
  // 所有圖片加載完畢之後設置瀑布流
  imageLoad () {
   if (this.productList.length === 0) {
    this.isLoading = false;
    return;
   }
   const listColumn_0_height = this.getDomHeight('listColumn_0');
   const listColumn_1_height = this.getDomHeight('listColumn_1');
   if (listColumn_0_height <= listColumn_1_height) {
    this.split_products[0].push(this.productList.shift());
   } else {
    this.split_products[1].push(this.productList.shift());
   }
  },
  createFallItem(item) {
const fallItem = h(hFallItem, {...item})
console.log(fallItem)
  }

 }

}
</script>

<style scoped lang="scss">
.uni-fix-dom {
 width: 100%;
 background: #fff;
 color: #666;
 font-size: 30rem;
 padding: 12rem 0;
 box-sizing: border-box;

 .segmented-control {
  overflow: scroll;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;

  .segmented-control-item {
   text-align: center;
   display: inline-block;
   padding: 8rem 16rem;
   border-radius: 32rem;
   margin-left: 12rem;
   color: #666;

   &:last-child {
    margin-right: 12rem;
   }

   &.active {
    color: #fff;
    background: #ff542e;
   }
  }
 }

 .segmented-control::-webkit-scrollbar {
  display: none;
 }
}

.list {
 background: #eceaeb;
 position: relative;
 display: flex;

 &.list-nowrap {
  flex-wrap: nowrap;
 }

 &.list-wrap {
  flex-wrap: wrap;
 }

 .list-column {
  width: 357rem;
  height: fit-content;
  margin-left: 12rem;


 }

 .h-fall-item {
  width: 357rem;
  border-radius: 12rem;
  background-color: #ffffff;
  margin: 12rem 0;

  &.old {
   margin: 12rem 0 0 12rem;

   &:nth-child(2n + 1) {
    margin: 12rem 0 0 0;
   }
  }

  .firstPic {
   border-top-right-radius: 12rem;
   border-top-left-radius: 12rem;
   padding: 22rem 22rem 0;
   box-sizing: border-box;
   width: 358rem;
   height: 336rem;
   display: block;
  }

  .name {
   display: block;
   box-sizing: border-box;
   padding: 16rem 22rem 0 22rem;
   background-color: #fff;
   color: #000;
   font-weight: 700;
   font-size: 28rem;
   white-space: wrap;
   line-height: 38rem;
  }

  .dis_flex {
   background-color: #fff;
   border-bottom-right-radius: 24rem;
   border-bottom-left-radius: 24rem;
   position: relative;

   .buy {
    position: absolute;
    right: 30rem;
    bottom: 10rem;
    width: 56rem;
    height: 56rem;
    border-radius: 12rem;
   }

   .price {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 24rem;
    padding-right: 32rem;
    font-weight: bold;
    color: #ff542e;
    font-size: 36rem;
    margin-top: 10rem;
    line-height: 50rem;
    position: relative;

    image,
    img {
     vertical-align: middle;
     width: 30rem;
     height: 28rem;
     line-height: 44rem;
     margin-right: 6rem;
    }

    .buy_count {
     font-size: 20rem;
     color: #999;
     position: absolute;
     right: 32rem;
     top: -10rem;
     font-weight: 400;
    }
   }

   .underlinePrice {
    display: flex;
    align-items: center;
    text-decoration: line-through;
    margin-top: 8rem;
    font-size: 24rem;
    padding-left: 24rem;
    line-height: 30rem;
    padding-bottom: 10rem;
    color: #cac7c7;

    image,
    img {
     vertical-align: middle;
     width: 20rem;
     height: 20rem;
     margin-right: 5rem;
    }
   }
  }
 }
}
</style>
