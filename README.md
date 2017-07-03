# **sc-boilerplate** #
* *version 1.7.1*  

A Sass, Bourbon and NPM Script build system.

## **INSTALL** ##
1. Download zipped files.  Customize as desired.
2. Unzip to desired location.
3. Navigate to the new folder root.
4. `$ npm install`
5. `npm start` will start the parallel watch tasks.
6. `npm run build` will create a production version (minified, mangled, etc.)  

## **USAGE** ##
- Ensure the build structure is maintained.
- CSS should be edited in the process/scss directory:  
  - 0-bourbon-bitters-neat: not to be edited
  - 1-base: site variables and general layout
  - 2-layouts: page-specific layouts
  - 3-modules: specific parts of pages
- PHP and HTML should be edited in the `builds/dev` folder.
- Production files are maintained/constructed in the `builds/prod` folder.
