# East Texas Goat Raisers Association

This is the website of the ESTGA.

# GitHub Pages Hosting

The 'public facing' files of this page go in the `/docs` folder.  
Ordinarily this would be named `www` or `public` but it's good hosting free so
I'm not going to complain too loudly.

<style> ul {list-style:none; padding-left: 2ch;} ul>li{text-indent:-2.5ch}</style>

# M42 JAMstack boilerplate

## Directory Structure

### symbol key
- 🗀 Folders generated by the build, or other processes   
    You should not need to touch these and even if you do, the next build/deploy will probably overwrite them.
- 🖿 Folders that you may mess with.
- 🗏 Files with content you may need to edit
- 🗌 Files generated by the build, or other processes  
    You should not need to touch these and even if you do, the next build/deploy will probably overwrite them.
### directories and files
- 🗀 node_modules: Node modules, ignore it.  
    generated by npm install
- 🗀 public: the 'live' files of the site  
    generated by eleventy
- 🖿 src
    - 🖿 _includes
        - 🖿 layouts: high-level layouts for pages
        - 🖿 partials: components to include in pages
        - 🖿 styles: the CSS folder
    - 🗏 index.md
- 🗏 readme.md: this file
- 🗌 package-lock.json: generated by npm
- 🗏 package.json: the npm package file
- 🗏 postcss.config.json: config for postcss processor
- 🗏 .eleveny.js: config for eleveny
- 🗏 tailwind.config.js: config for tailwind

## NPM Scripts

### `npm run build`

Runs a dev-build of the project.

### `npm run buildproduction`

Runs a production build of the project

## Build Chain

This project is build with eleventy.

The build process runs like this

- • You call `eleventy` to start the build
- • Eleventy then runs it's onBefore event function
    - • runs `postcss` to process the css
- • Eleventy then builds the site from the templates in /src

## References
- [Eleventy%20Docs](https://www.11ty.dev/docs/)
- [Tailwind%Docs](https://tailwindcss.com/docs/installation)
- [Alpine Docs](https://alpinejs.dev/start-here)