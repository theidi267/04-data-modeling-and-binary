'use strict';

let chunksArray = [];

function lineSplit(outcome, lineLength) {
  for(var i = 0; i < testString.length/8; i++) {
     testString.slice(0+ i*8,8+ i*8);
     chunksArray.push(testString.slice(0+ i*8,8+ i*8));
  }
  for(var i = 0; i<chunksArray.length; i++) {
    chunksArray[i] = chunksArray[i].slice(0,6);
  }
}

lineSplit(testString, 8);