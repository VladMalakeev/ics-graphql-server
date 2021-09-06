
const graphql = require("graphql");
const LecturerType = require("./lecturer.type");
const RoomType = require("./room.type");
const Lecturer = require("../../models/lecturer.model");
const Room = require("../../models/room.model");


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const ConsultationType = new GraphQLObjectType({
    name: "Consultation",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        day: {
            type: new GraphQLNonNull(GraphQLString)
        },
        startTime: {
            type: new GraphQLNonNull(GraphQLString)
        },
        endTime: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lecturer:{
            type: LecturerType,
            resolve(parent, args){
                return Lecturer.findById(parent.consulatationId);
            }
        },
        room:{
            type: RoomType,
            resolve(parent, args){
                return Room.findById(parent.consultationId);
            }
        }
    })
});

module.exports = ConsultationType;
