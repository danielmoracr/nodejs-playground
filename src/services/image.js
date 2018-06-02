const jimp = require('jimp')

class ImageConverter {

    convert (image, destination, options) {

        return new Promise ((resolve, reject) => {
            jimp.read(image).then(image => {
                for (let option in options) {
                    if (options.hasOwnProperty(option)) {
                        let parameters = options[option];
                        let index = parameters.indexOf('auto');

                        if (~index) {
                            parameters[index] = jimp.AUTO
                        }

                        image[option](...parameters)
                    }
                }
             
                resolve(image.write(destination))
            }).catch(error => {
                reject(error)
            })
        })
    }

}

module.exports = new ImageConverter()