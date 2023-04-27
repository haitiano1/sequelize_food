//yarn init
//yarn add express
//yarn add nodemon
//yarn add cors
//yarn add sequelize
//yarn add sequelize-cli

const express = require('express');
const app = express();
const rootRouter = require('./src/Routers/rootRouter')
const cors = require('cors')


app.use(express.json());
app.use(cors());
app.listen(8080);

app.use('/api', rootRouter)

