const http = require('http');
const route = require('self/route/route');

const port = process.env.PORT || 50000;

const server = http.createServer((request, response) => {
  const { headers, method, url } = request;

  if (headers['host'].split(':')[0] !== 'localhost' && headers['x-forwarded-proto'] !== 'https') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Not support protocol. Please request on HTTPS.');
    return;
  }

  route.execute(request, response);
  // sendRequest();
});

server.listen(port, () => {
  console.log('Server listening start.');
});

function sendRequest() {
  const webClient = require('request');
  webClient.get(
    {
      url: 'https://xxxxxxxxx',
      qs: {
        testKey: 'testValue',
        hoge: 'hoge'
      }
    },
    (error, response, body) => {
      console.log('---API Start-------------------------');
      console.log(error);
      console.log('----------------------------------------');
      console.log(response);
      console.log('----------------------------------------');
      console.log(body);
      console.log('---API End---------------------------');
    }
  );
}
