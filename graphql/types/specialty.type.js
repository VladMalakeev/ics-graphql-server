
const graphql = require("graphql");
const SpecializationType = require("./specialization.type");
const Specializations = require("../../models/specializations.model");
const Specialty = require("../../models/specialty.model");
const DepartmentType = require("./department.type");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} = graphql;

const SpecialtyType = new GraphQLObjectType({
    title: "Specialty",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        code: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        specializations: {
           type: new GraphQLList(SpecializationType),
           resolve(parent, args){
                return Specializations.find({specialtyId: parent.id});
            }
        },
        departments:{
            type: new GraphQLList(DepartmentType),
            resolve(parent, args){
                return Specialty.find({departments});
            }
        }
    })
});

module.exports = SpecialtyType;
