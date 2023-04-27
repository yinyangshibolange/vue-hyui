

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
   console.log(options)
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
            const accs = accept.split(",").map(item => item.trim())
            let reg_result = false
            for (let j = 0; j < accs.length; j++) {
               if (/[a-zA-Z]+\/\*/.test(accs[j])) {
                  const m = accs[j].match(/([a-zA-Z]+)\/\*/)
                  console.log(new RegExp(m[1] + "/[a-zA-Z]+"))
                  reg_result = new RegExp(m[1] + "/[a-zA-Z]+").test(item.type)
               } else {
                  console.log(new RegExp(accs[j]))
                  reg_result = new RegExp(accs[j]).test(item.type)
               }
               if(reg_result) {
                  break
               }
            }
            if (!reg_result) {
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

let options_list = []
function documentClick(ev){
   options_list.forEach(item => {
      const {el, callback} = item
      if(!el || !el.getBoundingClientRect || typeof callback !== 'function') return
      const {clientX, clientY} = ev
      console.log(el)
      const { left, bottom, right, top } = el.getBoundingClientRect()

      console.log({ left, bottom, right, top })
      if(clientX > left && clientX < right && clientY> top && clientY < bottom) {
         return callback(true)
      } else {
         return callback(false)
      }
   })

}

export function addDocumentClickListener(options) {
   if(!options_list || options_list.length === 0) {
      document.addEventListener("click", documentClick)
   }
   if(!options_list.includes(options)) options_list.push(options)
}

export function removeDocumentClickListener(options) {
   if(options_list.includes(options)) {
      options_list.splice(options_list.indexOf(options), 1)
   }
   if(!options_list || options_list.length === 0) {
      document.removeEventListener("click", documentClick)
   }
}