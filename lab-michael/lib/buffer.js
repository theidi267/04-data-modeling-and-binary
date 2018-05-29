'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.newImage = (err, data, parsedBitmap) => {
  console.log('new image called');
  if(err) {throw err}

  console.log(parsedBitmap);

  parsedBitmap.colorTable = data;

  exports.constructBMP(undefined, parsedBitmap);
};

exports.constructBMP = (err, buffer) => {
  fs.writeFileSync(`../bitmap.bmp`, buffer, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    return buffer;
  });
};
