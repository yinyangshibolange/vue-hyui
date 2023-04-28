import HRouter from './h-router.vue';
import HRouterItem from './h-router-item.vue';

 function registerHRouter(Vue) {
  Vue.component('h-router', HRouter);
}

 function registerHRouterItem(Vue) {
  Vue.component('h-router-item', HRouterItem);
}

export default app => {
    registerHRouter(app)
    registerHRouterItem(app)
}