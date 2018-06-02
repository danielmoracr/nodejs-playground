const imageService = require('../services/image')
const path = require('path')

class ImageController {

    /**
     * Home route of image manipulation
     *
     * @param {Request} request 
     * @param {Response} response 
     */
    home(request, response) {
        let url = request.query.url;
        // let options = request.query.options.split("|");
        let destination = path.join('./static/images/', path.basename(url))

        // @TODO read options from query
        let options = {
            "scaleToFit": [400, 'auto'],
            "grayscale": "",
            "invert": ""
        }
        
        imageService.convert(url, destination, options)
            .then(result => {
                return response.json({
                    'image': 'http://localhost:3000/' + destination
                })
            }).catch(error => {
                return response.json({
                    'error': error
                })
            })
    }
}

module.exports = new ImageController