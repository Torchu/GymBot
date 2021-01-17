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

Para crear nuestra app en Heroku, nos iremos a la web de Heroku y desde nuestro perfil crearemos una nueva aplicación. Le ponemos un nombre chulo y seleccionamos Europa como servidor. Después, conectamos Heroku con nuestra cuenta de GitHub y ahí seleccionamos nuestro repositorio. Para el despliegue automático, simplemente elegimos la rama master como la rama de despliegue y activamos la opción `Wait for CI to pass before deploy` que hará que no se despliegue nada mientras los test no funcionen y clicamos en el botón que dice `Enable automatic deploys`. Además, por ser la primera vez, desplegamos la rama master a mano.

En nuestro proyecto hemos usado MongoDB como nuestra base de datos, por lo que ahora habrá que conectarla a nuestra aplicación de Heroku. Para ello, entramos en [MongoDB](https://www.mongodb.com) y le damos a probar gratis. Seguimos los pasos de creación de cuenta y cuando tengamos todo listo, le damos a crear un clúster con el plan gratuito (a no ser que queramos gastar dinero en tener mejores prestaciones, pero no es este caso). Una vez creado el clúster, que tardará unos minutillos, configuramos el acceso al mismo, mediante un usuario y una contraseña. Y después seleccionamos la opción de acceso mediante una aplicación, lo cual nos devolverá una url de conexión a nuestra base de datos de mongo, en la que solo falta escribir la contraseña del usuario que hemos creado antes y el nombre de la base de datos que puede ser cualquiera.

Solo tendríamos que usar la ruta final en la función `mongoose.connect(<RUTA>)`, pero para no ponerla en mitad del código, usaremos variables de entorno. Desde el dashboard de tu aplicación de Heroku puedes añadir variables de entorno desde los ajustes de tu app. Añadimos ahí la variable `DATABASE_ULR` con la ruta anterior como valor y luego accederíamos a ella en nuestra aplicación desde la variable `process.env.DATABASE_URL`.

El logging de Heroku se puede hacer añadiendo alguno de los addons disponibles y consultando sus planes gratuitos o usando el propio sistema de logs de Heroku, que mantiene durante una semana las últimas 1500 líneas de tus logs. Para nuestra aplicación, con esto tenemos de sobra.

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
