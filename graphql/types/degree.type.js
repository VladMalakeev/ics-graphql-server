
const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const DegreeType = new GraphQLObjectType({
    title: "Degree",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});

module.exports = DegreeType;
