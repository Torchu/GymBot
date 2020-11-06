# Configuración de Travis

## Darse de alta en la plataforma

El primer paso consiste en darse de alta en Travis.

Cuando entremos a [Travis](https://travis-ci.com/) veremos un botón que nos dice "sign up". Clicamos en ese y en sign up with GitHub y nos saldrá algo como esto:
![](img/travis-signup.png)

Para darle permisos, nos pedirá nuestra contraseña de GitHub y tras ponerla, ya tendremos nuestra cuenta creada.

![](img/travis-signed.png)

## Activar Travis en nuestro [repositorio](https://github.com/torchu/GymBot)

Para ello, le damos al botón que dice "ACTIVATE ALL REPOSITORIES USING GITHUB APPS". Después podremos cambiar a la opción "Only select repositories" y seleccionar los repositorios en los que queramos integración continua, en este caso, nuestro repo del proyecto. Esto lo podremos cambiar más adelante para tener CI en más repositorios.

![](img/travis-selecting-repo.png)

## Configurar Travis en nuestro repositorio

La configuración de travis se realiza mediante el fichero [.travis](../.travis.yml).

Para la configuración de Travis aprovecharemos la imagen [docker](https://hub.docker.com/repository/docker/torchu/gymbot) del hito anterior. Para ello, en nuestro fichero .travis seleccionamos como _language_ `minimal` ya que vamos a usar la imagen de nuestro contenedor docker. Añadimos también la opción _services_ en la que incluimos `docker`. En _before_install_ solo necesitamos que se descargue nuestra imagen desde [DockerHub](https://hub.docker.com/), por lo que incluimos la orden `docker pull torchu/gymbot`. Ahora solo nos queda indicar a Travis qué tiene que hacer para ejecutar nuestros test, por lo que en la opción _script_ añadimos la orden `` docker run -t -v `pwd`:/test torchu/gymbot ``.

Todo lo descrito en el párrafo anterior está explicado en más detalle en la [documentación oficial](https://docs.travis-ci.com/user/docker/).

Como podemos observar, todo funciona a la perfección.

![](img/travis-working.png)

## ¿Por qué Travis?

Se ha escogido Travis entre las distintas opciones porque es una herramienta sencilla de configurar, altamente extendida y con una gran integración con github. Además, permite utilizar imágenes de dockerhub sin mucha complicación.
