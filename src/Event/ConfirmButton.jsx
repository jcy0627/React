import React, {useState} from "react";

function ConfirmButton (props){
    let [isConfirmed, setIsConfirmed] = useState(false);


    const handleConfirmed = ()=>{
        setIsConfirmed(!isConfirmed);
    }
    return(
        <button onClick={handleConfirmed} disabled={isConfirmed}>
           {isConfirmed ? "확인 함":"확인 하기"}
        </button>
    );

}

export default ConfirmButton;