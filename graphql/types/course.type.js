
const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLSInt,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const CourseType = new GraphQLObjectType({
    title: "Course",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        number: {
            type: new GraphQLNonNull(GraphQLSInt)
        }
    })
});

module.exports = CourseType;
