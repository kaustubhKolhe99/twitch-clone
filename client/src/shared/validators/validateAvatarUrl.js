export const validateAvatarUrl = (url) =>{
    const regex = /^(ftp|http|https):\/\/[^ "]+a$/;

    return regex.test(url)
};

export const avatarUrlValidationMessage = "Please enter a valid url";