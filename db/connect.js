const mongoose=require('mongoose')
const connectDB=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser : true,  //to use new url parser
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true 
    })
}
module.exports=connectDB;