'use strict';

const fs = require('fs');
const bitmap = require('./lib/bitmap.js');
const transform = require('./lib/transform.js');
const buffer = require('./lib/buffer.js');


fs.readFile('./bitmap.bmp', (err, data) => {
  if(err) {throw err}
  bitmap.handleBuffer(undefined, data, transform.lineSplit);
});


//console.log(typeof bufferBMP);
