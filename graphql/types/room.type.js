const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const RoomType = new GraphQLObjectType({
    title:"Room",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        number: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
}); 

module.exports = RoomType;