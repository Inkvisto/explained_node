import http from 'http';

const health_check = () => {
    const req = http.request({ port: '8000', path: '/healt_check' }, (res) => {
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
    })

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.on('timeout', () => {
        console.log(`request is timeout after ${process.uptime()}`);
        req.destroy()
    })

    req.end();
}

// first request to server without timeout
health_check()

// pending server every 5s
setInterval(health_check, 5000)
