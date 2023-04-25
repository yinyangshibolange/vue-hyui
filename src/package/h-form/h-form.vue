<template>
 <div class="h-form">
  <slot></slot>
 </div>
</template>

<script>
export default {
 name: "h-form",
 props: {
  model: {
   type: Object,
  },
  rules: {
   type: Object,
  }
 },
 methods: {
  bsValidate (childNodes, model, rules) {
   if (!rules) {
    console.info("请传入校验规则")
    return true
   }
   if (!childNodes) {
    console.error("请传入需要验证的表单实例")
    return false
   }
   if (!model) {
    console.error("请传入需要验证的表单数据")
    return false
   }
   if (childNodes.length > 0) {
    if (childNodes && childNodes.length > 0) {
     let validate_flag = true
     childNodes.forEach(el => {
      if (el.$options.propsData.prop) {
       let rule = rules[el.$options.propsData.prop]
       if (Array.isArray(rule) && rule.length > 0) {
        let errorMsg = []
        rule.forEach(item => {
         let value = model[el.$options.propsData.prop]
         if (item.required) {
          if (!value) {
           errorMsg.push(item.message || "数据不能为空")
          }
         }
         if (item.min) {
          try {
           let temp_value = +value
           if (temp_value < item.min) {
            errorMsg.push(item.message || "数据不能小于" + item.min)
           }
          } catch (err) {
           console.warn("不能验证非数字型的最大值最小值")
          }
         }
         if (item.max) {
          try {
           let temp_value = +value
           if (temp_value > item.max) {
            errorMsg.push(item.message || "数据不能大于" + item.max)
           }
          } catch (err) {
           console.warn("不能验证非数字型的最大值最小值")
          }
         }
         if (item.minlength) {
          try {
           let temp_str = value.toString()
           if (temp_str.length < item.minlength) {
            errorMsg.push(item.message || "长度不能小于" + item.minlength)
           }
          } catch (err) {
           console.warn("不能验证非字符型的最大值最小值")
          }
         }
         if (item.maxlength) {
          try {
           let temp_str = value.toString()
           if (temp_str.length > item.maxlength) {
            errorMsg.push(item.message || "长度不能大于" + item.maxlength)
           }
          } catch (err) {
           console.warn("不能验证非字符型的最大值最小值")
          }
         }
         if (item.equalTo) {
          if (value !== model[item.equalTo]) {
           errorMsg.push(item.message || "数据不相等")
          }
         }
         if (item.number) {
          if (!/^[0-9]+.?[0-9]*/.test(value.toString())) {
           errorMsg.push(item.message || "数据必须是数字")
          }
         }
         if (item.digits) {
          if (!/[1−9]+[0−9]∗]∗/.test(value.toString())) {
           errorMsg.push(item.message || "数据必须是整数数字")
          }
         }
         if (typeof item.validator === 'function') {
          if (item.validator(value)) {
           errorMsg.push(item.message || "自定义验证失败")
          }
         }
        })

        el.$data.errmsg = errorMsg.join("，")
        if (el.$data.errmsg && validate_flag) {
         validate_flag = false
        }

       }
      }

     })
     return validate_flag
    } else {
     // console.info("没有需要验证的form-item")
     return true
    }

   } else {
    return true
   }
  },
  validate () {
   // 获取h-form下所有具有prop属性的子节点，
   // 找到prop属性是否在rules里存在
   // 存在的话判断model[prop]是否符合rule规则
   // 全部符合的话返回true
   // 如果有不符合返回false，并且在响应的node下设置errormsg
   const childNodes = (this.$slots.default || []).filter(child => {
    return child.componentOptions.tag === 'h-form-item'
   }).map(item => item.componentInstance)
   return this.bsValidate(childNodes, this.model, this.rules)
  }
 }
}
</script>