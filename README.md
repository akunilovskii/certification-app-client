# React CertificationAPP (FrontEnd)

### *Open deployed app [CertificationAPP](https://certification-app-client-xi.vercel.app/)*

This is the Front End part of the CertificationAPP Full-Stack project designed to create, update and delete tests.

It allows teachers to create and manage multiple choice, true/false, and fill-in-the-blank questions' tests for
students, and track student's progress. Also, it offers an easy way for students to take tests.

Tech used: Components, Props, Custom Hooks, Redux, RTK, React Hooks (useState, useEffect, Browser Routing, Navigation
Routes)

1. Clone this repo

  ```sh
  git clone https://github.com/Mike10581/CertificationApp.git
  ```

2. Install required packages with flag --legacy-peer-deps, then start the app.

  ```sh
  npm install --legacy-peer-deps    
  npm start
  ```

This will run your app on http://localhost:3000

## App Information

### Routes

| Path           | Component        |  
|----------------|------------------|
| /              | Home page        |  
| /about         | About page       |   
| /tests         | Tests List       |  
| /tests/test	   | Take Test        |
| /login-sign-up | LoginSignUp form |
| /profile	      | ProfileForm      |
| /logout        | Logout           |

## Component Architecture

```sh
App
api
├───assets
├───components
│   └───layout
├───context
├───hook
├───img
├───pages
│   ├───About
│   ├───Home
│   ├───LoginSignUp
│   ├───Logout
│   ├───Profile
│   │   └───components
│   ├───Test
│   └───Tests
│       └───components
├───store
│   └───reducers
├───styles
├───theme
└───utils
```

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Web
![image](https://user-images.githubusercontent.com/72050332/215365780-89965bd2-90c1-4f52-9e00-0696d7338402.png)
