
const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const ModuleType = new GraphQLObjectType({
    title: "Module",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        weekOfModuleStart: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        weeekOfModuleEnd: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        weekOfModuleStartDate: {
            type: new GraphQLNonNull(GraphQLString)
        },
        weekOfModuleEndDate: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});

module.exports = ModuleType;
