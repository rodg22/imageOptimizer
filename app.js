import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminGifsicle from "imagemin-gifsicle";
import sharp from "sharp";
import readline from "readline";

let inputFolder = "src";
let outputFolder = "opt";

const askTargetWidth = () => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log("Bienvenido al optimizador de imagenes");
    rl.question(
      "Ingresa el ancho deseado de las imagenes (solo numeros)\nPor ejemplo: Si digitas 1920 correspondera a un width de 1920px:\n",
      (width) => {
        rl.close();
        resolve(parseInt(width));
      }
    );
  });
};

const mensajeParaFinalizarOptimizacion = () => {
  console.log(
    "La optimización de imagenes ha finalizado\nLas encontraras en la carpeta opt"
  );
};

const processImg = async () => {
  try {
    const targetWidth = await askTargetWidth();
    const files = await fse.readdir(inputFolder);

    for (const file of files) {
      if (!file.includes(".gitkeep")) {
        let inputPath = `${inputFolder}/${file}`;
        let outputPath = `${outputFolder}/${file}`;

        await sharp(inputPath).resize(targetWidth).toFile(outputPath);

        await imagemin([outputPath], {
          destination: outputFolder,
          plugins: [
            imageminJpegtran({ quality: 80 }),
            imageminPngquant(),
            imageminSvgo(),
            imageminWebp({ quality: 80 }),
            imageminGifsicle(),
          ],
        });
        console.log(`Se ha optimizado la imagen: ${file}`);
      }
    }
    mensajeParaFinalizarOptimizacion();
  } catch (error) {
    console.error(error);
  }
};

processImg();
