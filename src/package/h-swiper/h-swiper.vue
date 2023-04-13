<template>
    <div :id="uid" class="h-swiper" @mousedown="ondragStart">
        <div class="h-swiper-container" ref="swiperContainerRef" :style="{
            transform: `translateX(${tranx}px)`,
            transition: !ondraging ? `transform ${duration / 1000}s ease-in-out` : '',
        }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import * as utils from "../../utils";
import { addResizeListener, removeResizeListener } from "../../utils/resize-event";
import debounce from "lodash/debounce"

export default {
    name: "h-swiper",
    props: {
        autoplay: Boolean,
        indicatorDots: Boolean, // 点
        indicatorColor: String,
        indicatorActiveColor: String,
        current: Number,
        interval: {
            type: Number,
            default: 3000
        },
        duration: {
            type: Number,
            default: 500,
        },
        // circular: Boolean, // 是否采用衔接滑动，即播放到末尾后重新回到开头
        // vertical: Boolean, // 滑动方向是否为纵向
        // previousMargin: String, // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
        // nextMargin: String, // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
        // @change
        // @transition swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持dx, dy
        // @animationfinish 动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source}
    },
    data () {
        return {
            uid: 'uid_',
            itemWidth: 375,
            public_current: 0,
            tranx: 0,
            ondraging: false,
            p_observer: null,
        }
    },
    watch: {
        current (val) {
            this.public_current = val
            this.setCurrent(val)
        },
        public_current (val) {
            this.$emit("update:current", val)
        },
        autoplay (val, old_val) {
            if (val && !old_val) {
                this.start()
            } else if (!val && old_val) {
                this.stop()
            }
        }
    },
    mounted () {
        this.public_current = this.current
        this.uid = 'uid_' + utils.guid()

        this.setCurrent(this.current)

        addResizeListener(this.$el, this.initSize)

        this.initSize()


        if (window.MutationObserver) {
            const config = {
                childList: true
            }
            this.p_observer = new MutationObserver(this.childrenChange);
            this.p_observer.observe(this.$refs.swiperContainerRef, config);
        }
    },
    destroyed () {
        if (this.$el) removeEventListener(this.$el, this.initSize)

        if (this.p_observer) this.p_observer.disconnect();
    },
    methods: {
        initSize: debounce(function () {
            const { width, height } = this.$el.getBoundingClientRect()
            this.itemWidth = width
            if (this.$refs.swiperContainerRef) {
                if (this.$refs.swiperContainerRef.childNodes && this.$refs.swiperContainerRef.childNodes.length > 0) {
                    this.$refs.swiperContainerRef.childNodes.forEach(item => {
                        item.style.width = this.itemWidth + 'px'
                    })
                    this.start()
                }
            }
        }, 50),
        childrenChange (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    this.initSize()
                }
            }
        },
        start () {
            if (!this.autoplay) return
            if (!this.$refs.swiperContainerRef || !this.$refs.swiperContainerRef.childNodes || this.$refs.swiperContainerRef.childNodes.length <= 1) return
            const len = this.$refs.swiperContainerRef.childNodes.length
            if (this.private_interval) clearInterval(this.private_interval)
            this.private_interval = setInterval(() => {
                if (this.tranx - this.itemWidth < -(len - 1) * this.itemWidth) {
                    this.tranx = 0
                } else {
                    this.tranx = this.tranx - this.itemWidth
                }

                this.public_current = (-this.tranx / this.itemWidth)
            }, this.interval)
        },
        stop () {
            if (this.private_interval) clearInterval(this.private_interval)
        },
        setCurrent (cur) {
            let target_cur;
            if (cur < this.$refs.swiperContainerRef.childNodes.length) {
                target_cur = cur
            } else {
                target_cur = this.$refs.swiperContainerRef.childNodes.length - 1
            }

            this.tranx = 0 - target_cur * this.itemWidth

        },
        ondragStart (down_ev) {
            const len = this.$refs.swiperContainerRef.childNodes.length
            down_ev.preventDefault()
            down_ev.stopPropagation()
            this.stop()

            this.ondraging = true

            const currentTranX = this.tranx

            document.onmousemove = (move_ev) => {
                if (currentTranX - down_ev.clientX + move_ev.clientX > this.itemWidth / 5) return
                if (currentTranX - down_ev.clientX + move_ev.clientX < (-this.itemWidth) * (len - 1) - this.itemWidth / 5) return
                if (currentTranX - down_ev.clientX + move_ev.clientX <= currentTranX - this.itemWidth) return
                if (currentTranX - down_ev.clientX + move_ev.clientX >= currentTranX + this.itemWidth) return


                this.tranx = currentTranX - (down_ev.clientX - move_ev.clientX) * (1 - (this.itemWidth - Math.abs((down_ev.clientX - move_ev.clientX))) / this.itemWidth)
            }

            document.onmouseup = () => {
                document.onmousemove = null
                const rd = Math.round(-this.tranx / this.itemWidth)
                this.tranx = -rd * this.itemWidth
                this.public_current = (-this.tranx / this.itemWidth)
                this.ondraging = false
                this.start()
            }
        }
    }
}
</script>

<style scoped lang="scss">
.h-swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .h-swiper-container {
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        width: fit-content;


        .h-swiper-item {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
