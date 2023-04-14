<template>
 <div class="flex h-notice">
   <div class="i-container">
     <i class="el-icon-bell" :style="{
     color: iconColor,
     fontSize: iconSize + 'px'
   }"></i>
   </div>
   <div ref="scrollRef" class="scroll-text" :style="{
   transform: `translateX(${tranX}px)`
 }">
     <div ref="textContainerRef" class="text-container" :style="{
      color: textColor,
     fontSize: textSize + 'px'
   }">
       {{ text }}
     </div>
   </div>
 </div>
</template>

<script>
import {addResizeListener, removeResizeListener} from "../../utils/resize-event";

export default {
 name: "h-notice",
 props: {
   text: String,
   speed: {
     type: Number,
     default: 0.2
   },
   iconColor: {
     type: String,
     default: "#ff9932"
   },
   iconSize: {
     type: Number,
     default: 16
   },
   textColor: {
     type: String,
     default: "#ff9932"
   },
   textSize: {
     type: Number,
     default: 16
   }
 },
 data() {
   return {
     tranX: 0,
   }
 },
 mounted() {
   this.setScrollInteval()
   addResizeListener(this.$refs.textContainerRef, this.setScrollInteval)
 },
 destroyed() {
   if(this.$refs.textContainerRef) removeResizeListener(this.$refs.textContainerRef, this.setScrollInteval)
 },
 methods: {
   setScrollInteval() {
    if(!this.$refs.scrollRef || !this.$refs.textContainerRef) return
     const scrollWidth = this.$refs.scrollRef.offsetWidth
     const textWidth = this.$refs.textContainerRef.offsetWidth
     this.tranX= 0
     if (this.interval) clearInterval(this.interval)
     if (textWidth <= scrollWidth) return
     this.interval = setInterval(() => {
       if (textWidth > scrollWidth) {
         if (this.tranX < -textWidth- 3) {
           this.tranX = scrollWidth + 3
         } else {
           this.tranX = this.tranX - this.speed
         }
       }
     }, 1)
   }
 }
}
</script>

<style scoped lang="scss">
$i-container-width: 39px;
.h-notice {
 width: 100%;
 height: 100%;

 .i-container {
   width: $i-container-width;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   background: #ffffff;
   z-index: 12;
   flex-shrink: 0;
 }

 .scroll-text {
   width: calc(100% - #{$i-container-width});
   display: flex;
   align-items: center;

   .text-container {
     width: fit-content;
     white-space: nowrap;
   }
 }
}

</style>
