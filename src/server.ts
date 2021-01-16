import app from "./app";

//const apps = require("./app")
const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
