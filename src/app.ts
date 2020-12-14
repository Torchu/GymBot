import fs from "fs";
import Routine from "./models/routine";
import { routineParser } from "./middleware/routine.parser";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//INDEX
app.get("/", (req: any, res: any) => {
  res.send({ message: "Welcome to GymBot" });
});

//CRUD: READ method
//Lee el fichero JSON con la rutina y lo imprime
app.get("/routine", (req: any, res: any) => {
  const routine = fs.readFileSync("db/routine.json", "utf8");
  res.send(JSON.parse(routine));
});

//CRUD: UPDATE method
//Lee los datos de la petición y los transforma a un objeto de la clase Routine, validándolos.
//Si son válidos los guarda en el fichero JSON, si no, devuelve un error
app.put("/routine", (req: any, res: any) => {
  const data = JSON.stringify(req.body);
  const routine = routineParser(data);
  fs.writeFileSync("db/routine.json", JSON.stringify(routine), "utf8");
  res.send(req.body);
});

//CRUD: DELETE method
//Crea una rutina vacía y la guarda sobreescribiendo la actual
app.delete("/routine", (req: any, res: any) => {
  const r = new Routine([], [], [], [], [], [], []);
  fs.writeFileSync("db/routine.json", JSON.stringify(r), "utf-8");
  res.send(JSON.stringify("La rutina ha sido borrada"));
});

//PRINT
//CRUD: READ method
//Recoge la rutina de la base de datos, transformándola en un objeto de clase Routine y devuelve el resultado de la función printToday()
app.get("/print", (req: any, res: any) => {
  const data = fs.readFileSync("db/routine.json", "utf8");
  const routine = routineParser(data);
  res.send(routine.printToday());
});

module.exports = app;
