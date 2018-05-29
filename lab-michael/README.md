# Bitmap Transformer

## Configuration 

* **.gitignore** - contains a file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **\_\_test\_\_/asset/** - contains bitmaps for testing
* **\_\_test\_\_/** - contains unit tests

## Functionality
A bitmap (`.bmp`) transformer CLI. 
It reads a bitmap in from disk, runs e color or raster transforms and then writes it out to a new file. This project requires the use of node buffers in order to manipulate binary data.

## Testing 
* Use BDD `describe` and `test` methods to define discriptive tests and increase readablity
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure each function behaves correctly with valid and invalud inputs
* The CLI should be tested without using `child_process` or any equivilant third party librarys

##  Functions 

 - index.js - the entry point to the application requiering all the function files and hands off the picture buffer
 - bitmap.js - takes the buffer and parses it to a usable format
 - buffer.js - the parsed buffer of a picture and separates the color table
 - transform .js - manipulates the colors in the picture by replacing color codes at random