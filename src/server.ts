const apps = require("./app")
const port = process.env.port || 8080;

apps.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });   