<template>
 <div class="h-select">
  <div class="h-select-value" @click="triggerSelectList">
   <span class="h-select-value-text" v-if="currentLabel">{{ currentLabel }}</span>
   <span class="h-select-value-placeholder" v-else>{{ placeholder }}</span>
  </div>
  <div class="h-select-container" v-show="isActive">
   <ul ref="hSelectItemsRef" class="h-select-items">
    <slot></slot>
    <template v-if="!$slots.default && list">
     <li v-for="(item, index) in list" :key="index" class="h-select-item" @click="chooseItem(item)">
      {{ item[labelKey] }}
     </li>
    </template>
   </ul>

  </div>
 </div>
</template>

<script>
import { findTargetEl } from "../../utils/index"
export default {
 name: "h-select",
 props: {
  value: {
   type: [String, Number, Boolean]
  },
  placeholder: {
   type: String,
   default: "请选择"
  },
  list: Array,
  labelKey: {
   type: String,
   default: "label"
  },
  valueKey: {
   type: String,
   default: "value"
  },
 },
 computed: {
  selectValue: {
   get () {
    return this.value
   },
   set (val) {
    this.$emit("input", val)
   }
  },
  currentLabel () {
   return (this.selectList.find(item => item[this.valueKey] === this.selectValue) || {})[this.labelKey]
  }
 },
 data () {
  return {
   isActive: false,
   selectList: [],
  }
 },
 mounted () {
  const selectItemsList = (this.$children||[]).filter(item => item.$options._componentTag === "h-select-item")
  if (selectItemsList && selectItemsList.length > 0) {
   this.selectList = selectItemsList.map(item => ({
    label: item.label,
    value: item.value,
   })) || []
  } else if (this.list) {
   this.selectList = this.list
  }


 },
 methods: {
  chooseItem (item) {
   this.setValue(item[this.valueKey])
  },
  setValue (value) {
   this.selectValue = value
   this.triggerSelectList()
  },
  triggerSelectList (ev) {
   if (ev) {
    const el = findTargetEl(ev.target, "h-select-value")
    if (el) {
     const { left, bottom, right, top } = el.getBoundingClientRect()
     const { offsetWidth, offsetHeight } = this.$refs.hSelectItemsRef

    }
   }
   this.isActive = !this.isActive
  }
 }
}
</script>

<style lang="scss" scoped>
.h-select {
width: 100%;
height: 100%;
 &-value {
//   min-width: var(--h-form-input-min-width);
//   padding: var(--h-padding);
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

  &-text {
   color: #000;
  }

  &-placeholder {
   color: #999;
  }
 }

 &-items {
  list-style: none;
  padding: 0;
  margin: 0;

  min-width: var(--h-form-input-min-width);
  border: 2px solid var(--h-primary-color);
  border-radius: var(--h-border-radius);
 }

 &-item {
  padding: var(--h-padding);
  cursor: pointer;

 }
}
</style>