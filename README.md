# convertr-core 
[![license](https://img.shields.io/badge/license-MPL%202.0-blue.svg)](https://www.mozilla.org/en-US/MPL/2.0/)
[![version](https://img.shields.io/badge/version-0.0.1-green.svg)](https://github.com/Quite-nice/convertr-core/releases)

## Description
Back end implementation for Convertr using node and express.js, a GraphQL API is offered using the Apollostack. This does not imply a GraphQL client, you can use any GraphQL client you like.

## Running the project

### Npm
```bash
git clone https://github.com/Quite-nice/convertr-core
cd convertr-core
npm install
npm start
```

### Docker
```bash
git clone https://github.com/Quite-nice/convertr-core
cd convertr-core
docker build -t convertr-core . 
docker run -d -p 3000:3000 convertr-core
```

## GraphiQL
After running the project, browse to [`localhost:3000/graphiql`](http://localhost:3000/graphiql) to checkout the server's graphiql endpoint. 
