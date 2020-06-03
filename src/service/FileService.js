const fs = require('fs');

class FileService {

    storeFile(stream, path) {

        try {
            return new Promise((resolve, reject) =>
                stream
                    .on('error', error => {
                        if (stream.truncated)
                            // delete the truncated file
                            fs.unlinkSync(path);
                        reject(error);
                    })
                    .pipe(fs.createWriteStream(path))
                    .on('error', error => reject(error))
                    .on('finish', () => resolve({ path }))
            );
        } catch (e) {
            throw new Error(e)
        }

    }


}


module.exports = new FileService()