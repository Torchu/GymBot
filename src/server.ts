const application = require('./app');
const port = process.env.port || 8080;

application.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });