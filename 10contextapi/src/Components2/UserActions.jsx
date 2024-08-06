import React, {useContext} from "react";
import UserContext from "./UserContext";

function UserActions(params) {
    const {user, setUser} = useContext(UserContext);

    const toggleLogin = () => {
        setUser({...user, isLoggedIn: !user.isLoggedIn})
    };

    return(
        <div>
            <h1>User Actions</h1>
            <button onClick={toggleLogin}> {user.isLoggedIn ? "Log Out" : "Log In"} </button>
        </div>
    )
}

export default UserActions;