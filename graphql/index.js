const NewsType = require("./types/news.type.js");
const {NewsQuery, NewsMutations} = require("./resolvers/news.resolver");

const typeDefs = [NewsType];

const resolvers = [NewsQuery, NewsMutations];

module.exports = {
    typeDefs,
    resolvers
}