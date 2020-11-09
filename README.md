# :muscle: GymBot :muscle:

![](https://travis-ci.com/torchu/GymBot.svg?branch=master)

## Comandos

- **Compilar el proyecto:**
  > `npm run build`
- **Testear el código:**
  > `npm run test`
- **Comprobar el nivel de cobertura de los test: (Actualmente no funciona)**
  > `npm run coverage`

## Integración continua

Las herramientas de integración continua seleccionadas han sido [Travis](docs/travis.md) y [GitHub Actions](docs/gh-actions.md). En los links están enlazados los ficheros que explican su configuración. A través del de Travis se puede acceder también a su fichero de configuración.

## Avance del código

Se han creado las clases [DayWork](src/models/daywork.ts) y [Routine](src/models/routine.ts) que avanzan con la [historia de usuario 3](https://github.com/torchu/GymBot/issues/23). Ambas clases son unas pequeñas pinceladas para ir imaginando cómo serán dichas clases en un futuro.

## Documentación adicional

- [Configuración de git](docs/git-config.md)
- [Descripción del proyecto](docs/descripcion.md)
- [Pasos a realizar](docs/pasos.md)
- [Historias de usuario](docs/hu.md)
- [Herramientas utilizadas](docs/herramientas.md)
- [Configuración de docker](docs/docker.md)
- [Problemas encontrados durante el desarrollo del proyecto y sus soluciones](docs/errors.md)
