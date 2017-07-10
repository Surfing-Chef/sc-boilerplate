# **sc-boilerplate** #  
[![GitHub version](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate.svg)](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate) *1.8.0 Underscores*  

An Underscores based WordPress theme with a Gulp build system implementing Sass and Bourbon.

## **INSTALL** ##
1. Download zipped files from ***[here](https://github.com/Surfing-Chef/sc-bourbon-boilerplate/tree/Underscores)*** if you haven't already.
2. Unzip into new theme folder: `wp-content/themes/your-theme-name`.
3. Open a new command line window, navigate into the new folder.
4. Run `ncu -u` to update project packages, if ***[npm-check-updates](https://www.npmjs.com/package/npm-check-updates)*** is installed.
5. Install the Node packages, run a `npm install` command from the command line.
6. Initialize a Git repository:

  ```console
  >git init
  >git add .
  >git commit -m"Initial commit"
  ```  
7. Link repo to GitHub:

  ```console
  >git remote add origin https://github.com/Your-GitHub-Account/your-repo-name.git
  >git push -u origin master
  ```  

8. Do a five-step find and replace on the name in all the templates:

  1. Search for `'_s'` (inside single quotations) to capture the text domain.
  2. Search for `_s_` to capture all the function names.
  3. Search for `Text Domain: _s` in style.css.
  4. Search for <code>&nbsp;\_s</code> (with a space before it) to capture DocBlocks.
  5. Search for `_s-` to capture prefixed handles.

  OR

  1. Search for: `'_s'` and replace with: `'your-theme-name'`
  2. Search for: `_s_` and replace with: `your_theme_name_`
  3. Search for: `Text Domain: _s` and replace with: `Text Domain: your-theme-name` in style.css.
  4. Search for: <code>&nbsp;\_s</code> and replace with: <code>&nbsp;Your-Theme-Name</code>
  5. Search for: `_s-` and replace with: `your-theme-name-`

9. Update the stylesheet header in `process/sass/style.scss` and the links in `footer.php` with your own information.
10. Edit gulpfile.js line 43:  
```console
# from:
proxy   : "http://localhost/path/to/root"
# to
proxy   : "http://Your-WordPress-Development-Root"
```

11. A `gulp` command will start the development tasks.
12. A `gulp prod` will create a production version of a project.  

## **USAGE** ##
- **ENSURE THE PROJECT FILE STRUCTURE IS MAINTAINED:**  

```
├───.git               ( git files )
├───img                ( image files )
├───inc                ( WordPress )
├───js                 ( dev files: gulp processed )
├───languages          
├───layouts             
├───process            ( dev files: to be gulp processed )
├───prod               ( production ready folder )
├───template-parts
│
│   .gitignore         ( git files )
│   404.php
│   archive.php
│   comments.php
│   footer.php
│   functions.php
│   gulpfile.js         ( gulp workflow definitions )
│   header.php
│   index.php
│   LICENSE
│   package.json        ( node packages )
│   page.php
│   phpcs.xml.dist
│   README.md           ( Repo/Dev documentation )
│   rtl.css
│   screenshot.png
│   search.php
│   sidebar.php
│   single.php
│   style.css           ( dev file: gulp processed )

```
- **CSS** is to be edited in the ***./process/sass*** directory:  
  - DO NOT EDIT ***bourbon-bitters-neat*** files  
- **javascript and jQuery** scripts should be authored in the ***./process/js*** folder.
- **Image files** should be placed in the ***./img*** folder.
- **PHP** files can be authored and edited in the ***./*** root directory.
- Files not ( labelled ) above are standard WordPress files and folders and should be edited as required.
- Any files placed in the ***./prod*** folder will be overwritten when `gulp prod` is executed.

## **TASKLIST** ##
- [x] Rewrite Documentation - ONGOING
- [x] Restructure directory system to be WordPress/underscores/user friendly
- [x] create preprocess directory: process/sass, process/js, process/img
- [x] development: process process/sass, process/js, process/img into img/, js/, style.css  
- [x] build: process process/sass, process/js, process/img and *themefi.les* into build/img/, build/js/, build/style.css and build/*themefi.les*
- [x] Update gulpfile.js WordPress/underscores friendly
- [x] Update **INSTALL** and **USAGE**

## **CHANGELOG** ##
- added Underscores generated theme to use a base.  The repo will eventually be a template to drop a custom Underscores theme into, not a ready made Underscores template.
- copied **Bourbon** package to **sass** directory
- updated ***style.scss*** in **sass** directory
