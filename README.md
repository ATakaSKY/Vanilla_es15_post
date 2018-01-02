# CRUD posts application supporting latest es7 features

A CRUD application that lets you add posts, delete them, update them and post them to the json-api which can be installed locally. This JavaScript application uses standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```

### Build
Compile and build

```sh
$ npm run build
```

### Generate local json file
You can generate local json file for performing the CRUD operations. Just create a folder "api" in the root directory and inside of it create a file named "db.json". For following the standards as to how to populate the JSON, please refer to [JSON server](https://github.com/typicode/json-server)

Execute below command to run the server:
```sh
$ npm run json:server
```

## More Info

### Author

Aakash Thakur
[Aakash Thakur](https://www.linkedin.com/in/aakash-thakur-057a8090/)

### License

This project is licensed under the MIT License