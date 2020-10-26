# Configuración de docker

## Creación del dockerfile

Lo primero será crear un [Dockerfile](../Dockerfile), siguiendo las mejores conductas, para crear nuestras imágenes y poder realizar después los tests pertinentes.

## Seleccionar la mejor imagen base para nuestro contenedor

Una vez ya sabemos que todo funciona como debería con una imagen cualquiera, probaremos a crear contenedores con distintas imágenes para decidir cuál es la óptima para nuestro proyecto atendiendo a su tamaño y velocidad.

Como para nuestro proyecto usaremos Node.js, usaremos las [imágenes oficiales](https://hub.docker.com/_/node/) de Docker para Node.js. De entre la lista de opciones, vamos a probar:
- 15.0.1-alpine3.11
- 15.0.1-buster
- 15.0.1-buster-slim
- 15.0.1-stretch
- 15.0.1-stretch-slim

Lo primero es crearlas con nuestro Dockerfile:
![](img/docker-images.png)

Para ejecutarlas utilizamos el comando *time docker run -t -v `pwd`:/test <nombre_de_la_imagen>