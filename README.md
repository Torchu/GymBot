# :muscle: GymBot :muscle:

## Motivación del proyecto

Como cliente de gimnasios a lo largo de mi vida, he visto como la gente lleva apuntados en las notas del móvil, en un papel o incluso memorizados, los ejercicios que va a realizar cada día. Esto es incómodo y si eres de los que memorizan, se te pueden incluso olvidar, perdiendo eficacia en tu sesión de gimnasio.

GymBot es una aplicación pensada para que te notifique en tu dispositivo móvil los ejercicios que debes realizar junto con su peso correspondiente.

## Descripción del proyecto

Se pretende desarrollar una aplicación que permita al usuario registrar sus rutinas desde su dispositivo móvil y qué este le avise cada día con los ejercicios que le toca realizar.
Para esta asignatura se realizará la parte backend del proyecto, dejando abierta la posibilidad de hacer un frontend con un bot de telegram o con una aplicación móvil en un futuro.

## Comandos

* **Compilar el proyecto:**
> npm run build
* **Testear el código:**
> npm run test

## Herramientas utilizadas

* Lenguaje: [Typescript](https://www.typescriptlang.org)
> Se ha decidido utilizar typescript porque tiene un código limpio, escalable, consistente y fácil de debuggear. Además mantiene las ventajas de javascript, añadiendo el tipado de las variables, lo que permite tener códigos más grandes sin miedo a tener errores debidos a los tipos de las variables, cosa que con Python (otra de las opciones barajadas) es lo más común.
* Entorno de ejecución: [Node](https://nodejs.org)
> Node te permite trabajar con javascript (o typescript en este caso) del lado del servidor. Una de sus principales ventajas es que gracias a que trabaja de forma asíncrona, permite agilizar los procesos, de forma que las tareas más pesadas no bloquean a las ligeras.
* Gestor de dependencias: [npm](https://www.npmjs.com/)
> Node Package Manager o npm es la herramienta de construcción por defecto para Node.js. Aunque se estudiaron otras herramientas como yarn, se eligió npm, ya que es necesaria para la instalación de Node.js, por lo que lo íba a tener que instalar de todas formas y así no instalo dos herramientas con la misma utilidad.
* Gestor de versiones: [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)
> Utilizaré nvm como gestor de versiones ya que su uso e instalación es muy sencilla. Además, es el gestor de versiones más extendidos en proyectos de Node.
* Framework web: [Express](https://expressjs.com)
> Express es el framework web por excelencia en Node debido a su velocidad y minimalismo. Además, para atender a otras tareas con las que express base no pueda, el equipo de desarrollo del framwork ha creado [paquetes middleware](https://expressjs.com/en/resources/middleware.html) para resolver cualquier problema que necesites abordar.
* Framework de testeo: [Jest](https://jestjs.io)
> Jest se define a sí mismo como "Test unitario indoloro en javascript" y tienen toda la razón. Los principales motivos de usar [Jest frente a Mocha](https://andrew.codes/jest-vs-mocha-why-jest-wins/) u otros frameworks son su fácil configuración y la búsqueda automática de todos los tests desde la carpeta correspondiente. Otro punto a su favor, es que te permite realizar un análisis de la cobertura de tus test y lo muestra en formato [HTML](docs/coverage/lcov-report/index.html), de forma que siempre sabes si estás dejando alguna función sin testear en tu código.
* Base de datos: [MongoDB](https://www.mongodb.com)
> Dejando de lado su gran escalabilidad y flexibilidad, el motivo principal para usar MongoDB en un proyecto de Node es que los datos se almacenan en estructuras parecidas a un fichero JSON, por lo que el flujo de datos en la aplicación no sufre muchos cambios en su estructura.

## Documentación adicional

* [Configuración de git](docs/git-config.md)
* [Pasos a realizar](docs/pasos.md)
* [Historias de usuario](docs/hu.md)
* [Primera clase](src/models/exercise.ts) y su [test](src/__tests__/exercise.test.ts)
* [Problemas encontrados durante el desarrollo del proyecto y sus soluciones](docs/errors.md)