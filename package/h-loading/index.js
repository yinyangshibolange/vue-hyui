// 导入当前目录下的h-loading.js
import loading from './h-loading.js';
import "./h-loading.scss"
// 注册全局函数
export default app => {
    if (app.prototype) {
        app.prototype.$loading = loading
    }
    if (app.config.globalProperties) {
        app.config.globalProperties.$loading = loading
    }
}
