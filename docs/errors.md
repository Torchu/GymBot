# Errores encontrados durante el desarrollo del proyecto
En este fichero se describirán distintos errores que se han encontrado y cómo los he solucionado, de forma que se pueda evaluar.

## Tener varios commits referenciando al issue equivocado
Para resolver esto, simplemente modifiqué el mensaje del commit. Si solo fuese el último commit el problema, esto se resolvería con *git commit --ammed*, pero al ser varios y más antiguos se hace de la siguiente manera:
- Primero vamos a localizar cual es el commit más antiguo que queremos modificar con git log.
- Si el commit más antiguo fue hace 3 commits, haremos *git rebase -i HEAD~3*. -i es para que abra el modo interactivo. Nos quedará una cosa así:

*pick 7a62538 Added b.py*

*pick ce9e582 b.py Modification 1*

*pick dfc0295 b.py Modification 2*

- Ahora cambiamos la palabra *pick* de los commits que queramos modificar por la palabra *reword*, guardamos y salimos.
- Nos abrirá un editor de texto con el que cambiar el mensaje de todos los commits que hayamos marcado como reword, así que simplemente nos queda ir modificándolos.
- Si ya habíamos hecho un push antes, tendremos que hacer ahora *git push --force* para sobreescribir la historia. Si no lo habíamos hecho, podemos seguir trabajando con normalidad.

[Reference](https://coderwall.com/p/_thg9a/reword-a-git-commit-message)
