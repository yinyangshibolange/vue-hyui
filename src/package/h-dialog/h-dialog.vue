<template>
    <div v-show="visible" class="h-dialog ">
        <div v-show="showMask" class="h-dialog-mask" @click="maskClose" :style="{
                zIndex: zIndex,
                ...maskStyle,
            }"></div>
        <div class="h-dialog-container" @click.stop :style="{
                zIndex: zIndex + 1,
                width: typeof width === 'number' ? width + 'px' : width,
                ...contentStyle,
            }">
            <div class="h-dialog-header">
                <div class="h-dialog-title">{{ title }}</div>
            </div>
            <div class="h-dialog-content">
                <slot></slot>
            </div>

            <div v-show="showFooter" class="h-dialog-footer">
                <slot name="footer"></slot>
            </div>
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
            default: true,
        },
        clickMaskClose: {
            type: Boolean,
            default: true,
        },
        maskStyle: {
            type: Object,
            default: () => ({})
        },
        contentStyle: {
            type: Object,
            default: () => ({})
        },
        title: {
            type: String,
            default: '' // This prop is used for the title of the dialog and should be of type "字符型" (string).
        }
    },
    computed: {
        showFooter() {
            return !!this.$slots.footer
        }
    },
    methods: {
        maskClose() {
            if (this.clickMaskClose) {
                this.$emit("update:visible", false)
                this.$emit("close")
            }
        }
    }

}
</script>

<style scoped lang="scss">
@keyframes dialog-fade-in {
    0% {
        transform: translate(-50%, calc(-50% + 100px));
        opacity: 0.1;
    }



    100% {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}

.h-dialog {
    .h-dialog-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2),
    }

    .h-dialog-container {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 12px;
        padding: 20px;
        min-height: 200px;
        box-shadow: var(--h-box-shadow-small);

        animation: dialog-fade-in 0.3s ease-in-out;
    }

    .h-dialog-header {
        padding: 0 0 20px;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 2px solid #f2f2f2;
    }

    .h-dialog-content {
        padding-top: 20px;
    }

    .h-dialog-footer {
        padding-top: 13px;
        border-top: 2px solid #f2f2f2;
    }

  
}
</style>
