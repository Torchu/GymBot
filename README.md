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

## Logger

Corrigiendo la entrega del hito anterior, se ha añadido morgan como middleware de logs.

## PaaS

Como servicio PaaS se ha escogido Heroku. Heroku es un servicio que ofrece recursos suficientes de forma gratuita para desplegar nuestra aplicacion, es muy fácil de e ntender y su CLI es super sencillo. Además, cuenta un montón de plugins útiles que integrar a nuestra aplicación, como un servicio de logs.

Para crear nuestra app en Heroku, nos iremos a la web de Heroku y desde nuestro perfil crearemos una nueva aplicación. Le ponemos un nombre chulo y seleccionamos Europa como servidor. Después, conectamos Heroku con nuestra cuenta de GitHub y ahí seleccionamos nuestro repositorio. Para el despliegue automático, simplemente elegimos la rama master como la rama de despliegue y activamos la opción `Wait for CI to pass before deploy` que hará que no se despliegue nada mientras los test no funcionen.

## Avance de código

- Se ha modificado la estructura de las rutas que ahora se encuentra [aquí](src/routes).
- Se ha creado un sistema de usuarios en el que cada usuario tiene su propia rutina.
- No es necesario especificar la rutina al crear un usuario, por defecto se crea un arutina vacía.
- Se han añadido rutas para crear, listar y borrar los usuarios de la base de datos.
- Se ha creado una base de datos de mongodb para almacenar los distintos usuarios.
- Se ha añadido una nueva ruta para modificar solo los ejercicios de un día de la rutina.

## Documentación adicional

- [Configuración de git](docs/git-config.md)
- [Descripción del proyecto](docs/descripcion.md)
- [Pasos a realizar](docs/pasos.md)
- [Historias de usuario](docs/hu.md)
- [Herramientas utilizadas](docs/herramientas.md)
- [Configuración de docker](docs/docker.md)
- [Configuración de CI](docs/ci.md)
- [Configuración Serverless](docs/serverless.md)
- [Configuración de los microservicios](docs/microservicios.md)
- [Problemas encontrados durante el desarrollo del proyecto y sus soluciones](docs/errors.md)
