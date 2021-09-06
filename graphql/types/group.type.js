
const graphql = require("graphql");
const DepartmentType = require("./department.type");
const Department = require("../../models/department.model");
const CourseType = require("./course.type");
const Course = require("../../models/course.model");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const GroupType = new GraphQLObjectType({
    title: "Group",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        department:{
            type:DepartmentType,
            resolve(parent, args){
                return Department.findById(parent.depertmentId);
            }
        },
        course:{
            type:CourseType,
            resolve(parent, args){
                return Course.findById(parent.courseId);
            }
        }
    })
});

module.exports = GroupType;
