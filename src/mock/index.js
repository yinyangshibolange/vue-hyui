import Mock from "mockjs-async"
import imageMockInstall from "./modules/image"
import IndexdbStore from "webindexeddb"
const MockStore = new IndexdbStore({
 name: "myindexdb", // 你的indexdb数据库名称
 version: 8, // 如果修改了options里的stores参数，那么必须修改version版本号，不然stores的修改不会生效
 stores: [
  { // 类似数据库表
   storeName: "imageList",
   // mainKey: 'id', // 主键,默认为id
   indexs: [{
    name: "parentid", // 索引名称
    keyPath: "parentid", // 索引字段
    params: {
     unique: false,
    }
   }]
  }
 ]
})

console.log(MockStore)

imageMockInstall(Mock, MockStore)
