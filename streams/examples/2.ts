import http, { IncomingMessage } from 'http';

const receiveBody = async (stream: IncomingMessage) => {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks);
};

const server = http.createServer(async (req, res) => {

  const data = (await receiveBody(req)).toString();
  console.log(data);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('data from server');
});

server.listen(1337);

const options = {
  port: 1337,
  method: 'POST'
};

const req = http.request(options);

req.write('data from request');
req.end()

req.on('response',async (res: IncomingMessage) => {
  const data = (await receiveBody(res)).toString();
  console.log(data);
});


