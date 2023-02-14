1.Readline example: write data from file and 'keypress' event(process.stdin is ReadableStream and process.stdout is WriteStream);

2.Http example: get data from request and server response(req in server requestListener is IncomingMessage that extends ReadableStream and res in 'response' event listener is IncomingMessage);

3.Net example: get data from connection and server(net.Socket extends DuplexStream);

4.Compress and decompress data example: read file, compress and write compressed data in file;