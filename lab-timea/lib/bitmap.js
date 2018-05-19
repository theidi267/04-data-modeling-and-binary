'use strict';

module.exports = exports = {};
const os = require('os');
const fs = require('fs');
const buffer = fs.readFileSync('bitmap.bmp', (err, data) => {
  if(err) {throw err}
  console.log(data);
  handleBuffer(data);
});

exports.handleBuffer(data) {

  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const BYTES_PER_PIXE_OFFSET = 28;

  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.bytesPerPixel = buffer.readInt16LE(BYTES_PER_PIXE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.width = buffer.readInt32LE(WIDTH_OFFSET);
  parsedBitmap.numColors = buffer.readInt32LE(NUM_COLORS_OFFSET);
  let COLOR_TABLE_SIZE = parsedBitmap.numColors * 4;
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET,COLOR_TABLE_SIZE);

  console.log(parsedBitmap);
  let holderVar = parsedBitmap.colorTable.toString('hex');
  console.log(holderVar);

}

let holdThis = handleBuffer(buffer);
console.log(holdThis);