<template>
 <div class="h-pagination">
  <ul>
   <li><a>&lt;</a></li>
   <li v-for="(item, index) in pages" :key="index" :class="{ active: item.page === currentPage }">
    <a v-if="item.type === 'page'">{{ item.page }}</a>
    <span v-else>{{ item.name }}</span>
   </li>
   <li><a>&gt;</a></li>
  </ul>
  <h-select v-model="currentPagesize" :list="pageSizes.map(item => ({ label: item, value: item }))">
   <h-select-item label="每页10条数据" :value="10"></h-select-item>
   <h-select-item label="每页20条数据" :value="20"></h-select-item>
   <h-select-item label="每页30条数据" :value="30"></h-select-item>
  </h-select>
  <div class="h-pagination-total">共{{ total }}条数据</div>
 </div>
</template>

<script>
export default {
 props: {
  page: {
   type: Number,
   default: 1,
  },
  pagesize: {
   type: Number,
   default: 10,
  },
  pageSizes: Array,
  total: {
   type: Number,
   default: 0,
  },
  showTotal: {
   type: Boolean,
   default: false,
  }
 },
 computed: {
  pages () {
   if (this.total === 0) {
    return [{
     page: 1,
     type: 'page',
    }]
   }
   const total = this.total
   const pagesize = this.currentPagesize
   const page = this.currentPage
   const all_pages = Math.ceil(total / pagesize)
   if (all_pages > 5) {
    let temparr = []
    if (page - 1 > 1) {
     temparr.push({
      page: 1,
      type: 'page',
     })
     if (page - 2 > 1) {
      temparr.push({
       name: "..."
      })
     }
    }
    if (page - 1 >= 1) {
     temparr.push({
      page: page - 1,
      type: 'page',
     })
    }
    temparr.push({
     page: page,
     type: 'page',
    })
    if (page + 1 <= all_pages) {
     temparr.push({
      page: page + 1,
      type: 'page',
     })
    }
    if (page + 1 < all_pages) {
     if (page + 2 < all_pages) {
      temparr.push({
       name: '...'
      })
     }
     temparr.push({
      page: all_pages,
      type: 'page',
     })
    }
    return temparr
   } else {
    let temparr = []
    for (let i = 0; i < all_pages; i++) {
     temparr.push({
      page: i + 1,
      type: 'page',
     })
    }
    return temparr
   }
  }
 },
 watch: {
  currentPagesize (pagesize) {
   this.$emit("change-pagesize", pagesize)
   this.$emit("update:pagesize", pagesize)
  }
 },
 data () {
  return {
   currentPage: 1,
   currentPagesize: 10,
  }
 },
 mounted () {
  this.currentPage = this.page
  this.currentPagesize = this.pagesize
 },
 methods: {
  changePage (page) {
   if (page === this.currentPage) return
   this.currentPage = page
   this.$emit("change-page", page)
   this.$emit("update:page", page)
  },
 }
}
</script>

<style lang="scss" scoped>
.h-pagination {
 &>ul {
  list-style: none;
  padding: 0;
  margin: 0;
  &>li {
   border: 2px solid var(--h-primary-color);
   min-width: 50px;
   display: inline-block;
   text-align: center;
   padding: var(--h-padding);
   border-radius: var(--h-border-radius);

   &:not(:first-child) {
    margin-left: var(--h-gutter-width);
   }

   &.active {
    background: var(--h-primary-color);
    color: #fff;
   }

   &>a {
    display: block;
    width: 100%;
    height: 100%;

    &:hover {
     background: var(--h-primary-color-hover);
    }

   }
  }
 }

}
</style>