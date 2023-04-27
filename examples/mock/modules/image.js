import * as utils from "../../../utils"

function readFile (file) {
 return new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = function (res) {
   resolve(reader.result)
  }
  reader.readAsDataURL(file)
 })
}

export default (Mock, MockStore) => {
 // 文件上传
 Mock.mock("/api/upload", 'post', (req) => {
  return new Promise((resolve, reject) => {
   const file = req.body.get("file")
   const parentid = req.body.get("parentid")
   const name = file.name
   const reader = new FileReader()
   reader.onload =  function (res) {
     MockStore.addItem("imageList", {
     id: utils.guid(),
     url: reader.result,
     name: name,
     parentid: parentid || "",
    }).then(resolve).catch(reject)
   }
   reader.readAsDataURL(file)
  })
 })

 // 批量文件上传
 // Mock.mock("/api/uploadbatch", 'post', async (req) => {
 //  const files = req.body.get("files")
 //  const parentid = req.body.get("parentid")
 //  if (!files || files.length === 0) {
 //   return {
 //    code: -1,
 //    msg: "参数错误"
 //   }
 //  }
 //  const templist = []
 //  for (let i = 0; i < files.length; i++) {
 //   const fileurl = await readFile(files[i])
 //   templist.push({
 //    id: utils.guid(),
 //    url: fileurl,
 //    name: files[i].name,
 //    parentid: parentid || "",
 //   })
 //  }
 //  await MockStore.addItem("imageList", templist)
 //  return {
 //   code: 0,
 //   msg: '成功'
 //  }
 // })

 // 新增文件夹
 Mock.mock("/api/addDir", 'post', req => {
  return new Promise((resolve, reject) => {
   const { name, parentid } = JSON.parse(req.body)
   MockStore.addItem("imageList", {
    id: utils.guid(),
    dir: true,
    name: name,
    parentid: parentid || "",
   })
    .then(resolve).catch(reject)
  })

 })

 // 解散文件夹
 Mock.mock(/\/api\/disband.*/, "delete", req => {
  return new Promise((resolve, reject) => {
   const urlSearchText = req.url.split("?")[1]
   const id = utils.getQueryString(urlSearchText, "id")
   const targetid = utils.getQueryString(urlSearchText, "targetid")
   MockStore.queryAll("imageList", {
    parentid: id,
   })
    .then(({ data: list }) => {
     MockStore.updateBatch("imageList", list && list.map(item => ({
      ...item,
      parentid: targetid
     })))
      .then(() => {
       MockStore.delItem("imageList", id)
        .then(() => {
         resolve({
          code: 0,
          data: null,
          msg: '解散成功'
         })
        })
      })
    })
  })
 })

 // 批量修改
 Mock.mock("/api/imagebatch", 'put', req => {
  return new Promise((resolve, reject) => {
   const data = JSON.parse(req.body)
   MockStore.updateBatch("imageList", data).then(resolve).catch(reject)
  })
 })

 // 单个修改
 Mock.mock("/api/image", 'put', req => {
  return new Promise((resolve, reject) => {
   const data = JSON.parse(req.body)
   MockStore.updateItem("imageList", data).then(resolve).catch(reject)
  })
 })

 // 单个删除
 Mock.mock(/\/api\/imagesingle.*/, 'delete', req => {
  return new Promise((resolve, reject) => {
   const urlSearchText = req.url.split("?")[1]
   const id = utils.getQueryString(urlSearchText, "id")
   MockStore.delItem("imageList", id).then(resolve).catch(reject)
  })

 })

 // 批量删除
 Mock.mock(/\/api\/imagebatch.*/, 'delete', req => {
  return new Promise((resolve, reject) => {
   const urlSearchText = req.url.split("?")[1]
   const ids = utils.getQueryString(urlSearchText, "ids")
   MockStore.delBatch("imageList", ids && ids.split(",")).then(resolve).catch(reject)

  })

 })

 // 文件夹拉平
 Mock.mock("/api/flatall", "post", () => {
  return new Promise( (resolve, reject) => {
     MockStore.queryItems("imageList",)
    .then(({data:list}) => {
     MockStore.updateBatch("imageList", list && list.filter(item => !!item.parentid).map(item => ({
      ...item,
      parentid: ""
     }))).then(resolve).catch(reject)
    })
  })

 })

 // 获取列表
 Mock.mock(/\/api\/imageList.*/, 'get', (req) => {
  return new Promise((resolve, reject) => {
   const urlSearchText = req.url.split("?")[1]
   const page = +utils.getQueryString(urlSearchText, "page")
   const pagesize = +utils.getQueryString(urlSearchText, "pagesize")
   const parentid = utils.getQueryString(urlSearchText, "parentid")
   const params = {
    parentid,
   }
   MockStore.queryPage("imageList", params, [], page, pagesize,).then(resolve).catch(reject)
  })
 })
} 