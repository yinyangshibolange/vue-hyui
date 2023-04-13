<template>
 <button class="h-button" :class="[type, size, {block},]" @click="emitClick">
   <slot></slot>
 </button>
</template>

<script>
export default {
 props: {
  type: String,
  size: String,
  block: Boolean,
 },
 mounted() {
  console.log(this.$slots)
 },
 methods: {
  emitClick(ev) {
   this.$emit("click", ev)
  }
 }
}
</script>

<style scoped lang="scss">
.h-button {
&.primary {
 background: var(--h-primary-color);
}

&.danger {
 background: var(--h-danger-color);
}

display: inline-block;
width: auto;
line-height: 20px;
border: none;
outline: none;
padding: var(--h-padding);
box-sizing: border-box;
margin-left: var(--h-gutter-width);
color: #fff;
border-radius: var(--h-border-radius);

&:hover {
 &.primary {
 background: var(--h-primary-color-hover);
}

&.danger {
 background: var(--h-danger-color-hover);
}

}

&.block {
 display: block;
}
}
</style>