import Routine from './models/routine';
import { routineParser } from "./middleware/routine.parser";

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let routine = new Routine([], [], [], [], [], [], []);

//INDEX
app.get("/", (req: any, res: any) => {
  res.send({ message: "Welcome to GymBot" });
});

//CRUD: READ method
//Lee el fichero JSON con la rutina y lo imprime
app.get("/routine", (req: any, res: any) => {
  res.send(routine);
});

//CRUD: PUT method
//Lee los datos de la petición y los transforma a un objeto de la clase Routine, validándolos.
//Si son válidos los guarda en el fichero JSON, si no, devuelve un error
app.put("/routine", (req: any, res: any) => {
  const data = JSON.stringify(req.body);
  routine = routineParser(data);
  res.send(req.body);
});

/**
 * CRUD: UPDATE method
 * Modifica el trabajo del día especificado
 * pendiente
 */


//CRUD: DELETE method
//Crea una rutina vacía y la guarda sobreescribiendo la actual
app.delete("/routine", (req: any, res: any) => {
  routine = new Routine([], [], [], [], [], [], []);
  res.send(JSON.stringify("La rutina ha sido borrada"));
});

//PRINT
//CRUD: READ method
//Recoge la rutina de la base de datos, transformándola en un objeto de clase Routine y devuelve el resultado de la función printToday()
app.get("/print", (req: any, res: any) => {
  res.send(routine.printToday());
});

module.exports = app;
