const jsonServer = require('json-server');
const cors = require('cors'); // ✅ Import CORS

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Your db.json file
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

// Middlewares
server.use(cors()); // ✅ Allow all CORS requests
server.use(middlewares);
server.use(router);

// Start server
server.listen(port, () => {
  console.log('JSON Server is running on port ' + port);
});
