import mongoose, {model, Schema} from "mongoose";
import bcrypt from "bcrypt";
import { JsonWebTokenError } from "jsonwebtoken";
const userSchema = new Schema({
    username : {
        type : String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    watchHistory:{
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    refreshTokens:{
        type: String
    },
    avatar:{
        type: String, //cloudinary URL
        required: true
    },
    coverImage:{
        type: String // cloudinary URL
    },
    fullname:{
        type: String,
        required: true,
        trim : true,
        index: true
    }
},{timestamps: true})

userSchema.pre("save", function(next){
    if(!this.isModified("password")) next();
    this.password = bcrypt.hash(this.password);
    next();
})
userSchema.methods.isPasswordCorrect = async function(password) {
    bcrypt.compare(password,this.password);
}
userSchema.method.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        username: this.username,
        email: this.email,
        fullname: this.fullname
    },
    process.env.ACESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACESS_TOKEN_EXPIRY
    }
    )
}
userSchema.method.generateRefreshToken = function(){
    return jwt.sign({
        _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
export const User = mongoose.model("User", userSchema);