import fs from "fs";
import Routine from "./models/routine";
import Exercise from "./models/exercise";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const example = new Routine(
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [],
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [],
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [],
  []
);

//INDEX
app.get("/", (req: any, res: any) => {
  res.send({ message: "Welcome to GymBot" });
});

//CRUD: READ method
//Lee el fichero JSON con la rutina y lo imprime
app.get("/routine", (req: any, res: any) => {
  const routine = fs.readFileSync("db/routine.json", "utf8");
  res.send(routine);
});

//CRUD: UPDATE method
//Lee los datos de la petición y los transforma a un objeto de la clase Routine, validándolos.
//Si son válidos los guarda en el fichero JSON, si no, devuelve un error
app.put("/routine", (req: any, res: any) => {
  const data = JSON.stringify(req.body);
  fs.writeFileSync("db/routine.json", data, "utf8");
  res.send(JSON.stringify("Rutina almacenada con éxito"));
});

//CRUD: DELETE method
//Crea una rutina vacía y la guarda sobreescribiendo la actual
app.delete("/routine", (req: any, res: any) => {
  const r = new Routine([], [], [], [], [], [], []);
  fs.writeFile("db/routine.json", JSON.stringify(r), "utf-8", () => {});
  res.send(JSON.stringify("La rutina ha sido borrada"));
});

//PRINT
//CRUD: READ method
//Recoge la rutina de la base de datos, transformándola en un objeto de clase Routine y devuelve el resultado de la función printToday()
app.get("/print", (req: any, res: any) => {
  const data = JSON.stringify(example);
  const obj = JSON.parse(data);
  let r = new Routine(
    obj.monday,
    obj.tuesday,
    obj.wednesday,
    obj.thursday,
    obj.friday,
    obj.saturday,
    obj.sunday
  );
  res.send(JSON.stringify(example.printToday()));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
