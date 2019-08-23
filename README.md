# ScrumLab Project
This is a repository dedicated to ScrumLab front-end project we were working on during bootcamp, in the middle of a course. We had 4 days to create it. 

#### The point of a project wasn't to deliver fully functional product, but rather familiarize ourselves with Scrum and GitFlow metodology, as well as with coding in a team and dealing with conflicts and so on. ####

After deadline, project was abandoned in state as it is, due to other projects and further course of a classes. But maybye we will pick it up one day.





Original readme below.


## How to start
To start development follow this instruction:

* `clone` this repo
* `npm install` all necessary npm packages


## Gulp usage
Avaliable commends for you to type in console:

`gulp` or `gulp serve`  - this will run gulp in browserSync mode, that means gulp will start serwer on your `localhost` and refresh it for you everytime you change `scss`, `js` or `html` file. Using this command will do all the work for you :)

`gulp watch` - runs gulp in watch mode, that will compiles your `main.scss` into `css/main.css`

`gulp sass` - compiles sass into CSS & auto-inject into browsers


## Folder Structure
```
| - development/
	| - css/      
	| - fonts/
	| - images/  
	| - js/
	| - scss/
	| - app.html  
	| - index.html  
	| - recipes.html    
	| - schedules.html
| - distribution/
| - package.json
| - gulpfile.js
```

***where:***
`distribution` - is used to contain optimized files for the production site.
`development`  - is used to contain source code.
