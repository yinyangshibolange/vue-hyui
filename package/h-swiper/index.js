import hSwiperItem from "./h-swiper-item.vue"
import hSwiper from "./h-swiper.vue"
export default app => {
    app.component('h-swiper-item', hSwiperItem);
    app.component('h-swiper', hSwiper);

}