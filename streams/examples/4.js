import { pipeline } from "stream";
import { createGzip, deflate, unzip } from "zlib";
import fs from 'fs'

//create gzipped file
const gzip = createGzip();
const source = fs.createReadStream('example_4.js');
const destination = fs.createWriteStream('example_4.js.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});

//compress and decompress data
const input = '.................................';
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString());
});