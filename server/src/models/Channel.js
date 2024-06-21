import mongoose from "mongoose";
import {v4 as uuid} from 'uuid';

const {Schema } = mongoose;
const defaultTitle = "New Channel";
const defaultDescription = "This is new channel description";
const channelSchema= new Schema({
    
    isActive : { type: Boolean , default: false},
    title : {type: String , default: defaultTitle},
    description: {type: String , default: defaultDescription},
    avatarUrl: {type: String, default: 'none'},
    streamKey: {type: String, default: uuid()},
    message:{
        type:[{type: mongoose.Schema.Types.ObjectId, ref: "Message"}],
        default: [],
    },
});

export default mongoose.model("Channel", channelSchema);