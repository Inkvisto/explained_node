import http from 'http';
import crypto from 'crypto';

const randomString = () => {
  return crypto.randomBytes(100).toString('hex');
}

const heavy_computations = () => {
  console.log('computing sync!');

  const hash = crypto.createHash('sha256');

  for (let i = 0; i < 10e6; i++) {
    hash.update(randomString());

  }
  console.log(`Time to execute computations:${process.uptime()}`)
  return hash.digest('hex') + '\n'
}

const heavy_computations_with_timer = async () => {
  console.log('computing async with setImmidiate!');

  const setImmediatePromise = () => {
    return new Promise((resolve) => {
      setImmediate(() => resolve());
    });
  }

  const hash = crypto.createHash('sha256');
  for (let i = 0; i < 10e6; i++) {
    hash.update(randomString());
    await setImmediatePromise()
  }
  console.log(`Time to execute computations:${process.uptime()}`)
  return hash.digest('hex') + '\n';

}

const pid = process.pid;
console.log(`Pid of process:${pid}`);

const routing = {
  '/healt_check': () => {
    console.log('server is healthly ');
    return 'all good \n'
  },
  '/compute': () => heavy_computations(),
  '/compute-with-timer': () => heavy_computations_with_timer()
};

http.createServer(async (req, res) => {
  const data = routing[req.url];
  res.end(await data())


}).listen(8000);


