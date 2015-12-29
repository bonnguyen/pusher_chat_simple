# 1. Installing #

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

$ mkdir pusher_chat_simple

$ cd pusher_chat_simple

Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

$ npm init

This command will prompt your for a number of things such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, except for:

entry point: (index.js)

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

   create : pusher_chat_simple
   create : pusher_chat_simple/package.json
   create : pusher_chat_simple/app.js
   create : pusher_chat_simple/public
   create : pusher_chat_simple/public/javascripts
   create : pusher_chat_simple/public/images
   create : pusher_chat_simple/routes
   create : pusher_chat_simple/routes/index.js
   create : pusher_chat_simple/routes/users.js
   create : pusher_chat_simple/public/stylesheets
   create : pusher_chat_simple/public/stylesheets/style.css
   create : pusher_chat_simple/views
   create : pusher_chat_simple/views/index.jade
   create : pusher_chat_simple/views/layout.jade
   create : pusher_chat_simple/views/error.jade
   create : pusher_chat_simple/bin
   create : pusher_chat_simple/bin/www
Then install dependencies:

$ cd pusher_chat_simple

$ npm install

Run the app (on MacOS or Linux):

$ DEBUG=pusher_chat_simple:* npm start

On Windows, use this command:

> set DEBUG=pusher_chat_simple:* & npm start
Then load http://localhost:3000/ in your browser to access the app.

The generated app directory structure looks like the following.

.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

7 directories, 9 files
