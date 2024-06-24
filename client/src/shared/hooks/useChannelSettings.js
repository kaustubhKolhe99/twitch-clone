import { useEffect, useState } from "react"
import { getChannelSettings, updateChannelSettings } from "../../api";
import { toast } from "react-hot-toast";

export const useChannelSettings = () =>{
    const [ channelSettings, setChannelSettings ] = useState(null);

    const fetchChannelSettings = async () =>{
        const response = await getChannelSettings();

        if(response.error){
            return toast.error(
                response.exception?.response?.data || 'Error Occurred While fetching channel settings'
            )
        }
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            avatarUrl: response.data.avatarUrl,
            description: response.data.description,
            streamKey: response.data.streamKey,
        });        
    }


    const saveSettings = async(data)=>{
        const response = await updateChannelSettings(data);

        if(response.error){
            return toast.error(
                response.exception?.response?.data || 'Error Occurred While saving channel settings'
            )
        }

        toast.success("Channel settings saved successfully")
    }

    useEffect(()=>{
        fetchChannelSettings()
    }, [])
    return {
        isFetching : !channelSettings,
        channelSettings: channelSettings,
        saveSettings,
    }
}