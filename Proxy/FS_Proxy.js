class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, encoding, cb) {
    if (!path.match(/.md$|.MD$/)) {
      return cb(new Error("File is not markdown...."));
    }
    this.fs.readFile(path, encoding, (error, content) => {
      if (error) {
        return cb(error);
      }
      return cb(null, content);
    });
  }
}
module.exports = FS_Proxy;
