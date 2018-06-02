const express = require('express')
const ImageController = require('../controllers/ImageController')

class Routes {

    /**
     * @param {express} app 
     */
    constructor (app) {
        this.router = express.Router();
        
        app.use('/', this.image())
    }

    /**
     * To define the image routes
     */
    image () {
        let router = this.router

        router.get('/', ImageController.home)

        return router
    }
}

module.exports = (app) => new Routes(app)