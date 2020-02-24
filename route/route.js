module.exports = {
  execute: (request, response) => {

    let executer = (() => {
      let { url, method } = request;
      return (mappingUrl, mappingMethod, callback) => {
        if (url.startsWith(mappingUrl) && method === mappingMethod) {
          return callback(request, response);
        }
        return false;
      };
    })();

    executer('/sample', "GET", require('self/controller/sample_controller').index) ||
      // executer('/sample', "GET", require('self/controller/sample_controller').index) ||
      // executer('/sample', "GET", require('self/controller/sample_controller').index) ||
      (() => {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end();
      })();
  }
}

// TODO クラス化
// class MyClass {...}
// module.exports = MyClass;