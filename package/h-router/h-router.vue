<script>
import hRouterItem from './h-router-item.vue';
export default {
 render (h) {
  const routerItemList = []
  this.list.forEach((item, index) => {
   let childrens = [];
   const routerItem = h(hRouterItem, {
    props: {
     ...item,
     active: this.currentIndex === item.index,
     key: index,
    },
    domProps: {
     key: index,
    },
    style: {
     background: this.background,
    },
    on: {
     changeRouter: this.changeRouter
    },
   }, childrens)
   routerItemList.push(routerItem)
  })

  return h("ul", {
   attrs: {
    class: "h-router"
   },
   data () {
    return {

    }
   }
  }, routerItemList)
 },
 props: {
  list: {
   type: Array,
   default: () => []
  },
  background: String,
 },
 data () {
  return {
   currentIndex: '',
  }
 },
 methods: {
  changeRouter (router) {
   console.log('changeRouter', router)
   this.currentIndex = router
  }
 }
}
</script>

<style lang="scss" scoped>
.h-router {
 display: flex;
 list-style: none;
  padding: 0;
  margin: 0;
}
</style>