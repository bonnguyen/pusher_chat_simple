# 1. Installing #

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

$ mkdir pusher_chat_simple

$ cd pusher_chat_simple

Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

$ npm init

This command will prompt your for a number of things such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, except for: entry point: (index.js)

Enter app.js or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

Now install Express in the app directory and save it in the dependencies list:

$ npm install express --save

To install Express temporarily, and not add it to the dependencies list, omit the --save option:

$ npm install express

Node modules installed with the --save option are added to the dependencies list in the package.json file. Then using npm install in the app directory will automatically install modules in the dependencies list.

------------------------------------------------------------


# 2. Express application generator #

Use the application generator tool, express, to quickly create an application skeleton.

Install it with the following command.

$ npm install express-generator -g

Display the command options with the -h option:

$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
For example, the following creates an Express app named pusher_chat_simple in the current working directory.

$ express pusher_chat_simple

Then install dependencies:

$ cd pusher_chat_simple

$ npm install

Run the app (on MacOS or Linux):

$ DEBUG=pusher_chat_simple:* npm start

On Windows, use this command:

> set DEBUG=pusher_chat_simple:* & npm start
Then load http://localhost:3000/ in your browser to access the app.
