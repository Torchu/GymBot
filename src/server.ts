import app from "./app";
import mongoose from "mongoose";
const port = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to DB"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
