const fs = require("fs");

const NewsQuery = {
    Query:{
        oneNews: async (parent, args, {NewsModel}) => {
            return NewsModel.findById(args.id);
        },
        news: async (parent, args, {NewsModel}) => {
            return NewsModel.find({});
        },
        image: async (parent, args) => {}
    }
}


const NewsMutations = {
    Mutation:{
        addNews: async (parent, args, {NewsModel}) =>{
            return NewsModel.create({
                name: args.name,
                descriptionShort: args.descriptionShort,
                descriptionFull: args.descriptionFull,
                dateOfPublication: args.dateOfPublication,
                author: args.author,
                image: args.image
            });
        },
        editNews: async (parent, args, {NewsModel}) => {
            let update =  {
                name: args.name,
                descriptionShort: args.descriptionShort,
                descriptionFull: args.descriptionFull,
                dateOfPublication: args.dateOfPublication,
                author: args.author
            }
            if(args.image) update.image = args.image;

            return NewsModel.findOneAndUpdate(
                {_id:args.id},
                update,
                {new:true}
            );
        },
        deleteNews: async (parent, args, {NewsModel}) => {
            return NewsModel.findByIdAndRemove(args.id)
        },
        imageUpload: (parent, args) => {
            return args.file.then(file => {
                const {createReadStream, filename} = file
                console.log(file)
                const fileStream = createReadStream()
        
                fileStream.pipe(fs.createWriteStream(`./uploads/images/${filename}`))
                return file
                 
              });
        }
    }
}

module.exports = {
    NewsQuery,
    NewsMutations
}