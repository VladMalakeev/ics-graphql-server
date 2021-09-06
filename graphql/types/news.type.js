const { gql } = require('apollo-server-express');

const NewsType = gql`
     type News {
        id:ID,
        name:String,
        descriptionShort:String,
        descriptionFull:String,
        dateOfPublication:String,
        author:String,
        image:String
    }

    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }

    input AddNewsInput {
        name:String!,
        descriptionShort:String!,
        descriptionFull:String!,
        dateOfPublication:String!,
        author:String!,
        image:String
    }

    input EditNewsInput {
        id:ID,
        name:String,
        descriptionShort:String,
        descriptionFull:String!,
        dateOfPublication:String,
        author:String,
        image:String
    }

    input DeleteNewsInput {
        id:ID!
    }

     type Query {
        news:[News],
        oneNews(id:ID!):News,
        image(name:String!): File
    }

     type Mutation {
        addNews(name:String!,  descriptionFull:String!, descriptionShort:String!,  dateOfPublication:String!,  author:String!, image:String):News!
        editNews(id:ID!, name:String,  descriptionFull:String, descriptionShort:String,  dateOfPublication:String,  author:String, image:String):News!
        deleteNews(id:ID!):News
        imageUpload(file: Upload!): File!
    }

 
`;


module.exports = NewsType;
