import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import {login as loginRequest} from "../../api"
import toast from 'react-hot-toast';


export const useLogin = () => {
    const {isLoading, setIsLoading} = useState(false); 
    const navigate = useNavigate()

    const login = async (email, password) =>{
        setIsLoading(false);
        const response = await loginRequest({
            email,
            password,
        });

        setIsLoading(false);

        if(response.error){
            return toast.error(response.exception?.response?.data  || 'Error occurred while logging in please try again')
        }
        const {userDetails} = response.data;

        localStorage.setItem("user", userDetails)
        navigate('/')

        return {
            login,
            isLoading,
        }
    }
}