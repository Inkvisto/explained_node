import net from 'net';
import { pipeline } from 'stream';

const server = net.createServer((c) => {
  c.write('data from server')
  pipeline(c, c, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },)
}).listen(8000);

const socket = net.connect({ port: 8000 }, () => {
  console.log('connected to server!');
  socket.write('data from connection');
});
socket.on('data', (data) => {
  console.log(data.toString());
  socket.end();
});
socket.on('end', () => {
  console.log('disconnected from server');
});