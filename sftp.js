const Client = require("ssh2-sftp-client");
const path = require("path");
// const path = require('path')

// 先配置一下,个人习惯
const config = {
  path: {
    // 远程地址
    romotePath: "/data1/web/blog",

    // 本地地址
    localPath: path.join(__dirname, "./public").replace(/\\/g, "/"),
  },
  romote: {
    // 服务器 ip 地址
    host: "39.104.20.89",
    // 端口号,默认是 22
    port: "22",
    // 登录的用户名
    username: "root",
    // 登录密码
    password: "19990219LUYANG..",
  },
};

/* 主方法
 * @method main
 * @param{String} localPath 本地路径,不用 path 模块,直接字符串就好了,这个包自己有格式化的
 * @param{String} romotePath 远程路径
 * @return{undefined} 返回个*
 */

function main(localPath, romotePath) {
  // 实例化
  const sftp = new Client();
  sftp
    .connect(config.romote)
    .then(() => {
      console.log(
        "----------------------------- 删除服务器缓存中... -----------------------------"
      );
      return sftp.rmdir(romotePath, true);
    })
    .then((data) => {
      console.log(
        "----------------------------- 删除完成 ----------------------------"
      );
    })
    .then(() => {
      console.log(
        "----------------------------- 连接成功,上传中... -----------------------------"
      );
      return sftp.uploadDir(localPath, romotePath);
    })
    .then((data) => {
      console.log(
        "----------------------------- 上传完成,及时清除缓存 ----------------------------"
      );
    })
    .catch((err) => {
      console.log(
        "----------------------------- 失败了!出事了!快看看怎么回事! -----------------------------"
      );
      console.log(err);
    })
    .finally(() => {
      // 断开连接
      sftp.end();
    });
}
main(config.path.localPath, config.path.romotePath);
