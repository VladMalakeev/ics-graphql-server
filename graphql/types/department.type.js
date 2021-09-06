
const graphql = require("graphql");
const SpecialtyType = require("./specialty.type");
const Department = require("../../models/department.model");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} = graphql;

const DepartmentType = new GraphQLObjectType({
    title: "Department",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        code:{
            type: new GraphQLNonNull(GraphQLString)
        },
        email:{
            type: new GraphQLNonNull(GraphQLString)
        },
        phoneNumber:{
            type: new GraphQLNonNull(GraphQLString)
        },
        logo:{
            type: new GraphQLNonNull(GraphQLString)
        },
        description:{
            type: new GraphQLNonNull(GraphQLString)
        },
        bacicDiscipline:{
            type: new GraphQLNonNull(GraphQLString)
        },
        recommendedKnowledge:{
            type: new GraphQLNonNull(GraphQLString)
        },
        headOfDepartment:{
            type: LecturersType,
            resolve(){
                return Lecturer.findById(parrent.headOfDepartmentId)
            }
        },
        specialties:{
            type: new GraphQLList(SpecialtyType),
            resolve(){
                let result = Department.find({specialties});
            }
        }
    })
});

module.exports = DepartmentType;
