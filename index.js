// Import the built-in 'http' module
const http = require('http');

// Define the port number
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello World!"
  res.end('Hello World!');
});

// Make the server listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
