import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../api"
export const useChangePassword = () => {
    const changePassword = async ( password, newPassword) =>{
        const responseData = await changePasswordRequest({
            password, 
            newPassword
        });

        if(responseData.error){
            return toast.error(
                responseData.exception?.response?.data ||
                    "Error Occurred while trying to change password, please try again"
            );
        }

        toast.success("Password changed successfully")
    }

    return{
        changePassword,
    }
}