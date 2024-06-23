export const logout = () =>{
    localStorage.removeItem('user');

    //this will cause page refresh
    window.location.href = '/channels';
}