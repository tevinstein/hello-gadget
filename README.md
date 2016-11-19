# HelloGadget

#### This is a Hacktiv 8 group project with:
- Node.js v6+
- Express
- Mongoose
- MongoDB
- Mocha
- Chai
- JQuery
- HTML & CSS

## Node Package Module Server

### Install express

```
npm install express-generator -g
express -e
npm install
```

### Install Mongodb and Mongoose

```
npm install mongodb --save
npm install mongoose --save
```

### Install Cors

```
npm install cors --save 
```

### Install express-session

```
npm install express-session --save
```

### Install passport, passport local, and passport local mongoose

```
npm install passport --save
npm install passport-local --save
npm install passport-local-mongoose --save
```

### Install dotenv

```
npm install dotenv --save
```

### Install mocha

```
npm install mocha -g
```

### Install chai and chai-http

```
npm install chai --save
npm install chai-http --save
```

### Run the server in folder 'server'

```
npm start
```

### Run the restful api testing with mocha in folder 'server'

```
npm test
```

## Routing

### API Smartphone

| Endpoint              | HTTP      | Description                       |
| ----------            | -----     | ------------                      |
| api/smartphones/seed  | GET       | Create dummy smartphones data     |
| api/smartphones       | GET       | Get all smartphones               |
| api/smartphones/:name | GET       | Get smartphone by name            |
| api/smartphones       | POST      | Create smartphone                 |
| api/smartphones       | DELETE    | Delete all smartphones            |
| api/smartphones/:id   | DELETE    | Delete smartphones by id          |
| api/smartphones/:id   | PUT       | Update smartphones by id          |


## Client

### Install liver-server

```
npm install live-server -g
```

### Run live-server in folder 'client'

```
live-server
```