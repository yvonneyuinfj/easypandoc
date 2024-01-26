import { convertFile } from './pandocjs.js';

// 使用 convertFile
convertFile({
    sourceType: 'markdown',
    sourceFilePath: './file.md',
    targetType: 'html',
    targetFilePath: './file.html'
})
.then(() => {
    console.log('转换成功！');
})
.catch(error => {
    console.error('转换失败: ', error.message);
});

