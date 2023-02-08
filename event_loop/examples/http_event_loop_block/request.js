import http from 'http';

const get_hash = async (path) => {
  const req = http.request({ port: '8000', path}, (res) => {
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  req.end();
}

// try to change path to /compute-with-timer and restart server to not block event loop so healt_check request can get res from server
const path = '/compute'
get_hash(path)



