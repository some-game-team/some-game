# Snake game, based on some-game Bootstrap Project #

SnakeGame project based on the implementation of the Snake game, for experimental purposes.

You can see a working example of the current project build on:
http://www.chaotive.cl/desarrollo/snake-game

## Usage from browser ##

Just use src/dev/resources/some-game.html file. You may want to serve these files from behind a web-server to avoid potential web security issues. A Windows example, using Mongoose as Web server:

1. Clone the project locally in some directory, ex: c:\projects\some-game
2. Download the free Mongoose Windows binary (https://www.cesanta.com/products/binary) to c:\projects\some-game
3. Run the binary and accept Windows security questions
4. You are now set, you should be able to run the game on your browser by going to http://YOUR.LOCAL.IP:8080/src/dev/resources/some-game.html

## Usage from node.js ##

1. Make sure you have node.js installed and npm command is working. 
2. Make sure grunt-cli is installed or else install it using:


    npm install -g grunt-cli

3. Change to the project's root directory.
4. Install project dependencies with:


    npm install

5. Start Web serving the project to access it using


    grunt serve
        
6. You are now set, you should be able to run the game on your browser by going to http://YOUR.LOCAL.IP:8080/src/dev/resources/some-game.html
7. Other grunt tasks, such as compile, build or release, please refer to Gruntfile.coffee definitions and the following page for Grunt usage support:

- http://gruntjs.com/getting-started


