import { useEffect, useState } from "react"
import { getFollowedChannels, getChannels as getChannelsRequest } from "../../api"
import toast from "react-hot-toast";

export const useChannels = () => {
    const[channels, setChannels ] = useState(null);

    const getChannels = async (isLogged = false) => {
        const ChannelsData = await getChannelsRequest();

        if(ChannelsData.error){
            return toast.error(
                ChannelsData.exception?.response?.data ||
                    "Error occurred while fetching the channels"
            );   
        }

        if(!isLogged){
            return setChannels({
                channels: ChannelsData.data.channels,
            })
        }

        const followedChannelsData = await getFollowedChannels();

        if(followedChannelsData.error){
            return toast.error(
                followedChannelsData.exception?.response?.data ||
                    "Error Occurred while fetching followed channels"
            );
        }

        setChannels({
            channels: ChannelsData.data.channels,
            followedChannels: ChannelsData.data.channels.filter((channel) => {
                return(followedChannelsData.data.followedChannels.includes(channel.id));
            })
        });
    }

    return{
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels,
    }
}