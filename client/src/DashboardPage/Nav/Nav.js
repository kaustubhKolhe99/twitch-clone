import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../resources/images/logoPlaceholder.svg";
import { useUserDetails } from "../../shared/hooks";
const NavLogo = () =>{
    return <div className="nav-logo=container">
        <img className="nav-logo" width="100%" height="100%" src={logo}/>
    </div>
}
 const NavButton = ({text, onClickHandler}) =>{
    return( 
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
 }
export const Nav = () =>{
    const { isLogged, logout } = useUserDetails();

    const navigate = useNavigate();
    const handleNavigateToAuthPage = () =>{
        navigate('/auth');
    }
    const handleNavigateToSettingsPage = () =>{
        navigate('/settings');
    }

    const handleNavigateToChannels = () =>{
        navigate('/channels');
    }

    const handleLogout = () => {
        logout();
    }
    return( 
    <div className="nav-container">
        <NavLogo/>
        <div className="nav-buttons-container">
            <NavButton text="Browse" onClickHandler={ handleNavigateToChannels }></NavButton>
            {!isLogged ? (
            <NavButton text="Login" onClickHandler={ handleNavigateToAuthPage }></NavButton>
            ) : (
                <div>
                <NavButton text="MyAccount" onClickHandler={ handleNavigateToSettingsPage }/>
                <NavButton text="Logout" onClickHandler={ handleLogout }/>
            </div> 
            )}        
        </div>
    </div>)
};