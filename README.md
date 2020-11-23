# :muscle: GymBot :muscle:

![](https://travis-ci.com/torchu/GymBot.svg?branch=master)
![Netlify Status](https://api.netlify.com/api/v1/badges/7ffc8a11-8132-4fa5-9fdd-94b96b311da0/deploy-status)

## Comandos

- **Compilar el proyecto:**
  > `npm run build`
- **Testear el código:**
  > `npm run test`
- **Comprobar el nivel de cobertura de los test:**
  > `npm run coverage`

## Serverless Computing

Se ha escogido Netlify ya que me resultó más cómodo durante la realización de los ejercicios y toda la configuración queda en un [fichero](netlify.toml), por lo que es fácilmente legible. Además, nos permite acortar las rutas de nuestros recursos.

La conexión entre el repositorio en GitHub y netlify está hecha mediante la interfaz web de netlify. La conexión se ha hecho sobre la rama netlify de mi repositorio, de forma que si añado algún cambio que no tiene nada que ver con las funciones serverless, no afecte a las mismas.

Como función serverless se ha creado una [función](functions/print.js) que imprime una rutina. Esta función ahora mismo imprime lo que hay en el fichero [example.json](functions/example.json), pero el objetivo es que lo que hay en ese fichero sea generado por una función de la clase Routine. No se ha hecho de esta manera ya que Netlify no me dejaba importar clases externas a la carpeta functions, aunque si en el futuro se montase toda la aplicación como una aplicación serverless, se buscaría la forma de que se pudiese hacer de esa manera. De momento, sirve como preview.

El resultado de la función se puede ver desde la [web](https://gymbot.netlify.app/print) o en este [fichero](5.json).

Se ha modificado el fichero [iv.yaml](iv.yaml) para que incluya la ruta de nuestro recurso.

## Avance del código

Se ha reformado el modelo [Routine](src/models/routine.ts) para hacerlo más entendible y sencillo de operar con él. Esta reforma ha implicado el borrado del modelo Daywork.

## Documentación adicional

- [Configuración de git](docs/git-config.md)
- [Descripción del proyecto](docs/descripcion.md)
- [Pasos a realizar](docs/pasos.md)
- [Historias de usuario](docs/hu.md)
- [Herramientas utilizadas](docs/herramientas.md)
- [Configuración de docker](docs/docker.md)
- [Configuración de CI](docs/ci.md)
- [Problemas encontrados durante el desarrollo del proyecto y sus soluciones](docs/errors.md)
