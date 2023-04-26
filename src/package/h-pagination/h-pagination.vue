<template>
    <div class="h-pagination">
        <div class="h-pagination-total">共{{ total }}条数据</div>
        <ul>
            <li><a>&lt;</a></li>
            <li v-for="(item, index) in pages" :key="index" :class="{ active: item.page === currentPage }">
                <a v-if="item.type === 'page'">{{ item.page }}</a>
                <span v-else>{{ item.name }}</span>
            </li>
            <li><a>&gt;</a></li>
        </ul>
        <div class="h-pagesize-selector">
            <!-- <h-select v-model="currentPagesize" :list="pageSizes.map(item => ({ label: item, value: item }))">
                <h-select-item label="每页10条数据" :value="10"></h-select-item>
                <h-select-item label="每页20条数据" :value="20"></h-select-item>
                <h-select-item label="每页30条数据" :value="30"></h-select-item>
            </h-select> -->

            <a :class="currentPagesize === 10 ? 'active' : ''" @click="currentPagesize = 10">10</a>
            <a :class="currentPagesize === 20 ? 'active' : ''" @click="currentPagesize = 20">20</a>
            <a :class="currentPagesize === 30 ? 'active' : ''" @click="currentPagesize = 30">30</a>
        </div>
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
        pages() {
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
        currentPagesize(pagesize) {
            this.$emit("change-pagesize", pagesize)
            this.$emit("update:pagesize", pagesize)
        }
    },
    data() {
        return {
            currentPage: 1,
            currentPagesize: 10,
        }
    },
    mounted() {
        this.currentPage = this.page
        this.currentPagesize = this.pagesize
    },
    methods: {
        changePage(page) {
            if (page === this.currentPage) return
            this.currentPage = page
            this.$emit("change-page", page)
            this.$emit("update:page", page)
        },
    }
}
</script>

<style lang="scss" scoped>
$h-page-height: 37px;
.h-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    &>ul {
        list-style: none;
        padding: 0;
        margin: 0;

        &>li {
            border: 2px solid var(--h-primary-color);
            width: 50px;
            height: $h-page-height;
            display: inline-block;
            text-align: center;
            // padding: var(--h-padding);
            border-radius: var(--h-border-radius);
            box-sizing: border-box;
            line-height: $h-page-height;
            overflow: hidden;

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
                cursor: pointer;

                &:hover {
                    background: var(--h-primary-color-hover);
                    color: #fff;
                }

            }
        }
    }

    .h-pagesize-selector {
        width: 130px;
        height: $h-page-height;

        border: 2px solid var(--h-primary-color);
        border-radius: var(--h-border-radius);
        overflow: hidden;

        &>a {
            display: inline-block;
            width: calc(100% / 3);
            height: 100%;
            text-align: center;
            line-height: $h-page-height;
            overflow: hidden;
            cursor: pointer;

            &.active {
                background: var(--h-primary-color);
                color: #fff;
            }

            &:hover {
                background: var(--h-primary-color-hover);
                color: #fff;
            }
        }
    }


    .h-pagination-total {
        overflow: hidden;
        width: 130px;
        height: $h-page-height;

        border: 2px solid var(--h-primary-color);
        border-radius: var(--h-border-radius);
        text-align: center;
        line-height: $h-page-height;
    }
}
</style>