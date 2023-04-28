import hFallItem from './h-fall-item.vue';
import hFall from './h-fall.vue';

// Replace the existing 'const' declarations with 'import' statements
// to use ES6 module syntax instead of CommonJS syntax

function registerHFall(app) {
    app.component('h-fall-item', hFallItem);
    app.component('h-fall', hFall);
}

export default registerHFall; // 输出注册函数 
