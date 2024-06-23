export const validateDescription = (desc) =>{
    
    return desc.length >= 10 && desc.length <=200;
};

export const descriptionValidationMessage = "Description should have between 10 and 200 characters";