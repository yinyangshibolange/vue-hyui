<template>
    <div v-show="visible" class="h-dialog">
        <div v-show="showMask" class="h-dialog-mask" @click="maskClose" :style="{
            zIndex: zIndex,
            ...maskStyle,
        }"></div>
        <div  class="h-dialog-content" @click.stop :style="{
           zIndex: zIndex + 1,
            width: typeof width === 'number' ? width + 'px' : width,
            ...contentStyle,
        }">
        <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "h-dialog",
    props: {
        visible: Boolean,
        width: {
            type: String,
            default: '50%'
        },
        zIndex: {
            type: Number,
            default: 9999,
        },
        showMask: {
            type: Boolean,
            default:true,
        },
        clickMaskClose: {
            type: Boolean,
            default:true,
        },
        maskStyle: {
            type: Object,
            default: () => ({})
        },
        contentStyle: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        maskClose () {
            if(this.clickMaskClose) {
                this.$emit("update:visible", false)
            this.$emit("close")
            }
        }
    }

}
</script>

<style scoped lang="scss">
.h-dialog {
    .h-dialog-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2),
    }

    .h-dialog-content {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 12px;
        padding: 20px;
        min-height: 200px;
        box-shadow: var(--h-box-shadow-small);
    }
}
</style>
