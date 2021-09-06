
const graphql = require("graphql");
const DegreeType = require("./degree.type");
const Degree = require("../../models/degree.model");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const LecturerType = new GraphQLObjectType({
    title: "Consultation",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        middleName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description:{
            type: new GraphQLNonNull(GraphQLString)
        },
        image:{
            type: new GraphQLNonNull(GraphQLString)
        },
        email:{
            type: new GraphQLNonNull(GraphQLString)
        },
        phoneNumber:{
            type: new GraphQLNonNull(GraphQLString)
        },
        degree:{
            type: DegreeType,
            resolve(parent, args){
                return Degree.findById(parent.lecturerId);
            }
        }
    })
});

module.exports = LecturerType;
