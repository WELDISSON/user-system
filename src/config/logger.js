const myLogger = (req, res, next) => {
    var ip = 'get ip user';
    var date = Date.now();
    console.log("LOGGER!");
    console.log(ip);
    console.log("............");
    next();
  };

module.exports = myLogger