const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
});
userSchema.methods.generateToken = function () {
    return jwt.sign({
        id: this._id.toString(),
        email: this.email
    }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

const user=mongoose.model('user',userSchema);

module.exports=user;