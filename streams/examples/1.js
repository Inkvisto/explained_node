import { open } from 'fs/promises';
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stream = await open('./test.js');

const rs = stream.createReadStream();

process.stdin.on('keypress', (name, args) => {
console.log({name,args})
})

let data = ''
rs.on('data', (chunk) => {
  data += chunk;
})

rs.on('end', () => {
  rl.write(data);
});

