# **sc-boilerplate** #
* *version 1.8.0*  

An Underscores based WordPress theme with a Gulp build system implementing Sass and Bourbon.

## TASKLIST ##
- [x] Rewrite Documentation - ONGOING
- [ ] Restructure directory system to be WordPress/underscores/user friendly
- [ ] create process/sass, process/js, process/img
- [ ] development: process process/sass, process/js, process/img into img/, js/, style.css
- [ ] build: process process/sass, process/js, process/img and *themefi.les* into build/img/, build/js/, build/style.css and build/*themefi.les* 
- [ ] Update gulpfile.js WordPress/underscores friendly
- [ ] Update **INSTALL** and **USAGE**

## CHANGELOG ##
> [![GitHub version](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate.svg)](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate)
- added Underscores generated theme to use a base.  The repo will eventually be a template to drop a custom Underscores theme into, not a ready made Underscores template.
- copied **Bourbon** package to **sass** directory
- updated ***style.scss*** in **sass** directory





























## **INSTALL** ##
1. Download zipped files.  Customize as desired.
2. Unzip to desired location.
3. In a new command line window, navigate to the new folder root.
4. If [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) is installed, run `ncu -u` to update project packages.
5. Run a `npm install` command to install project packages.
6. Edit *browserSync proxy url* to match *local project url*
7. A `gulp` command will start the development tasks.
8. A `gulp prod` will create a production version of a project.  

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
