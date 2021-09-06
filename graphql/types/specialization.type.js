
const graphql = require("graphql");
const SpecialtyType = require("./specialty.type");
const Specialty = require("../../models/specialty.model");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const SpecializationType = new GraphQLObjectType({
    title: "Specialization",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        specialty: {
           type: SpecialtyType,
           resolve(parent, args){
            return Specialty.findById(parent.specialtyId);
         }
        }
    })
});

module.exports = SpecializationType;
