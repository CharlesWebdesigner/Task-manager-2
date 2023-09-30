const express=require('express');
const app=express();
const tasks=require('./Routes/task');
const connectDB=require('./db/connect')
require('dotenv').config()
  app.use(express.static('./public'))
  app.use(express.json());
app.use('/api/v1/tasks',tasks)
const notFounds=require('./middleware/notFound');
const errorHandler=require('./middleware/error')
app.use(errorHandler)
app.use(notFounds)
const port=process.env.PORT|| 3000
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log("Server is running on port 3000");
        });
    }catch(e){
        console.error(`Error occured while connecting to the database ${e}`);
    }
}
start()

