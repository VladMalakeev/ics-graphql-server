const mongoose  = require("mongoose");
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers} = require('./graphql/index');
const models = require("./models/index");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/ICS', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});

const  dbConnection = mongoose.connection;
const server = new ApolloServer({ typeDefs, resolvers, context:models });

dbConnection.on("error", err => console.log(`Error - ${err}`));
dbConnection.once("open", () => console.log("Connection to DB is successfull"));

server.applyMiddleware({app});

app.use(express.static('uploads'));

app.listen({port: PORT}, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
})

