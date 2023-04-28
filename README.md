# vue-hyui

## Project setup
```
yarn add vue-hyui
or
npm i vue-hyui --save
```

### Compiles and hot-reloads for development
```
const props = {
    fileKey: {
        type: String,
        default: 'file'
    },
    parentidKey: {
        type: String,
        default: 'parentid'
    },
    searchKey: {
        type: String,
        default: 'searchText'
    },
    pageKey: {
        type: String,
        default: "page"
    },
    pagesizeKey: {
        type: String,
        default: "pagesize"
    },
    dirNameKey: {
        type: String,
        default: "name"
    },
    // 必传，文件夹关键字段，默认dir
    dirFlagKey: {
        type: String,
        default: "dir"
    },
}
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
