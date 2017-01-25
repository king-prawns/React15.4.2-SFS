# React15.4.2-SFS
React 15.4.2 project - Start from scratch

## Installation
- Install Node.js

Go to [Node website](https://nodejs.org/en/)

- Install [create-react-app](https://github.com/facebookincubator/create-react-app)

A simple CLI for scaffolding React.js projects
```
$ npm install -g create-react-app
```

- Install [json-server](https://github.com/typicode/json-server)

Full fake REST API
```
$ npm install -g json-server
```
## Usage

- Clone or Download the project

- Install dependencies
```
$ cd my-project
$ npm install
```

- Open first command prompt

a) for dev build
```
$ cd my-project
$ npm start
```

b) for prod build

```
$ cd my-project
$ npm run build
```

Install [http-server](https://github.com/indexzero/http-server)

A command-line http server
```
$ npm install -g http-server
```
then 

```
$ cd my-project\dist
http-server
```

- Open second command prompt
```
$ cd my-project\fake_db
$ json-server --watch db.json --port 4000
```

- Go to [localhost](http://localhost:3000/)

## Features

- component
- include 3rd-party JS library
- [Webpack](https://webpack.github.io/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/getting-started/download/#package-managers)
- [Superagent](https://github.com/visionmedia/superagent)
- [React Router](https://github.com/ReactTraining/react-router)
- [React i18n](https://github.com/i18next/react-i18next)
- [NProgress](https://github.com/rstacruz/nprogress)
- NO unit/integration test has been developed

## Conclusion

This is just a simple example, I hope this will help you to understand better React.
