import Channel from "../../models/Channel.js";
import User from "../../models/User.js";
import axios from 'axios'

export const getChannelDetails = async( req, res) =>{
    try{
        const {channelId}= req.params;

        const channel= await Channel.findById(channelId);

        if(!channel || !channel.isActive){
            return res.status(404).send("Channel not found");
        }

        const user = await User.findOne({channel: channelId} , {username:1});
        const streamUrl = `http://localhost:8000/live/${channel.streamKey}.flv`;      //will do it later

        const requestData = await axios.get('http://localhost:8000/api/streams');
        const activeStreams = requestData.data;

        let liveStream = [];
        for(const streamId in activeStreams.live){
            if(activeStreams.live[streamId].publisher && 
                activeStreams.live[streamId].publisher !== null
            ){
                liveStream.push(streamId)
            }
        }

        const isOnline = liveStream.includes(channel.streamKey);

        return res.status(200).json({
            id:channel.id,
            title:channel.title,
            description: channel.description,
            username: user.username,
            streamUrl: streamUrl,
            isOnline: isOnline,
        });
    }catch(err){
        console.log(err);
        return res.status(500).send("Channel not found, please check channel url");
    }
};