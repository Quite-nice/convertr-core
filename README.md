# convertr-core

## Description
Back end implementation for Convertr using node and express.js

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
