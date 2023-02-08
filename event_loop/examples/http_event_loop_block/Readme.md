Use seperate terminals to try this example:
1.First of all start node server.js and open htop(or another process-viewer/manager) with server process.pid;
2.Send request to server(node request.js) on route with hard computations to block server;
3.Check health of server(node health_check.js);

To unblock server use setImmediate() (change route in request.js with '/compute-with-timer' to see difference)
Repeat first 3 steps again: process is 100% again but server(event loop) isn't blocked.