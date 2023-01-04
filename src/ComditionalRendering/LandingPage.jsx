import React, {useState} from "react";
import ToolBar from "./ToolBar";

function LandingPage(Props){
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const onClickLogin = ()=>{
        setIsLoggedIn(true);
    };

    const onClickLogout = ()=>{
        setIsLoggedIn(false);
    };

    return(
        <div>
            <ToolBar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
        </div>
    )
}
export default LandingPage;