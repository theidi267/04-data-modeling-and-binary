'use strict';

const buffer = require('./buffer.js');
module.exports = exports = {};


exports.lineSplit = (err, colorTable, parsedBitmap, callback) => {
  console.log('line split called');
  if (err) {
    throw err;
  }
  let data = colorTable.slice(0, 256);
  let chunksArray = [];

  for (var i = 0; i < data.length / 8; i++) {
    data.slice(0 + i * 8, 8 + i * 8);
    chunksArray.push(data.slice(0 + i * 8, 8 + i * 8));
  }
  for (var i = 0; i < chunksArray.length; i++) {
    chunksArray[i] = chunksArray[i].slice(0, 6);
  }
  function randomHex() {
    let hexArr = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let ranHex = Math.floor(Math.random() * (hexArr.length - 0) + 0);
    return hexArr[ranHex];
  }

  function colorChange(array) {
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].split('');
      for (var j = 0; j < array[i].length; j++) {
        array[i][j] = randomHex();
      }
      array[i] = array[i].join('');
      array[i] = `${array[i]}00`;
    }
    return chunksArray;
  }

  function replaceColors(colorsArr) {
    let colors = colorsArr.join('');
    let endString = colorTable.slice(colors.length);
    let newColors = colors + endString;
    return newColors;
  }

  callback(undefined, replaceColors(colorChange(chunksArray)), parsedBitmap, buffer.newImage);
};
