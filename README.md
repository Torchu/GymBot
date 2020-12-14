# :muscle: GymBot :muscle:

![](https://travis-ci.com/torchu/GymBot.svg?branch=master)
![Netlify Status](https://api.netlify.com/api/v1/badges/50a95e48-efd0-46b7-a053-dd6869f195cf/deploy-status)

## Comandos

- **Compilar el proyecto:**
  > `npm run build`
- **Testear el código:**
  > `npm run test`
- **Comprobar el nivel de cobertura de los test:**
  > `npm run coverage`

## Microservicios

Como framework para el microservicio se ha optado por [Express](https://expressjs.com/), un framework minimalista y flexible que permite crear APIs robustas en Javascript (y como es obvio, también en typescript). Se ha escogido por la facilidad con la que te permite crear una API. Además, frameworks más complejos, como [Nest](https://nestjs.com/), están basados en Express y son mencionados en los [apuntes de la asignatura](https://jj.github.io/IV/documentos/proyecto/6.Microservicio).

Además, es el framework web por excelencia en Node debido a su velocidad y minimalismo. Si por algún casual Express se te quedase corto de funcionalidad, el equipo de desarrollo del framwork ha creado [paquetes middleware](https://expressjs.com/en/resources/middleware.html) para resolver cualquier problema que necesites abordar.

## Rutas

Para el diseño de las [rutas](src/app.ts), crearemos una ruta principal que te de la bienvenida a la aplicación.

Para las rutinas, vamos a crear una ["base de datos local provisional"](db/routine.json), que consistirá en un fichero JSON en el que almacenaremos los datos de la rutina del usuario local. Se guarda en un fichero, porque cada usuario puede tener únicamente una rutina y ya que no hay montado un sistema de usuarios, si no que solo existe el usuario local, no merece la pena crear, de momento, una base de datos para guardar una instancia de un objeto.

Se definen en la ruta /routine las operaciones CRUD para nuestra rutina:

- CREATE: No hay método POST definido, ya que no puedes crear más rutinas, si no que se trabaja modificando la existente.
- READ: El método GET devuelve el fichero JSON almacenado. [HU01](https://github.com/Torchu/GymBot/issues/2) [HU06](https://github.com/torchu/GymBot/issues/30)
- UPDATE: El método PUT recibe como datos un JSON que transforma en un objeto de la clase Routine, para validar que tiene la estructura correcta, y después lo guarda en nuestro fichero JSON transformado en JSON de nuevo. [HU03](https://github.com/torchu/GymBot/issues/23) [HU04](https://github.com/torchu/GymBot/issues/26)
- DELETE: El método DELETE crea una instancia vacía de la clase Routine y la almacena en nuestro fichero JSON.

También se establecerá una ruta /print, que como en la funcionalidad del hito anterior, nos devolverá los ejercicios que nos toque realizar hoy, pero esta vez según la rutina configurada y no sobre la rutina de ejemplo que se creó como preview.

## Middleware

Como middleware se utiliza el módulo `body-parser` que transforma el cuerpo de la petición a formato JSON, de esta forma podremos pasar como cuerpo de la petición un JSON con nuestra rutina.

También utilizamos un [parser propio](src/middleware/routine.parser.ts) que transforma una string en formato JSON en un objeto de la clase Routine. Se ha tenido que realizar un parser propio, ya que la función `Object.assign` nos creaba una instancia de la clase Routine en la que no podíamos acceder a las funciones de las instancias de Exercise que la componen.

## Test de integración

Los test de integración de las rutas se pueden consultar [aquí](src/__tests__/app.test.ts).

## Documentación adicional

- [Configuración de git](docs/git-config.md)
- [Descripción del proyecto](docs/descripcion.md)
- [Pasos a realizar](docs/pasos.md)
- [Historias de usuario](docs/hu.md)
- [Herramientas utilizadas](docs/herramientas.md)
- [Configuración de docker](docs/docker.md)
- [Configuración de CI](docs/ci.md)
- [Configuración Serverless](docs/serverless.md)
- [Problemas encontrados durante el desarrollo del proyecto y sus soluciones](docs/errors.md)
