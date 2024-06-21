import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    channel: {
        type:Schema.Types.ObjectId,
        ref: "Channel",
    },
    followedChannels: {
        type: [{type: Schema.Types.ObjectId, ref: "Channel"}],
        default: [],
    }
});

export default mongoose.model("User", userSchema);