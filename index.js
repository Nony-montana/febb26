const express = require ('express');
const app = express();
const ejs = require('ejs');
const mongoose = require("mongoose")
const cors = require('cors');
app.set("view engine", 'ejs');
const dotenv =require ('dotenv');
dotenv.config();
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:"50mb"}))
app.use(cors());
const UserRouter = require('./routers/user.routes');
const ProductRouter = require("./routers/product.routes");
const connectDB = require('./database/connectDB');
app.use('/api/v1', UserRouter)
app.use("/api/v1", ProductRouter)



// mongoose.connect(process.env.DATABASE_URI)
// .then(()=>{
//     console.log("Database connected successfully")
// })
// .catch(()=>{
//     console.log("Failed to connect to DB")
// })


 app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log('error starting server', err)
    }else{
        console.log(`server started successfully`);
    }

})

module.exports = async (req, res) =>{
    await connectDB()

    return app(req, res)
}






