// nodejs 脚本，批量重命名指定文件夹下文件

let fs = require('fs');
let src = '../images/product';
let from = '-';
let to = '_';

fs.readdir(src, function(err, files) {
    if (err) {
        return;
    }
    files.forEach(function(filename) {
        if (filename.indexOf(from) > -1) {
            let pattern = new RegExp(from, 'g');
            let oldPath = src + '/' + filename,
                newPath = src + '/' + filename.replace(pattern, to);
            fs.rename(oldPath, newPath, function(err) {
                if (!err) {
                    console.log(filename + ' 替换成功!');
                }
            });
        }
    });
});
