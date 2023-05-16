<template>
    <div v-show="visible" class="h-dialog ">
        <div v-show="showMask" class="h-dialog-mask" @click="maskClose" :style="{
            zIndex: zIndex,
            ...maskStyle,
        }">

            <div class="h-dialog-container" @click.stop :style="{
                zIndex: zIndex + 1,
                width: typeof width === 'number' ? width + 'px' : width,
                padding: containerPadding ? containerPadding : '20px',
                ...containerStyle,
            }">
                <div v-show="showHeader" class="h-dialog-header">
                    <slot name="header"></slot>
                </div>
                <div v-show="title && !showHeader" class="h-dialog-header">
                    <div class="h-dialog-title">{{ title }}</div>
                </div>
                <div class="h-dialog-content" :style="{
                    paddingTop: showHeader? '20px' : '0',
                }">
                    <slot></slot>
                </div>

                <div v-show="showFooter" class="h-dialog-footer">
                    <slot name="footer"></slot>
                </div>
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
        containerStyle: {
            type: Object,
            default: () => ({})
        },
        title: {
            type: String,
            default: '' // This prop is used for the title of the dialog and should be of type "字符型" (string).
        },
        containerPadding: {
            type: String,
            default: ''
        }
    },
    computed: {
        showFooter () {
            return !!this.$slots.footer
        },
        showHeader () {
            return !!this.$slots.header
        }
    },
    watch: {
        visible (vs) {
            if (vs) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
        }
    },
    methods: {
        maskClose () {
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
        transform: translate(0, 100px);
        opacity: 0;
    }



    100% {
        transform: translate(0, 0);
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
        background: rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        padding: 20px;
        display: flex;
        align-items: center;
    }

    .h-dialog-container {
        position: relative;
        top: 0;
        bottom: 0;
        margin: auto auto;
        background: #fff;
        border-radius: 12px;
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
        
    }

    .h-dialog-footer {
        padding-top: 13px;
        border-top: 2px solid #f2f2f2;
    }


}
</style>
