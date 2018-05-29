'use strict';

const buffer = require('./buffer.js');
module.exports = exports = {};

exports.handleBuffer = (err, data, callback) => {
  if(err) {throw err}

  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const BYTES_PER_PIXE_OFFSET = 28;

  parsedBitmap.type = data.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = data.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.bytesPerPixel = data.readInt16LE(BYTES_PER_PIXE_OFFSET);
  parsedBitmap.height = data.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.width = data.readInt32LE(WIDTH_OFFSET);
  parsedBitmap.numColors = data.readInt32LE(NUM_COLORS_OFFSET);
  let COLOR_TABLE_SIZE = parsedBitmap.numColors * 4;
  parsedBitmap.colorTable = data.slice(COLOR_TABLE_OFFSET,COLOR_TABLE_SIZE);
  let tempVar = parsedBitmap.colorTable.toString('hex');

  function bufferData (err, string, parsedBitmap, callback) {
    console.log('buffer data called');
    if(err) {throw err};
    let newBuffer = new Buffer (string);
    console.log('buffer', newBuffer);
    callback(undefined, newBuffer, parsedBitmap, buffer.newImage);

  }
  callback(undefined, tempVar, parsedBitmap, bufferData);


};
