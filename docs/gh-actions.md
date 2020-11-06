# GitHub Actions

## COnfiguración

Para configurar GitHub Actions es tan sencillo como crear dentro de nuestro repositorio la carpeta `.github/worflows`. GitHub Actions viene ya integrado con GitHub. Su funcionamiento es simple, busca en la carpeta mencionada antes ficheros YAML las acciones a realizar.

Para nuestros test crearemos el fichero [ci.yml](.github/workflows/ci.yml) siguiendo las pautas descritas en la [documentación](https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs).

Como podemos ver en el fichero, la build se hará sobre la última versión de ubuntu y probará con la versión 15 de node y simplemente instalará las dependencias y ejecutará `npm test`.

## ¿Por qué GitHub Actions?

Se ha elegido GitHub Actions para la integración continua por ser una herramienta muy útil y fácil de configurar, que nos permite hacer muchas cosas sobre nuestro proyecto y que ya viene integrada en la plataforma.
