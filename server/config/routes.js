const multer = require('./multer.js');
const photoUpload = require('../photoProcessers/photoUpload');
const validPhoto = require('../photoProcessers/validPhoto');

module.exports = (app, express) => {
  app.post('/photoProcessor/validPhoto', multer, validPhoto);
  app.post('/photoProcessor/upload/:id', multer, photoUpload);
};


