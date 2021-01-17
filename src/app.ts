import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./routes/user";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/users", router);

//INDEX
app.get("/", (req: any, res: any) => {
  res.send({ message: "Welcome to GymBot" });
});

//STATUS
app.get("/status", (req: any, res: any) => {
  res.send({ status: "OK" });
});

export default app;
