# Optimizador de Imágenes

Este optimizador de imágenes es una herramienta que utiliza Node.js para reducir el tamaño de imágenes JPEG, PNG, SVG, WebP y GIFs. Requiere una versión de Node superior a 18 para funcionar correctamente.

## Uso

Coloca las imágenes que deseas optimizar en la carpeta `src`.

## Instalación y optimización - Opción 1

1. Instala las dependencias utilizando npm: npm install

2. Ejecuta el siguiente comando para iniciar el proceso de optimización: npm start

## Instalación y optimización - Opción 2

Ejecuta el archivo: first_time_install_and_run_project.sh

## Optimizar luego de haber instalado

Si ya instalaste con los comandos/archivo anterior y solamente quieres optimizar lo que hay en `src`.

Puedes simplemente ejecutar el: execute_optimizer.sh

## Imagenes optimizadas

Una vez completado el proceso, las imágenes optimizadas estarán disponibles en la carpeta `opt`.

## Dependencias

Este proyecto utiliza las siguientes dependencias de Node.js:

- [fse](https://www.npmjs.com/package/fs-extra)
- [imagemin](https://www.npmjs.com/package/imagemin)
- [imagemin-jpegtran](https://www.npmjs.com/package/imagemin-jpegtran)
- [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant)
- [imagemin-svgo](https://www.npmjs.com/package/imagemin-svgo)
- [imagemin-webp](https://www.npmjs.com/package/imagemin-webp)
- [imagemin-gifsicle](https://www.npmjs.com/package/imagemin-gifsicle)
- [sharp](https://www.npmjs.com/package/sharp)

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
