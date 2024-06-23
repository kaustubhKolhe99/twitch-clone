export const validateTitle = (title) =>{
    
    return title.length >= 3 && title.length <=30;
};

export const titleValidationMessage = "title should have between 3 and 30 characters";