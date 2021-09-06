
const graphql = require("graphql");
const Module = require("../../models/module.model");
const ModuleType = require("./module.type");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const SemesterType = new GraphQLObjectType({
    title: "Semester",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        startDate: {
            type: new GraphQLNonNull(GraphQLString)
        },
        finishDate: {
            type: new GraphQLNonNull(GraphQLString)
        },
        startWeek: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        thisWeek: {
            type: GraphQLInt,
            resolve(parent, args){
                return 1;
            }
        },
        firstModule:{
            type:ModuleType,
            resolve(parent, args){
                return Module.findById(parent.firstModulId);
            }
        },
        secondModule:{
            type:ModuleType,
            resolve(parent, args){
                return Module.findById(parent.secondModuleId);
            }
        },
        session:{
            type:ModuleType,
            resolve(parent, args){
                return Module.findById(parent.sessionId);
            }
        }
    })
});

module.exports = SemesterType;
