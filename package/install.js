// css variable
import "../assets/vars.css"
import "../assets/flex.css"

// foriegn
import 'animate.css';

// plugins
import hMenu from './h-menu/h-menu.js'
import loading from './h-loading/h-loading.js'
import "./h-loading/h-loading.scss"


// components
import hFilemanager from './h-filemanager/h-filemanager.vue'
import hBreadcrumb from './h-breadcrumb/h-breadcrumb.vue'
import hForm from './h-form/h-form.vue'
import hFormItem from './h-form/h-form-item.vue'
import hSelect from './h-select/h-select.vue'
import hSelectItem from './h-select/h-select-item.vue'
import hPagination from "./h-pagination/h-pagination.vue"
import hButton from "./h-button/h-button.vue"
import hInput from "./h-input/h-input.vue"
import hFall from "./h-fall/h-fall.vue"
import hNotice from "./h-notice/h-notice.vue"
import hSearch from "./h-search/h-search.vue"
import hRouter from "./h-router/h-router.vue"
import hDialog from "./h-dialog/h-dialog.vue"
import hSwiper from "./h-swiper/h-swiper.vue"
import hSwiperItem from "./h-swiper/h-swiper-item.vue"

import hMessage from "./h-message/h-message"


// 注册
const install = function (app) {
 if (app.prototype) {
  app.prototype.$loading = loading
 } 
 if (app.config.globalProperties) {
  app.config.globalProperties.$loading = loading
 }
 app.use(hMenu)
 app.use(hMessage)

 app.component("h-filemanager", hFilemanager)
 app.component("h-breadcrumb", hBreadcrumb)
 app.component("h-form", hForm)
 app.component("h-form-item", hFormItem)
 app.component("h-select", hSelect)
 app.component("h-select-item", hSelectItem)
 app.component("h-pagination", hPagination)
 app.component("h-button", hButton)
 app.component("h-input", hInput)
 app.component("h-fall", hFall)
 app.component("h-notice", hNotice)
 app.component("h-search", hSearch)
 app.component("h-router", hRouter)
 app.component("h-swiper", hSwiper)
 app.component("h-dialog", hDialog)
 app.component("h-swiper-item", hSwiperItem)
}


export default install;
