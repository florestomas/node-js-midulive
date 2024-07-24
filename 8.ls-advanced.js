const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors') // Dependencia de produccion != NO ES DEPENDENCIA DE DESAROLLO

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;

    try {
        files = await fs.readdir(folder);
    } catch {
        //pc = picocolors
        console.error(pc.red(`No se pudo leer el directorio ${folder}`));
        process.exit(1);
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file);

        let stats;
        try {
            stats = await fs.stat(filePath); // Obtener información del archivo
        } catch {
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : '-'; // d: directorio | -: fichero
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${pc.blue(file.padEnd(25))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`;
    });

    const filesInfo = await Promise.all(filePromises);

    filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);
