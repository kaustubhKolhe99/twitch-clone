import Channel from "../../models/Channel.js";
import User from "../../models/User.js";

export const putChannelSettings = async (req, res) =>{
    
    try{

        const {userId}  = req.user;

        const {title, description, username, avatarUrl} = req.body;

        const UserData = await User.findById(userId, {username: 1, channel:1});

        if(UserData.username !== username){
            await User.updateOne({_id: userId}, {username: username})
        }

        const ChannelData = await Channel.findByIdAndUpdate(UserData.channel, {
            title,
            description,
            avatarUrl,
            isActive:true,
        },{
            new: true           //by default the channelData will contain the old values of the channel
        });                     //to ensure new updated values are returned in channelData, this flag is set true.
        

        return res.status(200).json({
            channelId: ChannelData._id,
            username: username,
            title: ChannelData.title,
            description: ChannelData.description,
            avatarUrl: ChannelData.avatarUrl,
        })
    }catch(err) {
        console.log(err);
        return res.status(500).send("Something went wrong");
    }
}