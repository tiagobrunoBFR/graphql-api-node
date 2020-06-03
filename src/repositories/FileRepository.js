const { File } = require('../models')
const FileService = require('../service/FileService')
class FileRepository {

    async store(data_file, upload_path) {

        try {
            const { createReadStream, filename, mimetype, encoding } = data_file;
            const path = `${upload_path}/${filename}`;

            await FileService.storeFile(createReadStream, path)

            const file = await File.create({
                filename,
                mimetype,
                encoding,
                path
            })


            return file;

        } catch (e) {
            throw new Error(e)
        }
    }



}

module.exports = new FileRepository()