# Configuración de Shippable

## Darse de alta en la plataforma

El primer paso consiste en darse de alta en [Shippable](https://app.shippable.com/). Para ello accedemos a la web del link y, al igual que en Travis, nos registramos con nuestra cuenta de GitHub. Ahora nos pedirá una serie de permisos que debemos darle a la plataforma.

![](img/shippable-auth)
![](img/shippable-auth2)

Después de autorizar la herramienta, nos redirigirá a la página principal de nuestra cuenta.

![](img/shippable-home)

## Activar Shippable en nuestro [repositorio](https://github.com/torchu/GymBot)

Para activar shippable en nuestro repositorio, desde nuestro dashboard, hacemos click en la opción que dice "enable a project" y ahí seleccionamos nuestro repositorio.

![](img/shippable-enable)

## Configurar Shippable en nuestro repositorio

Para configurar shippable, necesitamos crear un fichero shippable.yml siguiendo las pautas de la [documentación oficial](http://docs.shippable.com/ci/yml-structure/).
