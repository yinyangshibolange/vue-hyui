// css variable
import "../assets/vars.css"

// plugins
import { createRightMenu } from './h-menu/h-menu.js'
import "./h-menu/h-menu.scss"
import loading from './h-loading/h-loading.js'
import "./h-loading/h-loading.scss"

// components
import hFilemanager from './h-filemanager/h-filemanager.vue'
import hBreadcrumb from './h-breadcrumb/h-breadcrumb.vue'
import hBreadcrumbItem from './h-breadcrumb/h-breadcrumb-item.vue'
import hForm from './h-form/h-form.vue'
import hFormItem from './h-form/h-form-item.vue'
import hSelect from './h-select/h-select.vue'
import hSelectItem from './h-select/h-select-item.vue'
import hPagination from "./h-pagination/h-pagination.vue"
import hButton from "./h-button/h-button.vue"
import hInput from "./h-input/h-input.vue"

// 注册
const install = function (app) {
 if (app.prototype) {
  app.prototype.$createRightMenu = createRightMenu
  app.prototype.$loading = loading
 } 
 if (app.config.globalProperties) {
  app.config.globalProperties.$createRightMenu = createRightMenu
  app.config.globalProperties.$loading = loading
 }
 app.component("h-filemanager", hFilemanager)
 app.component("h-breadcrumb", hBreadcrumb)
 app.component("h-breadcrumb-item", hBreadcrumbItem)
 app.component("h-form", hForm)
 app.component("h-form-item", hFormItem)
 app.component("h-select", hSelect)
 app.component("h-select-item", hSelectItem)
 app.component("h-pagination", hPagination)
 app.component("h-button", hButton)
 app.component("h-input", hInput)
}

window.createRightMenu = createRightMenu

export default install;