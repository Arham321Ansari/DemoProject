import mongoose, {model, Schema} from "mongoose";

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

export const User = mongoose.model("User", userSchema);