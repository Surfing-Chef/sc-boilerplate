# **sc-boilerplate** #
* *version 1.8.0*  

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

6. Do a five-step find and replace on the name in all the templates:

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

7. Update the stylesheet header in `process/sass/style.scss` and the links in `footer.php` with your own information.
8. Edit gulpfile.js line 43:  
```console
# from:
proxy   : "http://localhost/path/to/root"
# to
proxy   : "http://Your-WordPress-Development-Root"
```

9. A `gulp` command will start the development tasks.
10. A `gulp prod` will create a production version of a project.  

## TASKLIST ##
- [x] Rewrite Documentation - ONGOING
- [x] Restructure directory system to be WordPress/underscores/user friendly
- [x] create preprocess directory: process/sass, process/js, process/img
- [x] development: process process/sass, process/js, process/img into img/, js/, style.css  
- [x] build: process process/sass, process/js, process/img and *themefi.les* into build/img/, build/js/, build/style.css and build/*themefi.les*
- [x] Update gulpfile.js WordPress/underscores friendly
- [ ] Update **INSTALL** and **USAGE**

## CHANGELOG ##
> [![GitHub version](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate.svg)](https://badge.fury.io/gh/surfing-chef%2Fsc-bourbon-boilerplate)

- added Underscores generated theme to use a base.  The repo will eventually be a template to drop a custom Underscores theme into, not a ready made Underscores template.
- copied **Bourbon** package to **sass** directory
- updated ***style.scss*** in **sass** directory
- do a five-step find and replace on the name in all the templates:

  1. Search for `'_s'` (inside single quotations) to capture the text domain.
  2. Search for `_s_` to capture all the function names.
  3. Search for `Text Domain: _s` in style.css.
  4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
  5. Search for `_s-` to capture prefixed handles.

OR

1. Search for: `'_s'` and replace with: `'your-theme-name'`
2. Search for: `_s_` and replace with: `your_theme_name_`
3. Search for: `Text Domain: _s` and replace with: `Text Domain: your-theme-name` in style.css.
4. Search for: <code>&nbsp;_s</code> and replace with: <code>&nbsp;Your-Theme-Name</code>
5. Search for: `_s-` and replace with: `your-theme-name-`

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.***































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
