import User from "../../models/User.js";
import axios from 'axios';


export const getChannels = async (req, res)=>{
    try{
        const users = await User.find({} , {
            channel: 1,
            username: 1,
            isOnline: 1,
        }).populate("channel");

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
        const channels = users
            .filter((u) => u.channel.isActive)
            .map((user) => {
                return {
                    id: user.channel._id,
                    title: user.channel.title,
                    avatarUrl: user.channel.avatarUrl,
                    username: user.username,
                    isOnline: liveStream.includes(user.channel.streamKey),
                };
        });
        
        return res.status(200).json({
            channels,
        })
    }catch(err){
        console.log(err);
        return res.status(500).send("Something went wrong.")
    }
}