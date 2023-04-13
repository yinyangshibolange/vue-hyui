

export function guid () {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
}


export function setRootFontSize (fontSize) {
   document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
}

export function concatParams (params) {
   const tempParams = {}
   for (const key in params) {
      if (params[key] !== undefined) {
         tempParams[key] = params[key]
      }
   }
   const keys = Object.keys(tempParams)
   let paramStr = ''
   if (keys && keys.length > 0) {
      keys.forEach((item, index) => {
         if (index === 0) {
            paramStr += `?${item}=${params[item]}`
         } else {
            paramStr += `&${item}=${params[item]}`
         }
      })
   }
   return paramStr
}


export function clone (obj) {
   try {
      return JSON.parse(JSON.stringify(obj))
   } catch (err) {
      return {}
   }
}

/**
 * pc端选择文件
 * @param {Object} options {accept, multiple}
 * @param {Function} callback tempFiles, failFiles
 */
export function chooseFiles (options, callback) {
   const { accept, multiple, size, } = options
   const input = document.createElement("input")
   input.accept = accept
   input.type = "file"
   input.multiple = multiple
   input.onchange = function () {
      const tempFiles = []
      const failFiles = []
      for (let i = 0; i < input.files.length; i++) {
         const item = input.files[i]
         if (size) {
            if (item.size > size) {
               failFiles.push(item)
               continue
            }
         }
         if (accept) {
            let reg
            if (/[a-zA-Z]+\/\*/.test(accept)) {
               const m = accept.match(/([a-zA-Z]+)\/\*/)
               reg = new RegExp(m + "/[a-zA-Z]+")
            } else {
               reg = new RegExp(accept)
            }
            console.log(reg)
            if (!reg.test(item.type)) {
               failFiles.push(item)
               continue
            }
         }
         tempFiles.push(item)
      }
      if (typeof callback === "function") {
         callback(tempFiles, failFiles)
      }
   }
   input.click()
}

export function getQueryString (url, name) {
   if (!url || !name) return null
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
   var r = url.match(reg);
   if (r != null) return unescape(r[2]);
   return null;
}


export function findTargetEl (el, options) {
   if (options.id) {
      if (el.id === options.id) {
         return el
      } else {
         return findTargetEl(el.parentElement, options)
      }
   } else if (options.className) {
      if (el.classList.contains(options.className)) {
         return el
      } else {
         return findTargetEl(el.parentElement, options)
      }
   } else {
      return null
   }
}
