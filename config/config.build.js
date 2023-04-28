const fs = require('fs');
const path = require('path');
const join = path.join;
//  获取基于当前路径的目标文件
const resolve = dir => path.join(__dirname, '../', dir);

function getComponentEntries(path) {
    let files = fs.readdirSync(resolve(path));

    const componentEntries = files.reduce((fileObj, item) => {
        //  文件路径
        const itemPath = join(path, item);
        //  在文件夹中
        const isDir = fs.statSync(itemPath).isDirectory();
        const [name, suffix] = item.split('.');

        //  文件中的入口文件
        if (isDir) {
            const indexFile = resolve(join(itemPath, 'index.js'))
            if(fs.existsSync(indexFile)) {
                fileObj[item] = indexFile
            }
        } else if (suffix === 'js') { //  文件夹外的入口文件
            fileObj[name] = resolve(`${itemPath}`);
        }
        return fileObj;
    }, {});

    return componentEntries;
}

const buildConfig = {
    //  输出文件目录
    outputDir: resolve('lib'),
    // assetsDir
    productionSourceMap: false,
    //  webpack配置
    configureWebpack: {
        //  入口文件
        entry: getComponentEntries('package'),
        //  输出配置
        output: {
            //  文件名称
            filename: '[name]/index.js',
            //  构建依赖类型
            libraryTarget: 'umd',
            //  库中被导出的项
            libraryExport: 'default',
            //  引用时的依赖名
            library: 'vue-hyui'
        }
    },
    css: {
        sourceMap: false,
        extract: {
            filename: '[name]/index.css'
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks');
        config.plugins.delete('copy');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugins.delete('html');
        config.plugins.delete('hmr');
        config.entryPoints.delete('app');
    }
};
module.exports = buildConfig;