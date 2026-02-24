const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/shopnow');
        console.log('Database is connected')
    }
    catch(error){
        console.log('internal errror');
    }
}


module.exports=connectDB;