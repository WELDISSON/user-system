const myLogger = (req, res, next) => {
    var ip = req.connection.remoteAddress;
    const date = () => {
      var args = [];
      args.push('[' + new Date().toUTCString() + '] ');
      for (var _i = 0, _len = arguments.length; _i < _len; _i++) {
        arg = arguments[_i];
        args.push(arg);
      }
    }
    console.log("LOGGER!");
    console.log(date(Date() ));
    console.log()
    console.log("............");
    next();
  };

module.exports = myLogger