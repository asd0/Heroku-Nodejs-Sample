const http = require('http');
const port = process.env.PORT || 50000;

const server = http.createServer((req, res) => {
  const { headers, method, url } = req;

  console.log('----------------------------------------');
  console.log(headers);
  console.log('----------------------------------------');
  console.log(method);
  console.log('----------------------------------------');
  console.log(url);

  if (headers['host'].split(':')[0] !== 'localhost' && headers['x-forwarded-proto'] !== 'https') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not support protocol. Please request on HTTPS.');
    return;
  }

  // sendRequest();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
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
