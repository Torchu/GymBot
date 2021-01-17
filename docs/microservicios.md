# Microservicios

Como framework para el microservicio se ha optado por [Express](https://expressjs.com/), un framework minimalista y flexible que permite crear APIs robustas en Javascript (y como es obvio, también en typescript). Se ha escogido por la facilidad con la que te permite crear una API. Además, frameworks más complejos, como [Nest](https://nestjs.com/), están basados en Express y son mencionados en los [apuntes de la asignatura](https://jj.github.io/IV/documentos/proyecto/6.Microservicio).

Además, es el framework web por excelencia en Node debido a su velocidad y minimalismo. Si por algún casual Express se te quedase corto de funcionalidad, el equipo de desarrollo del framwork ha creado [paquetes middleware](https://expressjs.com/en/resources/middleware.html) para resolver cualquier problema que necesites abordar.

## Rutas

Para el diseño de las [rutas](../src/app.ts), crearemos una ruta principal que te de la bienvenida a la aplicación.

Se guardará en memoria la instancia de la clase Routine con la que trabajaremos, ya que aún no vamos a usar bases de datos.

Se definen en la ruta /routine las operaciones CRUD para nuestra rutina:

- CREATE: No hay método POST definido, ya que no puedes crear más rutinas, si no que se trabaja modificando la existente.
- READ: El método GET devuelve el fichero JSON almacenado. [HU01](https://github.com/Torchu/GymBot/issues/2) [HU06](https://github.com/torchu/GymBot/issues/30)
- UPDATE: El método PUT recibe como datos un JSON que transforma en un objeto de la clase Routine, para validar que tiene la estructura correcta, y después lo guarda en nuestro fichero JSON transformado en JSON de nuevo. [HU03](https://github.com/torchu/GymBot/issues/23) [HU04](https://github.com/torchu/GymBot/issues/26)
- DELETE: El método DELETE crea una instancia vacía de la clase Routine y la almacena en nuestro fichero JSON.

También se establecerá una ruta /print, que como en la funcionalidad de la entrega anterior, nos devolverá los ejercicios que nos toque realizar hoy, pero esta vez según la rutina configurada y no sobre la rutina de ejemplo que se creó como preview.

## Middleware

Como middleware se utiliza el módulo `body-parser` que transforma el cuerpo de la petición a formato JSON, de esta forma podremos pasar como cuerpo de la petición un JSON con nuestra rutina.

También utilizamos un [parser propio](../src/middleware/routine.parser.ts) que transforma una string en formato JSON en un objeto de la clase Routine. Se ha tenido que realizar un parser propio, ya que la función `Object.assign` nos creaba una instancia de la clase Routine en la que no podíamos acceder a las funciones de las instancias de Exercise que la componen.

## Test de integración

Los test de integración de las rutas se pueden consultar [aquí](../src/__tests__/app.test.ts).
