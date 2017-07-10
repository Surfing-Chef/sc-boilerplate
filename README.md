# **sc-boilerplate** #
[![GitHub version](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate.svg)](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate) *1.8.1*    

An HTML Boilerplate with a Gulp build system implementing Sass and Bourbon.

## **INSTALL** ##
- [ ] Download zipped files from ***[here](https://github.com/Surfing-Chef/sc-bourbon-boilerplate/tree/HTML5)*** if you haven't already.
- [ ]Unzip into a new folder.
- [ ]Edit gulpfile.js line 43:

  ```console
  # from:
  proxy   : "http://localhost/path/to/root"
  # to
  proxy   : "http://Your-WordPress-Development-Root"
  ```
- [ ]Open a new command line window, navigate into the new folder.
- [ ]Run `ncu -u` to update project packages, if ***[npm-check-updates](https://www.npmjs.com/package/npm-check-updates)*** is installed.
- [ ]Install the Node packages, run a `npm install` command from the command line.
- [ ]Initialize a Git repository:

  ```console
  >git init
  >git add .
  >git commit -m"Initial commit"
  ```  
- [ ]Link repo to GitHub:

  ```console
  >git remote add origin https://github.com/Your-GitHub-Account/your-repo-name.git
  >git push -u origin master
  ```  

- [ ]A `gulp` command will start the development tasks.
- [ ]A `gulp prod` will create a production version of a project.  

## **USAGE** ##
- **ENSURE THE PROJECT FILE STRUCTURE IS MAINTAINED:**  

```
│   .gitignore
│   gulpfile.js
│   package.json
│   README.md
│
├───builds
│   ├───dev
│   │   ├───css
│   │   ├───img
│   │   └───all.other.files
│   └───prod
│       └───generated.production.files
│
├───node_modules
│   └───npm.package.files
│
└───process
    ├───js
    └───scss
        ├───0-bourbon
        ├───1-base
        ├───2-layouts
        └───3-modules

```
- Development and production tasks will not execute properly if the following points are not adhered to:
- **CSS** should be edited in the ***process/scss*** directory:  
  - ***0-bourbon-bitters-neat***: NO EDITS
  - ***1-base***: EDITS - site variables and general layout
  - ***2-layouts***: EDITS - page-specific layouts
  - ***3-modules***: EDITS - specific parts of pages
- **Javascript and Jquery** should be authored in the ***process/js*** folder.
- **Image files** should be placed in the ***builds/dev/img*** folder.
- **PHP** and **HTML** files should be authored in the ***builds/dev*** folder.
- Any files placed in the ***builds/prod*** folder will be overwritten when `gulp prod` is executed.
