# NodeJS playgroud

So far this project has a service to transorm images using JIMP

`http://localhost:3000/image?url={url_of_image_to_convert}`

It will generate a new version of the file with the options passed.

```javascript
let options = {
    "scaleToFit": [400, 'auto'],
    "grayscale": "",
    "invert": ""
}
```