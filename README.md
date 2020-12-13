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

Para el diseño de las [rutas](src/app.ts), crearemos una ruta principal que te de la bienvenida a la aplicación.

Para las rutinas, vamos a crear una ["base de datos local provisional"](db/routine.json), que consistirá en un fichero JSON en el que almacenaremos los datos de la rutina del usuario local. Se establecerán rutas para realizar las operaciones CRUD sobre esa rutina: aquí hacer una lista con las rutas. No necesita post porque nunca vas a crear una nueva rutina, siempre tienes unicamente 1. Delete lo que hace es dejarla vacía. Put llama al modificador

También se establecerá una ruta /print, que como en la funcionalidad del hito anterior, nos devolverá los ejercicios que nos toque realizar hoy, pero esta vez según la rutina configurada y no sobre la rutina de ejemplo que se creó como preview.

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
