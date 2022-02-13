/*
----------------------webpack---------------------------------
es una herramienta que permite preparar el codigo para llevarlo a produccion trabaja js, css, imagenes, etc.

nace en 2012 y desde entonces utlizado como parte importante de sus  proyectos,permite cargar modulos de js.

-----------------conceptos de webppack-----------------
construye un arbol de dependencias que permiten modularizar codigo.

webpack.-es un paquete de modulos estatios para aplicaciones de js modernas.

Loader.-permite hacer un paquete de cualquier recurso estatico mas alla de javascript.

plugin.-extienden recursos para hacer configuraciones de de recursos externos.

npx webpack .-compila el proyecto, debemos especificar un modo. si puede webpack optimiza nuestro codigo.

npx webpack --mode development .- utiliza el modo desarrollo para compilar el proyecto. nos ayuda a ver mejor errores, mejoras al codigo.

npx webpack --mode production.-permite compilar el codigo listo para produccion.

------------------------archivo de cnfiguracion----------------------------
dentro del proyecto  en la raiz creamos un archivo webpack.config.js

npx webpack --mode production --config webpack.config.js .-compila como produccion pero utiliza el archivo config qwe creamos.

babel.- nos permite hacer que nuestros proyectos sean compatibles con todos lso navegadores.

copy webpack.-es un plugin que nos permite hacer copias de archivos hacia otros directorios.

en el objeto de configuracion de webpack, podemos incluir dentro de las reglas los plugins que queremos sean utilizados para la compilacion de nuestro proyecto.

webpack.- nos permite optimizar nuestros, proyectos, minimizando, compactando, para ello necesitamos los paquetes css-minimizer-webpack-plugin y terser-webpack-plugin.

alias.-webpack nos permite generar aliasd, a los paths especificos, para evitar colocar paths extremadamente largos.

variables de entorno.-es un espacio seguro donde podemos guardar informacion sensible, como conexiones a base de datos, o configuracion en especifica pero que no queremos exponerla, y estas no se deben mandar al repositorio, ya que contienen, informacion importante.

modo desarrollo.-para no hace falta optimizaciones de ccs u otras cosas pues es para desarrollo.
*/