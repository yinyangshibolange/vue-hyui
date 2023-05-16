<template>
  <div id="app">

    <div class="swiper-demo">
      <h-swiper>
        <h-swiper-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item.src" :alt="item.src" class="swiper-demo-img">
        </h-swiper-item>
      </h-swiper>
    </div>
    <div class="notice-demo">
      <h-notice text="我我我我哦我偶发萨法说法办卡是否把开始发奥卡福v阿卡萨芬擦v夫卡奥卡福v啊我库房擦我的困扰发爱看v阿飞vask按时上课案说法把控SUV阿坝师范卡"></h-notice>
    </div>

    <!-- <div>
    <h-breadcrumb>
      <h-breadcrumb-item></h-breadcrumb-item>
    </h-breadcrumb>
   </div> -->

    <h-button type="primary" @click="showfilemanager">显示文件管理器</h-button>

    <div>
      <h-input v-model="inputval"></h-input>
    </div>

    <div>
      <h-dialog :visible.sync="filemanagerShow" append-to-body width="fit-content" containerPadding="0">
        <!-- uploadFunc: Function, // 上传
    getImageListFunc: Function, // 获取列表
    submitDirFunc: Function, // 新增文件夹
    delItemsFunc: Function, // 批量删除
    moveFunc: Function, // 文件移动 -->
        <h-filemanager :uploadFunc="upload" :getImageListFunc="getImageList" :submitDirFunc="addDir"
          :delItemsFunc="delItems" :moveFunc="moveFile"></h-filemanager>
        <!-- <template slot="footer">
        <h-button @click="renameShow = false">取消</h-button>
        <h-button type="primary" @click="submitRename">提交</h-button>
      </template> -->
      </h-dialog>

    </div>
    <!-- <h-filemanager></h-filemanager> -->
  </div>
</template>

<script>
import { concatParams } from "../utils"
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      inputval: "",
      swiperList: [],

      filemanagerShow: false,

      parentidKey: 'parentid',
      fileKey: 'file',
      uploadUrl: "/api/upload",
      putBatchUrl: "/api/imagebatch"
    }
  },
  methods: {
    showfilemanager () {
      this.filemanagerShow = true
    },
    async upload (fileForm) {
      try {
        const res = await this.$axios.post(this.uploadUrl, fileForm, {
          hideloading: true,
        });
        return res
      } catch (err) {
        return Promise.reject(err)
      }
    },
    async getImageList (params) {
      try {
        const res = await this.$axios.get(
          `/api/imageList${concatParams(params)}`
        );
        console.log(res)
        if (res.code === 0) {
          return {
            list: res.data.list,
            total: res.data.total,
          }
        }
      } catch (err) {
        return Promise.reject(err)
      }
    },
    addDir () {

    },
    delItems () {

    },
    async moveFile (selectList) {
      console.log(selectList)
      try {
        const res = await this.$axios.put(this.putBatchUrl, selectList)
        if (res.code === 0) {
          return true
        } else {
          return false
        }
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  padding: 0;
  margin: 0;
}

.swiper-demo {
  width: 500px;

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.notice-demo {
  width: 500px;
}
</style>
